import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { CATALOG, buildModel } from './furniture.js';
import { PLANS, presetFor, loadPlan, buildPlan, planObstacles, inside } from './plan.js';

const STORE = 'home-planner-v1';
const WALL_H = 2.7, WALL_T = 0.12;
const $ = (id) => document.getElementById(id);

// ---- state ---------------------------------------------------------------
// Positions are metres (hall centred on the origin), sizes are cm, rot is degrees.
// layout: 'hall' or a plan id; each layout keeps its own furniture in `stash`.
let state = load() || { hall: { w: 14, d: 10 }, items: [] };
state.layout ||= 'hall';
state.stash ||= {};
state.lowWalls ??= true;
state.drawing ??= true;
let plan = null; // loaded plan when state.layout !== 'hall'
let obstacles = []; // axis-aligned rects {x0,x1,z0,z1} furniture can't overlap
let nextId = state.items.reduce((m, it) => Math.max(m, it.id), 0) + 1;
let selectedId = null;
let viewMode = '3d';

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE));
    return s?.hall && Array.isArray(s.items) ? s : null;
  } catch { return null; }
}
function save() { localStorage.setItem(STORE, JSON.stringify(state)); }

// ---- renderer / scene ----------------------------------------------------
const stage = $('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
stage.prepend(renderer.domElement);
const labels = new CSS2DRenderer();
Object.assign(labels.domElement.style, { position: 'absolute', inset: '0', pointerEvents: 'none' });
stage.appendChild(labels.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color('#e4e2dd');
scene.add(new THREE.HemisphereLight('#ffffff', '#b9b3a8', 1.6));
const sun = new THREE.DirectionalLight('#fff6e8', 1.8);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.bias = -0.0005;
scene.add(sun, sun.target);

const persp = new THREE.PerspectiveCamera(45, 1, 0.1, 400);
const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 400);
let camera = persp;

// Pointer handling is registered before OrbitControls so a press on furniture
// can disable the controls before they start orbiting.
const canvas = renderer.domElement;
canvas.addEventListener('pointerdown', onPointerDown);
canvas.addEventListener('pointermove', onPointerMove);
canvas.addEventListener('pointerup', onPointerUp);
canvas.addEventListener('pointercancel', onPointerUp);

const orbit = new OrbitControls(persp, canvas);
orbit.enableDamping = true;
orbit.maxPolarAngle = Math.PI / 2 - 0.05;
orbit.minDistance = 1.5;
const topCtl = new OrbitControls(ortho, canvas);
topCtl.enableRotate = false;
topCtl.screenSpacePanning = true;
topCtl.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
topCtl.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
topCtl.enabled = false;

// ---- hall ----------------------------------------------------------------
const hallGroup = new THREE.Group();
scene.add(hallGroup);
const walls = [];

function tileTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#efede8';
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = '#d8d4cc';
  g.lineWidth = 2;
  g.strokeRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
const floorTex = tileTexture();

function disposeTree(obj) {
  obj.traverse((o) => {
    if (o.isCSS2DObject) o.element.remove();
    o.geometry?.dispose();
  });
}

// Size of the current layout's bounding box.
const bounds = () => (plan ? { w: plan.w, d: plan.d } : state.hall);

function buildHall() {
  disposeTree(hallGroup);
  hallGroup.clear();
  walls.length = 0;
  const { w, d } = bounds();
  const r = Math.max(w, d) * 0.75;
  sun.position.set(-w * 0.08, 14, d * 0.12);
  Object.assign(sun.shadow.camera, { left: -r, right: r, top: r, bottom: -r, near: 1, far: 40 });
  sun.shadow.camera.updateProjectionMatrix();
  const wallH = state.lowWalls ? 1.0 : WALL_H;

  if (plan) {
    buildPlan(hallGroup, plan, { wallH, showDrawing: state.drawing, label });
    obstacles = planObstacles(plan);
    return;
  }

  const tex = floorTex.clone();
  tex.needsUpdate = true;
  tex.repeat.set(w / 0.6, d / 0.6); // 60 cm tiles
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  hallGroup.add(floor);

  // 1 m grid
  const pts = [];
  for (let x = Math.ceil(-w / 2); x <= w / 2; x++) pts.push(x, 0.002, -d / 2, x, 0.002, d / 2);
  for (let z = Math.ceil(-d / 2); z <= d / 2; z++) pts.push(-w / 2, 0.002, z, w / 2, 0.002, z);
  const grid = new THREE.LineSegments(
    new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)),
    new THREE.LineBasicMaterial({ color: '#b8b2a7', transparent: true, opacity: 0.5 }),
  );
  hallGroup.add(grid);

  const wallMat = new THREE.MeshStandardMaterial({ color: '#cfc6ba', roughness: 0.9 });
  const specs = [
    { sx: w + 2 * WALL_T, sz: WALL_T, x: 0, z: -d / 2 - WALL_T / 2, outside: (c) => c.z < -d / 2 },
    { sx: w + 2 * WALL_T, sz: WALL_T, x: 0, z: d / 2 + WALL_T / 2, outside: (c) => c.z > d / 2 },
    { sx: WALL_T, sz: d, x: -w / 2 - WALL_T / 2, z: 0, outside: (c) => c.x < -w / 2 },
    { sx: WALL_T, sz: d, x: w / 2 + WALL_T / 2, z: 0, outside: (c) => c.x > w / 2 },
  ];
  for (const s of specs) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(s.sx, wallH, s.sz), wallMat);
    m.position.set(s.x, wallH / 2, s.z);
    m.receiveShadow = true;
    m.userData.outside = s.outside;
    hallGroup.add(m);
    walls.push(m);
  }

  const lw = label(`${w.toFixed(2)} m`, 'lbl dim');
  lw.position.set(0, 0, d / 2 + 0.45);
  const ld = label(`${d.toFixed(2)} m`, 'lbl dim');
  ld.position.set(w / 2 + 0.45, 0, 0);
  hallGroup.add(lw, ld);
  obstacles = specs.map((s) => ({ x0: s.x - s.sx / 2, x1: s.x + s.sx / 2, z0: s.z - s.sz / 2, z1: s.z + s.sz / 2 }));
}

