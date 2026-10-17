/* Hero "depth photograph": the Lower Manhattan panorama rendered in WebGL with a depth map
   (sky far, skyline mid, river near) so the cursor moves a real parallax between the planes,
   scrolling dollies the camera into the skyline, the river shimmers and a warm light follows the pointer.
   Falls back to the plain <img> when WebGL or the cross-origin image is unavailable. */
(function () {
  'use strict';
  var canvas = document.querySelector('[data-hero-gl]');
  var photo = document.querySelector('[data-hero-img]');
  if (!canvas || !photo) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false, alpha: false, powerPreference: 'high-performance' });
  if (!gl) return;

  var VS = 'attribute vec2 p; varying vec2 v; void main(){ v = p * .5 + .5; gl_Position = vec4(p, 0., 1.); }';
  var FS = [
    'precision mediump float;',
    'varying vec2 v;',
    'uniform sampler2D uImg, uDepth;',
    'uniform vec2 uCover, uOff, uMouse, uLight;',
    'uniform float uScroll, uTime, uIntro, uAspect;',
    'float depthAt(vec2 uv){ return texture2D(uDepth, uv).r; }',
    'void main(){',
    '  vec2 uv = vec2(v.x, 1. - v.y);',
    '  uv = (uv - .5) * uCover + .5 + uOff;',            // cover-fit + focal offset
    '  vec2 focus = vec2(.5, .52);',
    '  float d0 = depthAt(uv);',
    // depth-aware dolly: the nearer the plane, the faster it grows
    '  float z = 1. + uScroll * (.18 + .55 * d0) + (1. - uIntro) * .12;',
    '  uv = (uv - focus) / z + focus;',
    '  float d = depthAt(uv);',
    // parallax: planes slide against each other around the skyline depth
    '  uv += uMouse * (d - .38) * vec2(.028, .018);',
    // river shimmer
    '  float w = smoothstep(.58, .68, d);',
    '  uv.x += w * sin(uv.y * 380. + uTime * 1.6) * .0009 * (1. - uScroll);',
    '  uv.y += w * sin(uv.x * 90. + uTime * 1.1) * .0006;',
    '  vec3 c = texture2D(uImg, clamp(uv, .001, .999)).rgb;',
    // grade: deepen the blue hour, lift warm windows
    '  float l = dot(c, vec3(.299,.587,.114));',
    '  c = mix(c * vec3(.92,.97,1.06), c * vec3(1.06,1.,.9), smoothstep(.35,.8,l));',
    '  c = (c - .5) * 1.06 + .5;',
    // warm light that follows the pointer, only on the buildings
    '  vec2 q = (v - uLight) * vec2(uAspect, 1.);',
    '  float glow = exp(-dot(q, q) * 9.) * smoothstep(.2, .34, d) * (1. - smoothstep(.52, .6, d));',
    '  c += vec3(1., .62, .32) * glow * .22 * l;',
    // intro: from desaturated to colour; vignette
    '  c = mix(vec3(l) * .8, c, uIntro);',
    '  vec2 vv = v - .5; c *= 1. - dot(vv, vv) * .55;',
    '  gl_FragColor = vec4(c, 1.);',
    '}'].join('\n');

  function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; }
  var prog;
  try { prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog); } catch (e) { return; }
  gl.useProgram(prog);
  var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  var U = {}; ['uImg', 'uDepth', 'uCover', 'uOff', 'uMouse', 'uLight', 'uScroll', 'uTime', 'uIntro', 'uAspect'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });

  function tex(unit, src) {
    var t = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, src);
    return t;
  }
  function load(src, cross) {
    return new Promise(function (res, rej) { var i = new Image(); if (cross) i.crossOrigin = 'anonymous'; i.decoding = 'async'; i.onload = function () { res(i); }; i.onerror = rej; i.src = src; });
  }

  var state = { mx: 0, my: 0, tx: 0, ty: 0, lx: .62, ly: .5, tlx: .62, tly: .5, scroll: 0, intro: reduce ? 1 : 0, visible: true, iw: 2.5, ih: 1, ready: false };
  var stage = document.querySelector('[data-hero-stage]');

  function size() {
    var dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    var w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    var ca = w / h, ia = state.iw / state.ih, sx = 1, sy = 1;
    // cover with a little bleed for the parallax
    if (ca > ia) { sy = ia / ca; } else { sx = ca / ia; }
    sx /= 1.04; sy /= 1.04;
    gl.uniform2f(U.uCover, sx, sy);
    // focal point: One World Trade Center sits at ~50% of the panorama; on narrow screens keep it centred
    gl.uniform2f(U.uOff, 0, ca < 1 ? .02 : 0);
    gl.uniform1f(U.uAspect, ca);
  }

  var t0 = performance.now(), raf = 0;
  function frame(now) {
    raf = 0;
    if (!state.visible || document.hidden) return;
    var t = (now - t0) / 1000;
    state.mx += (state.tx - state.mx) * .06; state.my += (state.ty - state.my) * .06;
    state.lx += (state.tlx - state.lx) * .08; state.ly += (state.tly - state.ly) * .08;
    if (!reduce && state.intro < 1) state.intro = Math.min(1, state.intro + 1 / 110);
    // gentle idle drift so the depth reads even without a mouse (touch devices)
    var drift = reduce ? 0 : Math.sin(t * .25) * .35;
    gl.uniform2f(U.uMouse, state.mx + drift * (1 - Math.abs(state.tx)), state.my);
    gl.uniform2f(U.uLight, state.lx, 1 - state.ly);
    gl.uniform1f(U.uScroll, state.scroll);
    gl.uniform1f(U.uTime, reduce ? 0 : t);
    var e = 1 - Math.pow(1 - state.intro, 3);
    gl.uniform1f(U.uIntro, e);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (!reduce) raf = requestAnimationFrame(frame);
  }
  function kick() { if (!raf) raf = requestAnimationFrame(frame); }

  var src = photo.currentSrc || photo.src;
  Promise.all([load(src, true), load('assets/img/hero-depth.png', false)]).then(function (imgs) {
    state.iw = imgs[0].naturalWidth; state.ih = imgs[0].naturalHeight;
    gl.uniform1i(U.uImg, 0); gl.uniform1i(U.uDepth, 1);
    tex(0, imgs[0]); tex(1, imgs[1]);
    size(); state.ready = true;
    document.documentElement.classList.add('hero-gl');
    kick();
    window.dispatchEvent(new Event('hero:ready'));
  }).catch(function () { /* keep the plain photograph */ });

  window.addEventListener('resize', function () { if (state.ready) { size(); kick(); } });
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height;
      state.tx = (nx - .5) * 2; state.ty = (ny - .5) * 2; state.tlx = nx; state.tly = ny; kick();
    });
    stage.addEventListener('pointerleave', function () { state.tx = 0; state.ty = 0; });
  }
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { state.visible = es[0].isIntersecting; if (state.visible) kick(); }).observe(canvas);
  document.addEventListener('visibilitychange', kick);
  // scroll progress is written by main.js
  window.TCHero = { setScroll: function (p) { state.scroll = p; if (reduce) kick(); else kick(); } };
})();
