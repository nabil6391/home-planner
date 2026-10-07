// Parametric furniture models. Every builder takes the footprint in metres
// (w = width along x, d = depth along z, h = height) and returns a Group whose
// origin sits on the floor at the footprint centre, with the front facing +z.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ---- materials -----------------------------------------------------------

function noiseTexture(base, spread, streaks = false) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  if (streaks) {
    for (let i = 0; i < 90; i++) {
      g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${0.03 + rnd() * spread})`;
      g.fillRect(0, rnd() * 256, 256, 1 + rnd() * 3);
    }
  } else {
    for (let i = 0; i < 260; i++) {
      g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${rnd() * spread})`;
      g.beginPath();
      g.arc(rnd() * 256, rnd() * 256, 6 + rnd() * 26, 0, Math.PI * 2);
      g.fill();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const fabricTex = noiseTexture('#7a7c7f', 0.035);
fabricTex.repeat.set(3, 3);
const M = {
  fabric: new THREE.MeshStandardMaterial({ map: fabricTex, roughness: 0.95 }),
  foot: new THREE.MeshStandardMaterial({ color: '#1d1d1f', roughness: 0.6 }),
  white: new THREE.MeshStandardMaterial({ color: '#f1f1ee', roughness: 0.55 }),
  appliance: new THREE.MeshStandardMaterial({ color: '#f4f4f2', roughness: 0.35, metalness: 0.05 }),
  plastic: new THREE.MeshStandardMaterial({ color: '#9ea2a6', roughness: 0.5 }),
  dark: new THREE.MeshStandardMaterial({ color: '#2a2b2e', roughness: 0.7 }),
  wood: new THREE.MeshStandardMaterial({ map: noiseTexture('#b9ad9c', 0.08, true), roughness: 0.75 }),
  woodBack: new THREE.MeshStandardMaterial({ map: noiseTexture('#a89c8a', 0.07, true), roughness: 0.8 }),
  counter: new THREE.MeshStandardMaterial({ color: '#d9d9d6', roughness: 0.4 }),
  metal: new THREE.MeshStandardMaterial({ color: '#c4c6c8', roughness: 0.3, metalness: 0.8 }),
  glass: new THREE.MeshStandardMaterial({ color: '#b8c8cc', roughness: 0.05, transparent: true, opacity: 0.25 }),
  wire: new THREE.MeshStandardMaterial({ color: '#d0d0d0', roughness: 0.4, metalness: 0.6 }),
  generic: new THREE.MeshStandardMaterial({ color: '#c9b79c', roughness: 0.8 }),
  blackGloss: new THREE.MeshStandardMaterial({ color: '#17181a', roughness: 0.15, metalness: 0.1 }),
  darkWood: new THREE.MeshStandardMaterial({ map: noiseTexture('#3a332c', 0.07, true), roughness: 0.6 }),
  lightWood: new THREE.MeshStandardMaterial({ map: noiseTexture('#d8c7a6', 0.08, true), roughness: 0.65 }),
  chrome: new THREE.MeshStandardMaterial({ color: '#cfd2d4', roughness: 0.2, metalness: 0.9 }),
  blackMetal: new THREE.MeshStandardMaterial({ color: '#232427', roughness: 0.35, metalness: 0.7 }),
  mattress: new THREE.MeshStandardMaterial({ map: noiseTexture('#f5f3ee', 0.03), roughness: 0.85 }),
  mesh: new THREE.MeshStandardMaterial({ color: '#2b2d30', roughness: 0.8 }),
  mirror: new THREE.MeshStandardMaterial({ color: '#9fb4bb', roughness: 0.05, metalness: 0.6 }),
};
const BOOK_COLORS = ['#2f3e5c', '#7a2b2b', '#2e5a4a', '#c9a13b', '#e8e2d4', '#4a4a4a', '#8a5a3b', '#3b6f8a', '#d9d2c0'];

// ---- helpers -------------------------------------------------------------

// Box by extents: x0..x1, y0..y1, z0..z1 (keeps builder code readable).
function box(g, mat, x0, x1, y0, y1, z0, z1, radius = 0) {
  const w = x1 - x0, h = y1 - y0, d = z1 - z0;
  if (w <= 0 || h <= 0 || d <= 0) return null;
  const r = Math.min(radius, w / 2 - 1e-3, h / 2 - 1e-3, d / 2 - 1e-3);
  const geo = r > 0.002 ? new RoundedBoxGeometry(w, h, d, 3, r) : new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(geo, mat);
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  m.castShadow = m.receiveShadow = true;
  g.add(m);
  return m;
}

function cyl(g, mat, r, h, x, y, z) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.85, h, 12), mat);
  m.position.set(x, y + h / 2, z);
  m.castShadow = true;
  g.add(m);
  return m;
}

