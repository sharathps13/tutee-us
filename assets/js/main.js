/* Tutee Connect USA — "Harbor to Horizon": interactions & scroll storytelling.
   Lenis drives smooth scrolling, GSAP ScrollTrigger scrubs each section's own motion. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var mqMobile = window.matchMedia('(max-width: 760px)');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  var motion = hasGsap && !reduce;
  if (!motion) root.classList.add('motion-off');

  /* ---------------- smooth scroll + anchors ---------------- */
  var lenis = null;
  if (motion && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, prevent: function (n) { return !!(n.closest && n.closest('.swipe, .chat, .sheet, .apply, .menu')); } });
    lenis.on('scroll', ScrollTrigger.update);
    window.TCLenis = lenis;
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    new MutationObserver(function () { document.body.classList.contains('lock') ? lenis.stop() : lenis.start(); }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
  function scrollToEl(el) {
    if (!el) return;
    // lazy images can load during the glide and shift the target, so settle onto it once more at the end
    if (lenis) lenis.scrollTo(el, { duration: 1.5, force: true, onComplete: function () { if (Math.abs(el.getBoundingClientRect().top) > 4) lenis.scrollTo(el, { duration: .6, force: true }); } });
    else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }
  /* land on a section instantly (arriving from another page with #id): pins add height
     after load, so re-measure a few times until the layout has settled */
  function jumpTo(id) {
    var el = document.getElementById(id); if (!el) return;
    var go = function () {
      if (hasGsap) ScrollTrigger.refresh();
      if (lenis && lenis.resize) lenis.resize();
      var y = el.getBoundingClientRect().top + window.scrollY;
      if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); else window.scrollTo(0, y);
    };
    go(); [120, 450, 1000].forEach(function (t) { setTimeout(go, t); });
  }
  window.TCJump = jumpTo;
  if (location.hash.length > 1 && location.hash.charAt(1) !== '/') {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    var startId = location.hash.slice(1);
    if (document.readyState === 'complete') jumpTo(startId); else window.addEventListener('load', function () { jumpTo(startId); });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || document.body.classList.contains('page-dir')) return;
    var id = a.getAttribute('href').slice(1);
    if (!id || id.charAt(0) === '/') return;
    var el = document.getElementById(id); if (!el) return;
    e.preventDefault(); scrollToEl(el);
    try { history.replaceState(null, '', '#' + id); } catch (e) {}
  });

  /* ---------------- header, menu, route rail ---------------- */
  var nav = $('[data-nav]'), lastY = 0;
  var lightSections = $$('.finder, .fund__cols, .earn, .visa, .stories, .faq');
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    nav.classList.toggle('is-hidden', y > lastY && y > 600 && !document.body.classList.contains('lock'));
    lastY = y;
    root.classList.toggle('at-top', y < innerHeight * .5);
    var mid = innerHeight / 2, light = false;
    lightSections.forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top < mid && r.bottom > mid) light = true; });
    root.classList.toggle('on-light', light);
    var hl = false; /* is the header itself over a cream section? then it switches to dark text */
    lightSections.forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top < 64 && r.bottom > 30) hl = true; });
    nav.classList.toggle('is-light', hl);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var menu = $('[data-menu]'), burger = $('[data-menu-open]');
  function openMenu() { menu.hidden = false; requestAnimationFrame(function () { menu.classList.add('is-open'); }); burger.setAttribute('aria-expanded', 'true'); document.body.classList.add('lock'); $('[data-menu-close]').focus(); }
  function closeMenu() { menu.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('lock'); setTimeout(function () { menu.hidden = true; }, 320); }
  window.TCCloseMenu = closeMenu;
  if (menu && burger) {
    burger.addEventListener('click', openMenu);
    $('[data-menu-close]').addEventListener('click', closeMenu);
    $$('[data-menu-link]', menu).forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) closeMenu(); });
  }
  /* ---------------- header links: a frosted glass lens glides to the hovered link (rests on the current section); the label rolls up ---------------- */
  (function navLens() {
    var box = $('.nav__links'); if (!box) return;
    var links = $$('a', box), lens = document.createElement('span'), hov = null;
    lens.className = 'nav__lens'; lens.setAttribute('aria-hidden', 'true'); box.insertBefore(lens, box.firstChild);
    links.forEach(function (a) {
      var t = a.textContent.trim(); a.textContent = '';
      var w = document.createElement('span'); w.className = 'nav__roll'; w.setAttribute('data-t', t);
      var i = document.createElement('span'); i.textContent = t; w.appendChild(i); a.appendChild(w);
      a.addEventListener('mouseenter', function () { hov = a; place(); });
      a.addEventListener('focus', function () { hov = a; place(); });
      a.addEventListener('blur', function () { hov = null; place(); });
    });
    box.addEventListener('mouseleave', function () { hov = null; place(); });
    function place() {
      var t = hov || $('a.is-active', box);
      links.forEach(function (a) { a.classList.toggle('is-lens', a === t); });
      if (!t) { lens.classList.remove('is-on'); return; }
      var first = !lens.classList.contains('is-on');
      if (first) lens.style.transition = 'none';
      lens.style.width = t.offsetWidth + 'px'; lens.style.transform = 'translateX(' + t.offsetLeft + 'px)';
      if (first) { void lens.offsetWidth; lens.style.transition = ''; }
      lens.classList.add('is-on');
    }
    if (window.MutationObserver) new MutationObserver(function (m) { if (!hov && m.some(function (r) { return r.target !== lens && r.target.tagName === 'A'; })) place(); }).observe(box, { subtree: true, attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', place);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
  })();
  var spyLinks = $$('[data-spy]'), railLinks = $$('[data-rail-link]');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var key = en.target.getAttribute('data-section');
        railLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('data-rail-link') === key); });
        spyLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('data-spy') === key); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('[data-section]').forEach(function (s) { spy.observe(s); });
  }

  /* ---------------- scroll pathway: a route from the hero's scroll cue, weaving down the page edges to the footer ---------------- */
  (function pathway() {
    var sp = $('[data-sp]'); if (!sp) return;
    var svg = $('[data-sp-svg]', sp), base = $('[data-sp-base]', sp), ink = $('[data-sp-ink]', sp), tip = $('[data-sp-tip]', sp), lbl = $('[data-sp-label]', sp), end = $('[data-sp-end]', sp), jet = $('[data-sp-jet]', sp);
    var NAMES = { home: 'Arrival', why: 'Why the USA', destinations: 'Destinations', finder: 'Universities', services: 'Services', funding: 'Funding', visa: 'F-1 visa', 'stem-opt': 'STEM OPT', testimonials: 'Stories', faq: 'Ask us', contact: 'Your next step' };
    var secs = $$('main > section[id]'), foot = $('.foot'), L = 0, samples = [], marks = [], last = -1, raf = 0, sy0 = 120;
    function docY(el) { return el.getBoundingClientRect().top + scrollY; }
    function build() {
      var W = document.documentElement.clientWidth, H = docY(foot) + 2, g = W < 761 ? 10 : Math.max(22, Math.min(46, (W - 1360) / 2 + 18));
      sp.style.height = H + 'px'; svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      var x0 = W - g, y0 = W < 761 ? 96 : 120, /* own route from the hero's top-right, separate from the scroll cue */ side = 1, d = 'M' + x0 + ' ' + y0, px = x0, py = y0;
      sy0 = y0; marks = [];
      // from the cue, curve out to the right edge, then run down each section, switching sides at every section break
      secs.forEach(function (sec, i) {
        var top = docY(sec), bot = top + sec.offsetHeight, x = side > 0 ? W - g : g;
        if (i === 0) { var ty = y0 + innerHeight * .35; d += ' L' + x + ' ' + ty; px = x; py = ty; }
        else { var cy = Math.max(py + 40, top); d += ' C' + px + ' ' + (cy + 70) + ' ' + x + ' ' + (cy + 10) + ' ' + x + ' ' + (cy + 150); px = x; py = cy + 150; }
        var by = Math.max(py + 10, bot - 110); d += ' L' + px + ' ' + by; py = by;
        marks.push({ y: top, name: NAMES[sec.id] || '' });
        side = -side;
      });
      var ex = W / 2, ey = H - 34; d += ' C' + px + ' ' + (py + 90) + ' ' + ex + ' ' + (ey - 80) + ' ' + ex + ' ' + ey;
      base.setAttribute('d', d); ink.setAttribute('d', d);
      L = ink.getTotalLength(); ink.style.strokeDasharray = L + ' ' + L;
      samples = []; for (var k = 0; k <= 600; k++) { var l = L * k / 600, p = ink.getPointAtLength(l); samples.push([l, p.y, p.x]); }
      end.style.left = ex + 'px'; end.style.top = ey + 'px';
      last = -1; tick();
    }
    function lenAt(y) { // first sample at or below y (path only ever moves downward)
      var lo = 0, hi = samples.length - 1; if (y <= samples[0][1]) return 0; if (y >= samples[hi][1]) return L;
      while (hi - lo > 1) { var m = (lo + hi) >> 1; if (samples[m][1] < y) lo = m; else hi = m; }
      var a = samples[lo], b = samples[hi], f = (y - a[1]) / ((b[1] - a[1]) || 1); return a[0] + (b[0] - a[0]) * f;
    }
    function tick() {
      raf = 0; if (!samples.length) return;
      var ramp = Math.min(1, Math.max(0, scrollY) / (innerHeight * .6)), y = sy0 + (scrollY + innerHeight * .62 - sy0) * ramp, l = lenAt(y); /* plane sits at the very start of the route at the top, then eases into scroll pace */ if (Math.abs(l - last) < .5) return; last = l;
      ink.style.strokeDashoffset = Math.max(0, L - l);
      var p = ink.getPointAtLength(l), q = ink.getPointAtLength(Math.min(L, l + 6)), r0 = ink.getPointAtLength(Math.max(0, l - 6));
      tip.style.transform = 'translate(' + p.x + 'px,' + p.y + 'px)';
      jet.style.transform = 'rotate(' + (Math.atan2(q.y - r0.y, q.x - r0.x) * 180 / Math.PI + 90).toFixed(1) + 'deg)'; // nose follows the route
      tip.classList.toggle('is-r', p.x > innerWidth / 2); tip.classList.toggle('is-l', p.x <= innerWidth / 2);
      var nm = ''; marks.forEach(function (m) { if (y >= m.y) nm = m.name; }); if (lbl.textContent !== nm) lbl.textContent = nm;
      sp.classList.toggle('is-done', l >= L - 2); tip.classList.remove('is-idle');
    }
    window.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
    var rt = 0; function rebuild() { clearTimeout(rt); rt = setTimeout(build, 120); }
    window.addEventListener('resize', rebuild); window.addEventListener('load', rebuild);
    if (window.ScrollTrigger) ScrollTrigger.addEventListener('refresh', rebuild);
    if ('ResizeObserver' in window) new ResizeObserver(rebuild).observe(document.querySelector('main'));
    build();
  })();

  /* ---------------- small helpers ---------------- */
  if (finePointer && !reduce) $$('[data-magnetic]').forEach(function (el) {
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); el.style.transform = 'translate(' + ((e.clientX - r.left) / r.width - .5) * 10 + 'px,' + ((e.clientY - r.top) / r.height - .5) * 8 + 'px)'; });
    el.addEventListener('pointerleave', function () { el.style.transform = ''; });
  });
  function countUp(el) {
    var to = parseFloat(el.getAttribute('data-count')), suffix = el.getAttribute('data-suffix') || '';
    if (!motion) { el.textContent = to + suffix; return; }
    var o = { v: 0 }; gsap.to(o, { v: to, duration: 1.8, ease: 'power3.out', onUpdate: function () { el.textContent = Math.round(o.v) + suffix; } });
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } }); }, { threshold: .6 });
    $$('[data-count]').forEach(function (el) { cio.observe(el); });
  }
  function splitWords(el) {
    if (el.dataset.splitDone) return; el.dataset.splitDone = '1';
    var label = el.textContent.replace(/\s+/g, ' ').trim();
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var f = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { f.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span'); w.className = 'w'; w.setAttribute('aria-hidden', 'true');
            var i = document.createElement('span'); i.className = 'wi'; i.textContent = part; w.appendChild(i); f.appendChild(w);
          });
          n.parentNode.replaceChild(f, n);
        } else if (n.nodeType === 1) walk(n);
      });
    })(el);
    el.setAttribute('aria-label', label);
  }

  /* ---------------- lead form ---------------- */
  var leadForm = $('[data-lead-form]'), leadApi = null;
  if (leadForm && window.TCForms) leadApi = window.TCForms.mount(leadForm, { onSuccess: function () { if (window.TCNote) window.TCNote.received(); } });

  /* ---------------- contact: the free-counselling note turns over to reveal the form ---------------- */
  window.TCNote = (function () {
    var note = $('[data-note]'); if (!note) return null;
    var front = $('[data-note-front]', note), back = $('[data-lead-form]', note), tilt = $('[data-note-tilt]', note);
    var openBtn = $('[data-note-open]', note), closeBtn = $('[data-note-close]', note), openLabel = $('[data-note-open-label]', note);
    var flipped = false, rm = matchMedia('(prefers-reduced-motion: reduce)').matches, stampT = 0, settleT = 0;
    // a fresh serial for every visitor: TC 26 ###### US
    var serial = 'TC 26 ' + String(Math.floor(100000 + Math.random() * 899999)) + ' US';
    $$('[data-note-serial]', note).forEach(function (n) { n.textContent = serial; });
    function setInert(el, on) { if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); } else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); } }
    function set(on, focus) {
      if (on === flipped) { if (on && focus) focusFirst(); return; }
      flipped = on;
      clearTimeout(settleT);
      if (!rm) { note.classList.remove('is-lifting'); void note.offsetWidth; note.classList.add('is-lifting'); }
      if (window.gsap && tilt) gsap.to(tilt, { rotationX: 0, rotationY: 0, duration: .4, ease: 'power2.out', overwrite: true });
      if (on) {
        note.classList.add('is-flipped');
        // once turned, drop the 3D transforms (same picture, flat layer) so every field and button is reliably clickable
        settleT = setTimeout(function () { note.classList.add('is-settled'); }, rm ? 0 : 1020);
      } else {
        note.classList.add('no-tr'); note.classList.remove('is-settled'); void note.offsetWidth; note.classList.remove('no-tr');
        note.classList.remove('is-flipped');
      }
      openBtn.setAttribute('aria-expanded', String(on));
      setInert(front, on); setInert(back, !on);
      if (focus) setTimeout(function () { if (on) focusFirst(); else try { openBtn.focus({ preventScroll: true }); } catch (e) {} }, rm ? 30 : 650);
    }
    function focusFirst() { var f = $('input[name="name"]', back); if (f) try { f.focus({ preventScroll: true }); } catch (e) {} }
    setInert(back, true);
    // the name typed on the back is printed on the front of the card
    var nameOut = $('[data-note-name]', note), nameIn = $('input[name="name"]', back), nameDef = nameOut ? nameOut.textContent : '';
    if (nameOut && nameIn) nameIn.addEventListener('input', function () { var v = nameIn.value.trim(); nameOut.textContent = v ? v.slice(0, 26) : nameDef; nameOut.classList.toggle('is-set', !!v); });
    front.addEventListener('click', function () { set(true, true); });
    closeBtn.addEventListener('click', function () { set(false, true); });
    back.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false, true); });
    // links to the enquiry form (CTAs, shortlist toast…) arrive with the note already turned over
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href="#contact"]'); if (!a || note.contains(a)) return;
      setTimeout(function () { set(true, false); }, 900);
    }, true);
    // tilt + light sheen follow the pointer
    if (finePointer && !rm && window.gsap) {
      var rx = gsap.quickTo(tilt, 'rotationX', { duration: .8, ease: 'power3.out' }), ry = gsap.quickTo(tilt, 'rotationY', { duration: .8, ease: 'power3.out' });
      note.addEventListener('pointermove', function (e) {
        var r = note.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height;
        if (flipped) return; // no tilt while filling in the form
        ry((nx - .5) * 12); rx(-(ny - .5) * 9);
        note.style.setProperty('--mx', (nx * 100).toFixed(1) + '%');
      });
      note.addEventListener('pointerleave', function () { rx(0); ry(0); });
    }
    return {
      open: function (focus) { set(true, focus); },
      close: function () { set(false, false); },
      received: function () {
        clearTimeout(stampT);
        setTimeout(function () {
          note.classList.remove('is-received'); void note.offsetWidth; note.classList.add('is-received');
          openLabel.textContent = 'Send another enquiry';
          set(false, false);
          stampT = setTimeout(function () { note.classList.remove('is-received'); openLabel.textContent = 'Claim free counselling'; }, 9000);
        }, 1800);
      }
    };
  })();

  /* ---------------- destinations: fly across the map, one postcard per city ---------------- */
  var dest = (function () {
    var root = $('[data-dx]'); if (!root) return null;
    var svg = $('[data-dx-map]', root), segs = $$('[data-dx-seg]', root), pts = $$('[data-dx-pt]', root), plane = $('[data-dx-plane]', root);
    var cards = $$('.pc', root), tabs = $$('[data-dx-go]', root), stack = $('[data-dx-stack]', root);
    var cityEl = $('[data-dx-city]', root), descEl = $('[data-dx-desc]', root), idxEl = $('[data-dx-i]', root), hint = $('[data-dx-hint]', root);
    var n = cards.length, lens = segs.map(function (p) { return p.getTotalLength(); }), W = 975, active = -1, lastP = -1, st = null;
    segs.forEach(function (p, i) { p.style.strokeDasharray = (lens[i] + 1) + ' ' + (lens[i] + 1); p.style.strokeDashoffset = lens[i] + 1; });
    var scalers = $$('[data-dx-s]', root);
    function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function camera(p) {
      p = Math.max(0, Math.min(1, p)); if (Math.abs(p - lastP) < .0002) return; lastP = p;
      var f = p * (n - 1), i = Math.min(n - 2, Math.floor(f)), t = f - i;
      var tt = ease(Math.max(0, Math.min(1, (t - .2) / .6)));
      segs.forEach(function (s, k) { var d = k < i ? 1 : k === i ? tt : 0; s.style.strokeDashoffset = ((lens[k] + 1) * (1 - d)).toFixed(2); });
      var at = segs[i].getPointAtLength(lens[i] * tt), ah = segs[i].getPointAtLength(Math.min(lens[i], lens[i] * tt + 2)), bh = segs[i].getPointAtLength(Math.max(0, lens[i] * tt - 2));
      var small = innerWidth <= 760, vwPx = svg.clientWidth || innerWidth, vhPx = svg.clientHeight || innerHeight;
      var Z = small ? 2.1 : 2.5, zoom = Z - (Z - 1.15) * Math.sin(Math.PI * tt);
      var vw = W / zoom, vh = vw * vhPx / vwPx;
      var fx = small ? .5 : .47, fy = small ? .27 : .5;
      svg.setAttribute('viewBox', (at.x - vw * fx).toFixed(1) + ' ' + (at.y - vh * fy).toFixed(1) + ' ' + vw.toFixed(1) + ' ' + vh.toFixed(1));
      var k = vw / vwPx; // map units per screen pixel: keeps pins, labels and the plane a constant size
      scalers.forEach(function (g) { g.setAttribute('transform', 'scale(' + k.toFixed(4) + ')'); });
      svg.style.setProperty('--dxk', k.toFixed(4));
      var ang = Math.atan2(ah.y - bh.y, ah.x - bh.x) * 180 / Math.PI;
      plane.setAttribute('transform', 'translate(' + at.x.toFixed(1) + ' ' + at.y.toFixed(1) + ') rotate(' + (tt > 0 && tt < 1 ? ang : (i === n - 2 && tt >= 1 ? ang : 180)).toFixed(1) + ')');
      plane.style.opacity = tt > .02 && tt < .98 ? 1 : 0;
      show(Math.round(f));
    }
    function show(a, instant) {
      if (a === active) return; var prev = active; active = a;
      tabs.forEach(function (b, k) { b.classList.toggle('is-active', k === a); b.setAttribute('aria-pressed', String(k === a)); });
      pts.forEach(function (p, k) { p.classList.toggle('is-active', k === a); });
      cards.forEach(function (c, k) {
        if (k !== a) c.classList.remove('is-flipped');
        var rot = parseFloat(c.style.getPropertyValue('--rot')) || 0, off = a - k;
        c.style.zIndex = k <= a ? 10 + k : 1;
        var to = k <= a ? { x: off * -14, y: off * 10, rotation: rot - off * 2.5, scale: 1 - Math.min(off, 4) * .035, opacity: off > 3 ? 0 : 1 }
                        : { x: innerWidth * .6, y: -40, rotation: 22, scale: .9, opacity: 0 };
        if (instant || !window.gsap) { if (window.gsap) gsap.set(c, to); else { c.style.transform = 'translate(' + to.x + 'px,' + to.y + 'px) rotate(' + to.rotation + 'deg) scale(' + to.scale + ')'; c.style.opacity = to.opacity; } return; }
        if (k === a && prev < a) gsap.fromTo(c, { x: innerWidth * .6, y: -60, rotation: 24, scale: .92, opacity: 1 }, Object.assign({ duration: .9, ease: 'power3.out', overwrite: true }, to));
        else gsap.to(c, Object.assign({ duration: .7, ease: 'power3.out', overwrite: true }, to));
      });
      var name = tabs[a].getAttribute('data-name'), desc = tabs[a].getAttribute('data-desc'), num = ('0' + (a + 1)).slice(-2);
      if (instant || reduce || !window.gsap) { cityEl.textContent = name; descEl.textContent = desc; idxEl.textContent = num; return; }
      var dir = prev < a ? 1 : -1;
      gsap.timeline({ overwrite: true })
        .to([cityEl, descEl], { yPercent: -40 * dir, opacity: 0, duration: .22, ease: 'power2.in', stagger: .04 })
        .add(function () { cityEl.textContent = name; descEl.textContent = desc; idxEl.textContent = num; })
        .fromTo([cityEl, descEl], { yPercent: 40 * dir, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .5, ease: 'power3.out', stagger: .06 });
    }
    function jump(i) {
      if (st && motion) { var y = st.start + (st.end - st.start) * (i / (n - 1)) + 2; if (lenis) lenis.scrollTo(y, { duration: 1.4, force: true }); else window.scrollTo({ top: y, behavior: 'smooth' }); }
      else { lastP = -1; camera(i / (n - 1)); }
    }
    tabs.forEach(function (b, k) { b.addEventListener('click', function () { jump(k); }); });
    pts.forEach(function (p, k) { p.style.cursor = 'pointer'; p.addEventListener('click', function () { jump(k); }); });
    // the top postcard turns over to show its message; the pile leans toward the cursor
    stack.addEventListener('click', function () { var c = cards[active]; if (c) { c.classList.toggle('is-flipped'); if (hint) hint.style.opacity = 0; } });
    if (finePointer && !reduce && window.gsap) {
      var rx = gsap.quickTo(stack, 'rotationX', { duration: .8, ease: 'power3.out' }), ry = gsap.quickTo(stack, 'rotationY', { duration: .8, ease: 'power3.out' });
      root.addEventListener('pointermove', function (e) { var r = stack.getBoundingClientRect(), nx = (e.clientX - (r.left + r.width / 2)) / innerWidth, ny = (e.clientY - (r.top + r.height / 2)) / innerHeight; ry(nx * 14); rx(-ny * 10); });
      root.addEventListener('pointerleave', function () { rx(0); ry(0); });
    }
    camera(0); show(0, true);
    window.addEventListener('resize', function () { var p = lastP; lastP = -1; camera(p < 0 ? 0 : p); });
    return { camera: camera, n: n, bind: function (trigger) { st = trigger; } };
  })();

  /* ---------------- university finder ---------------- */
  var finder = (function () {
    var data = window.TC_UNIVERSITIES || []; var sec = $('#finder'); if (!sec || !data.length) return null;
    var FIELDS = [['Computer Science', /computer|data|software|information/i], ['Engineering', /engineer/i], ['Business', /business|management|finance|mba|accounting|marketing/i], ['Medicine & Health', /medicine|health|nursing|pharma|biomed|public health/i], ['Sciences', /science|physics|chemistry|biology|math/i], ['Law & Policy', /law|policy|political|government/i], ['Arts & Humanities', /art|film|music|history|english|humanities|design|architecture|journalism|psychology/i], ['Economics', /econom/i]];
    var q = $('[data-finder-q]'), typeBox = $('[data-finder-type]'), fieldsBox = $('[data-finder-fields]'), list = $('[data-finder-results]'), count = $('[data-finder-count]'), reset = $('[data-finder-reset]'), all = $('[data-finder-all]');
    var st = { q: '', type: '', field: -1, state: '' }, picks = [];
    var stateOf = function (u) { return (u.location || '').split(', ').pop(); };
    var stateName = {}; $$('.st', sec).forEach(function (p) { stateName[p.getAttribute('data-st')] = p.textContent; });
    // field chips with real counts
    FIELDS.forEach(function (f, i) {
      var n = data.filter(function (u) { return f[1].test(u.programs); }).length;
      var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-pressed', 'false'); b.innerHTML = f[0] + ' <small>' + n + '</small>';
      b.addEventListener('click', function () { st.field = st.field === i ? -1 : i; render(); });
      fieldsBox.appendChild(b);
    });
    $$('button', typeBox).forEach(function (b) { b.addEventListener('click', function () { st.type = b.getAttribute('data-type'); render(); }); });
    q.addEventListener('input', function () { st.q = q.value.trim(); render(); });
    $('[data-finder-form]').addEventListener('submit', function (e) { e.preventDefault(); render(); });
    reset.addEventListener('click', function () { st = { q: '', type: '', field: -1, state: '' }; q.value = ''; render(); });
    $$('.st', sec).forEach(function (p) {
      p.addEventListener('click', function () { var s = p.getAttribute('data-st'); st.state = st.state === s ? '' : s; render(); });
    });
    function match(u, ignoreState) {
      if (st.type && u.type !== st.type) return false;
      if (st.field > -1 && !FIELDS[st.field][1].test(u.programs)) return false;
      if (!ignoreState && st.state && stateOf(u) !== st.state) return false;
      if (st.q) { var t = st.q.toLowerCase(); if ((u.name + ' ' + u.location + ' ' + (stateName[stateOf(u)] || '') + ' ' + u.programs + ' ' + u.type).toLowerCase().indexOf(t) < 0) return false; }
      return true;
    }
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function render() {
      var res = data.filter(function (u) { return match(u); });
      // bubbles: counts per state for the current filters (ignoring the state filter itself)
      var per = {}; data.forEach(function (u) { if (match(u, true)) { var s = stateOf(u); per[s] = (per[s] || 0) + 1; } });
      $$('.bub', sec).forEach(function (g) {
        var s = g.getAttribute('data-bub'), n = per[s] || 0;
        g.querySelector('circle').setAttribute('r', n ? (7 + Math.sqrt(n) * 4.2).toFixed(1) : 0);
        g.querySelector('text').textContent = n || '';
        g.classList.toggle('is-dim', !!st.state && st.state !== s);
      });
      $$('.st', sec).forEach(function (p) { var s = p.getAttribute('data-st'); p.classList.toggle('has', !!per[s]); p.classList.toggle('is-on', st.state === s); });
      $$('button', typeBox).forEach(function (b) { var on = b.getAttribute('data-type') === st.type; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
      $$('button', fieldsBox).forEach(function (b, i) { b.setAttribute('aria-pressed', String(i === st.field)); });
      var filtered = st.q || st.type || st.field > -1 || st.state;
      reset.hidden = !filtered;
      var label = (res.length > 6 ? 'Top 6 of ' : '') + res.length + ' featured ' + (res.length === 1 ? 'university' : 'universities') + (st.state ? ' in ' + st.state : '');
      count.textContent = label;
      list.innerHTML = res.slice(0, 6).map(function (u, i) {
        var on = picks.indexOf(u.name) > -1;
        return '<li class="uni" style="--i:' + i + '"><span class="uni__rank">#' + u.rank + '</span><div><h3>' + esc(u.name) + '</h3><p>' + esc(u.location) + ' · ' + esc(u.type) + ' · ' + esc(u.programs) + '</p></div>' +
          '<button type="button" class="uni__add" data-pick="' + esc(u.name) + '" aria-pressed="' + on + '">' + (on ? 'Shortlisted' : 'Shortlist') + '</button></li>';
      }).join('') || '<li class="finder__empty">No universities match these filters. Try clearing a filter or searching for a state such as “TX”.</li>';
      var term = st.q || (st.field > -1 ? FIELDS[st.field][0].split(' ')[0] : '') || (st.state ? ', ' + st.state : '');
      all.href = (window.TC_DIR_BASE || 'universities.html') + (term ? '?q=' + encodeURIComponent(term) : '');
      $('span', all).textContent = filtered ? 'See every match in the University Atlas' : 'Explore all 3,969 US universities';
    }
    list.addEventListener('click', function (e) {
      var b = e.target.closest('[data-pick]'); if (!b) return;
      var n = b.getAttribute('data-pick'), i = picks.indexOf(n);
      i > -1 ? picks.splice(i, 1) : picks.push(n);
      b.setAttribute('aria-pressed', String(i < 0)); b.textContent = i < 0 ? 'Shortlisted' : 'Shortlist';
      if (leadApi && leadApi.setSelection) leadApi.setSelection(picks);
      toast();
    });
    var t = document.createElement('div'); t.className = 'dir-toast'; t.setAttribute('role', 'status');
    t.innerHTML = '<span data-toast-n></span><a class="btn btn--primary btn--sm" href="#contact"><span>Evaluate my shortlist</span><svg class="ico"><use href="#i-arrow"/></svg></a>';
    document.body.appendChild(t);
    function toast() { t.classList.toggle('is-on', picks.length > 0); $('[data-toast-n]', t).textContent = picks.length + (picks.length === 1 ? ' university shortlisted' : ' universities shortlisted'); }
    t.querySelector('a').addEventListener('click', function () { setTimeout(function () { t.classList.remove('is-on'); }, 300); });
    render();
    return { render: render };
  })();

  /* ---------------- services: expanding panels ---------------- */
  var svc = (function () {
    var root = $('[data-xp-root]'); if (!root) return null;
    var panels = $$('[data-xp]', root), mqStack = window.matchMedia('(max-width: 980px)');
    var cur = -1, intent = 0;
    function activate(i, opts) {
      if (i === cur) return;
      cur = i;
      panels.forEach(function (p, k) {
        var on = k === i, btn = $('[data-xp-btn]', p), body = $('.xp__body', p);
        p.classList.toggle('is-on', on);
        btn.setAttribute('aria-expanded', String(on));
        if (on) body.removeAttribute('inert'); else body.setAttribute('inert', '');
      });
      // stacked layout: once the panels have resized, bring the opened one's header back into view
      if (mqStack.matches && opts && opts.user) setTimeout(function () {
        if (window.ScrollTrigger) ScrollTrigger.refresh();
        var top = panels[i].getBoundingClientRect().top;
        if (top < 70 || top > innerHeight * .55) { var y = window.scrollY + top - 90; if (lenis) lenis.scrollTo(y, { duration: .7, force: true }); else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' }); }
      }, 540);
    }
    panels.forEach(function (p, i) {
      var btn = $('[data-xp-btn]', p);
      btn.addEventListener('click', function () { activate(i, { user: true }); });
      // a short hover intent so sweeping the mouse across does not make every panel jump open
      p.addEventListener('pointerenter', function (e) {
        if (e.pointerType !== 'mouse' || mqStack.matches) return;
        clearTimeout(intent); intent = setTimeout(function () { activate(i); }, 110);
      });
      p.addEventListener('pointerleave', function () { clearTimeout(intent); });
      btn.addEventListener('focus', function () { if (!mqStack.matches) activate(i); });
      btn.addEventListener('keydown', function (e) {
        var d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
        e.preventDefault(); var to = (i + d + panels.length) % panels.length;
        activate(to); $('[data-xp-btn]', panels[to]).focus();
      });
    });
    activate(0);
    return { open: function (i) { activate(i); scrollToEl(mqStack.matches ? panels[i] : root); } };
  })();
  /* ---------------- loan partners: running strip (speeds up with scroll, pauses on hover, sleeps off screen) ---------------- */
  (function () {
    var loans = $('[data-loans]'); if (!loans || !motion) return;
    $$('li', loans).forEach(function (n) { var c = n.cloneNode(true); var im = $('img', c); im.alt = ''; c.setAttribute('aria-hidden', 'true'); loans.appendChild(c); });
    var lt = gsap.to(loans, { xPercent: -50, ease: 'none', duration: 40, repeat: -1 });
    var hovered = false;
    loans.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { hovered = true; gsap.to(lt, { timeScale: 0, duration: .5, overwrite: true }); } });
    loans.addEventListener('pointerleave', function () { if (!hovered) return; hovered = false; gsap.to(lt, { timeScale: 1, duration: .6, overwrite: true }); });
    ScrollTrigger.create({ trigger: '.loans', start: 'top bottom', end: 'bottom top', refreshPriority: -1,
      onUpdate: function (st) { if (hovered) return; gsap.to(lt, { timeScale: 1 + Math.min(Math.abs(st.getVelocity()) / 300, 5), duration: .2, overwrite: true, onComplete: function () { if (!hovered) gsap.to(lt, { timeScale: 1, duration: 1.2 }); } }); },
      onToggle: function (st) { st.isActive ? lt.play() : lt.pause(); } });
  })();


  $$('[data-open-service]').forEach(function (b) { b.addEventListener('click', function () { if (svc) svc.open(parseInt(b.getAttribute('data-open-service'), 10)); }); });

  /* STEM OPT highlight cards: hover/focus shows details; click/tap toggles (touch + mobile) */
  (function () {
    var cards = $$('[data-hl]'); if (!cards.length) return;
    function set(c, on) { c.classList.toggle('is-open', on); $('.opt__hl-btn', c).setAttribute('aria-expanded', on ? 'true' : 'false'); }
    cards.forEach(function (c) {
      var b = $('.opt__hl-btn', c), pop = $('.opt__pop', c);
      function place() { if (!matchMedia('(min-width: 861px)').matches) return; var r = c.getBoundingClientRect(), need = pop.offsetHeight + 90; c.classList.toggle('is-below', r.top < need && (innerHeight - r.bottom) > r.top); }
      c.addEventListener('mouseenter', place); c.addEventListener('focusin', place);
      b.addEventListener('click', function () { var on = !c.classList.contains('is-open'); cards.forEach(function (o) { if (o !== c) set(o, false); }); place(); set(c, on); });
      c.addEventListener('mouseleave', function () { if (matchMedia('(min-width: 861px)').matches) set(c, false); });
      c.addEventListener('keydown', function (e) { if (e.key === 'Escape') { set(c, false); b.blur(); } });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('[data-hl]')) cards.forEach(function (o) { set(o, false); }); });
  })();

  /* ---------------- STEM OPT: 12 + 24 = 36, a fixed timeline ---------------- */
  (function () {
    var sec = $('[data-opt]'); if (!sec) return;
    var ruler = $('[data-opt-ruler]', sec), probe = $('[data-opt-probe]', sec);
    var ticks = $$('i', ruler), nums = {}, miles = $$('[data-mile]', sec);
    $$('[data-term]', sec).forEach(function (t) { nums[t.getAttribute('data-term')] = $('b', t); });
    var shown = -1, val = { v: 36 }, cur = 36;
    function render(n, mark) {
      n = Math.max(0, Math.min(36, Math.round(n)));
      if (n !== shown) {
        shown = n;
        ticks.forEach(function (t, k) { t.classList.toggle('on', k < n); });
        nums.a.textContent = Math.min(n, 12);
        nums.b.textContent = Math.max(0, Math.min(n - 12, 24));
        nums.c.textContent = n;
      }
      ticks.forEach(function (t, k) { t.classList.toggle('cur', mark && k === n - 1); });
    }
    // static by request: the full 36-month timeline is always shown, nothing changes on hover
    // "Get free counselling" scrolls to the existing enquiry form, then puts the cursor in it
    var counsel = $('[data-opt-counsel]', sec);
    if (counsel) counsel.addEventListener('click', function () {
      setTimeout(function () { if (window.TCNote) window.TCNote.open(false); var f = $$('[data-lead-form] input, [data-lead-form] select, [data-lead-form] textarea').filter(function (el) { return el.type !== 'hidden' && el.type !== 'checkbox' && el.offsetParent !== null; })[0]; if (f) try { f.focus({ preventScroll: true }); } catch (e) {} }, 1600);
    });

    render(36);
    if (!motion) return;
    gsap.fromTo($$('[data-opt-line]', sec), { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: .14, scrollTrigger: { trigger: sec, start: 'top 72%', once: true, refreshPriority: -1 } });
    gsap.fromTo($$('.opt__term, .opt__op', sec), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: .08, scrollTrigger: { trigger: $('.opt__eq', sec), start: 'top 85%', once: true, refreshPriority: -1 }, clearProps: 'transform' });
    // milestones arrive in timeline order, each bracket drawing out from the left
    ScrollTrigger.create({ trigger: $('[data-opt-miles]', sec), start: 'top 82%', once: true, refreshPriority: -1, onEnter: function () {
      miles.forEach(function (m, k) {
        gsap.fromTo(m, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .9, delay: k * .16, ease: 'power3.out', clearProps: 'transform' });
        gsap.fromTo($('.opt__bracket', m), { scaleX: 0 }, { scaleX: 1, duration: 1, delay: .1 + k * .16, ease: 'power3.inOut', clearProps: 'transform' });
      });
    } });
    gsap.set(miles, { opacity: 0 });
    if (!mqMobile.matches) gsap.fromTo($('[data-opt-glow]', sec), { yPercent: -10 }, { yPercent: 25, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true, refreshPriority: -1 } });
  })();


  /* ---------------- earnings calculator: timesheet + paycheque ---------------- */
  (function calc() {
    var f = $('[data-calc]'); if (!f) return;
    var h = $('[data-calc-in="h"]', f), r = $('[data-calc-in="r"]', f), cheque = $('[data-cheque]', f);
    var ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    function words(n) {
      var out = [], hu = Math.floor(n / 100), rest = n % 100;
      if (hu) out.push(ONES[hu] + ' hundred');
      if (rest) { out.push(rest < 20 ? ONES[rest] : TENS[Math.floor(rest / 10)] + (rest % 10 ? '-' + ONES[rest % 10] : '')); }
      var s = out.join(' ') || 'zero'; return s.charAt(0).toUpperCase() + s.slice(1) + ' and 00/100 dollars';
    }
    var shown = { w: 0, m: 0 }, first = true;
    function rate() { return +r.value; }
    function paint() {
      $('[data-calc-week]', f).textContent = '$' + Math.round(shown.w).toLocaleString('en-US') + '.00';
      $('[data-calc-month]', f).textContent = '$' + (Math.round(shown.m / 10) * 10).toLocaleString('en-US');
    }
    function upd() {
      var hv = +h.value, rv = rate(), week = hv * rv, month = Math.round(hv * rv * 4.33 / 10) * 10;
      $('[data-calc-out="h"]', f).textContent = hv; $('[data-calc-out="r"]', f).textContent = '$' + rv;
      sync(hv, rv);
      $('[data-cheque-words]', f).textContent = words(week);
      $('[data-cheque-memo]', f).textContent = 'on-campus job · ' + hv + ' hrs × $' + rv;
      $('[data-cheque-no]', f).textContent = String(2000 + hv * 100 + rv).slice(-4);
      if (motion && !first) gsap.to(shown, { w: week, m: month, duration: .5, ease: 'power2.out', overwrite: true, onUpdate: paint });
      else { shown.w = week; shown.m = month; paint(); }
      if (!first && !reduce) { cheque.classList.remove('is-print'); void cheque.offsetWidth; cheque.classList.add('is-print'); }
      first = false;
    }
    // swipe pickers: native horizontal scrolling with snap (touch swipe, trackpad), mouse drag, arrow keys
    var pickers = $$('[data-swipe]', f).map(function (el) {
      var key = el.getAttribute('data-swipe'), input = r, track = $('[data-swipe-track]', el), items = $$('.swipe__item', track);
      var P = { el: el, input: input, track: track, items: items, key: key };
      function idxOf(v) { return Math.max(0, Math.min(items.length - 1, v - +input.min)); }
      function centerOf(i) { var it = items[i]; return it.offsetLeft + it.offsetWidth / 2 - track.clientWidth / 2; }
      P.go = function (v, smooth) { track.scrollTo({ left: centerOf(idxOf(v)), behavior: smooth && !reduce ? 'smooth' : 'auto' }); };
      function look() {
        // size and fade each number by its distance from the marker, and pick the one under it
        var mid = track.scrollLeft + track.clientWidth / 2, best = 0, bd = 1e9;
        items.forEach(function (it, k) {
          var d = Math.abs(it.offsetLeft + it.offsetWidth / 2 - mid), t = Math.min(1, d / 180);
          it.style.setProperty('--s', (1.25 - .45 * t).toFixed(3)); it.style.setProperty('--o', (1 - .7 * t).toFixed(3));
          if (d < bd) { bd = d; best = k; }
        });
        var v = +input.min + best;
        if (P.target === v) P.target = null;
        if (+input.value !== v) { input.value = v; upd(); }
      }
      var raf = 0; track.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(function () { raf = 0; look(); }); }, { passive: true });
      // mouse drag (touch already swipes natively)
      var down = false, sx = 0, sl = 0;
      track.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; sx = e.clientX; sl = track.scrollLeft; track.classList.add('is-drag'); e.preventDefault(); });
      window.addEventListener('pointermove', function (e) { if (down) track.scrollLeft = sl - (e.clientX - sx); });
      window.addEventListener('pointerup', function () { if (!down) return; down = false; track.classList.remove('is-drag'); P.go(+input.value, true); });
      items.forEach(function (it) { it.addEventListener('click', function () { if (Math.abs(track.scrollLeft - sl) < 4) P.go(+it.getAttribute('data-v'), true); }); });
      el.addEventListener('keydown', function (e) {
        var d = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[e.key], v = null;
        var base = P.target != null ? P.target : +input.value;
        if (d) v = base + d; else if (e.key === 'Home') v = +input.min; else if (e.key === 'End') v = +input.max;
        if (v === null) return; e.preventDefault(); v = Math.max(+input.min, Math.min(+input.max, v)); P.target = v; P.go(v, true);
      });
      P.look = look;
      return P;
    });
    function sync(hv, rv) {
      pickers.forEach(function (P) {
        var v = P.key === 'h' ? hv : rv, txt = P.key === 'h' ? v + ' hours a week' : '$' + v + ' an hour';
        P.el.setAttribute('aria-valuenow', v); P.el.setAttribute('aria-valuetext', txt);
        P.items.forEach(function (it) { it.classList.toggle('is-on', +it.getAttribute('data-v') === v); });
      });
    }
    // week planner: seven day bars (0–8 h each) whose total is the weekly hours, capped at 20 for term time
    var plan = $('[data-plan]', f), days = $$('.plan__day', plan), bar = $('[data-plan-bar]', f), cap = $('[data-plan-cap]', f), CAP = +h.max, DAYMAX = 8;
    var hrs = days.map(function (d) { return +d.getAttribute('aria-valuenow') || 0; });
    var NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    function total() { return hrs.reduce(function (a, b) { return a + b; }, 0); }
    function drawPlan() {
      days.forEach(function (d, i) {
        d.style.setProperty('--v', hrs[i]); $('.plan__val', d).textContent = hrs[i] + 'h';
        d.setAttribute('aria-valuenow', hrs[i]); d.setAttribute('aria-valuetext', NAMES[i] + ', ' + hrs[i] + ' hours');
      });
      var tot = total(); bar.style.transform = 'scaleX(' + (tot / CAP) + ')';
      cap.classList.toggle('is-max', tot >= CAP);
      cap.textContent = tot >= CAP ? 'That’s 20 hours, the most F-1 students may work a week in term' : tot + ' of 20 hours planned · drag each day up or down';
    }
    function setDay(i, v) {
      v = Math.max(0, Math.min(DAYMAX, Math.round(v)));
      var room = CAP - (total() - hrs[i]);
      if (v > room) { v = room; days[i].classList.remove('is-capped'); void days[i].offsetWidth; days[i].classList.add('is-capped'); }
      if (hrs[i] === v) return;
      hrs[i] = v; drawPlan(); h.value = total(); upd();
    }
    days.forEach(function (d, i) {
      var col = $('.plan__col', d), dragging = false;
      function fromY(e) { var b = col.getBoundingClientRect(); setDay(i, (b.bottom - e.clientY) / b.height * DAYMAX + .4); }
      d.addEventListener('pointerdown', function (e) { dragging = true; d.classList.add('is-drag'); d.focus({ preventScroll: true }); fromY(e); try { d.setPointerCapture(e.pointerId); } catch (err) {} e.preventDefault(); });
      d.addEventListener('pointermove', function (e) { if (dragging) fromY(e); });
      function end() { dragging = false; d.classList.remove('is-drag'); }
      d.addEventListener('pointerup', end); d.addEventListener('pointercancel', end);
      d.addEventListener('keydown', function (e) {
        var k = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key], v = null;
        if (k) v = hrs[i] + k; else if (e.key === 'Home') v = 0; else if (e.key === 'End') v = DAYMAX;
        if (v === null) return; e.preventDefault(); setDay(i, v);
      });
    });
    h.value = total(); drawPlan();
    upd();
    function place() { pickers.forEach(function (P) { P.go(+P.input.value, false); P.look(); }); }
    place(); window.addEventListener('load', place); window.addEventListener('resize', place);
    // a one-time nudge shows the strip can be swiped
    var hint = $('[data-pay-hint]', f);
    pickers.forEach(function (P) { P.track.addEventListener('pointerdown', function () { if (hint) hint.classList.add('is-off'); }, { once: true }); });
  })();

  /* ---------------- visa tabs ---------------- */
  (function visa() {
    var box = $('[data-visa]'); if (!box) return;
    var tabs = $$('[role="tab"]', box), panels = $$('[role="tabpanel"]', box);
    function show(i, focus) {
      tabs.forEach(function (t, k) { var on = k === i; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
      panels.forEach(function (p, k) { p.hidden = k !== i; p.classList.toggle('is-on', k === i); });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(i); });
      t.addEventListener('keydown', function (e) { var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) { e.preventDefault(); show((i + d + tabs.length) % tabs.length, true); } });
    });
  })();

  /* ---------------- reviews: two rows of cards drifting in opposite directions ---------------- */
  (function reviews() {
    var rows = $$('[data-mq]'); if (!rows.length) return;
    // tap a card (touch) to hold its row still; tap again or elsewhere to let it move on
    rows.forEach(function (r) {
      r.addEventListener('click', function (e) { var c = e.target.closest('.rv'); if (!c) return; var on = !c.classList.contains('is-hold'); $$('.rv.is-hold').forEach(function (x) { x.classList.remove('is-hold'); }); rows.forEach(function (o) { o.classList.remove('is-hold'); }); if (on) { c.classList.add('is-hold'); r.classList.add('is-hold'); } });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('[data-mq]')) { $$('.rv.is-hold').forEach(function (x) { x.classList.remove('is-hold'); }); rows.forEach(function (o) { o.classList.remove('is-hold'); }); } });
    // rows only run while on screen
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { es.forEach(function (en) { en.target.classList.toggle('is-off', !en.isIntersecting); }); }); rows.forEach(function (r) { io.observe(r); }); }
  })();

  /* ---------------- The Tutee Times: hero ticker + unfolding front page, one edition per day ---------------- */
  (function paper() {
    var tkr = $('[data-tkr]'), wrap = $('[data-paper]'); if (!tkr || !wrap) return;
    var sheet = $('[data-paper-sheet]', wrap), body = $('[data-paper-body]', wrap), lastFocus = null;
    var CTA = { contact: ['Claim free counselling', '#contact'], opt: ['Explore STEM OPT', '#stem-opt'], loans: ['See our loan partners', '#funding'], calc: ['Try the earnings calculator', '#funding'], finder: ['Find a university', '#finder'] };
    var data = window.TC_NEWS || { editions: [] }, eds = [], cur = 0;
    function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
    function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
    function fmt(iso, long) { var p = iso.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]); return d.toLocaleDateString('en-US', long ? { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } : { month: 'short', day: 'numeric', year: 'numeric' }); }
    var PHOTOS = $$('.xp__bg img').map(function (im) { return im.getAttribute('src'); }).filter(Boolean); // reuse the service photos already on the page
    function isoOf(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
    // a fresh edition every day: rotate the counsellors' story bank by date (same edition for everyone on the same day)
    function compose(iso) {
      var pool = data.pool || [], n = pool.length; if (!n) return null;
      var p = iso.split('-'), day = Math.floor(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 864e5), start = (day * 5) % n, pick = [];
      for (var k = 0; pick.length < Math.min(7, n); k++) pick.push(pool[(start + k * 3) % n]);
      pick = pick.filter(function (v, i, a) { return a.indexOf(v) === i; });
      for (var j = 0; pick.length < Math.min(7, n); j++) if (pick.indexOf(pool[j]) < 0) pick.push(pool[j]);
      var lead = Object.assign({}, pick[0]); if (!lead.img && PHOTOS.length) {
        // match the photo to the story: service-panel photos 0 career · 1 language · 2 college · 3 documents · 6 aid · 7 landing · 8 family
        var bySec = { Admissions: [2, 1], Visa: [3], Funding: [6], Work: [0], Campus: [2], Life: [7, 8], 'Tutee News': [0] };
        var opts = bySec[lead.section] || [2], k2 = opts[day % opts.length];
        if (/english|ielts|toefl|test/i.test(lead.headline)) k2 = 1; if (/family|f-2/i.test(lead.headline)) k2 = 8;
        lead.img = PHOTOS[k2] || PHOTOS[0];
      }
      var ears = data.ears || [];
      return { date: iso, auto: true, ear: ears.length ? ears[day % ears.length] : null, lead: lead, stories: pick.slice(1), breaking: '' };
    }
    function prep(d) {
      data = d; var t = today(), map = {};
      (d.editions || []).forEach(function (e) { if (e.date <= t) map[e.date] = e; });
      var now = new Date();
      for (var i = 0; i < 7; i++) { var iso = isoOf(new Date(now.getFullYear(), now.getMonth(), now.getDate() - i)); if (!map[iso]) { var c = compose(iso); if (c) map[iso] = c; } }
      eds = Object.keys(map).sort().reverse().map(function (k) { return map[k]; });
      if (wire.length && eds[0]) eds[0] = Object.assign({}, eds[0], { wire: wire });
      cur = 0; ticker();
    }
    var wire = [];
    function all(e) { return [e.lead].concat(e.stories || []).filter(Boolean); }
    function ticker() {
      var e = eds[0]; if (!e) { tkr.hidden = true; return; }
      $('[data-tkr-date]', tkr).textContent = fmt(e.date);
      var brk = $('[data-tkr-brk]', tkr); brk.hidden = !e.breaking; if (e.breaking) brk.textContent = 'Breaking';
      var items = (e.breaking ? [{ headline: e.breaking, brk: 1 }] : []).concat(all(e));
      if (e.wire) items = e.wire.slice(0, 4).map(function (w) { return { section: 'Live · ' + w.source, headline: w.title, live: w.link }; }).concat(items);
      var off = (e.breaking ? 1 : 0) + (e.wire ? Math.min(4, e.wire.length) : 0);
      var li = items.map(function (s, i) { return s.live ? '<li><a class="tkr__live" href="' + esc(s.live) + '" target="_blank" rel="noopener"><b>' + esc(s.section) + '</b>' + esc(s.headline) + '</a></li>' : '<li><button type="button" data-tkr-i="' + (s.brk ? -1 : Math.max(0, i - off)) + '"><b>' + esc(s.section || 'Breaking') + '</b>' + esc(s.headline) + '</button></li>'; }).join('');
      var run = $('[data-tkr-run]', tkr); run.innerHTML = li + li.replace(/<li>/g, '<li aria-hidden="true">').replace(/<button /g, '<button tabindex="-1" ');
      run.style.setProperty('--tkr-dur', Math.max(28, items.length * 9) + 's');
    }
    function storyHTML(s, i, lead) {
      var cta = s.cta && CTA[s.cta] ? '<a class="paper__cta" href="' + CTA[s.cta][1] + '" data-paper-go>' + CTA[s.cta][0] + ' →</a>' : '';
      var src = s.source ? '<p class="paper__src">Source: ' + (s.url ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.source) + '</a>' : esc(s.source)) + '</p>' : '';
      var paras = (s.body || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
      return '<section class="paper__story' + (lead ? ' paper__story--lead' : '') + '" data-story="' + i + '">' +
        '<p class="paper__sec">' + esc(s.section) + '</p>' +
        '<h3 class="paper__hl">' + esc(s.headline) + '</h3>' + (s.deck ? '<p class="paper__deck">' + esc(s.deck) + '</p>' : '') +
        (lead && s.img ? '<figure class="paper__fig"><img src="' + esc(s.img) + '" alt="" loading="lazy">' + (s.caption ? '<figcaption>' + esc(s.caption) + '</figcaption>' : '') + '</figure>' : '') +
        '<div class="paper__copy">' + paras + src + cta + '</div>' +
        (lead ? '' : '<button type="button" class="paper__more" data-more aria-expanded="false">Continued ▸</button>') + '</section>';
    }
    function render() {
      var e = eds[cur]; if (!e) return;
      $('[data-paper-name]', wrap).textContent = data.paper || 'The Tutee Times';
      $('[data-paper-motto]', wrap).textContent = '“' + (data.motto || 'All the news a US-bound student needs') + '”';
      var ear = $('[data-paper-ear]', wrap); ear.innerHTML = e.ear ? '<b>' + esc(e.ear.label) + '</b>' + esc(e.ear.text) : ''; ear.hidden = !e.ear;
      var p0 = e.date.split('-'), no = Math.floor((Date.UTC(+p0[0], +p0[1] - 1, +p0[2]) - Date.UTC(2026, 9, 1)) / 864e5) + 1;
      $('[data-paper-vol]', wrap).textContent = 'VOL. I · No. ' + Math.max(1, no);
      $('[data-paper-date]', wrap).textContent = fmt(e.date, true).toUpperCase();
      $('[data-paper-sample]', wrap).hidden = !e.sample && !e.auto;
      var st = e.stories || [];
      body.innerHTML = (e.breaking ? '<p class="paper__breaking"><b>Breaking</b>' + esc(e.breaking) + '</p>' : '') +
        '<div class="paper__top">' + storyHTML(e.lead, 0, true) + '<div class="paper__side">' + st.slice(0, 2).map(function (s, i) { return storyHTML(s, i + 1); }).join('') + '</div></div>' +
        '<div class="paper__cols">' + st.slice(2).map(function (s, i) { return storyHTML(s, i + 3); }).join('') + '</div>' +
        (e.wire && e.wire.length ? '<section class="paper__wire"><p class="paper__sec">Live wire · official sources</p><ul>' + e.wire.slice(0, 8).map(function (w) { return '<li><a href="' + esc(w.link) + '" target="_blank" rel="noopener">' + esc(w.title) + '</a><span>' + esc(w.source) + (w.date ? ' · ' + esc(fmt(String(w.date).slice(0, 10))) : '') + '</span></li>'; }).join('') + '</ul></section>' : '');
      $('[data-paper-index]', wrap).innerHTML = all(e).map(function (s, i) { return '<button type="button" data-jump="' + i + '">' + esc(s.section) + '</button>'; }).join('<span aria-hidden="true">·</span>');
      $('[data-paper-prev]', wrap).disabled = cur >= eds.length - 1;
      var nx = $('[data-paper-next]', wrap); nx.disabled = cur <= 0; nx.classList.toggle('is-wait', cur <= 0); clock();
    }
    // on today's paper, "Next edition" counts down to tomorrow's edition (midnight, local time)
    var clockT = 0;
    function clock() {
      clearTimeout(clockT); var nx = $('[data-paper-next]', wrap);
      if (cur > 0) { nx.innerHTML = '<span>Next edition</span><svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg>'; return; }
      var n = new Date(), m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1), left = Math.max(0, m - n), h = Math.floor(left / 36e5), mi = Math.floor(left % 36e5 / 6e4);
      nx.innerHTML = '<span>Tomorrow’s edition in <b>' + h + 'h ' + ('0' + mi).slice(-2) + 'm</b></span>';
      nx.setAttribute('aria-label', 'Tomorrow’s edition arrives in ' + h + ' hours ' + mi + ' minutes');
      if (!wrap.hidden) clockT = setTimeout(function () { if (today() !== eds[0].date) { prep(data); render(); } else clock(); }, 30000);
    }
    function open(i) {
      lastFocus = document.activeElement; cur = 0; render();
      wrap.hidden = false; document.documentElement.classList.add('paper-open'); if (window.TCLenis) window.TCLenis.stop();
      requestAnimationFrame(function () { wrap.classList.add('is-open'); });
      sheet.scrollTop = 0; try { sheet.focus({ preventScroll: true }); } catch (x) {}
      if (i > 0) setTimeout(function () { reveal(i); }, reduce ? 0 : 650);
    }
    function close() {
      wrap.classList.remove('is-open'); document.documentElement.classList.remove('paper-open'); if (window.TCLenis) window.TCLenis.start();
      setTimeout(function () { wrap.hidden = true; }, reduce ? 0 : 450);
      if (lastFocus) try { lastFocus.focus({ preventScroll: true }); } catch (x) {}
    }
    function reveal(i) {
      var s = $('[data-story="' + i + '"]', body); if (!s) return;
      var m = $('[data-more]', s); if (m && m.getAttribute('aria-expanded') !== 'true') m.click();
      s.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' }); s.classList.remove('is-flash'); void s.offsetWidth; s.classList.add('is-flash');
    }
    tkr.addEventListener('click', function (ev) { var b = ev.target.closest('[data-tkr-i]'); if (b) open(Math.max(0, +b.getAttribute('data-tkr-i'))); });
    $$('[data-paper-open]').forEach(function (b) { b.addEventListener('click', function () { open(0); }); });
    $$('[data-paper-close]', wrap).forEach(function (b) { b.addEventListener('click', close); });
    wrap.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { ev.preventDefault(); close(); return; }
      if (ev.key !== 'Tab') return; // keep focus inside the paper
      var f = $$('button:not([disabled]), a[href]', sheet).filter(function (x) { return x.offsetParent !== null; }); if (!f.length) return;
      if (ev.shiftKey && document.activeElement === f[0]) { ev.preventDefault(); f[f.length - 1].focus(); } else if (!ev.shiftKey && document.activeElement === f[f.length - 1]) { ev.preventDefault(); f[0].focus(); }
    });
    body.addEventListener('click', function (ev) {
      var m = ev.target.closest('[data-more]'); if (m) { var s = m.closest('.paper__story'), on = m.getAttribute('aria-expanded') !== 'true'; s.classList.toggle('is-open', on); m.setAttribute('aria-expanded', String(on)); m.textContent = on ? 'Fold ▴' : 'Continued ▸'; return; }
      if (ev.target.closest('[data-paper-go]')) close();
    });
    $('[data-paper-index]', wrap).addEventListener('click', function (ev) { var b = ev.target.closest('[data-jump]'); if (b) reveal(+b.getAttribute('data-jump')); });
    $('[data-paper-prev]', wrap).addEventListener('click', function () { if (cur < eds.length - 1) { cur++; turn(); } });
    $('[data-paper-next]', wrap).addEventListener('click', function () { if (cur > 0) { cur--; turn(); } });
    function turn() { sheet.classList.remove('is-turn'); void sheet.offsetWidth; sheet.classList.add('is-turn'); setTimeout(function () { render(); sheet.scrollTop = 0; }, reduce ? 0 : 260); }
    // lift the floating WhatsApp button while the news strip is on screen
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { document.documentElement.classList.toggle('has-tkr', es[0].isIntersecting && getComputedStyle(tkr).visibility !== 'hidden'); }, { threshold: .5 }).observe(tkr);
    prep(data);
    // fresh edition: when served from a web server, pick up today's news.json without rebuilding the page
    var FEED = window.TC_NEWS_FEED || tkr.getAttribute('data-feed') || '';
    if (FEED && window.fetch) fetch(FEED, { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) { if (j && j.items && j.items.length) { wire = j.items.filter(function (x) { return x && x.title && /^https:/.test(x.link || ''); }); prep(data); } }).catch(function () {});
    // roll over to the new day's edition if the page stays open past midnight
    var day0 = today(); setInterval(function () { if (today() !== day0) { day0 = today(); prep(data); } }, 60000);
    if (/^https?:/.test(location.protocol) && window.fetch) fetch('assets/data/news.json?d=' + today(), { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) { if (d && d.editions) prep(d); }).catch(function () {});
  })();

  /* ---------------- FAQ as a chat: suggested questions, "more questions", and free typing matched against the same answers ---------------- */
  (function ask() {
    var root = $('[data-ask]'); if (!root) return;
    var log = $('[data-ask-log]', root), chips = $('[data-ask-chips]', root), form = $('[data-ask-form]', root), input = $('[data-ask-q]', root);
    var LOGO = $('.ask__logo img', root).getAttribute('src');
    var STOP = 'a an the i me my is are am do does did to of in on for and or can could will would should what how when where which who why with be it its this that you your we us about there any get have has please tell know me about some give info information details explain'.split(' ');
    var GENERIC = ['usa', 'us', 'america', 'american', 'united', 'states', 'study', 'studying', 'student', 'students', 'university', 'universities', 'college'];
    var KB = $$('[data-ask-kb] details').map(function (d) {
      var q = $('summary span', d).textContent.trim();
      return { t: d.getAttribute('data-topic'), q: q, a: $('.qa__a', d).innerHTML, cta: d.getAttribute('data-cta'), k: tokens(q + ' ' + d.getAttribute('data-k')), qk: tokens(q) };
    });
    var CTA = { contact: ['Claim free counselling', '#contact'], finder: ['Find a university', '#finder'], calc: ['Try the earnings calculator', '#funding'], loans: ['See our loan partners', '#funding'], opt: ['Explore STEM OPT', '#stem-opt'], plan: ['Plan my timeline', '#contact'] };
    var asked = {}, cursor = 0, topic = null, busy = false, hist = [];
    // optional live AI for questions outside the playbook: set data-ai-endpoint on [data-ask] (or window.TC_ASK_ENDPOINT) to the deployed worker URL
    var AI = window.TC_ASK_ENDPOINT || root.getAttribute('data-ai-endpoint') || '';
    function stem(w) { return w.length > 4 ? w.replace(/(ings|ing|ies|ed|es|s)$/, function (m) { return m === 'ies' ? 'y' : ''; }) : w; }
    function tokens(str) { return String(str).toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9\- ]+/g, ' ').split(/\s+/).filter(function (w) { return w && STOP.indexOf(w) < 0; }).map(stem); }
    function score(item, qt) {
      var sc = 0;
      qt.forEach(function (w) {
        var g = GENERIC.indexOf(w) >= 0, best = 0;
        item.k.forEach(function (k) { var v = 0; if (k === w) v = g ? 1 : 3; else if (!g && w.length > 3 && k.length > 3 && (k.indexOf(w) === 0 || w.indexOf(k) === 0)) v = 1.5; if (v > best) best = v; });
        if (best && item.qk.indexOf(w) >= 0 && !g) best += 1;
        sc += best;
      });
      return sc;
    }
    function esc(t) { return t.replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
    function scrollDown() { log.scrollTo({ top: log.scrollHeight, behavior: reduce ? 'auto' : 'smooth' }); }
    function bubble(who, html) {
      var row = document.createElement('div'); row.className = 'msg msg--' + who;
      row.innerHTML = (who === 'bot' ? '<img class="msg__av" src="' + LOGO + '" alt="">' : '') + '<div class="msg__b">' + html + '</div>';
      log.appendChild(row); scrollDown(); return row;
    }
    function typing(cb, ms) {
      var row = bubble('bot', '<span class="msg__dots" aria-label="Typing"><i></i><i></i><i></i></span>'); row.classList.add('is-typing');
      setTimeout(function () { row.remove(); cb(); }, reduce ? 0 : ms);
    }
    function reveal(row) { // words fade in one after another
      if (reduce) return; var b = $('.msg__b', row), i = 0;
      (function walk(n) { Array.prototype.slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType === 3 && c.textContent.trim()) { var f = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(function (w) { if (!w) return; if (/^\s+$/.test(w)) { f.appendChild(document.createTextNode(w)); return; } var s = document.createElement('span'); s.className = 'msg__w'; s.style.animationDelay = Math.min(i++ * 22, 1400) + 'ms'; s.textContent = w; f.appendChild(s); }); c.parentNode.replaceChild(f, c); }
        else if (c.nodeType === 1 && !c.classList.contains('msg__acts')) walk(c);
      }); })(b);
    }
    function answer(item, row) {
      var acts = '<span class="msg__acts">';
      if (item.cta && CTA[item.cta]) acts += '<a class="msg__cta" href="' + CTA[item.cta][1] + '">' + CTA[item.cta][0] + ' →</a>';
      acts += '</span>';
      var r = bubble('bot', '<span class="msg__tag">' + ({ Admissions: 'Admissions', Visa: 'F-1 Visa', Costs: 'Costs & funding', Work: 'Work after study', Life: 'Life in the USA', Tutee: 'About us', USA: 'About the USA' }[item.t] || item.t).replace('&', '&amp;') + '</span>' + item.a + acts); reveal(r);
    }
    function ask(text, item) {
      if (busy || !text.trim()) return; busy = true;
      bubble('me', esc(text.trim()));
      if (!item) {
        var qt = tokens(text), best = null, bs = 0, ranked = KB.map(function (it) { return { it: it, s: score(it, qt) }; }).sort(function (a, b) { return b.s - a.s; });
        if (ranked[0].s >= 3) { best = ranked[0].it; bs = ranked[0].s; }
        else if (qt.length && qt.every(function (w) { return GENERIC.indexOf(w) >= 0; })) best = KB.filter(function (k) { return k.t === 'USA'; })[0] || null;
        if (/^(hi|hello|hey|hai|good (morning|evening|afternoon))\b/i.test(text.trim()) && !best) { return typing(function () { bubble('bot', 'Hello! 👋 Ask me anything about studying in the USA — admissions, visas, costs, work after study or life there.'); busy = false; renderChips(); }, 700); }
        if (/^(thanks|thank you|thx|ok|okay|great)\b/i.test(text.trim()) && !best) { return typing(function () { bubble('bot', 'Happy to help! Anything else you’d like to know?'); busy = false; renderChips(); }, 600); }
        if (!best && AI) {
          busy = true;
          var dots = bubble('bot', '<span class="msg__dots" aria-label="Typing"><i></i><i></i><i></i></span>'); dots.classList.add('is-typing');
          var ctl = window.AbortController ? new AbortController() : null; var to = setTimeout(function () { if (ctl) ctl.abort(); }, 20000);
          fetch(AI, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: text.trim().slice(0, 240), history: hist.slice(-6) }), signal: ctl ? ctl.signal : undefined })
            .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
            .then(function (j) {
              clearTimeout(to); dots.remove(); if (!j || !j.answer) throw new Error('empty');
              var body = esc(String(j.answer).slice(0, 1600)).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n{2,}/g, '<br><br>').replace(/\n/g, '<br>');
              hist.push({ q: text.trim(), a: String(j.answer).slice(0, 600) });
              var r = bubble('bot', '<span class="msg__tag msg__tag--ai">AI answer</span>' + body + '<span class="msg__acts"><a class="msg__cta" href="#contact">Talk to a counsellor →</a></span>'); reveal(r);
              busy = false; renderChips();
            })
            .catch(function () { clearTimeout(to); dots.remove(); busy = false; noMatch(text, ranked); });
          return;
        }
        if (!best) { busy = true; return noMatch(text, ranked); }
        item = best;
      }
      asked[item.q] = 1;
      typing(function () { answer(item); busy = false; renderChips(); }, 650 + Math.min(item.a.length * 2, 700));
    }
    function noMatch(text, ranked) {
      typing(function () {
        var near = ranked.slice(0, 3).filter(function (r) { return r.s > 0; }).map(function (r) { return r.it; });
        if (!near.length) near = KB.filter(function (k) { return !asked[k.q]; }).slice(0, 3);
        var wa = 'https://wa.me/917010902329?text=' + encodeURIComponent('Hi Tutee Connect, I have a question: ' + text.trim());
        bubble('bot', 'Good question! I don’t have a ready answer for that one, and I’d rather not guess. Our counsellors can answer it personally.<span class="msg__acts"><a class="msg__cta" href="#contact">Ask a counsellor →</a><a class="msg__cta msg__cta--wa" href="' + wa + '" target="_blank" rel="noopener">Ask on WhatsApp</a></span><span class="msg__near">Or one of these might help:</span>');
        renderChips(near, true); busy = false;
      }, 800);
    }
    function pool() { return KB.filter(function (it) { return !asked[it.q] && (!topic || it.t === topic); }); }
    function renderChips(list, near) {
      chips.innerHTML = ''; var p = list || pool(); var four;
      if (list) four = p; else { if (cursor >= p.length) cursor = 0; four = p.slice(cursor, cursor + 4); }
      four.forEach(function (it, i) { var b = document.createElement('button'); b.type = 'button'; b.className = 'ask__chip'; b.style.animationDelay = (i * 60) + 'ms'; b.textContent = it.q; b.addEventListener('click', function () { ask(it.q, it); }); chips.appendChild(b); });
      var left = pool().length;
      if (!near && left > four.length) { var m = document.createElement('button'); m.type = 'button'; m.className = 'ask__chip ask__chip--more'; m.innerHTML = '<svg class="ico" aria-hidden="true"><use href="#i-plus"/></svg>More questions'; m.addEventListener('click', function () { cursor += 4; renderChips(); }); chips.appendChild(m); }
      if (!four.length && !near) { var r = document.createElement('button'); r.type = 'button'; r.className = 'ask__chip ask__chip--more'; r.textContent = topic ? 'See all topics' : 'Start over'; r.addEventListener('click', function () { if (topic) setTopic(null); else reset(); }); chips.appendChild(r); }
    }
    function setTopic(t) {
      topic = topic === t ? null : t; cursor = 0;
      $$('[data-ask-topic]').forEach(function (b) { var on = b.getAttribute('data-ask-topic') === topic; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
      renderChips();
    }
    function reset() { log.innerHTML = ''; asked = {}; cursor = 0; topic = null; $$('[data-ask-topic]').forEach(function (b) { b.classList.remove('is-on'); b.setAttribute('aria-pressed', 'false'); }); greet(); }
    function greet() { bubble('bot', 'Hi! 👋 I’m the <strong>Tutee Connect</strong> assistant. Ask me about admissions, F-1 visas, costs, working after study or life in the USA — or tap a question below.'); renderChips(); }
    $$('[data-ask-topic]').forEach(function (b) {
      var t = b.getAttribute('data-ask-topic'); $('[data-ask-count="' + t + '"]').textContent = KB.filter(function (k) { return k.t === t; }).length;
      b.setAttribute('aria-pressed', 'false'); b.addEventListener('click', function () { setTopic(t); });
    });
    form.addEventListener('submit', function (e) { e.preventDefault(); var v = input.value; if (!v.trim() || busy) return; input.value = ''; ask(v); });
    $('[data-ask-reset]', root).addEventListener('click', reset);
    log.addEventListener('click', function (e) { var a = e.target.closest('a[href^="#"]'); if (!a) return; });
    greet();
  })();

  /* ---------------- FAQ ---------------- */
  (function faq() {
    var items = $$('[data-faq] details');
    items.forEach(function (d) {
      $('summary', d).addEventListener('click', function (e) {
        e.preventDefault(); var opening = !d.open;
        items.forEach(function (o) { if (o !== d && o.open) collapse(o); });
        opening ? expand(d) : collapse(d);
      });
    });
    function expand(d) { var b = $('.qa__a', d); d.open = true; if (!reduce && b.animate) b.animate([{ height: '0px', opacity: 0 }, { height: b.scrollHeight + 'px', opacity: 1 }], { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' }); }
    function collapse(d) { var b = $('.qa__a', d); if (reduce || !b.animate) { d.open = false; return; } var a = b.animate([{ height: b.scrollHeight + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 300 }); a.onfinish = function () { d.open = false; }; }
  })();

  /* HERO word: sized to the viewport and pinned to the sky band of the photograph (image space, not viewport space),
     so the Statue of Liberty always rises through it whatever the screen shape. */
  (function () {
    var stage = $('[data-hero-stage]'), word = $('[data-hero-word]');
    if (!stage || !word) return;
    var ASPECT = 3344 / 1882; // hero photograph (hero-liberty-*)
    var RATIO = 9056 / 1470; // word width : cap height (tools/hero-word.json)
    function fit() {
      var vw = stage.clientWidth, vh = stage.clientHeight;
      var py = (parseFloat(getComputedStyle(stage).getPropertyValue('--py')) || 50) / 100;
      var imgH = Math.max(vh, vw / ASPECT), top = (vh - imgH) * py;
      var w = Math.min(vw * (vw < 700 ? .94 : .9), imgH * .27 * RATIO);
      word.style.setProperty('--word-w', w.toFixed(1) + 'px');
      word.style.setProperty('--word-y', (top + imgH * (vw / vh < .9 ? .265 : .43)).toFixed(1) + 'px');
      word.style.setProperty('--hw-stroke', (vw < 700 ? 1.4 : w > 1400 ? 2.4 : 2) + 'px');
    }
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    window.addEventListener('resize', fit);
  })();

  /* HERO passport: rises out of the night, the cover swings open, and each figure lands on the page
     as an ink visa stamp. Scroll drives the book; the stamps fall with real timing; tap a stamp to stamp it again. */
  var Passport = (function () {
    var scene = $('[data-pp-scene]'); if (!scene) return null;
    var pp = $('[data-pp]', scene), cover = $('[data-pp-cover]', scene), tilt = $('[data-pp-tilt]', scene), hint = $('[data-pp-hint]', scene);
    var stamps = $$('[data-pp-stamp]', scene), TH = [.6, .73, .86], done = stamps.map(function () { return false; });
    function rot(el) { return parseFloat(getComputedStyle(el).getPropertyValue('--r')) || 0; }
    function slam(i) {
      var el = stamps[i], r = rot(el);
      gsap.killTweensOf(el);
      gsap.fromTo(el, { scale: 2.4, opacity: 0, rotation: r + (i % 2 ? -14 : 14), y: -30 },
        { scale: 1, opacity: 1, rotation: r, y: 0, duration: .34, ease: 'power4.in', onComplete: function () {
          el.classList.remove('is-burst'); void el.offsetWidth; el.classList.add('is-burst');
          gsap.fromTo(tilt, { y: 7 }, { y: 0, duration: .5, ease: 'elastic.out(1, .35)' });
          gsap.fromTo(el, { scale: .96 }, { scale: 1, duration: .3, ease: 'back.out(3)' });
        } });
    }
    function lift(i) { gsap.killTweensOf(stamps[i]); gsap.to(stamps[i], { opacity: 0, scale: 1.3, duration: .2, ease: 'power2.out' }); }
    function set(p) {
      var rise = Math.min(1, p / .25), open = Math.max(0, Math.min(1, (p - .25) / .25));
      var er = 1 - Math.pow(1 - rise, 3), eo = open < .5 ? 2 * open * open : 1 - Math.pow(-2 * open + 2, 2) / 2;
      gsap.set(pp, { y: (1 - er) * 160, rotationX: 36 - er * 22 - eo * 4, xPercent: -25 + eo * 25, opacity: Math.min(1, rise * 2) });
      gsap.set(cover, { rotationY: -180 * eo });
      TH.forEach(function (t, i) {
        if (p >= t && !done[i]) { done[i] = true; slam(i); }
        else if (p < t - .03 && done[i]) { done[i] = false; lift(i); }
      });
      if (hint) hint.classList.toggle('is-on', done[done.length - 1]);
    }
    function again(i) { if (i > -1 && (done[i] || !motion)) slam(i); }
    // The book is tilted in 3D, which makes browsers hit-test the page instead of the stamps on it,
    // so taps are matched against where each stamp is actually drawn on screen (topmost first).
    function stampAt(x, y) {
      for (var i = stamps.length - 1; i >= 0; i--) {
        var r = stamps[i].getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var dx = (x - cx) / (r.width * .46), dy = (y - cy) / (r.height * .46);
        if (dx * dx + dy * dy <= 1 && getComputedStyle(stamps[i]).opacity > .5) return i;
      }
      return -1;
    }
    var pageR = $('.pp__page--r', scene);
    pageR.addEventListener('click', function (e) { again(stampAt(e.clientX, e.clientY)); });
    pageR.addEventListener('pointermove', function (e) {
      var i = stampAt(e.clientX, e.clientY);
      stamps.forEach(function (el, k) { el.classList.toggle('is-hover', k === i); });
      pageR.style.cursor = i > -1 ? 'pointer' : '';
    });
    pageR.addEventListener('pointerleave', function () { stamps.forEach(function (el) { el.classList.remove('is-hover'); }); });
    stamps.forEach(function (el, i) {
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); again(i); } });
    });
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce && window.gsap) {
      var rx = gsap.quickTo(tilt, 'rotationX', { duration: .9, ease: 'power3.out' }), ry = gsap.quickTo(tilt, 'rotationY', { duration: .9, ease: 'power3.out' });
      scene.addEventListener('pointermove', function (e) {
        var r = scene.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
        ry(nx * 16); rx(-ny * 10);
      });
      scene.addEventListener('pointerleave', function () { rx(0); ry(0); });
    }
    if (!motion) { stamps.forEach(function (el) { el.style.opacity = 1; }); if (hint) hint.classList.add('is-on'); }
    return { set: set };
  })();

  /* =====================================================================
     SCROLL STORY
     ===================================================================== */
  function choreograph() {
    if (!motion || !$('#home')) return;
    var mm = gsap.matchMedia();
    $$('[data-split]').forEach(splitWords);

    // HERO — the word sits between the sky and the skyline. Scrolling pushes the camera through it:
    // the letters grow and part around the statue, night falls, and the numbers arrive.
    var lines = $$('[data-hero-line]'), letters = $$('[data-hero-word] .hw'), fills = $$('[data-hero-word] .hw__f'), outlines = $$('[data-hero-word] .hw__o'), mid = (letters.length - 1) / 2;
    gsap.set(lines, { yPercent: 115 });
    gsap.set('[data-hero-in]', { y: 24, opacity: 0 });
    gsap.set('[data-hero-word]', { x: 0, y: 0, xPercent: -50, yPercent: -50 });
    gsap.set(letters, { yPercent: 60, opacity: 0 });
    var started = false;
    function intro() {
      if (started) return; started = true;
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .fromTo('[data-hero-scene]', { scale: 1.08, opacity: .35 }, { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }, 0)
        .to(letters, { yPercent: 0, opacity: 1, duration: 1.4, stagger: { each: .07, from: 'center' } }, .35)
        .to(lines, { yPercent: 0, duration: 1.2, stagger: .1 }, .8)
        .to('[data-hero-in]', { y: 0, opacity: 1, duration: 1, stagger: .08 }, 1.05);
    }
    var heroImg = $('[data-hero-img]');
    if (heroImg && !heroImg.complete) { heroImg.addEventListener('load', intro, { once: true }); setTimeout(intro, 1600); } else intro();

    ScrollTrigger.create({ trigger: '#home', start: 'top top', end: 'bottom bottom', toggleClass: { targets: document.documentElement, className: 'at-hero' } });
    var ppP = { p: 0 };
    if (Passport) Passport.set(0);
    var tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true } });
    tl.to('[data-hero-copy]', { y: 60, opacity: 0, duration: .14 }, 0)
      .to('.hero__scroll, .hero__credit, [data-tkr]', { autoAlpha: 0, duration: .08 }, 0)
      // camera push: the photo grows slowly, the word much faster — depth you can feel
      .to('[data-hero-layer]', { scale: 1.16, duration: .62, ease: 'power1.in', transformOrigin: '50% 58%' }, 0)
      .to('[data-hero-word]', { scale: 2.4, duration: .46, ease: 'power2.in' }, 0)
      .to(fills, { opacity: 1, duration: .18 }, .14)
      .to(outlines, { opacity: 0, duration: .1 }, .26)
      // letters part around the statue and fly past the camera
      .to(letters, { x: function (i) { return (i - mid) * window.innerWidth * .34; }, scale: function (i) { return 1.6 + Math.abs(i - mid) * .5; }, opacity: 0, duration: .26, ease: 'power2.in', stagger: { each: .012, from: 'center' } }, .4)
      .to('.hero__mist', { opacity: 0, duration: .3 }, .3)
      .to('[data-hero-night]', { opacity: .82, duration: .3 }, .42)
      .to('[data-hero-layer]', { yPercent: 10, duration: .3, ease: 'power2.in' }, .62)
      .to('[data-hero-night]', { opacity: 1, duration: .14 }, .72)
      .fromTo('[data-hero-after]', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: .12, ease: 'power2.out',
        onUpdate: function () { $('[data-hero-after]').classList.toggle('is-live', this.progress() > .6); } }, .68)
      // the passport: rises, opens, and the stamps land as you keep scrolling
      .to(ppP, { p: 1, duration: .38, onUpdate: function () { if (Passport) Passport.set(ppP.p); } }, .7)
      .to({}, { duration: .06 }, 1.08);

    // cursor: the word drifts against the statue, so the photograph reads in depth
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var stage = $('[data-hero-stage]');
      var wx = gsap.quickTo('[data-hero-word]', 'x', { duration: 1.1, ease: 'power3.out' }), wy = gsap.quickTo('[data-hero-word]', 'y', { duration: 1.1, ease: 'power3.out' });
      var lx = gsap.quickTo('[data-hero-layer]', 'x', { duration: 1.4, ease: 'power3.out' }), ly = gsap.quickTo('[data-hero-layer]', 'y', { duration: 1.4, ease: 'power3.out' });
      stage.addEventListener('pointermove', function (e) {
        var nx = e.clientX / window.innerWidth - .5, ny = e.clientY / window.innerHeight - .5;
        wx(-nx * 34); wy(-ny * 16); lx(nx * 12); ly(ny * 6);
      });
      stage.addEventListener('pointerleave', function () { wx(0); wy(0); lx(0); ly(0); });
    }

    // headings: masked word rise (each section keeps its own motion beyond this)
    $$('[data-split]').forEach(function (h) {
      gsap.fromTo($$('.wi', h), { yPercent: 115 }, { yPercent: 0, duration: 1.15, ease: 'power4.out', stagger: .05, scrollTrigger: { trigger: h, start: 'top 86%', once: true } });
    });
    gsap.set('[data-reveal]', { opacity: 0 });
    ScrollTrigger.batch('[data-reveal]', { start: 'top 90%', once: true, onEnter: function (els) { gsap.fromTo(els, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out', stagger: .08, overwrite: true }); } });

    // WHY — the Brooklyn Bridge panorama pans past while the four reasons fill in
    var whyWords = [];
    $$('[data-why-text]').forEach(function (p) {
      (function walk(node) {
        Array.prototype.slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var f = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(function (part) {
              if (!part) return;
              if (/^\s+$/.test(part)) { f.appendChild(document.createTextNode(part)); return; }
              var w = document.createElement('span'); w.className = 'rw'; w.textContent = part; f.appendChild(w); whyWords.push(w);
            });
            n.parentNode.replaceChild(f, n);
          } else if (n.nodeType === 1) walk(n);
        });
      })(p);
    });
    mm.add('(min-width: 761px)', function () {
      var pano = $('[data-why-pano]'), reasons = $$('[data-why-reasons] li');
      var dist = function () { return Math.max(0, pano.scrollWidth - innerWidth); };
      gsap.timeline({ scrollTrigger: { trigger: '[data-why]', start: 'top top', end: '+=310%', scrub: .35, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
        onUpdate: function (s) { var q = Math.max(0, (s.progress - .05) / .4); reasons.forEach(function (r, i) { var v = Math.min(1, Math.max(0, q * reasons.length - i)); r.style.setProperty('--fill', (v * 100).toFixed(1) + '%'); r.style.opacity = (.14 + v * .86).toFixed(3); r.style.transform = 'translateY(' + ((1 - v) * 10).toFixed(1) + 'px)'; r.classList.toggle('is-lit', v > .98); }); } } })
        .fromTo(pano, { x: 0 }, { x: function () { return -dist(); }, ease: 'none' }, 0)
        .fromTo('.why__intro', { y: 0 }, { y: -40, ease: 'none' }, 0)
        // the two paragraphs write themselves in, word by word, as the bridge pans
        .fromTo(whyWords, { opacity: 0, yPercent: 70, rotation: 4 }, { opacity: 1, yPercent: 0, rotation: 0, ease: 'power2.out', duration: .46 / whyWords.length * 1.4, stagger: .46 / whyWords.length }, .03)
        // hand-off: the bridge falls back into a dimmed card while the map slides up over it
        .to('[data-why]', { scale: .9, borderRadius: 28, ease: 'power1.inOut', duration: .238 }, .5)
        .to('[data-why-dim]', { opacity: .7, ease: 'none', duration: .238 }, .5);
    });
    // phones (no pin): the same word reveal, tied to the paragraph's own scroll
    mm.add('(max-width: 760px)', function () {
      gsap.fromTo(whyWords, { opacity: 0, yPercent: 70 }, { opacity: 1, yPercent: 0, ease: 'power2.out', duration: 1.4, stagger: 1, scrollTrigger: { trigger: '[data-why-text]', start: 'top 85%', end: 'bottom 35%', scrub: .3 } });
    });

    // DESTINATIONS — pinned; each scroll step wipes in the next city
    if (dest) dest.bind(ScrollTrigger.create({ trigger: '[data-dx]', start: 'top top', end: '+=' + (dest.n * 70) + '%', pin: true, anticipatePin: 1, scrub: true,
      onUpdate: function (s) { dest.camera(s.progress); } }));
    mm.add('(min-width: 761px)', function () {
      gsap.fromTo('[data-dx]', { borderTopLeftRadius: 36, borderTopRightRadius: 36 }, { borderTopLeftRadius: 0, borderTopRightRadius: 0, ease: 'none', scrollTrigger: { trigger: '#destinations', start: 'top bottom', end: 'top top', scrub: true } });
      gsap.fromTo('[data-dx-map]', { scale: 1.18, opacity: .3 }, { scale: 1, opacity: 1, ease: 'power1.out', scrollTrigger: { trigger: '#destinations', start: 'top bottom', end: 'top top', scrub: true } });
    });
    gsap.fromTo('.dx__head > *', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: .08, ease: 'power3.out', scrollTrigger: { trigger: '#destinations', start: 'top 70%', once: true } });

    // FINDER — the map rises in perspective, states fill from east to west
    gsap.fromTo('.finder__map', { rotateX: 32, y: 60, opacity: 0, transformPerspective: 1200, transformOrigin: '50% 100%' }, { rotateX: 0, y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '.finder__map', start: 'top 85%', once: true } });
    gsap.fromTo('.finder__bubbles .bub circle', { scale: 0, transformOrigin: 'center', transformBox: 'fill-box' }, { scale: 1, duration: .8, ease: 'back.out(2)', stagger: { each: .02, from: 'end' }, scrollTrigger: { trigger: '.finder__map', start: 'top 70%', once: true } });

    // SERVICES — index rows slide in like a contents page
    gsap.fromTo('.xp__p', { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: .06, clearProps: 'transform', scrollTrigger: { trigger: '.xp', start: 'top 85%', once: true } });

    // FUNDING — canyon opens from a horizon line, then drifts in parallax
    gsap.fromTo('.fund__hero', { clipPath: 'inset(40% 8% 40% 8% round 24px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: '.fund__hero', start: 'top 95%', end: 'top 15%', scrub: true } });
    if (!$('.fund__img--bank') || mqMobile.matches) gsap.fromTo('.fund__img', { yPercent: -8, scale: 1.15 }, { yPercent: 8, scale: 1, ease: 'none', scrollTrigger: { trigger: '.fund__hero', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.fromTo('.fund__list li', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out', stagger: .1, scrollTrigger: { trigger: '.fund__list', start: 'top 80%', once: true } });
    gsap.fromTo('.calc', { rotateX: 14, y: 60, opacity: 0, transformPerspective: 1200 }, { rotateX: 0, y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.calc', start: 'top 85%', once: true } });

    // VISA — tabs and fact cards cascade
    gsap.fromTo('.visa__stepper > *', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out', stagger: .1, scrollTrigger: { trigger: '.visa__stepper', start: 'top 80%', once: true } });

    gsap.fromTo('[data-note]', { y: 70, opacity: 0, rotation: -4 }, { y: 0, opacity: 1, rotation: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '[data-note]', start: 'top 92%', once: true } });

    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(choreograph); else choreograph();
})();
