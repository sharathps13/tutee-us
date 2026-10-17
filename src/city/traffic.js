import * as THREE from 'three';
import { common } from './glsl.js';

// GPU traffic: every car is an instance that slides along a lane, purely in the vertex shader.
// Lanes: { a: Vector3 start, b: Vector3 end, n: cars, speed, head: true (white, toward a) / false (red) }
export function createTraffic(lanes, shared, opts = {}) {
  const cars = [];
  lanes.forEach(L => {
    const len = L.a.distanceTo(L.b);
    for (let i = 0; i < L.n; i++) cars.push({ L, len, off: Math.random() * len, sp: L.speed * (0.8 + Math.random() * 0.4) });
  });
  const N = cars.length;
  const geo = new THREE.PlaneGeometry(1, 1);
  geo.rotateX(-Math.PI / 2);
  const ig = new THREE.InstancedBufferGeometry();
  ig.index = geo.index; ig.attributes.position = geo.attributes.position; ig.attributes.uv = geo.attributes.uv;
  const aA = new Float32Array(N * 3), aD = new Float32Array(N * 3), aM = new Float32Array(N * 4);
  cars.forEach((c, k) => {
    const d = c.L.b.clone().sub(c.L.a).normalize();
    aA.set([c.L.a.x, c.L.a.y, c.L.a.z], k * 3); aD.set([d.x, d.y, d.z], k * 3);
    aM.set([c.len, c.off, c.sp, c.L.head ? 1 : 0], k * 4);
  });
  ig.setAttribute('aStart', new THREE.InstancedBufferAttribute(aA, 3));
  ig.setAttribute('aDir', new THREE.InstancedBufferAttribute(aD, 3));
  ig.setAttribute('aMeta', new THREE.InstancedBufferAttribute(aM, 4));
  ig.instanceCount = N;
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: Object.assign({ uTime: shared.uTime, uTrail: { value: opts.trail || 16 }, uGain: { value: opts.gain || 1 } }, shared.atmos),
    vertexShader: /* glsl */`
      attribute vec3 aStart, aDir; attribute vec4 aMeta; uniform float uTime, uTrail;
      varying vec2 vUv; varying float vHead; varying vec3 vWorld;
      void main(){
        float s = mod(aMeta.y + aMeta.z * uTime, aMeta.x);
        vec3 p = aStart + aDir * s;
        vec3 side = normalize(vec3(-aDir.z, 0., aDir.x));
        // long-exposure streak: the quad is stretched behind the car
        vec3 wp = p + side * position.x * 2.2 - aDir * (position.z + .5) * uTrail;
        wp.y += .9;
        vUv = uv; vHead = aMeta.w; vWorld = wp;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.);
      }`,
    fragmentShader: /* glsl */`
      ${common}
      uniform float uGain; varying vec2 vUv; varying float vHead; varying vec3 vWorld;
      void main(){
        float across = 1. - abs(vUv.x - .5) * 2.;
        float pair = smoothstep(.0, .35, across) * (.55 + .45 * smoothstep(.15, .0, abs(abs(vUv.x - .5) - .3)));
        float along = pow(vUv.y, 2.2);                    // bright at the car, fading along the trail
        vec3 c = vHead > .5 ? vec3(1., .9, .75) * 2.6 : vec3(1., .07, .03) * 2.2;
        float a = pair * along;
        vec3 col = c * a * uGain;
        // traffic fades into the haze with distance
        float dist = length(vWorld - cameraPosition);
        col *= exp(-dist * uFogDensity * .7);
        gl_FragColor = vec4(col, a);
      }`
  });
  const mesh = new THREE.Mesh(ig, mat);
  mesh.frustumCulled = false;
  return mesh;
}