function seeded(n) {
  let s = n;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

// ---- builders ------------------------------------------------------------

// Grey suede-look sofa (1, 2 or 3 seats) matching the set in the photos:
// pillow-top arms, split back cushions with a headrest roll, short black feet.
function sofa(w, d, h, seats) {
  const g = new THREE.Group();
  const legH = 0.06;
  const armW = Math.min(0.24, w * 0.2);
  const armH = Math.min(0.64, h * 0.68);
  const seatTop = Math.min(0.46, h * 0.5);
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const ix0 = x0 + armW, ix1 = x1 - armW;

  for (const fx of [x0 + 0.08, x1 - 0.08]) for (const fz of [z0 + 0.08, z1 - 0.08]) cyl(g, M.foot, 0.03, legH, fx, 0, fz);

  box(g, M.fabric, ix0 - 0.01, ix1 + 0.01, legH, seatTop - 0.17, z0 + 0.1, z1 - 0.02, 0.03); // base
  for (const [a0, a1] of [[x0, ix0], [ix1, x1]]) {
    box(g, M.fabric, a0 + 0.01, a1 - 0.01, legH, armH - 0.1, z0 + 0.05, z1 - 0.03, 0.04);
    box(g, M.fabric, a0, a1, armH - 0.16, armH, z0 + 0.06, z1, 0.07); // pillow top
  }
  const backT = 0.2;
  box(g, M.fabric, ix0, ix1, legH, h - 0.12, z0, z0 + backT, 0.04); // back frame

  const sw = (ix1 - ix0) / seats;
  for (let i = 0; i < seats; i++) {
    const s0 = ix0 + i * sw + 0.005, s1 = ix0 + (i + 1) * sw - 0.005;
    box(g, M.fabric, s0, s1, seatTop - 0.17, seatTop, z0 + backT + 0.1, z1 - 0.01, 0.05); // seat cushion
    const back = box(g, M.fabric, s0, s1, seatTop - 0.02, h - 0.22, z0 + backT - 0.02, z0 + backT + 0.14, 0.05);
    if (back) back.rotation.x = -0.1;
    box(g, M.fabric, s0, s1, h - 0.26, h, z0 + 0.02, z0 + backT + 0.1, 0.08); // headrest roll
  }
  return g;
}

function freezer(w, d, h) {
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  for (const fx of [x0 + 0.05, x1 - 0.05]) for (const fz of [z0 + 0.05, z1 - 0.05]) cyl(g, M.plastic, 0.02, 0.02, fx, 0, fz);
  box(g, M.appliance, x0, x1, 0.02, h - 0.07, z0, z1, 0.015);
  box(g, M.appliance, x0 - 0.005, x1 + 0.005, h - 0.07, h, z0 - 0.005, z1 + 0.005, 0.015); // lid
  box(g, M.plastic, -w * 0.28, w * 0.28, h - 0.1, h - 0.06, z1, z1 + 0.035, 0.01); // handle
  box(g, M.dark, w * 0.18, w * 0.36, 0.05, 0.16, z1, z1 + 0.006); // vent grille
  box(g, M.dark, w * 0.1, w * 0.26, h * 0.62, h * 0.66, z1, z1 + 0.004); // label
  return g;
}

function bookcase(w, d, h) {
  const g = new THREE.Group();
  const t = 0.018, plinth = 0.07;
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  box(g, M.white, x0, x0 + t, 0, h, z0, z1);
  box(g, M.white, x1 - t, x1, 0, h, z0, z1);
  box(g, M.white, x0 + t, x1 - t, h - t, h, z0, z1);
  box(g, M.white, x0 + t, x1 - t, 0, plinth, z1 - 0.03, z1 - 0.01);
  box(g, M.white, x0 + t, x1 - t, plinth, plinth + t, z0, z1);
  box(g, M.white, x0 + t, x1 - t, 0, h, z0, z0 + 0.006);
  const levels = Math.max(2, Math.round((h - plinth) / 0.35));
  const step = (h - plinth - t) / levels;
  const rnd = seeded(Math.round(w * 1000 + h * 100) || 3);
  for (let i = 0; i < levels; i++) {
    const y = plinth + t + i * step;
    if (i > 0) box(g, M.white, x0 + t, x1 - t, y - t, y, z0, z1 - 0.005);
    if (i === 0) continue; // bottom shelf left empty
    let bx = x0 + t + 0.005;
    while (bx < x1 - t - 0.03) {
      const bw = 0.015 + rnd() * 0.03;
      if (bx + bw > x1 - t - 0.005) break;
      const bh = Math.min(step - 0.03, 0.16 + rnd() * 0.1);
      const mat = new THREE.MeshStandardMaterial({ color: BOOK_COLORS[Math.floor(rnd() * BOOK_COLORS.length)], roughness: 0.8 });
      box(g, mat, bx, bx + bw, y, y + bh, z0 + 0.03, Math.min(z1 - 0.02, z0 + 0.03 + 0.15 + rnd() * 0.05));
      bx += bw + 0.002;
    }
  }
  return g;
}

// Kitchen hutch: two-door + drawer base, grey counter, open shelving on the
// left and a glass door + solid door above on the right.
function pantry(w, d, h) {
  const g = new THREE.Group();
  const t = 0.018;
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const baseH = Math.min(0.86, h * 0.47);
  const upD = Math.min(0.32, d * 0.75);
  const upY = baseH + Math.min(0.38, h * 0.2); // where the upper cabinets start
  const midX = x0 + w * 0.45;

  box(g, M.dark, x0 + 0.02, x1 - 0.02, 0, 0.05, z0 + 0.02, z1 - 0.04);
  box(g, M.woodBack, x0, x1, 0.05, baseH - 0.02, z0, z1 - 0.02);
  box(g, M.counter, x0 - 0.01, x1 + 0.01, baseH - 0.02, baseH + 0.01, z0, z1 + 0.01);

  const fz = z1 - 0.02, gap = 0.004, lx = x0 + w * 0.5;
  box(g, M.wood, x0 + t, lx - gap, 0.06, baseH - 0.03, fz, fz + 0.018);
  box(g, M.wood, lx + gap, x1 - t, baseH - 0.2, baseH - 0.03, fz, fz + 0.018);
  box(g, M.wood, lx + gap, x1 - t, 0.06, baseH - 0.2 - gap, fz, fz + 0.018);
  for (const [x, y] of [[lx - 0.04, baseH - 0.12], [lx + 0.04, baseH - 0.26], [(lx + x1) / 2, baseH - 0.1]]) {
    const k = new THREE.Mesh(new THREE.SphereGeometry(0.014, 10, 8), M.white);
    k.position.set(x, y, fz + 0.03);
    g.add(k);
  }

  const uz0 = z0, uz1 = z0 + upD;
  box(g, M.woodBack, x0, x1, baseH + 0.01, h - 0.04, z0, z0 + 0.012); // back panel
  box(g, M.wood, x0, x0 + t, baseH + 0.01, h - 0.04, uz0, uz1);
  box(g, M.wood, x1 - t, x1, baseH + 0.01, h - 0.04, uz0, uz1);
  box(g, M.wood, midX, midX + t, upY, h - 0.04, uz0, uz1);
  box(g, M.plastic, x0 - 0.02, x1 + 0.02, h - 0.04, h, uz0, uz1 + 0.03); // crown
  box(g, M.wood, x0 + t, x1 - t, upY - t, upY, uz0, uz1);
  // Left: open shelves + a wire rack
  const lh = h - 0.04 - upY;
  box(g, M.wood, x0 + t, midX, upY + lh * 0.55, upY + lh * 0.55 + t, uz0, uz1);
  box(g, M.wire, x0 + t, midX, upY + 0.02, upY + 0.03, uz1 - 0.01, uz1);
  // Right: glass door, then a solid door
  const rx = (midX + x1) / 2;
  const dz = uz1;
  for (const [a, b, mat] of [[midX + t, rx - gap, M.glass], [rx + gap, x1 - t, M.white]]) {
    box(g, M.wood, a, b, upY, upY + 0.04, dz, dz + 0.016);
    box(g, M.wood, a, b, h - 0.08, h - 0.04, dz, dz + 0.016);
    box(g, M.wood, a, a + 0.04, upY, h - 0.04, dz, dz + 0.016);
    box(g, M.wood, b - 0.04, b, upY, h - 0.04, dz, dz + 0.016);
    box(g, mat, a + 0.04, b - 0.04, upY + 0.04, h - 0.08, dz + 0.006, dz + 0.01);
  }
  box(g, M.wood, midX + t, x1 - t, upY + lh * 0.45, upY + lh * 0.45 + t, uz0, uz1 - 0.01);
  box(g, M.metal, rx - 0.03, rx - 0.018, upY + lh * 0.3, upY + lh * 0.6, dz + 0.016, dz + 0.03);
  box(g, M.metal, rx + 0.018, rx + 0.03, upY + lh * 0.3, upY + lh * 0.6, dz + 0.016, dz + 0.03);
  return g;
}

// Slatted headboard/footboard bed frame (Hemnes-style) with a mattress + pillows.
function slatBed(w, d, h) {
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const legH = 0.15, frameH = 0.32, mat1 = M.white;
  for (const fx of [x0 + 0.04, x1 - 0.04]) for (const fz of [z0 + 0.04, z1 - 0.04]) box(g, mat1, fx - 0.03, fx + 0.03, 0, legH, fz - 0.03, fz + 0.03);
  box(g, mat1, x0, x1, legH, frameH, z0, z1 - 0.06, 0.02); // base frame
  box(g, M.mattress, x0 + 0.03, x1 - 0.03, frameH, frameH + 0.18, z0 + 0.03, z1 - 0.08, 0.03);
  // headboard with slats
  const hbH = h, hbT = 0.06;
  box(g, mat1, x0 - 0.02, x0 + 0.06, 0, hbH, z0 - 0.04, z0 + hbT);
  box(g, mat1, x1 - 0.06, x1 + 0.02, 0, hbH, z0 - 0.04, z0 + hbT);
  box(g, mat1, x0, x1, hbH - 0.08, hbH, z0 - 0.04, z0 + hbT, 0.015); // top rail
  box(g, mat1, x0, x1, 0, 0.16, z0 - 0.04, z0 + hbT); // bottom rail
  const slats = Math.max(4, Math.round(w / 0.12));
  const sw = (w - 0.2) / slats;
  for (let i = 0; i < slats; i++) {
    const sx = x0 + 0.1 + i * sw;
    box(g, mat1, sx + 0.01, sx + sw - 0.01, 0.2, hbH - 0.1, z0 - 0.03, z0 + hbT - 0.01);
  }
  // pillows
  const pw = Math.min(0.5, w * 0.42);
  for (const px of [x0 + w * 0.28, x1 - w * 0.28]) box(g, M.mattress, px - pw / 2, px + pw / 2, frameH + 0.18, frameH + 0.3, z0 + 0.1, z0 + 0.4, 0.06);
  return g;
}

// Plain metal 4-poster bed frame (round tube posts) with a mattress + folded throw.
function metalBed(w, d, h) {
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const frameH = 0.28;
  for (const [fx, hh] of [[x0 + 0.02, h], [x1 - 0.02, h]]) for (const fz of [z0 + 0.02, z1 - 0.02]) cyl(g, M.white, 0.018, hh, fx, 0, fz);
  for (const fz of [z0 + 0.02, z1 - 0.02]) box(g, M.white, x0, x1, h - 0.03, h, fz - 0.018, fz + 0.018, 0.01); // top rails
  box(g, M.white, x0, x1, frameH - 0.03, frameH, z0, z1, 0.015); // frame rail
  box(g, M.mattress, x0 + 0.03, x1 - 0.03, frameH, frameH + 0.18, z0 + 0.03, z1 - 0.03, 0.03);
  const pw = Math.min(0.5, w * 0.42);
  for (const px of [x0 + w * 0.28, x1 - w * 0.28]) box(g, M.mattress, px - pw / 2, px + pw / 2, frameH + 0.18, frameH + 0.3, z0 + 0.08, z0 + 0.36, 0.06);
  return g;
}

// 6-drawer chest (Malm-style): plain fronts, thin reveal gaps, recessed finger pulls.
function dresser(w, d, h) {
  const g = new THREE.Group();
  const t = 0.02, x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  box(g, M.white, x0, x1, 0, h, z0, z1, 0.01);
  const rows = 6, gap = 0.01;
  const rowH = (h - 0.04) / rows;
  for (let i = 0; i < rows; i++) {
    const y0 = 0.02 + i * rowH, y1 = y0 + rowH - gap;
    box(g, M.white, x0 + t, x1 - t, y0, y1, z1 - 0.01, z1 + 0.02, 0.006);
    box(g, M.dark, x0 + w * 0.5 - w * 0.12, x0 + w * 0.5 + w * 0.12, y1 - 0.025, y1 - 0.012, z1 + 0.018, z1 + 0.024); // pull groove
  }
  return g;
}

// Small 4-drawer rolling storage cart (Alex-style): metal frame, plain drawer fronts.
function drawerCart(w, d, h) {
  const g = new THREE.Group();
  const t = 0.016, x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  for (const fx of [x0 + 0.02, x1 - 0.02]) for (const fz of [z0 + 0.02, z1 - 0.02]) cyl(g, M.dark, 0.016, 0.03, fx, 0, fz);
  box(g, M.white, x0, x1, 0.05, h, z0, z1, 0.01);
  const rows = 4, gap = 0.012, top = 0.05;
  const rowH = (h - top - 0.02) / rows;
  for (let i = 0; i < rows; i++) {
    const y0 = top + i * rowH, y1 = y0 + rowH - gap;
    box(g, M.white, x0 + t, x1 - t, y0, y1, z1 - 0.01, z1 + 0.018, 0.006);
  }
  return g;
}

// Kids study desk with a hutch shelf above (Micke-style): open cubby, one side cabinet.
function studyDesk(w, d, h) {
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const deskH = Math.min(0.72, h * 0.5), legT = 0.04;
  const cabW = w * 0.32;
  box(g, M.white, x0, x1, deskH - 0.03, deskH, z0, z1, 0.01); // desktop
  box(g, M.white, x0, x0 + legT, 0, deskH - 0.03, z0, z1 * 0.85);
  box(g, M.white, x1 - cabW, x1, 0, deskH - 0.03, z0, z1); // side cabinet
  box(g, M.dark, x1 - cabW * 0.6, x1 - cabW * 0.4, deskH * 0.4, deskH * 0.5, z1 + 0.005, z1 + 0.012);
  // hutch
  const hutchY0 = deskH + 0.06, hutchD = d * 0.55;
  box(g, M.white, x0, x0 + 0.02, hutchY0, h, z0, z0 + hutchD);
  box(g, M.white, x1 - 0.02, x1, hutchY0, h, z0, z0 + hutchD);
  box(g, M.white, x0, x1, h - 0.02, h, z0, z0 + hutchD);
  const shelfY = hutchY0 + (h - hutchY0) * 0.45;
  box(g, M.white, x0 + 0.02, x1 - 0.02, shelfY, shelfY + 0.018, z0, z0 + hutchD, 0.005);
  box(g, M.white, x0 + 0.02, x1 - cabW + 0.02, h - 0.22, h - 0.2, z0, z0 + hutchD); // top shelf divider
  return g;
}

// Recumbent-style exercise bike: seat, backrest, pedal hub, display post.
function exerciseBike(w, d, h) {
  const g = new THREE.Group();
  const seatH = h * 0.42;
  box(g, M.dark, -w * 0.22, w * 0.22, 0, 0.03, -d * 0.4, d * 0.4, 0.01); // base rail
  for (const fz of [-d * 0.36, d * 0.36]) box(g, M.dark, -0.025, 0.025, 0, 0.03, fz - 0.03, fz + 0.03); // feet
  cyl(g, M.dark, 0.11, 0.05, 0, 0.02, -d * 0.28); // flywheel housing
  box(g, M.blackMetal, -0.02, 0.02, 0.03, seatH * 0.55, -d * 0.1, -d * 0.1 + 0.04, 0.01); // seat post
  box(g, M.blackMetal, -0.02, 0.02, seatH * 0.5, h * 0.95, -d * 0.45, -d * 0.4, 0.01); // backrest post (angled look via two segments)
  box(g, M.dark, -w * 0.22, w * 0.22, seatH * 0.46, seatH * 0.56, -d * 0.18, d * 0.02, 0.04); // seat cushion
  box(g, M.dark, -w * 0.19, w * 0.19, h * 0.62, h * 0.92, -d * 0.48, -d * 0.36, 0.05); // backrest cushion
  cyl(g, M.chrome, 0.015, h * 0.5, w * 0.26, seatH * 0.4, -d * 0.25); // handlebar-ish post, right
  for (const side of [-1, 1]) box(g, M.plastic, side * 0.16 - 0.04, side * 0.16 + 0.04, 0.06, 0.1, -d * 0.3, -d * 0.2); // pedals
  box(g, M.dark, -0.05, 0.05, seatH * 0.5, seatH * 0.62, -d * 0.3, -d * 0.26, 0.01); // display
  return g;
}

// Low fabric recliner/rocker: thick back, rolled arms, short tapered legs.
function fabricRecliner(w, d, h) {
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2, legH = 0.08;
  for (const fx of [x0 + 0.05, x1 - 0.05]) for (const fz of [z0 + 0.08, z1 - 0.1]) cyl(g, M.darkWood, 0.025, legH, fx, 0, fz);
  box(g, M.fabric, x0, x1, legH, h * 0.42, z0 + 0.1, z1, 0.05); // seat base
  box(g, M.fabric, x0, x0 + 0.14, legH, h * 0.75, z0 + 0.04, z1, 0.06); // left arm
  box(g, M.fabric, x1 - 0.14, x1, legH, h * 0.75, z0 + 0.04, z1, 0.06); // right arm
  box(g, M.fabric, x0 + 0.1, x1 - 0.1, h * 0.2, h, z0, z0 + 0.22, 0.07); // back
  box(g, M.fabric, x0 + 0.14, x1 - 0.14, h * 0.4, h * 0.56, z0 + 0.18, z1 - 0.04, 0.05); // seat cushion
  return g;
}

// Mesh-back office chair on a 5-star caster base.
function officeChair(w, d, h) {
  const g = new THREE.Group();
  const seatH = h * 0.46;
  cyl(g, M.blackMetal, 0.02, seatH * 0.85, 0, 0, 0); // gas lift column
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    box(g, M.blackMetal, -0.02, 0.02, 0, 0.03, -0.02, 0.02).position.set(Math.cos(a) * w * 0.4, 0.015, Math.sin(a) * w * 0.4);
    cyl(g, M.dark, 0.025, 0.025, Math.cos(a) * w * 0.42, 0, Math.sin(a) * w * 0.42);
  }
  box(g, M.dark, -w * 0.35, w * 0.35, seatH, seatH + 0.08, -d * 0.35, d * 0.35, 0.04); // seat
  box(g, M.mesh, -w * 0.32, w * 0.32, seatH + 0.08, h, -d * 0.42, -d * 0.3, 0.04); // backrest
  box(g, M.blackMetal, -w * 0.5, -w * 0.3, seatH * 0.9, seatH * 0.9 + 0.03, -d * 0.1, d * 0.2, 0.01); // left armrest
  box(g, M.blackMetal, w * 0.3, w * 0.5, seatH * 0.9, seatH * 0.9 + 0.03, -d * 0.1, d * 0.2, 0.01); // right armrest
  return g;
}