function label(text, cls = 'lbl') {
  const el = document.createElement('div');
  el.className = cls;
  el.textContent = text;
  return new CSS2DObject(el);
}

// ---- items ---------------------------------------------------------------
const itemsGroup = new THREE.Group();
scene.add(itemsGroup);
const views = new Map(); // id -> { group, model, zones, outline, nameLabel }

const zoneMat = { ok: new THREE.MeshBasicMaterial({ color: '#3d7ce0', transparent: true, opacity: 0.16, depthWrite: false }),
  bad: new THREE.MeshBasicMaterial({ color: '#e0962d', transparent: true, opacity: 0.35, depthWrite: false }) };
const lineMat = { sel: new THREE.LineBasicMaterial({ color: '#3d7ce0' }), bad: new THREE.LineBasicMaterial({ color: '#d6453d' }) };

function rectLine(x0, x1, z0, z1, y) {
  const g = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(x0, y, z0), new THREE.Vector3(x1, y, z0), new THREE.Vector3(x1, y, z1), new THREE.Vector3(x0, y, z1),
  ]);
  return new THREE.LineLoop(g, lineMat.sel);
}

function zoneRects(it) {
  const hw = it.w / 200, hd = it.d / 200, out = [];
  if (it.zoneFront > 0) out.push([hd, hd + it.zoneFront / 100]);
  if (it.zoneBack > 0) out.push([-hd - it.zoneBack / 100, -hd]);
  return out.map(([z0, z1]) => ({ hw, z0, z1 }));
}

