/* Tutee Connect USA — illustrated New York edition.
   Native scrolling throughout; GSAP ScrollTrigger only scrubs transforms/opacity.
   (Built from tools/main.head.js + explorer/faq blocks + tools/main.tail.js — edit those, then run tools/build-js.py) */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mqMobile = window.matchMedia('(max-width: 760px)');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  if (!hasGsap || reduce) root.classList.add('motion-off');
  var dirBase = window.TC_DIR_BASE || 'universities.html';
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* ---------------- seamless marquees ---------------- */
  $$('.fin__track').forEach(function (list) {
    Array.prototype.slice.call(list.children).forEach(function (n) { var c = n.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.alt = ''; list.appendChild(c); });
  });

  /* ---------------- header, menu, section spy ---------------- */
  var nav = $('[data-nav]');
  function onScrollNav() {
    nav && nav.classList.toggle('is-scrolled', window.scrollY > 40);
    root.classList.toggle('at-top', window.scrollY < window.innerHeight * 0.5);
  }
  window.addEventListener('scroll', onScrollNav, { passive: true }); onScrollNav();

  var menu = $('[data-menu]'), burger = $('[data-menu-open]');
  function openMenu() { menu.hidden = false; requestAnimationFrame(function () { menu.classList.add('is-open'); }); burger.setAttribute('aria-expanded', 'true'); document.body.classList.add('lock'); $('[data-menu-close]').focus(); }
  function closeMenu() { menu.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('lock'); setTimeout(function () { menu.hidden = true; }, 320); }
  if (menu && burger) {
    burger.addEventListener('click', openMenu);
    $('[data-menu-close]').addEventListener('click', closeMenu);
    $$('[data-menu-link]', menu).forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) closeMenu(); });
    window.TCCloseMenu = function () { if (!menu.hidden) closeMenu(); };
  }
  var spyLinks = $$('[data-spy]');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var key = en.target.getAttribute('data-section');
        spyLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('data-spy') === key); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('[data-section]').forEach(function (s) { spy.observe(s); });
  }

  /* ---------------- magnetic buttons ---------------- */
  if (finePointer && !reduce) {
    $$('[data-magnetic]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / r.width, y = (e.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = 'translate(' + (x * 8).toFixed(1) + 'px,' + (y * 6).toFixed(1) + 'px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
  }

  /* ---------------- counters ---------------- */
  function countUp(el) {
    var to = parseFloat(el.getAttribute('data-count')), suffix = el.getAttribute('data-suffix') || '';
    if (reduce || !hasGsap) { el.textContent = to + suffix; return; }
    var o = { v: 0 };
    gsap.to(o, { v: to, duration: 1.6, ease: 'power3.out', onUpdate: function () { el.textContent = Math.round(o.v) + suffix; } });
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } }); }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { cio.observe(el); });
  }

  /* ---------------- word-split headings ---------------- */
  function splitWords(el) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    var label = el.textContent.replace(/\s+/g, ' ').trim();
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span'); w.className = 'w'; w.setAttribute('aria-hidden', 'true');
            var i = document.createElement('span'); i.className = 'wi'; i.textContent = part; w.appendChild(i); frag.appendChild(w);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1) walk(n);
      });
    })(el);
    el.setAttribute('aria-label', label);
  }

  /* ---------------- HERO: layered illustration ---------------- */
  var hero = (function () {
    var section = $('#home'), scene = $('[data-scene]');
    if (!section || !scene) return null;
    var layers = $$('.layer[data-depth]', scene).map(function (el) { return { el: el, d: parseFloat(el.getAttribute('data-depth')) || 0 }; });
    var sunglow = $('[data-sunglow]', scene);
    var ptr = { x: 0, y: 0, tx: 0, ty: 0 }, sp = 0, spT = 0, visible = true, raf = 0, last = '';

    function focal() {
      var vw = window.innerWidth, vh = window.innerHeight, aspect = vw / vh;
      var sw = Math.max(vw, vh * 16 / 9), over = sw - vw;
      var fx = aspect < 0.65 ? 0.17 : aspect < 0.95 ? 0.28 : 0.5;
      var shift = Math.max(-over / 2, Math.min(over / 2, (0.5 - fx) * sw));
      scene.style.setProperty('--shift', shift.toFixed(1) + 'px');
    }
    function readScroll() {
      var r = section.getBoundingClientRect();
      var span = Math.max(1, r.height - window.innerHeight);
      spT = reduce || span < 60 ? 0 : Math.max(0, Math.min(1, -r.top / span));
      section.classList.toggle('is-scrolled', spT > 0.06);
    }
    function frame() {
      ptr.x += (ptr.tx - ptr.x) * 0.06; ptr.y += (ptr.ty - ptr.y) * 0.06;
      sp += (spT - sp) * 0.14;
      var vh = window.innerHeight;
      var key = ptr.x.toFixed(3) + ptr.y.toFixed(3) + sp.toFixed(3);
      if (key !== last) {
        last = key;
        layers.forEach(function (l) {
          var x = -ptr.x * l.d * 22, y = -ptr.y * l.d * 12 + sp * l.d * vh * 0.34;
          l.el.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
        });
        scene.style.setProperty('--zoom', (1.04 + sp * 0.16).toFixed(4));
        if (sunglow) sunglow.style.setProperty('--glow', (0.5 + (1 - Math.abs(ptr.x)) * 0.12 + sp * 0.25).toFixed(3));
      }
      var moving = Math.abs(ptr.tx - ptr.x) > 0.001 || Math.abs(ptr.ty - ptr.y) > 0.001 || Math.abs(spT - sp) > 0.0005;
      raf = moving && visible ? requestAnimationFrame(frame) : 0;
    }
    function kick() { if (!raf && visible) raf = requestAnimationFrame(frame); }
    if (!reduce) {
      if (finePointer) window.addEventListener('pointermove', function (e) { ptr.tx = (e.clientX / window.innerWidth - 0.5) * 2; ptr.ty = (e.clientY / window.innerHeight - 0.5) * 2; kick(); }, { passive: true });
      window.addEventListener('scroll', function () { readScroll(); kick(); }, { passive: true });
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible) kick(); }).observe(section);
    }
    // landmark labels: hover on desktop, tap on touch
    $$('.spot', scene).forEach(function (s) {
      s.addEventListener('click', function () { var on = !s.classList.contains('is-on'); $$('.spot', scene).forEach(function (o) { o.classList.remove('is-on'); }); s.classList.toggle('is-on', on); });
    });
    window.addEventListener('resize', function () { focal(); readScroll(); kick(); });
    focal(); readScroll(); frame();
    return { section: section };
  })();

  /* ---------------- universities: editorial index ---------------- */
  var leadApi = null;
  (function unis() {
    var list = $('[data-uindex]'), feat = $('[data-ufeature]');
    var data = (window.TC_UNIVERSITIES || []).slice(0, 12);
    if (!list || !feat || !data.length) return;
    list.innerHTML = data.map(function (u, i) {
      return '<li><button type="button" data-i="' + i + '"><span class="u-rank">#' + u.rank + '</span><span class="u-name">' + esc(u.name) + '</span><span class="u-loc">' + esc(u.location) + '</span></button></li>';
    }).join('');
    var btns = $$('button', list), current = -1, t;
    function show(i) {
      if (i === current) return; current = i;
      var u = data[i];
      btns.forEach(function (b, k) { b.classList.toggle('is-active', k === i); b.setAttribute('aria-pressed', k === i); });
      $('[data-uf-rank]', feat).textContent = 'Rank #' + u.rank;
      $('[data-uf-loc]', feat).textContent = u.location;
      $('[data-uf-name]', feat).textContent = u.name;
      $('[data-uf-type]', feat).textContent = u.type;
      $('[data-uf-acc]', feat).textContent = u.acceptance;
      $('[data-uf-prog]', feat).textContent = u.programs;
      feat.classList.remove('is-swapping'); void feat.offsetWidth; feat.classList.add('is-swapping');
    }
    btns.forEach(function (b, i) {
      b.addEventListener('mouseenter', function () { clearTimeout(t); t = setTimeout(function () { show(i); }, 60); });
      b.addEventListener('focus', function () { show(i); });
      b.addEventListener('click', function () { show(i); if (mqMobile.matches) feat.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); });
    });
    $('[data-uf-apply]', feat).addEventListener('click', function () { if (leadApi && current > -1) leadApi.setSelection([data[current].name]); });
    show(0);
  })();

  /* ---------------- programmes explorer (from the directory data) ---------------- */
  (function programmes() {
    var tabsEl = $('[data-prog-tabs]'), panel = $('[data-prog-panel]');
    var data = window.TC_UNIVERSITIES || [];
    if (!tabsEl || !panel || !data.length) return;
    var CATS = [
      { name: 'Computer Science & AI', icon: 'i-cpu', q: 'Computer Science', stem: true, k: ['computer', 'computing', ' ai', 'ai', 'cyber', 'information technology', 'information sciences', 'information studies', 'information systems', 'it', 'game design'] },
      { name: 'Engineering', icon: 'i-gear', q: 'Engineering', stem: true, k: ['engineering', 'aerospace', 'robotics', 'optics', 'optical', 'mining', 'materials', 'aviation', 'petroleum'] },
      { name: 'Business & Finance', icon: 'i-briefcase', q: 'Business', k: ['business', 'finance', 'accounting', 'economics', 'management', 'supply chain', 'logistics', 'actuarial', 'real estate', 'risk', 'hospitality', 'hotel', 'leadership', 'innovation'] },
      { name: 'Health & Medicine', icon: 'i-heart', q: 'Nursing', k: ['medicine', 'medical', 'nursing', 'public health', 'pharmacy', 'dentistry', 'dental', 'physical therapy', 'audiology', 'optometry', 'speech', 'health', 'pre-med', 'veterinary'] },
      { name: 'Sciences & Mathematics', icon: 'i-flask', q: 'Physics', stem: true, k: ['physics', 'math', 'chemistry', 'astronomy', 'physical sciences', 'biology', 'biological', 'biomedical', 'geophysics', 'oceanography', 'marine', 'meteorology', 'cognitive', 'neuro'] },
      { name: 'Law, Policy & Society', icon: 'i-scale', q: 'Law', k: ['law', 'policy', 'political', 'government', 'international', 'criminal', 'criminology', 'social work', 'psychology', 'social sciences', 'public affairs', 'public administration', 'border', 'human services', 'forensic'] },
      { name: 'Arts, Design & Media', icon: 'i-palette', q: 'Arts', k: ['film', 'arts', 'art', 'music', 'architecture', 'design', 'journalism', 'communications', 'theater', 'drama', 'cinema', 'creative writing', 'photography', 'media', 'dance', 'ballet', 'broadcast', 'public relations', 'textiles', 'packaging'] },
      { name: 'Agriculture & Environment', icon: 'i-leaf', q: 'Agriculture', k: ['agriculture', 'forestry', 'environment', 'natural resources', 'wildlife', 'energy', 'food science', 'animal science', 'arctic', 'urban planning'] },
      { name: 'Education & Humanities', icon: 'i-book', q: 'Education', k: ['education', 'history', 'english', 'liberal arts', 'philosophy', 'linguistics', 'theology', 'classics', 'asian studies', 'leadership studies', 'special education'] }
    ];
    function matches(token, k) {
      var t = ' ' + token.toLowerCase() + ' ';
      return k.some(function (w) { w = w.trim(); return w.length <= 3 ? new RegExp('(^|\\W)' + w + '(\\W|$)').test(t) : t.indexOf(w) > -1; });
    }
    CATS.forEach(function (c) {
      var freq = {}; c.unis = [];
      data.forEach(function (u) {
        var hit = false;
        u.programs.split(',').forEach(function (p) { p = p.trim(); if (p && matches(p, c.k)) { hit = true; freq[p] = (freq[p] || 0) + 1; } });
        if (hit) c.unis.push(u);
      });
      c.tags = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; }).slice(0, 10);
    });
    tabsEl.innerHTML = CATS.map(function (c, i) {
      return '<button type="button" role="tab" class="prog__tab" aria-selected="false" data-i="' + i + '"><span class="pt-icon"><svg class="ico"><use href="#' + c.icon + '"/></svg></span><span class="pt-name">' + c.name + '</span><span class="pt-count">' + c.unis.length + '</span></button>';
    }).join('');
    var tabs = $$('.prog__tab', tabsEl);
    function show(i) {
      var c = CATS[i];
      tabs.forEach(function (t, k) { t.setAttribute('aria-selected', k === i); t.tabIndex = k === i ? 0 : -1; });
      $('[data-prog-icon]', panel).setAttribute('href', '#' + c.icon);
      $('[data-prog-title]', panel).textContent = c.name;
      $('[data-prog-count]', panel).textContent = 'Listed as a strength at ' + c.unis.length + ' universities in our directory';
      $('[data-prog-stem]', panel).hidden = !c.stem;
      $('[data-prog-tags]', panel).innerHTML = c.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
      $('[data-prog-unis]', panel).innerHTML = c.unis.slice(0, 8).map(function (u, k) {
        return '<li style="--i:' + k + '"><strong>' + esc(u.name) + '</strong><span>#' + u.rank + ' · ' + esc(u.location) + ' · ' + esc(u.type) + '</span></li>';
      }).join('');
      var all = $('[data-prog-all]', panel);
      all.href = dirBase + '?q=' + encodeURIComponent(c.q);
      all.querySelector('span').textContent = 'See ' + c.q + ' in the directory';
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(i); });
      t.addEventListener('keydown', function (e) {
        var d = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1 : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
        if (!d) return; e.preventDefault(); var n = (i + d + tabs.length) % tabs.length; tabs[n].focus(); show(n);
      });
    });
    show(0);
  })();