// Tall open-shelf storage tower with pull-out plastic bins.
function binTower(w, d, h) {
  const g = new THREE.Group();
  const t = 0.018, x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  box(g, M.white, x0, x0 + t, 0, h, z0, z1);
  box(g, M.white, x1 - t, x1, 0, h, z0, z1);
  box(g, M.white, x0 + t, x1 - t, h - t, h, z0, z1);
  box(g, M.white, x0 + t, x1 - t, 0, t, z0, z1);
  const bins = 5, gap = 0.015, binH = (h - 0.03) / bins;
  const binColors = ['#e8e4dd', '#e8e4dd', '#e8e4dd', '#2a2b2e', '#3e6fa8'];
  for (let i = 0; i < bins; i++) {
    const y0 = 0.02 + i * binH;
    const mat = new THREE.MeshStandardMaterial({ color: binColors[i % binColors.length], roughness: 0.4, transparent: binColors[i % binColors.length] === '#e8e4dd', opacity: 0.85 });
    box(g, mat, x0 + t + gap, x1 - t - gap, y0, y0 + binH - gap, z0 + 0.01, z1 - 0.01, 0.015);
  }
  return g;
}

// Console/sideboard table: two closed cabinet bases, a central open bay, flat top.
function console(w, d, h) {
  const g = new THREE.Group();
  const t = 0.02, x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const topH = h, baseH = h * 0.82, cabW = w * 0.32;
  box(g, M.white, x0, x1, topH - 0.03, topH, z0, z1, 0.01); // top
  for (const side of [-1, 1]) {
    const a = side < 0 ? x0 : x1 - cabW;
    const b = side < 0 ? x0 + cabW : x1;
    box(g, M.white, a, b, 0, baseH, z0, z1, 0.01);
    box(g, M.dark, (a + b) / 2 - 0.12, (a + b) / 2 + 0.12, baseH * 0.45, baseH * 0.5, z1 + 0.002, z1 + 0.01);
  }
  box(g, M.woodBack, x0 + cabW, x1 - cabW, 0, 0.03, z0, z1, 0.005); // plinth under the open bay
  return g;
}