function buildView(it) {
  const old = views.get(it.id);
  if (old) { disposeTree(old.group); itemsGroup.remove(old.group); }
  const group = new THREE.Group();
  group.userData.id = it.id;
  const model = buildModel(it.type, it.w, it.d, it.h);
  model.traverse((o) => { o.userData.id = it.id; });
  group.add(model);

  const zones = zoneRects(it).map((r) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(r.hw * 2, r.z1 - r.z0), zoneMat.ok);
    m.rotation.x = -Math.PI / 2;
    m.position.set(0, 0.004, (r.z0 + r.z1) / 2);
    m.renderOrder = 1;
    group.add(m);
    return m;
  });
  const outline = rectLine(-it.w / 200, it.w / 200, -it.d / 200, it.d / 200, 0.008);
  group.add(outline);
  const nameLabel = label(it.name);
  nameLabel.position.set(0, it.h / 100 + 0.12, 0);
  group.add(nameLabel);

  itemsGroup.add(group);
  views.set(it.id, { group, model, zones, outline, nameLabel });
  placeView(it);
}

function placeView(it) {
  const v = views.get(it.id);
  v.group.position.set(it.x, 0, it.z);
  v.group.rotation.y = THREE.MathUtils.degToRad(it.rot);
  v.nameLabel.position.y = viewMode === 'top' ? 0 : it.h / 100 + 0.12;
}

// ---- geometry checks (2D, top-down) --------------------------------------

function poly(it, hw, z0, z1) {
  const a = THREE.MathUtils.degToRad(it.rot), c = Math.cos(a), s = Math.sin(a);
  return [[-hw, z0], [hw, z0], [hw, z1], [-hw, z1]].map(([lx, lz]) => [it.x + lx * c + lz * s, it.z - lx * s + lz * c]);
}
const bodyPoly = (it) => poly(it, it.w / 200, -it.d / 200, it.d / 200);
const zonePolys = (it) => zoneRects(it).map((r) => poly(it, r.hw, r.z0, r.z1));

// Separating-axis test; touching edges (within 5 mm) don't count as overlap.
function overlap(a, b) {
  for (const p of [a, b]) {
    for (let i = 0; i < p.length; i++) {
      const [x0, z0] = p[i], [x1, z1] = p[(i + 1) % p.length];
      const nx = z1 - z0, nz = x0 - x1, len = Math.hypot(nx, nz);
      const proj = (q) => q.map(([x, z]) => (x * nx + z * nz) / len);
      const pa = proj(a), pb = proj(b);
      if (Math.max(...pa) <= Math.min(...pb) + 0.005 || Math.max(...pb) <= Math.min(...pa) + 0.005) return false;
    }
  }
  return true;
}
function outside(p) {
  if (!plan) {
    const { w, d } = state.hall;
    return p.some(([x, z]) => Math.abs(x) > w / 2 + 0.005 || Math.abs(z) > d / 2 + 0.005);
  }
  // Sample a 5x5 grid over the rectangle against the plan's floor mask.
  const [a, b, , d] = p;
  for (let i = 0; i <= 4; i++) for (let j = 0; j <= 4; j++) {
    const u = i / 4, v = j / 4;
    const x = a[0] + (b[0] - a[0]) * u + (d[0] - a[0]) * v, z = a[1] + (b[1] - a[1]) * u + (d[1] - a[1]) * v;
    if (!inside(plan, x, z)) return true;
  }
  return false;
}
const obstaclePolys = () => obstacles.map((r) => [[r.x0, r.z0], [r.x1, r.z0], [r.x1, r.z1], [r.x0, r.z1]]);
const hitsObstacle = (p, obs) => obs.some((o) => overlap(p, o));

