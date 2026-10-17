// Procedural floating island: sculpted rock underside, rolling lawn, a red-brick
// American campus hall, trees, a lit walkway and a few drifting rock fragments.
import * as THREE from 'three';
import { mergeVertices, mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { fbm, ridged, mulberry32 } from './noise.js';

const R = 3.0;          // nominal top radius
const H = 3.7;          // rock depth
const SEG = 160;        // radial resolution shared by rock + lawn edge

const C = (hex) => new THREE.Color(hex);

function edgeRadius(theta) {
  const c = Math.cos(theta), s = Math.sin(theta);
  return R * (1 + 0.075 * fbm(c * 1.4 + 3.1, 0.7, s * 1.4) + 0.03 * fbm(c * 4.2, 1.9, s * 4.2));
}

function rockRadius(theta, t) {
  const c = Math.cos(theta), s = Math.sin(theta);
  const prof = Math.pow(1 - t, 1.18) * (1 + 0.14 * Math.sin(t * Math.PI * 0.9));
  const lobes = 1 + 0.30 * fbm(c * 1.5, t * 2.2 + 4.0, s * 1.5);
  const crag = 0.16 * (ridged(c * 2.6 + 1.3, t * 4.5, s * 2.6, 4) - 0.35);
  const strata = 0.03 * Math.tanh(4 * Math.sin(t * 27 + 3.5 * fbm(c * 2, t * 3, s * 2)));
  const top = edgeRadius(theta) / R;
  const blendTop = Math.min(1, t / 0.06);
  const m = THREE.MathUtils.lerp(top, lobes + crag + strata, blendTop);
  return R * prof * m;
}

function buildRock() {
  const rings = 70;
  const pos = [], col = [], idx = [];
  const cTop = C('#4a3526'), cMid = C('#7d6a58'), cLight = C('#a89580'), cDeep = C('#2a2420'), cMoss = C('#3f5a2a');
  const tmp = new THREE.Color();
  for (let j = 0; j <= rings; j++) {
    const t = j / rings;
    for (let i = 0; i < SEG; i++) {
      const th = (i / SEG) * Math.PI * 2;
      const c = Math.cos(th), s = Math.sin(th);
      const r = rockRadius(th, t);
      const drop = 1 + 0.45 * Math.max(0, fbm(c * 2.1 + 9, 0.3, s * 2.1)) + 0.25 * t * fbm(c * 5, 2, s * 5);
      const y = -t * H * drop + (t < 0.02 ? 0.02 : 0);
      // 3D ridged displacement breaks up the lathe look into blocky, faceted rock
      const px = c * r, pz = s * r;
      const k = t < 0.04 ? 0 : Math.min(1, (t - 0.04) / 0.08);
      const disp = k * (0.42 * (ridged(px * 0.75 + 7, y * 0.9, pz * 0.75, 4) - 0.38) + 0.18 * fbm(px * 2.2, y * 2.6, pz * 2.2));
      const rr = Math.max(0.02, r + disp * (1 - t * 0.5));
      pos.push(c * rr, y + k * 0.12 * fbm(px * 1.3, 4.1, pz * 1.3), s * rr);
      // colour: soil band at the top, moss streaks, sedimentary banding, darker toward the tip
      const band = 0.5 + 0.5 * Math.sin(y * 9 + 2.5 * fbm(c * 3, y * 0.6, s * 3));
      tmp.copy(cMid).lerp(cLight, band * 0.55);
      const n = fbm(c * 6, y * 2.2, s * 6);
      tmp.lerp(cDeep, THREE.MathUtils.clamp(t * 0.85 + n * 0.6, 0, 0.85));
      if (t < 0.07) tmp.lerp(cTop, 1 - t / 0.07);
      if (t < 0.22 && n > 0.08) tmp.lerp(cMoss, (0.22 - t) * 2.2);
      col.push(tmp.r, tmp.g, tmp.b);
    }
  }
  for (let j = 0; j < rings; j++) {
    for (let i = 0; i < SEG; i++) {
      const a = j * SEG + i, b = j * SEG + ((i + 1) % SEG);
      const c2 = (j + 1) * SEG + i, d = (j + 1) * SEG + ((i + 1) % SEG);
      idx.push(a, c2, b, b, c2, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// ---------- lawn ----------
const BLD = { x: 0.15, z: -0.75 };           // building centre
const PLAZA_H = 0.27;

function plazaMask(x, z) {
  const dx = Math.abs(x - BLD.x) - 1.55, dz = Math.abs(z - BLD.z) - 0.85;
  const d = Math.max(dx, dz);
  return THREE.MathUtils.clamp(1 - d / 0.35, 0, 1);
}

export function heightAt(x, z) {
  const th = Math.atan2(z, x);
  const rho = Math.hypot(x, z) / (edgeRadius(th) * 1.012);
  let h = 0.34 * (1 - Math.pow(Math.min(rho, 1), 2.4)) + 0.05 * fbm(x * 0.7 + 11, 0.2, z * 0.7);
  if (rho > 0.93) h -= (rho - 0.93) * 1.4;
  const m = plazaMask(x, z);
  return THREE.MathUtils.lerp(h, PLAZA_H, m * m * (3 - 2 * m));
}

function inLawnQuad(x, z) {
  return x > -0.85 && x < 1.15 && z > -0.05 && z < 1.7;
}

function buildLawn() {
  const rings = 44;
  const pos = [], col = [], idx = [];
  const g1 = C('#3f6b25'), g2 = C('#5f8f32'), g3 = C('#7da844'), dark = C('#2c4a1b'), quad = C('#79a640'), quad2 = C('#6b9838');
  const tmp = new THREE.Color();
  pos.push(BLD.x * 0, heightAt(0, 0), 0); col.push(g2.r, g2.g, g2.b);
  for (let j = 1; j <= rings; j++) {
    const rho = j / rings;
    for (let i = 0; i < SEG; i++) {
      const th = (i / SEG) * Math.PI * 2;
      const er = edgeRadius(th) * 1.012;
      const x = Math.cos(th) * er * rho, z = Math.sin(th) * er * rho;
      const y = j === rings ? -0.035 : heightAt(x, z);
      pos.push(x, y, z);
      const n = fbm(x * 1.6, 3.3, z * 1.6);
      tmp.copy(g1).lerp(g2, 0.5 + n).lerp(g3, Math.max(0, fbm(x * 3.5, 7, z * 3.5)) * 0.8);
      if (inLawnQuad(x, z)) {
        const stripe = Math.sin((x - z * 0.15) * 9) > 0 ? quad : quad2;
        tmp.lerp(stripe, 0.85);
      }
      if (rho > 0.9) tmp.lerp(dark, (rho - 0.9) * 6);
      col.push(tmp.r, tmp.g, tmp.b);
    }
  }
  for (let i = 0; i < SEG; i++) idx.push(0, 1 + ((i + 1) % SEG), 1 + i);
  for (let j = 1; j < rings; j++) {
    for (let i = 0; i < SEG; i++) {
      const a = 1 + (j - 1) * SEG + i, b = 1 + (j - 1) * SEG + ((i + 1) % SEG);
      const c2 = 1 + j * SEG + i, d = 1 + j * SEG + ((i + 1) % SEG);
      idx.push(a, b, c2, b, d, c2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// ---------- walkway ----------
export const PATH = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0.55, 0, 2.95),
  new THREE.Vector3(0.75, 0, 2.2),
  new THREE.Vector3(0.25, 0, 1.45),
  new THREE.Vector3(0.15, 0, 0.75),
  new THREE.Vector3(0.15, 0, 0.0),
]);

function buildPath() {
  const N = 90, w = 0.13;
  const pos = [], idx = [];
  const p = new THREE.Vector3(), tan = new THREE.Vector3();
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    PATH.getPointAt(u, p); PATH.getTangentAt(u, tan);
    const nx = -tan.z, nz = tan.x; const l = Math.hypot(nx, nz) || 1;
    for (const sgn of [-1, 1]) {
      const x = p.x + (nx / l) * w * sgn, z = p.z + (nz / l) * w * sgn;
      pos.push(x, heightAt(x, z) + 0.014, z);
    }
  }
  for (let i = 0; i < N; i++) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  // cross path through the quad
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx); g.computeVertexNormals();
  const cross = new THREE.PlaneGeometry(1.9, 0.11, 24, 1); cross.rotateX(-Math.PI / 2);
  const cp = cross.attributes.position;
  for (let i = 0; i < cp.count; i++) { const x = cp.getX(i) + 0.15, z = cp.getZ(i) + 0.75; cp.setXYZ(i, x, heightAt(x, z) + 0.013, z); }
  cross.deleteAttribute('uv');
  cross.computeVertexNormals();
  return mergeGeometries([g, cross]);
}

// ---------- campus hall ----------
function buildCampus(mats) {
  const grp = new THREE.Group();
  grp.position.set(BLD.x, PLAZA_H, BLD.z);
  const add = (geo, mat, x, y, z, cast = true) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; grp.add(m); return m;
  };
  const { brick, stone, roof, dome, gold, glass } = mats;
  // plinth + steps
  add(new THREE.BoxGeometry(2.5, 0.08, 1.25), stone, 0, 0.04, 0);
  for (let i = 0; i < 3; i++) add(new THREE.BoxGeometry(0.8 - i * 0.08, 0.035, 0.12), stone, 0, 0.018 + i * 0.035, 0.68 - i * 0.07);
  // central block
  add(new THREE.BoxGeometry(1.2, 0.62, 0.86), brick, 0, 0.39, -0.05);
  add(new THREE.BoxGeometry(1.26, 0.05, 0.92), stone, 0, 0.72, -0.05); // cornice
  // portico
  const colGeo = new THREE.CylinderGeometry(0.032, 0.036, 0.56, 12);
  for (let i = 0; i < 6; i++) add(colGeo, stone, -0.4 + i * 0.16, 0.36, 0.48);
  add(new THREE.BoxGeometry(0.98, 0.05, 0.3), stone, 0, 0.665, 0.42);
  const ped = new THREE.Shape(); ped.moveTo(-0.52, 0); ped.lineTo(0.52, 0); ped.lineTo(0, 0.2); ped.closePath();
  const pedGeo = new THREE.ExtrudeGeometry(ped, { depth: 0.32, bevelEnabled: false });
  add(pedGeo, stone, 0, 0.69, 0.26);
  // drum + dome + lantern
  add(new THREE.CylinderGeometry(0.3, 0.32, 0.24, 32), stone, 0, 0.86, -0.1);
  const colDrum = new THREE.CylinderGeometry(0.012, 0.012, 0.18, 6);
  for (let i = 0; i < 16; i++) { const a = (i / 16) * Math.PI * 2; add(colDrum, stone, Math.cos(a) * 0.33, 0.86, -0.1 + Math.sin(a) * 0.33, false); }
  add(new THREE.SphereGeometry(0.31, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), dome, 0, 0.97, -0.1);
  add(new THREE.CylinderGeometry(0.05, 0.06, 0.12, 12), stone, 0, 1.33, -0.1);
  add(new THREE.ConeGeometry(0.055, 0.12, 12), gold, 0, 1.45, -0.1);
  // wings
  for (const sx of [-1, 1]) {
    add(new THREE.BoxGeometry(0.62, 0.44, 0.7), brick, sx * 0.9, 0.3, -0.12);
    add(new THREE.BoxGeometry(0.66, 0.04, 0.74), stone, sx * 0.9, 0.53, -0.12);
    const rs = new THREE.Shape(); rs.moveTo(-0.36, 0); rs.lineTo(0.36, 0); rs.lineTo(0, 0.2); rs.closePath();
    const rg = new THREE.ExtrudeGeometry(rs, { depth: 0.62, bevelEnabled: false }); rg.rotateY(Math.PI / 2);
    add(rg, roof, sx * 0.9 - 0.31, 0.55, -0.12);
    add(new THREE.BoxGeometry(0.08, 0.12, 0.08), brick, sx * 0.9 + 0.15, 0.68, -0.2); // chimney
  }
  // clock tower (right, back)
  add(new THREE.BoxGeometry(0.24, 1.05, 0.24), brick, 1.42, 0.55, -0.62);
  add(new THREE.BoxGeometry(0.28, 0.05, 0.28), stone, 1.42, 1.08, -0.62);
  add(new THREE.BoxGeometry(0.22, 0.2, 0.22), stone, 1.42, 1.2, -0.62);
  add(new THREE.ConeGeometry(0.18, 0.34, 4), roof, 1.42, 1.47, -0.62).rotation.y = Math.PI / 4;
  add(new THREE.CircleGeometry(0.06, 20), gold, 1.42, 1.2, -0.505, false);

  // lit windows (warm, emissive): front façades
  const winGeo = new THREE.PlaneGeometry(0.07, 0.12);
  const wins = [];
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < 6; i++) wins.push([-0.43 + i * 0.17, 0.22 + row * 0.24, 0.374]);
    for (const sx of [-1, 1]) for (let i = 0; i < 3; i++) wins.push([sx * 0.9 - 0.18 + i * 0.18, 0.2 + row * 0.18, 0.234]);
  }
  for (let i = 0; i < 4; i++) wins.push([1.42, 0.25 + i * 0.2, -0.499]);
  const winMesh = new THREE.InstancedMesh(winGeo, glass, wins.length);
  const m4 = new THREE.Matrix4();
  wins.forEach((w, i) => { m4.makeTranslation(w[0], w[1], w[2]); winMesh.setMatrixAt(i, m4); });
  grp.add(winMesh);
  return grp;
}

// ---------- trees ----------
function blobGeo(seed) {
  const g = new THREE.IcosahedronGeometry(1, 2);
  const p = g.attributes.position; const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = 1 + 0.22 * fbm(v.x * 1.8 + seed, v.y * 1.8, v.z * 1.8);
    v.multiplyScalar(n); v.y *= 0.92; p.setXYZ(i, v.x, v.y, v.z);
  }
  g.deleteAttribute('uv'); g.deleteAttribute('normal');
  const m = mergeVertices(g); m.computeVertexNormals(); return m;
}