// Entryway cabinet with a diamond-rotated mirror mounted above.
function hallCabinet(w, d, h) {
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const cabH = h * 0.6;
  box(g, M.white, x0, x1, 0, cabH, z0, z1, 0.01);
  const midX = 0;
  box(g, M.dark, midX - 0.015, midX + 0.015, cabH * 0.15, cabH * 0.85, z1 + 0.002, z1 + 0.01, 0.005); // seam
  for (const kx of [x0 + w * 0.2, x1 - w * 0.2]) box(g, M.white, kx - 0.012, kx + 0.012, cabH * 0.42, cabH * 0.5, z1 + 0.012, z1 + 0.024, 0.006);
  const mir = new THREE.Mesh(new THREE.BoxGeometry(w * 0.42, w * 0.42, 0.02), M.mirror);
  mir.position.set(0, cabH + w * 0.3, z0 + 0.01);
  mir.rotation.z = Math.PI / 4;
  mir.castShadow = true;
  g.add(mir);
  return g;
}

// Sliding-door wardrobe, two panels (gloss or wood-look), open shelving visible
// through a gap on one side, slim top crown.
function wardrobe(w, d, h) {
  const g = new THREE.Group();
  const t = 0.02, x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const frame = M.darkWood, panel = M.blackGloss;
  box(g, frame, x0, x0 + t, 0, h, z0, z1);
  box(g, frame, x1 - t, x1, 0, h, z0, z1);
  box(g, frame, x0, x1, h - t, h, z0, z1);
  box(g, frame, x0, x1, 0, 0.03, z0, z1);
  box(g, M.white, x0 + t, x1 - t, 0.03, h - t, z0, z0 + 0.01); // back
  const doorW = (w - 2 * t) / 2 + 0.02;
  box(g, panel, x0 + t, x0 + t + doorW, 0.03, h - t, z1 - 0.03, z1 - 0.01, 0.01);
  box(g, panel, x1 - t - doorW, x1 - t, 0.03, h - t, z1 - 0.05, z1 - 0.03, 0.01);
  // visible shelving/hanging rail through the gap between the panels
  box(g, M.chrome, x0 + w * 0.3, x1 - w * 0.3, h * 0.78, h * 0.78 + 0.012, z0 + 0.05, z0 + 0.1);
  for (let i = 0; i < 4; i++) {
    const bx = x0 + w * 0.32 + i * (w * 0.1);
    box(g, new THREE.MeshStandardMaterial({ color: BOOK_COLORS[(i + 2) % BOOK_COLORS.length], roughness: 0.8 }), bx, bx + 0.04, h * 0.3, h * 0.78 - 0.02, z0 + 0.04, z0 + 0.11);
  }
  return g;
}