// status: 'ok' | 'warn' (needed space blocked) | 'bad' (overlap or outside)
function evaluate() {
  const bodies = state.items.map((it) => ({ it, p: bodyPoly(it) }));
  const obs = obstaclePolys();
  const status = new Map();
  for (const { it, p } of bodies) {
    let bad = outside(p) || hitsObstacle(p, obs);
    for (const o of bodies) if (!bad && o.it !== it && overlap(p, o.p)) bad = true;
    const zoneBad = zonePolys(it).map((zp) => outside(zp) || hitsObstacle(zp, obs) || bodies.some((o) => o.it !== it && overlap(zp, o.p)));
    status.set(it.id, bad ? 'bad' : zoneBad.some(Boolean) ? 'warn' : 'ok');
    const v = views.get(it.id);
    v.zones.forEach((m, i) => { m.material = zoneBad[i] ? zoneMat.bad : zoneMat.ok; });
    v.outline.material = bad ? lineMat.bad : lineMat.sel;
    v.outline.visible = bad || it.id === selectedId;
    v.nameLabel.element.className = bad ? 'lbl bad' : 'lbl';
  }
  return status;
}

// ---- wall distance guides for the selected item --------------------------
const guides = new THREE.Group();
scene.add(guides);
const guideMat = new THREE.LineDashedMaterial({ color: '#26282c', dashSize: 0.08, gapSize: 0.05 });

function updateGuides() {
  disposeTree(guides);
  guides.clear();
  const it = state.items.find((i) => i.id === selectedId);
  if (!it) return;
  const p = bodyPoly(it);
  const xs = p.map((q) => q[0]), zs = p.map((q) => q[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs);
  const y = 0.02, e = 0.01;
  // Nearest obstacle face along each axis from the item's bounding box.
  const onZ = obstacles.filter((o) => o.z0 <= it.z && o.z1 >= it.z);
  const onX = obstacles.filter((o) => o.x0 <= it.x && o.x1 >= it.x);
  const left = Math.max(...onZ.filter((o) => o.x1 <= minX + e).map((o) => o.x1));
  const right = Math.min(...onZ.filter((o) => o.x0 >= maxX - e).map((o) => o.x0));
  const back = Math.max(...onX.filter((o) => o.z1 <= minZ + e).map((o) => o.z1));
  const front = Math.min(...onX.filter((o) => o.z0 >= maxZ - e).map((o) => o.z0));
  const segs = [
    [[left, it.z], [minX, it.z]], [[maxX, it.z], [right, it.z]],
    [[it.x, back], [it.x, minZ]], [[it.x, maxZ], [it.x, front]],
  ].filter((sg) => sg.flat().every(Number.isFinite));
  for (const [[x0, z0], [x1, z1]] of segs) {
    const len = Math.hypot(x1 - x0, z1 - z0);
    if (len < 0.01) continue;
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x0, y, z0), new THREE.Vector3(x1, y, z1)]), guideMat);
    line.computeLineDistances();
    const l = label(`${Math.round(len * 100)} cm`, 'lbl dim');
    l.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
    guides.add(line, l);
  }
}

// ---- mutations -----------------------------------------------------------

function refresh({ list = true } = {}) {
  const status = evaluate();
  updateGuides();
  if (list) renderList(status);
  syncSelectionPanel();
  save();
}

function makeItem(type, extra = {}) {
  const c = CATALOG[type];
  return { id: nextId++, type, name: c.name, w: c.w, d: c.d, h: c.h, zoneFront: c.zone.front, zoneBack: c.zone.back, x: 0, z: 0, rot: 0, ...extra };
}

function fits(it, withZones = true) {
  const polys = withZones ? [bodyPoly(it), ...zonePolys(it)] : [bodyPoly(it)];
  const obs = obstaclePolys();
  if (polys.some((p) => outside(p) || hitsObstacle(p, obs))) return false;
  return state.items.every((o) => o.id === it.id || !polys.some((p) => overlap(p, bodyPoly(o)) || zonePolys(o).some((z) => overlap(p, z))));
}