function buildTrees(isMobile) {
  const rnd = mulberry32(42);
  const group = new THREE.Group();
  const leafMat = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0 });
  const trunkMat = new THREE.MeshStandardMaterial({ color: '#4a3424', roughness: 1 });
  const decid = blobGeo(3.3);
  const cone1 = new THREE.ConeGeometry(1, 1.6, 9); cone1.translate(0, 0.8, 0);
  const cone2 = new THREE.ConeGeometry(0.75, 1.3, 9); cone2.translate(0, 1.45, 0);
  const pine = mergeGeometries([cone1, cone2]);
  const trunk = new THREE.CylinderGeometry(0.06, 0.09, 1, 6); trunk.translate(0, 0.5, 0);

  const spots = [];
  const target = isMobile ? 46 : 78;
  let guard = 0;
  while (spots.length < target && guard++ < 4000) {
    const th = rnd() * Math.PI * 2;
    const rho = Math.sqrt(0.18 + rnd() * 0.82);
    const er = edgeRadius(th);
    const x = Math.cos(th) * er * rho * 0.93, z = Math.sin(th) * er * rho * 0.93;
    if (plazaMask(x, z) > 0.02 || inLawnQuad(x, z)) continue;
    // keep the walkway clear
    let near = false; const q = new THREE.Vector3();
    for (let u = 0; u <= 1; u += 0.05) { PATH.getPointAt(u, q); if (Math.hypot(q.x - x, q.z - z) < 0.32) { near = true; break; } }
    if (near) continue;
    if (spots.some((s) => Math.hypot(s.x - x, s.z - z) < 0.27)) continue;
    // fewer trees directly in front of the hall so it stays readable
    if (z > 1.0 && Math.abs(x - 0.3) < 1.3) continue;
    spots.push({ x, z, rho });
  }
  const greens = ['#2f5a24', '#3e6e2b', '#4f7d30', '#5b8a36', '#355f2a'].map(C);
  const autumn = ['#c4622d', '#d98a3a', '#a8432a'].map(C);
  const nP = spots.filter((_, i) => i % 3 === 0).length;
  const decidMesh = new THREE.InstancedMesh(decid, leafMat, spots.length - nP);
  const pineMesh = new THREE.InstancedMesh(pine, leafMat, nP);
  const trunkMesh = new THREE.InstancedMesh(trunk, trunkMat, spots.length);
  const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), s4 = new THREE.Vector3(), p4 = new THREE.Vector3(), e = new THREE.Euler();
  let di = 0, pi = 0;
  spots.forEach((s, i) => {
    const y = heightAt(s.x, s.z);
    const sc = 0.13 + rnd() * 0.09 + (s.rho > 0.85 ? 0.03 : 0);
    const isPine = i % 3 === 0;
    e.set((rnd() - 0.5) * 0.1, rnd() * 6.28, (rnd() - 0.5) * 0.1); q4.setFromEuler(e);
    trunkMesh.setMatrixAt(i, m4.compose(p4.set(s.x, y - 0.02, s.z), q4, s4.set(sc * 0.9, sc * (isPine ? 1.0 : 1.9), sc * 0.9)));
    if (isPine) {
      pineMesh.setMatrixAt(pi, m4.compose(p4.set(s.x, y + sc * 0.6, s.z), q4, s4.set(sc * 1.05, sc * 1.25, sc * 1.05)));
      pineMesh.setColorAt(pi++, C('#284d26').lerp(C('#1f3d22'), rnd()));
    } else {
      const h = sc * 2.6;
      decidMesh.setMatrixAt(di, m4.compose(p4.set(s.x, y + h, s.z), q4, s4.set(sc * 1.25, sc * 1.35, sc * 1.25)));
      const c = rnd() < 0.16 ? autumn[Math.floor(rnd() * autumn.length)] : greens[Math.floor(rnd() * greens.length)];
      decidMesh.setColorAt(di++, c.clone().offsetHSL(0, 0, (rnd() - 0.5) * 0.06));
    }
  });
  for (const m of [decidMesh, pineMesh, trunkMesh]) { m.castShadow = true; m.receiveShadow = true; group.add(m); }
  return group;
}