// Small kids' table with one chair (simplified single-piece set).
function kidsTable(w, d, h) {
  const g = new THREE.Group();
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2, legT = 0.035;
  box(g, M.plastic, x0, x1, h - 0.03, h, z0, z1, 0.015);
  for (const fx of [x0 + 0.03, x1 - 0.03]) for (const fz of [z0 + 0.03, z1 - 0.03]) box(g, M.plastic, fx - legT / 2, fx + legT / 2, 0, h - 0.03, fz - legT / 2, fz + legT / 2);
  // chair beside it
  const cw = w * 0.5, cx = x1 + cw * 0.5 + 0.08, seatH = h * 0.55;
  box(g, M.wood, cx - cw / 2, cx + cw / 2, seatH - 0.03, seatH, z0, z0 + d * 0.5, 0.01);
  box(g, M.wood, cx - cw / 2, cx + cw / 2, seatH, seatH + h * 0.4, z0, z0 + 0.03, 0.01);
  for (const fx of [cx - cw / 2 + 0.02, cx + cw / 2 - 0.02]) for (const fz of [z0 + 0.02, z0 + d * 0.5 - 0.02]) box(g, M.wood, fx - 0.012, fx + 0.012, 0, seatH - 0.03, fz - 0.012, fz + 0.012);
  return g;
}