// Spiral out from the centre until the item (and its needed space) fits;
// in tight plans fall back to a spot where just the item itself fits.
function placeFree(it) {
  const { w, d } = bounds();
  for (const withZones of [true, false]) {
    for (let r = 0; r <= Math.max(w, d); r += 0.25) {
      const n = r === 0 ? 1 : Math.ceil((2 * Math.PI * r) / 0.25);
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        it.x = snapV(r * Math.cos(a));
        it.z = snapV(r * Math.sin(a));
        if (fits(it, withZones)) return;
      }
    }
  }
  it.x = it.z = 0;
}

function addItem(type, extra) {
  const it = makeItem(type, extra);
  if (!extra || extra.x === undefined) placeFree(it);
  state.items.push(it);
  buildView(it);
  select(it.id);
  return it;
}

function removeItem(id) {
  const v = views.get(id);
  if (v) { disposeTree(v.group); itemsGroup.remove(v.group); views.delete(id); }
  state.items = state.items.filter((i) => i.id !== id);
  if (selectedId === id) selectedId = null;
  refresh();
}

function duplicate(id) {
  const src = state.items.find((i) => i.id === id);
  if (!src) return;
  const { id: _, ...rest } = src;
  const it = { ...rest, id: nextId++ };
  placeFree(it);
  state.items.push(it);
  buildView(it);
  select(it.id);
}

function rotate(id, deg) {
  const it = state.items.find((i) => i.id === id);
  if (!it) return;
  it.rot = (((it.rot + deg) % 360) + 360) % 360;
  placeView(it);
  refresh();
}

// A sensible starting arrangement for the six photographed pieces: sofa set
// around a living area on the left, kitchen pieces against the right wall.
function addMySet() {
  const preset = plan ? presetFor(plan) : [];
  if (preset.length) {
    for (const [type, x, z, rot] of preset) addItem(type, { x, z, rot });
    return;
  }
  const { w, d } = state.hall;
  if (plan || w < 7 || d < 5) {
    for (const t of ['sofa3', 'sofa2', 'recliner', 'bookcase', 'pantry', 'freezer']) addItem(t);
    return;
  }
  const L = -w / 2, B = -d / 2, R = w / 2;
  const s3 = CATALOG.sofa3, s2 = CATALOG.sofa2, rc = CATALOG.recliner;
  const cx = L + 0.5 + s2.d / 200 + 0.8 + s3.w / 200; // living area centre x
  addItem('sofa3', { x: cx, z: B + s3.d / 200 + 0.05, rot: 0 });
  addItem('sofa2', { x: L + s2.d / 200 + 0.3, z: B + s3.d / 100 + 0.6 + s2.w / 200, rot: 90 });
  addItem('recliner', { x: cx + s3.w / 200 + 0.5 + rc.d / 200, z: B + s3.d / 100 + 0.9 + rc.w / 200, rot: 270 });
  addItem('bookcase', { x: cx + s3.w / 200 + 0.5, z: B + CATALOG.bookcase.d / 200, rot: 0 });
  addItem('pantry', { x: R - CATALOG.pantry.d / 200, z: B + 1.2, rot: 270 });
  addItem('freezer', { x: R - CATALOG.freezer.d / 200 - 0.1, z: B + 1.2 + CATALOG.pantry.w / 200 + 0.1 + CATALOG.freezer.w / 200, rot: 270 });
}

// ---- selection panel & list ----------------------------------------------

function select(id) {
  selectedId = id;
  refresh();
}

const selInputs = { selName: 'name', selW: 'w', selD: 'd', selH: 'h', selZF: 'zoneFront', selZB: 'zoneBack' };

function syncSelectionPanel() {
  const it = state.items.find((i) => i.id === selectedId);
  $('selection').hidden = !it;
  if (!it) return;
  for (const [el, key] of Object.entries(selInputs)) if (document.activeElement !== $(el)) $(el).value = it[key];
  $('selRot').textContent = Math.round(it.rot);
}

for (const [el, key] of Object.entries(selInputs)) {
  $(el).addEventListener('input', () => {
    const it = state.items.find((i) => i.id === selectedId);
    if (!it) return;
    if (key === 'name') { it.name = $(el).value; views.get(it.id).nameLabel.element.textContent = it.name; }
    else {
      const v = parseFloat($(el).value);
      if (!Number.isFinite(v) || v < (key.startsWith('zone') ? 0 : 5)) return;
      it[key] = v;
      buildView(it);
    }
    refresh();
  });
}