// ---------- lamps along the walkway ----------
function buildLamps(glowTex) {
  const group = new THREE.Group();
  const post = new THREE.CylinderGeometry(0.012, 0.014, 0.05, 6); post.translate(0, 0.025, 0);
  const postMat = new THREE.MeshStandardMaterial({ color: '#1d1d1d', roughness: 0.6, metalness: 0.4 });
  const pts = []; const p = new THREE.Vector3(), t = new THREE.Vector3();
  for (let u = 0.04; u < 0.95; u += 0.11) {
    PATH.getPointAt(u, p); PATH.getTangentAt(u, t);
    const nx = -t.z, nz = t.x, l = Math.hypot(nx, nz) || 1;
    for (const s of [-1, 1]) { const x = p.x + (nx / l) * 0.17 * s, z = p.z + (nz / l) * 0.17 * s; pts.push(new THREE.Vector3(x, heightAt(x, z), z)); }
  }
  const g = new THREE.BufferGeometry().setFromPoints(pts.map((v) => v.clone().setY(v.y + 0.055)));
  const mat = new THREE.PointsMaterial({ map: glowTex, size: 0.22, color: '#ffc27a', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  group.add(new THREE.Points(g, mat));
  return group;
}

// ---------- drifting rock fragments ----------
function buildFragments() {
  const rnd = mulberry32(7);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
  const list = [];
  const spots = [[5.9, -0.4, -1.6, 0.32], [6.6, -3.2, 0.9, 0.22], [1.6, -4.6, 2.4, 0.2], [7.4, 1.9, -4.5, 0.18]];
  for (const [x, y, z, s] of spots) {
    const g = new THREE.IcosahedronGeometry(1, 3);
    const p = g.attributes.position; const v = new THREE.Vector3(); const col = [];
    const seed = rnd() * 10;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const n = 1 + 0.35 * fbm(v.x * 1.5 + seed, v.y * 1.5, v.z * 1.5) + 0.15 * (ridged(v.x * 2 + seed, v.y * 2, v.z * 2) - 0.4);
      v.multiplyScalar(n); if (v.y > 0.25) v.y = 0.25 + (v.y - 0.25) * 0.25; v.y *= 1.25;
      p.setXYZ(i, v.x, v.y, v.z);
      const top = v.y > 0.2;
      const c = top ? C('#4b7a2c') : C('#6e5c4b').lerp(C('#2c2622'), Math.max(0, -v.y * 0.6));
      col.push(c.r, c.g, c.b);
    }
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.deleteAttribute('uv'); g.deleteAttribute('normal');
    const mg = mergeVertices(g); mg.computeVertexNormals();
    const mesh = new THREE.Mesh(mg, mat);
    mesh.position.set(x, y, z); mesh.scale.setScalar(s);
    mesh.rotation.y = rnd() * 6;
    mesh.userData = { baseY: y, phase: rnd() * 6.28, speed: 0.4 + rnd() * 0.3 };
    list.push(mesh);
  }
  return list;
}

export function buildIsland({ isMobile, glowTex }) {
  const root = new THREE.Group();

  const rockGeo = buildRock();
  const rock = new THREE.Mesh(rockGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 }));
  rock.receiveShadow = true;
  root.add(rock);

  const lawn = new THREE.Mesh(buildLawn(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 }));
  lawn.receiveShadow = true;
  root.add(lawn);

  const path = new THREE.Mesh(buildPath(), new THREE.MeshStandardMaterial({ color: '#e6dccb', roughness: 0.75 }));
  path.receiveShadow = true;
  root.add(path);

  const mats = {
    brick: new THREE.MeshStandardMaterial({ color: '#8a3326', roughness: 0.85 }),
    stone: new THREE.MeshStandardMaterial({ color: '#efe6d6', roughness: 0.6 }),
    roof: new THREE.MeshStandardMaterial({ color: '#3d4448', roughness: 0.7 }),
    dome: new THREE.MeshStandardMaterial({ color: '#7fae9f', roughness: 0.38, metalness: 0.35 }),
    gold: new THREE.MeshStandardMaterial({ color: '#d7a54a', roughness: 0.3, metalness: 0.9, emissive: '#5a3a0a', emissiveIntensity: 0.4 }),
    glass: new THREE.MeshStandardMaterial({ color: '#ffd59a', emissive: '#ffb562', emissiveIntensity: 1.35, roughness: 0.4 }),
  };
  root.add(buildCampus(mats));
  root.add(buildTrees(isMobile));
  root.add(buildLamps(glowTex));

  const fragments = buildFragments();
  return { root, fragments, windowMat: mats.glass };
}

export const CAMPUS_POINT = new THREE.Vector3(BLD.x, PLAZA_H + 0.02, 0.9);