// Foldable clothes-drying rack: open A-frame of light wood-tone bars.
function dryingRack(w, d, h) {
  const g = new THREE.Group();
  const bars = 4;
  for (let i = 0; i < bars; i++) {
    const y = h * 0.2 + (i * (h * 0.75)) / (bars - 1);
    box(g, M.lightWood, -w / 2, w / 2, y - 0.01, y + 0.01, -0.01, 0.01, 0.005);
  }
  for (const side of [-1, 1]) {
    box(g, M.lightWood, side * w / 2 - 0.015, side * w / 2 + 0.015, 0, h, -0.015, 0.015, 0.006);
    box(g, M.lightWood, side * w / 2 - 0.015, side * w * 0.35, 0, 0.02, -d / 2, 0.02, 0.006); // splayed foot
  }
  return g;
}

// Poäng-style bentwood accent chair: curved frame, cushion seat + back.
function accentChair(w, d, h) {
  const g = new THREE.Group();
  const seatH = h * 0.4;
  for (const side of [-1, 1]) {
    const m = box(g, M.lightWood, side * w * 0.48 - 0.02, side * w * 0.48 + 0.02, 0, h, -d * 0.4, d * 0.42, 0.01);
    if (m) m.rotation.x = -0.25;
  }
  box(g, M.fabric, -w * 0.42, w * 0.42, seatH, seatH + 0.08, -d * 0.3, d * 0.32, 0.05); // seat cushion
  const back = box(g, M.fabric, -w * 0.4, w * 0.4, seatH, h * 0.95, -d * 0.42, -d * 0.28, 0.06);
  if (back) back.rotation.x = -0.3;
  return g;
}