function renderList(status) {
  const ul = $('list');
  ul.innerHTML = '';
  $('count').textContent = state.items.length ? `(${state.items.length})` : '';
  for (const it of state.items) {
    const li = document.createElement('li');
    if (it.id === selectedId) li.className = 'sel';
    const st = status.get(it.id);
    li.innerHTML = `<span class="dot ${st === 'ok' ? '' : st}"></span><span></span><small>${it.w}×${it.d}</small>`;
    li.children[1].textContent = it.name;
    li.title = st === 'bad' ? 'Overlapping another item or outside the hall' : st === 'warn' ? 'Its needed space is blocked' : '';
    li.onclick = () => { select(it.id); focusOn(it); };
    ul.appendChild(li);
  }
}

function focusOn(it) {
  const ctl = viewMode === 'top' ? topCtl : orbit;
  const delta = new THREE.Vector3(it.x, 0, it.z).sub(ctl.target);
  ctl.target.add(delta);
  ctl.object.position.add(delta);
}

// ---- pointer interaction -------------------------------------------------
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
let drag = null; // { id, dx, dz, pointerId }
let down = null;

function setNdc(e) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
}
function floorHit() { return ray.ray.intersectPlane(floorPlane, new THREE.Vector3()); }

function snapV(v) {
  const s = parseFloat($('snap').value) / 100;
  return s > 0 ? Math.round(v / s) * s : v;
}

function onPointerDown(e) {
  if (e.button !== 0) return;
  setNdc(e);
  down = { x: e.clientX, y: e.clientY };
  const hit = ray.intersectObjects([...views.values()].map((v) => v.model), true)[0];
  if (!hit) return;
  const it = state.items.find((i) => i.id === hit.object.userData.id);
  const p = floorHit();
  if (!it || !p) return;
  orbit.enabled = topCtl.enabled = false;
  drag = { id: it.id, dx: it.x - p.x, dz: it.z - p.z, pointerId: e.pointerId };
  canvas.setPointerCapture(e.pointerId);
  canvas.style.cursor = 'grabbing';
  if (selectedId !== it.id) select(it.id);
}

function onPointerMove(e) {
  if (!drag) {
    if (e.buttons === 0) {
      setNdc(e);
      const over = ray.intersectObjects([...views.values()].map((v) => v.model), true).length > 0;
      canvas.style.cursor = over ? 'grab' : '';
    }
    return;
  }
  setNdc(e);
  const p = floorHit();
  if (!p) return;
  const it = state.items.find((i) => i.id === drag.id);
  it.x = snapV(p.x + drag.dx);
  it.z = snapV(p.z + drag.dz);
  placeView(it);
  refresh({ list: false });
}

function onPointerUp(e) {
  if (drag) {
    canvas.releasePointerCapture(drag.pointerId);
    drag = null;
    canvas.style.cursor = 'grab';
    setView(viewMode); // re-enable the active controls
    refresh();
  } else if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 4 && selectedId !== null) {
    select(null);
  }
  down = null;
}

addEventListener('keydown', (e) => {
  if (e.target.matches('input, select, textarea')) return;
  const k = e.key.toLowerCase();
  if (k === 't') setView(viewMode === '3d' ? 'top' : '3d');
  if (selectedId === null) return;
  if (k === 'q') rotate(selectedId, -15);
  else if (k === 'e') rotate(selectedId, 15);
  else if (k === 'r') rotate(selectedId, e.shiftKey ? -90 : 90);
  else if (k === 'delete' || k === 'backspace') removeItem(selectedId);
  else if (k === 'd' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); duplicate(selectedId); }
  else if (k === 'escape') select(null);
  else if (k.startsWith('arrow')) {
    e.preventDefault();
    const it = state.items.find((i) => i.id === selectedId);
    const step = e.shiftKey ? 0.1 : 0.01;
    if (k === 'arrowleft') it.x -= step;
    if (k === 'arrowright') it.x += step;
    if (k === 'arrowup') it.z -= step;
    if (k === 'arrowdown') it.z += step;
    placeView(it);
    refresh();
  }
});

