// Floor-plan layouts: walls, windows, fixed counters and a floor texture built
// from the plan's interior mask (see scripts/extract_plan.py).
import * as THREE from 'three';

// A layout is one plan file, or several shown side by side (left to right).
export const PLANS = {
  a1: { name: 'Type A1 · 4R2B + balcony', parts: [{ id: 'a1' }] },
  b1: { name: 'Type B1 · 3R2B + balcony', parts: [{ id: 'b1' }] },
  terrace: { name: 'Terrace house · both floors', parts: [{ id: 'tg', title: 'Ground floor' }, { id: 'tf', title: '1st floor' }] },
};
const PART_GAP = 1.5; // metres between side-by-side floors

// Starting positions for the photographed set, per plan (metres, degrees).
export const PRESETS = {
  a1: [
    ['sofa3', -0.2, -2.4, 270],
    ['sofa2', -1.45, -0.47, 180],
    ['recliner', -2.25, -3.05, 135],
    ['bookcase', -2.94, -1.45, 90],
    ['pantry', -3.98, 2.54, 180],
    ['freezer', -3.65, 1.0, 270],
  ],
  b1: [
    ['sofa3', -0.5, -2.2, 90],
    ['recliner', -3.75, -1.9, 90],
    ['bookcase', 5.35, -3.9, 270],
    ['pantry', -1.9, 3.9, 0],
    ['freezer', 1.0, 0.3, 90],
  ],
  tg: [
    ['sofa3', 0, -1.1, 0],
    ['sofa2', -2.32, 0.99, 90],
    ['recliner', 0.8, 0.99, 270],
    ['bookcase', -3.36, -2.07, 90],
    ['pantry', -4.26, -5.77, 90],
    ['freezer', -0.71, -8.22, 180],
  ],
};

const cache = new Map();

function loadImage(url) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => rej(new Error(`could not load ${url}`));
    img.src = url;
  });
}

async function loadPart(id) {
  if (cache.has(id)) return cache.get(id);
  const plan = await (await fetch(`plans/${id}.json`)).json();
  // The brochure drawing overlay is omitted from some deployments (copyrighted
  // marketing material) — fall back to walls/rooms only when it's missing.
  const [mask, drawing] = await Promise.all([loadImage(plan.floor), loadImage(plan.drawing).catch(() => null)]);
  const c = document.createElement('canvas');
  c.width = mask.width;
  c.height = mask.height;
  const g = c.getContext('2d');
  g.drawImage(mask, 0, 0);
  const data = g.getImageData(0, 0, c.width, c.height);
  // Copy of the mask with the interior as alpha, for clipping the floor texture.
  const alpha = g.createImageData(c.width, c.height);
  for (let i = 0; i < data.data.length; i += 4) alpha.data[i + 3] = data.data[i];
  g.putImageData(alpha, 0, 0);
  const loaded = { ...plan, id, mask: c, drawing, maskData: data };
  cache.set(id, loaded);
  return loaded;
}

// Lays the parts out left to right, back walls aligned. Each part gets an offset (dx, dz).
export async function loadPlan(id) {
  const def = PLANS[id];
  const plans = await Promise.all(def.parts.map((p) => loadPart(p.id)));
  const w = plans.reduce((s, p) => s + p.w, 0) + PART_GAP * (plans.length - 1);
  const d = Math.max(...plans.map((p) => p.d));
  let x = -w / 2;
  const parts = plans.map((p, i) => {
    const part = { plan: p, title: def.parts[i].title, dx: x + p.w / 2, dz: -d / 2 + p.d / 2 };
    x += p.w + PART_GAP;
    return part;
  });
  return { id, name: def.name, w, d, parts };
}

// Furniture start positions for a layout, translated from its parts' presets.
export function presetFor(plan) {
  return plan.parts.flatMap(({ plan: p, dx, dz }) => (PRESETS[p.id] || []).map(([t, x, z, r]) => [t, x + dx, z + dz, r]));
}

// True if (x, z) is on any part's floor (including under walls).
export function inside(plan, x, z) {
  return plan.parts.some(({ plan: p, dx, dz }) => insidePart(p, x - dx, z - dz));
}

function insidePart(plan, x, z) {
  const { width, height, data } = plan.maskData;
  const px = Math.floor(((x + plan.w / 2) / plan.w) * width);
  const pz = Math.floor(((z + plan.d / 2) / plan.d) * height);
  if (px < 0 || pz < 0 || px >= width || pz >= height) return false;
  return data[(pz * width + px) * 4] > 127;
}