// Placeholder for anything not modelled yet (bed, table, wardrobe…).
function generic(w, d, h) {
  const g = new THREE.Group();
  box(g, M.generic, -w / 2, w / 2, 0, h, -d / 2, d / 2, 0.02);
  box(g, M.dark, -w * 0.3, w * 0.3, h * 0.45, h * 0.55, d / 2, d / 2 + 0.005); // front marker
  return g;
}

// ---- catalogue -----------------------------------------------------------
// Sizes are centimetres, estimated from the photos — measure and edit in the app.
// zone.front / zone.back = floor space the item needs in front / behind it
// (legroom, recline, door swing, vent gap).

export const CATALOG = {
  sofa3: { name: '3-seater sofa', w: 200, d: 92, h: 95, zone: { front: 60, back: 0 }, build: (w, d, h) => sofa(w, d, h, 3) },
  sofa2: { name: '2-seater sofa', w: 152, d: 70, h: 91, zone: { front: 60, back: 0 }, build: (w, d, h) => sofa(w, d, h, 2) },
  recliner: { name: 'Recliner', w: 98, d: 95, h: 100, zone: { front: 65, back: 15 }, build: (w, d, h) => sofa(w, d, h, 1) },
  freezer: { name: 'Chest freezer', w: 56, d: 53, h: 85, zone: { front: 60, back: 10 }, build: freezer },
  bookcase: { name: 'Bookcase', w: 40, d: 28, h: 202, zone: { front: 50, back: 0 }, build: bookcase },
  pantry: { name: 'Pantry cabinet', w: 120, d: 42, h: 190, zone: { front: 70, back: 0 }, build: pantry },
  bedHemnesKing: { name: 'Hemnes bed (king)', w: 180, d: 200, h: 100, zone: { front: 70, back: 0 }, build: slatBed },
  bedMetalQueen: { name: 'Bed (metal frame, queen)', w: 160, d: 200, h: 100, zone: { front: 70, back: 0 }, build: metalBed },
  bedMetalSingle: { name: 'Bed (metal frame, single)', w: 90, d: 190, h: 90, zone: { front: 60, back: 0 }, build: metalBed },
  malm6: { name: 'Malm 6-drawer dresser', w: 80, d: 48, h: 123, zone: { front: 70, back: 0 }, build: dresser },
  alexCart: { name: 'Alex drawer unit', w: 36, d: 58, h: 70, zone: { front: 40, back: 0 }, build: drawerCart },
  mickeDesk: { name: 'Micke desk + hutch', w: 100, d: 50, h: 148, zone: { front: 60, back: 0 }, build: studyDesk },
  exerciseBike: { name: 'Exercise bike', w: 50, d: 110, h: 110, zone: { front: 50, back: 20 }, build: exerciseBike },
  fabricRecliner: { name: 'Fabric recliner/rocker', w: 78, d: 90, h: 100, zone: { front: 65, back: 15 }, build: fabricRecliner },
  officeChair: { name: 'Office chair', w: 60, d: 60, h: 110, zone: { front: 50, back: 0 }, build: officeChair },
  binTower: { name: 'Bin storage tower', w: 40, d: 45, h: 160, zone: { front: 50, back: 0 }, build: binTower },
  console: { name: 'Console table', w: 120, d: 45, h: 75, zone: { front: 40, back: 0 }, build: console },
  hallCabinet: { name: 'Hall cabinet + mirror', w: 75, d: 38, h: 85, zone: { front: 50, back: 0 }, build: hallCabinet },
  wardrobe: { name: 'Sliding-door wardrobe', w: 180, d: 60, h: 220, zone: { front: 90, back: 0 }, build: wardrobe },
  kidsTable: { name: "Kids' table + chair", w: 60, d: 60, h: 50, zone: { front: 40, back: 40 }, build: kidsTable },
  dryingRack: { name: 'Drying rack', w: 60, d: 50, h: 95, zone: { front: 20, back: 0 }, build: dryingRack },
  accentChair: { name: 'Accent chair', w: 68, d: 82, h: 95, zone: { front: 40, back: 0 }, build: accentChair },
  box: { name: 'Custom item', w: 100, d: 60, h: 75, zone: { front: 0, back: 0 }, build: generic },
};

export function buildModel(type, wCm, dCm, hCm) {
  const entry = CATALOG[type] || CATALOG.box;
  return entry.build(wCm / 100, dCm / 100, hCm / 100);
}