// ---- views ---------------------------------------------------------------

function fitCameras() {
  const { w, d } = bounds();
  const r = Math.max(w, d);
  orbit.target.set(0, 0, 0);
  persp.position.set(0, r * 0.85, r * 0.95);
  topCtl.target.set(0, 0, 0);
  ortho.position.set(0, 50, 0.001);
  ortho.zoom = 1;
  resize();
}

function setView(mode) {
  viewMode = mode;
  camera = mode === 'top' ? ortho : persp;
  orbit.enabled = mode === '3d';
  topCtl.enabled = mode === 'top';
  $('view3d').classList.toggle('on', mode === '3d');
  $('viewTop').classList.toggle('on', mode === 'top');
  for (const it of state.items) placeView(it);
}

function resize() {
  const { clientWidth: W, clientHeight: H } = stage;
  renderer.setSize(W, H);
  labels.setSize(W, H);
  persp.aspect = W / H;
  persp.updateProjectionMatrix();
  // Ortho frustum fits the hall plus a margin for the wall labels.
  const { w, d } = bounds();
  const half = Math.max((w + 2) / 2 / (W / H), (d + 3.5) / 2);
  Object.assign(ortho, { left: -half * (W / H), right: half * (W / H), top: half, bottom: -half });
  ortho.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage);

// ---- wiring --------------------------------------------------------------

for (const [type, c] of Object.entries(CATALOG)) {
  const b = document.createElement('button');
  b.innerHTML = `${c.name}<small>${c.w} × ${c.d} × ${c.h} cm</small>`;
  b.onclick = () => addItem(type);
  $('catalog').appendChild(b);
}
$('addAll').onclick = addMySet;
$('rotL').onclick = () => rotate(selectedId, -15);
$('rotR').onclick = () => rotate(selectedId, 15);
$('rot90').onclick = () => rotate(selectedId, 90);
$('dup').onclick = () => duplicate(selectedId);
$('del').onclick = () => removeItem(selectedId);
$('view3d').onclick = () => setView('3d');
$('viewTop').onclick = () => setView('top');

for (const key of ['w', 'd']) {
  const el = $(key === 'w' ? 'hallW' : 'hallD');
  el.value = state.hall[key];
  el.addEventListener('change', () => {
    const v = parseFloat(el.value);
    if (!Number.isFinite(v) || v < 2) { el.value = state.hall[key]; return; }
    state.hall[key] = v;
    buildHall();
    fitCameras();
    refresh();
  });
}

for (const [id, p] of Object.entries(PLANS)) $('layout').add(new Option(p.name, id));
$('layout').onchange = () => {
  const s = { ...state, stash: { ...state.stash, [state.layout]: state.items } };
  s.layout = $('layout').value;
  s.items = s.stash[s.layout] || [];
  delete s.stash[s.layout];
  loadState(s);
};
$('lowWalls').onchange = () => { state.lowWalls = $('lowWalls').checked; buildHall(); save(); };
$('drawing').onchange = () => { state.drawing = $('drawing').checked; buildHall(); save(); };

$('reset').onclick = () => {
  if (!state.items.length || !confirm('Remove all furniture from the hall?')) return;
  for (const it of [...state.items]) removeItem(it.id);
};