function floorTexture(plan, showDrawing) {
  const W = 2048, H = Math.round((W * plan.d) / plan.w);
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#efede8';
  g.fillRect(0, 0, W, H);
  const tile = (0.6 / plan.w) * W; // 60 cm tiles
  g.strokeStyle = '#dcd8d0';
  g.lineWidth = 1.5;
  g.beginPath();
  for (let x = 0; x < W; x += tile) { g.moveTo(x, 0); g.lineTo(x, H); }
  for (let y = 0; y < H; y += tile) { g.moveTo(0, y); g.lineTo(W, y); }
  g.stroke();
  if (showDrawing && plan.drawing) {
    g.globalAlpha = 0.6;
    g.globalCompositeOperation = 'multiply';
    g.drawImage(plan.drawing, 0, 0, W, H);
  }
  g.globalAlpha = 1;
  g.globalCompositeOperation = 'destination-in';
  g.drawImage(plan.mask, 0, 0, W, H);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

const side = { wall: '#e8e3da', hackable: '#efe3c4', fence: '#d9d4ca' };
const top = { wall: '#3f454c', hackable: '#c9a24e', fence: '#8a857c' };
const FENCE_H = 1.5;
const glassMat = new THREE.MeshStandardMaterial({ color: '#a9c6d3', roughness: 0.05, transparent: true, opacity: 0.35, depthWrite: false });
const frameMat = new THREE.MeshStandardMaterial({ color: '#8d9296', roughness: 0.4, metalness: 0.5 });
const counterMat = new THREE.MeshStandardMaterial({ color: '#d6d2cb', roughness: 0.5 });
const counterTop = new THREE.MeshStandardMaterial({ color: '#8f8a83', roughness: 0.35 });
const voidMat = new THREE.MeshStandardMaterial({ color: '#2b2e33', roughness: 1 });

function slab(x0, x1, y0, y1, z0, z1, mats) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0), mats);
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  m.castShadow = m.receiveShadow = true;
  return m;
}
// Box materials in BoxGeometry face order: +x, -x, +y, -y, +z, -z (dark top reads well from above).
function boxMats(sideColor, topColor) {
  const s = new THREE.MeshStandardMaterial({ color: sideColor, roughness: 0.9 });
  const t = new THREE.MeshStandardMaterial({ color: topColor, roughness: 0.9 });
  return [s, s, t, s, s, s];
}

// Builds every part of the layout into `group`. wallH caps every wall (low-wall mode).
export function buildPlan(group, plan, opts) {
  for (const { plan: p, dx, dz, title } of plan.parts) {
    const g = new THREE.Group();
    g.position.set(dx, 0, dz);
    buildPart(g, p, opts);
    if (title) {
      const l = opts.label(title, 'lbl dim');
      l.position.set(0, 0, -p.d / 2 - 0.5);
      g.add(l);
    }
    group.add(g);
  }
}

function buildPart(group, plan, { wallH, showDrawing, label }) {
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(plan.w, plan.d),
    new THREE.MeshStandardMaterial({ map: floorTexture(plan, showDrawing), roughness: 0.6, alphaTest: 0.5 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  group.add(floor);

  const mats = Object.fromEntries(Object.keys(side).map((k) => [k, boxMats(side[k], top[k])]));
  for (const w of plan.walls) {
    const h = w.kind === 'fence' ? Math.min(FENCE_H, wallH) : wallH;
    group.add(slab(w.x0, w.x1, 0, h, w.z0, w.z1, mats[w.kind] || mats.wall));
  }

  const sillMats = boxMats(side.wall, top.wall);
  for (const o of plan.openings) {
    const horiz = o.x1 - o.x0 > o.z1 - o.z0;
    const mid = horiz ? (o.z0 + o.z1) / 2 : (o.x0 + o.x1) / 2;
    const pane = (y0, y1) => (horiz ? slab(o.x0, o.x1, y0, y1, mid - 0.01, mid + 0.01, glassMat) : slab(mid - 0.01, mid + 0.01, y0, y1, o.z0, o.z1, glassMat));
    const bar = (y0, y1) => (horiz ? slab(o.x0, o.x1, y0, y1, mid - 0.025, mid + 0.025, frameMat) : slab(mid - 0.025, mid + 0.025, y0, y1, o.z0, o.z1, frameMat));
    const head = Math.min(o.head, wallH);
    if (o.sill > 0) group.add(slab(o.x0, o.x1, 0, Math.min(o.sill, wallH), o.z0, o.z1, sillMats));
    if (head > o.sill) {
      const p = pane(o.sill, head);
      p.castShadow = false;
      group.add(p);
    }
    if (o.kind === 'railing') group.add(bar(o.head - 0.04, o.head));
    else if (wallH > o.head) group.add(slab(o.x0, o.x1, o.head, wallH, o.z0, o.z1, sillMats)); // lintel
  }

  for (const f of plan.fixtures || []) {
    if (f.kind === 'stairs') {
      // Flight rising toward the back of the house (-z).
      const n = Math.max(2, Math.round(f.h / 0.18)), run = (f.z1 - f.z0) / n;
      for (let i = 0; i < n; i++) group.add(slab(f.x0, f.x1, 0, ((i + 1) * f.h) / n, f.z1 - (i + 1) * run, f.z1 - i * run, counterMat));
    } else if (f.kind === 'void') {
      const hole = slab(f.x0, f.x1, 0, 0.012, f.z0, f.z1, voidMat);
      hole.receiveShadow = false;
      group.add(hole);
      const t = 0.01;
      for (const [a, b, c, d] of [[f.x0, f.x1, f.z0, f.z0 + t], [f.x0, f.x1, f.z1 - t, f.z1], [f.x0, f.x0 + t, f.z0, f.z1], [f.x1 - t, f.x1, f.z0, f.z1]]) {
        const pane = slab(a, b, 0, f.h, c, d, glassMat);
        pane.castShadow = false;
        group.add(pane);
      }
    } else {
      group.add(slab(f.x0, f.x1, 0, f.h - 0.03, f.z0, f.z1, counterMat));
      group.add(slab(f.x0, f.x1, f.h - 0.03, f.h, f.z0, f.z1, counterTop));
    }
  }

  for (const r of plan.rooms) {
    const l = label(r.name, 'lbl room');
    l.position.set(r.x, 0.01, r.z);
    group.add(l);
  }
}

// Rectangles furniture must not overlap: walls, openings (in the wall line) and fixtures.
export function planObstacles(plan) {
  return plan.parts.flatMap(({ plan: p, dx, dz }) => [...p.walls, ...p.openings, ...(p.fixtures || [])]
    .map((r) => ({ x0: r.x0 + dx, x1: r.x1 + dx, z0: r.z0 + dz, z1: r.z1 + dz })));
}
