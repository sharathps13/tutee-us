import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { common } from './glsl.js';

// Harbour: planar mirror reflection, distorted by animated wind ripples and smeared vertically
// so city lights turn into long shimmering streaks, mixed with a Fresnel-weighted dark water body.
export function createWater(shared, opts) {
  const geo = new THREE.PlaneGeometry(opts.width, opts.depth);
  const shader = {
    name: 'HarbourShader',
    uniforms: Object.assign({
      color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null },
      uTime: shared.uTime, uStreak: { value: opts.mobile ? 0.6 : 1.0 }
    }, shared.atmos),
    vertexShader: /* glsl */`
      uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vWorld;
      void main(){ vUv = textureMatrix * vec4(position, 1.); vec4 wp = modelMatrix * vec4(position,1.); vWorld = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`
      ${common}
      uniform sampler2D tDiffuse; uniform float uTime, uStreak; varying vec4 vUv; varying vec3 vWorld;
      float waves(vec2 p){
        float t = uTime;
        float h = fbm(p * vec2(.045, .11) + vec2(t * .05, -t * .16)) * .6;
        h += vnoise(p * vec2(.16, .42) + vec2(-t * .25, t * .5)) * .3;
        h += vnoise(p * vec2(.5, 1.1) + vec2(t * .6, t * .9)) * .1;
        return h;
      }
      void main(){
        vec3 toCam = cameraPosition - vWorld; float dist = length(toCam); vec3 V = toCam / dist;
        float e = .6;
        float h0 = waves(vWorld.xz), hx = waves(vWorld.xz + vec2(e, 0.)), hz = waves(vWorld.xz + vec2(0., e));
        vec3 n = normalize(vec3((h0 - hx) * 2.2, 1., (h0 - hz) * 2.2));
        float fade = 1. / (1. + dist * .0016);
        vec2 suv = vUv.xy / vUv.w;
        suv += vec2(n.x * .03, n.z * .06) * fade;
        // vertical smear → elongated light streaks
        vec3 refl = vec3(0.);
        float span = .0065 * uStreak * (.4 + fade);
        for (int i = 0; i < 7; i++) {
          float o = (float(i) - 3.) * span;
          refl += texture2D(tDiffuse, suv + vec2(0., o)).rgb * (1. - abs(float(i) - 3.) * .18);
        }
        refl /= 4.84;
        float F = .03 + .97 * pow(1. - max(dot(n, V), 0.), 5.);
        F = clamp(F * 1.2 + .1, 0., 1.);
        vec3 body = vec3(.004, .009, .016) + vec3(.6,.32,.15) * .012;
        vec3 col = mix(body, refl, F);
        // sparkle from the moon / sky on wave crests
        vec3 Rv = reflect(-V, n);
        col += skyColor(vec3(Rv.x, max(Rv.y, .02), Rv.z)) * .03;
        col = applyFog(col, vWorld, cameraPosition);
        gl_FragColor = vec4(col, 1.);
      }`
  };
  const water = new Reflector(geo, {
    textureWidth: opts.rtW, textureHeight: opts.rtH, clipBias: 0.003, shader, color: 0xffffff
  });
  // Reflector clones uniforms; re-link the shared (animated) ones
  const u = water.material.uniforms;
  u.uTime = shared.uTime;
  for (const k in shared.atmos) u[k] = shared.atmos[k];
  water.rotation.x = -Math.PI / 2;
  water.position.set(opts.x || 0, 0, opts.z);
  return water;
}