$('export').onclick = () => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' }));
  a.download = 'home-layout.json';
  a.click();
  URL.revokeObjectURL(a.href);
};
$('import').onclick = () => $('importFile').click();
$('importFile').onchange = async (e) => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  try {
    const s = JSON.parse(await file.text());
    if (!s?.hall || !Array.isArray(s.items)) throw new Error('not a layout file');
    loadState(s);
  } catch (err) { alert(`Could not import: ${err.message}`); }
};
const ABOUT_SEEN = 'home-planner-about-seen';
function openAbout() { $('aboutOverlay').hidden = false; }
function closeAbout() {
  $('aboutOverlay').hidden = true;
  if ($('aboutDontShow').checked) localStorage.setItem(ABOUT_SEEN, '1');
}
$('aboutBtn').onclick = openAbout;
$('aboutClose').onclick = closeAbout;
$('aboutOverlay').onclick = (e) => { if (e.target === $('aboutOverlay')) closeAbout(); };
if (!localStorage.getItem(ABOUT_SEEN)) openAbout();

$('shot').onclick = () => {
  renderer.render(scene, camera);
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = `home-layout-${viewMode}.png`;
  a.click();
};

// The terrace used to be two layouts ('tg', 'tf'); their furniture waits in
// state.terraceMigrate until the side-by-side layout is opened and offsets are known.
function migrateTerrace() {
  const pending = state.terraceMigrate || {};
  for (const id of ['tg', 'tf']) {
    const items = state.layout === id ? state.items : state.stash[id];
    if (items?.length) pending[id] = [...(pending[id] || []), ...items];
    delete state.stash[id];
  }
  if (state.layout === 'tg' || state.layout === 'tf') {
    state.layout = 'terrace';
    state.items = state.stash.terrace || [];
    delete state.stash.terrace;
  }
  if (Object.keys(pending).length) state.terraceMigrate = pending;
}

async function loadState(s) {
  for (const v of views.values()) { disposeTree(v.group); itemsGroup.remove(v.group); }
  views.clear();
  state = { layout: 'hall', stash: {}, lowWalls: true, drawing: true, ...s };
  migrateTerrace();
  const all = [...state.items, ...Object.values(state.stash).flat(), ...Object.values(state.terraceMigrate || {}).flat()];
  nextId = all.reduce((m, it) => Math.max(m, it.id), 0) + 1;
  selectedId = null;
  $('hallW').value = state.hall.w;
  $('hallD').value = state.hall.d;
  $('layout').value = state.layout;
  $('lowWalls').checked = state.lowWalls;
  $('drawing').checked = state.drawing;
  plan = state.layout === 'hall' ? null : await loadPlan(state.layout);
  if (plan?.id === 'terrace' && state.terraceMigrate) {
    // Furniture from the old single-floor layouts keeps its spot on its floor.
    for (const part of plan.parts) {
      for (const it of state.terraceMigrate[part.plan.id] || []) state.items.push({ ...it, x: it.x + part.dx, z: it.z + part.dz });
    }
    delete state.terraceMigrate;
  }
  $('hallSection').hidden = !!plan;
  $('drawingToggle').hidden = !plan || !plan.parts.some((p) => p.plan.drawing);
  buildHall();
  for (const it of state.items) buildView(it);
  fitCameras();
  refresh();
}

// ---- loop ----------------------------------------------------------------
const camPos = new THREE.Vector3();
renderer.setAnimationLoop(() => {
  (viewMode === 'top' ? topCtl : orbit).update();
  camera.getWorldPosition(camPos);
  // Cut away walls between the camera and the room so the furniture stays visible.
  for (const w of walls) {
    const h = w.geometry.parameters.height;
    w.scale.y = viewMode === '3d' && w.userData.outside(camPos) ? 0.1 / h : 1;
    w.position.y = (h * w.scale.y) / 2;
  }
  renderer.render(scene, camera);
  labels.render(scene, camera);
});

// Test hook (dev only; stripped from production builds)
if (import.meta.env.DEV) {
  window.planner = { get state() { return state; }, persp, orbit, addItem, addMySet, select, rotate, removeItem, setView, evaluate, ready: false };
}
loadState(state).then(() => { setView('3d'); if (import.meta.env.DEV) window.planner.ready = true; });
