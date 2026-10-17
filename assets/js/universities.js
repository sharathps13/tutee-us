/* University Atlas: every accredited, degree-granting US institution (IPEDS 2024) on one map.
   The map lights up state by state on load; filters dim the dots that don't match; hovering a dot
   names it, clicking a state filters to it; the list pages in as you scroll; shortlist feeds the
   enquiry form. Featured entries (Tutee Connect's own list) keep their rank, programs and acceptance. */
(function () {
  'use strict';
  var ALL = window.TC_ALL; var root = document.querySelector('[data-atlas]');
  if (!ALL || !root) return;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n) { return n.toLocaleString('en-US'); }

  // ---- data ----
  var C = {}; ALL.cols.forEach(function (c, i) { C[c] = i; });
  var U = ALL.rows.map(function (r, i) {
    return { i: i, id: r[C.id], name: r[C.name], city: r[C.city], st: r[C.st], web: r[C.web], control: r[C.control], level: r[C.level], size: r[C.size], cat: r[C.cat], hbcu: r[C.hbcu], x: r[C.x], y: r[C.y], rank: r[C.rank], programs: r[C.programs], acceptance: r[C.acceptance],
      key: (r[C.name] + ' ' + r[C.city] + ' ' + r[C.st] + ' ' + r[C.programs]).toLowerCase() };
  });
  var CONTROL = { 1: 'Public', 2: 'Private non-profit', 3: 'For-profit' };
  var LEVEL = { 1: '4-year', 2: '2-year', 3: 'Under 2-year' };
  var CAT = { R1: 'Research university (R1)', R2: 'Research university (R2)', D: 'Doctoral & professional', M: "Master's university", B: "Bachelor's college", A: 'Community college', S: 'Special focus', T: 'Tribal college' };
  var SIZE = { 1: 'Under 1,000 students', 2: '1,000–4,999 students', 3: '5,000–9,999 students', 4: '10,000–19,999 students', 5: '20,000+ students' };
  var stateNames = {}; $$('[data-a-states] path').forEach(function (p) { stateNames[p.getAttribute('data-st')] = p.textContent; });

  // ---- hero counters ----
  var stats = { total: U.length, four: U.filter(function (u) { return u.level === 1; }).length, public: U.filter(function (u) { return u.control === 1; }).length, r1: U.filter(function (u) { return u.cat === 'R1'; }).length, featured: U.filter(function (u) { return u.rank; }).length };
  $$('[data-stat]').forEach(function (el) {
    var to = stats[el.getAttribute('data-stat')]; if (reduce || !window.requestAnimationFrame) { el.textContent = fmt(to); return; }
    var t0 = null; (function tick(t) { t0 = t0 || t; var k = Math.min(1, (t - t0) / 1600); k = 1 - Math.pow(1 - k, 3); el.textContent = fmt(Math.round(to * k)); if (k < 1) requestAnimationFrame(tick); })(performance.now());
  });

  // ---- state select ----
  var stSel = $('[data-a-state]');
  Object.keys(stateNames).sort(function (a, b) { return stateNames[a].localeCompare(stateNames[b]); }).forEach(function (k) {
    var n = U.filter(function (u) { return u.st === k; }).length; var o = document.createElement('option'); o.value = k; o.textContent = stateNames[k] + ' (' + n + ')'; o.setAttribute('data-label', stateNames[k]); o.setAttribute('data-sub', n.toLocaleString('en-US')); o.setAttribute('data-short', stateNames[k]); o.setAttribute('data-badge', k); stSel.appendChild(o);
  });
  if (stSel.options[0]) stSel.options[0].setAttribute('data-sub', U.length.toLocaleString('en-US'));
  if (window.TCSelect) { window.TCSelect.enhance(stSel, { search: true, placeholder: 'Search a state', theme: 'dark', caption: 'State' }); window.TCSelect.enhance($('[data-a-sort]'), { theme: 'dark', caption: 'Sort' }); }

  // ---- filter state ----
  var F = { q: '', control: '', level: '', st: '', chips: {}, sort: 'feat' };
  var match = new Uint8Array(U.length), list = [];
  function apply() {
    var q = F.q.toLowerCase().replace(/,/g, ' ').trim(), terms = q ? q.split(/\s+/) : [];
    var cats = [], sizes = [];
    Object.keys(F.chips).forEach(function (k) { if (!F.chips[k]) return; if (k.indexOf('cat:') === 0) cats.push(k.slice(4)); if (k.indexOf('size:') === 0) sizes.push(+k.slice(5)); });
    list = [];
    U.forEach(function (u) {
      var ok = (!F.control || u.control === +F.control) && (!F.level || u.level === +F.level) && (!F.st || u.st === F.st) &&
        (!cats.length || cats.indexOf(u.cat) > -1) && (!sizes.length || sizes.indexOf(u.size) > -1) &&
        (!F.chips.hbcu || u.hbcu) && (!F.chips.feat || u.rank) &&
        (!terms.length || terms.every(function (t) { return u.key.indexOf(t) > -1 || (t.length === 2 && u.st.toLowerCase() === t); }));
      match[u.i] = ok ? 1 : 0; if (ok) list.push(u);
    });
    list.sort(F.sort === 'az' ? function (a, b) { return a.name.localeCompare(b.name); }
      : F.sort === 'size' ? function (a, b) { return (b.size - a.size) || a.name.localeCompare(b.name); }
      : function (a, b) { return ((a.rank || 1e4) - (b.rank || 1e4)) || (catW(a) - catW(b)) || a.name.localeCompare(b.name); });
    $('[data-a-count]').textContent = fmt(list.length);
    $('[data-a-countword]').textContent = list.length === 1 ? 'institution' : 'institutions';
    $('[data-a-where]').textContent = F.st ? ' in ' + stateNames[F.st] : '';
    var any = F.q || F.control || F.level || F.st || Object.keys(F.chips).some(function (k) { return F.chips[k]; });
    $('[data-a-reset]').hidden = !any;
    $('[data-a-empty]').hidden = list.length > 0;
    $$('[data-a-states] path').forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-st') === F.st); });
    shown = 0; resultsEl.innerHTML = ''; more(); fadeTo = 1; kickDraw();
    syncUrl();
  }
  function catW(u) { return { R1: 0, R2: 1, D: 2, M: 3, B: 4, S: 5, T: 6, A: 7 }[u.cat] != null ? { R1: 0, R2: 1, D: 2, M: 3, B: 4, S: 5, T: 6, A: 7 }[u.cat] : 8; }

  // ---- results list (pages in as you scroll) ----
  var resultsEl = $('[data-a-results]'), PAGE = 30, shown = 0, picks = [];
  function card(u) {
    var on = picks.indexOf(u.name) > -1;
    var chips = [CONTROL[u.control], LEVEL[u.level], CAT[u.cat], SIZE[u.size], u.hbcu ? 'HBCU' : ''].filter(Boolean);
    return '<li class="ucard' + (u.rank ? ' ucard--feat' : '') + (on ? ' is-picked' : '') + '" data-u="' + u.i + '">' +
      (u.rank ? '<span class="ucard__rank" title="Tutee Connect featured rank">★ #' + u.rank + '</span>' : '<span class="ucard__dot ucard__dot--' + u.control + '" aria-hidden="true"></span>') +
      '<div class="ucard__main"><h3>' + esc(u.name) + '</h3><p class="ucard__loc">' + esc(u.city) + ', ' + esc(stateNames[u.st] || u.st) + '</p>' +
      (u.programs ? '<p class="ucard__prog">' + esc(u.programs) + (u.acceptance ? ' · Acceptance ' + esc(u.acceptance) : '') + '</p>' : '') +
      '<ul class="ucard__chips">' + chips.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="ucard__act">' +
      '<button type="button" class="ucard__pick" data-pick aria-pressed="' + on + '">' + (on ? '✓ Shortlisted' : '+ Shortlist') + '</button></div></li>';
  }
  function more() {
    if (shown >= list.length) return;
    var from = shown; shown = Math.min(list.length, shown + PAGE);
    resultsEl.insertAdjacentHTML('beforeend', list.slice(from, shown).map(card).join(''));
  }
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting) more(); }, { rootMargin: '600px 0px' }).observe($('[data-a-more]'));
  resultsEl.addEventListener('click', function (e) {
    var li = e.target.closest('[data-u]'); if (!li) return; var u = U[+li.getAttribute('data-u')];
    if (e.target.closest('[data-pick]')) { togglePick(u.name); return; }
    if (e.target.closest('a')) return;
    focusDot(u, true);
  });
  resultsEl.addEventListener('pointerover', function (e) { var li = e.target.closest('[data-u]'); if (li) { hover = U[+li.getAttribute('data-u')]; kickDraw(); } });
  resultsEl.addEventListener('pointerleave', function () { hover = null; kickDraw(); });

  // ---- shortlist + enquiry ----
  var selbar = $('[data-selbar]'), dialog = $('#applyDialog'), formApi = null, form = $('[data-apply-form]');
  try { picks = JSON.parse(localStorage.getItem('tc-shortlist') || '[]'); } catch (e) { picks = []; }
  function togglePick(name) { picks = picks.indexOf(name) > -1 ? picks.filter(function (n) { return n !== name; }) : picks.concat(name); syncPicks(); }
  function syncPicks() {
    try { localStorage.setItem('tc-shortlist', JSON.stringify(picks)); } catch (e) {}
    $$('[data-u]', resultsEl).forEach(function (li) { var on = picks.indexOf(U[+li.getAttribute('data-u')].name) > -1; li.classList.toggle('is-picked', on); var b = $('[data-pick]', li); b.setAttribute('aria-pressed', on); b.textContent = on ? '✓ Shortlisted' : '+ Shortlist'; });
    if (selbar) {
      $('[data-sel-count]').textContent = picks.length; $('[data-sel-word]').textContent = picks.length === 1 ? 'university' : 'universities';
      if (picks.length) { selbar.hidden = false; requestAnimationFrame(function () { selbar.classList.add('is-on'); }); } else { selbar.classList.remove('is-on'); setTimeout(function () { if (!picks.length) selbar.hidden = true; }, 300); }
    }
    if (formApi) formApi.setSelection(picks);
    kickDraw();
  }
  if (form && window.TCForms) formApi = window.TCForms.mount(form, { dynamicButton: true, onSelectionChange: function (l) { picks = l; syncPicks(); } });
  var proceed = $('[data-proceed]');
  if (proceed && dialog) {
    proceed.addEventListener('click', function () { if (formApi) formApi.setSelection(picks); if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', ''); document.body.classList.add('lock'); });
    $('[data-apply-close]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('close', function () { document.body.classList.remove('lock'); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  }

  // ---- controls ----
  var qEl = $('[data-a-q]'), qt;
  qEl.addEventListener('input', function () { clearTimeout(qt); qt = setTimeout(function () { F.q = qEl.value; apply(); }, 140); });
  $$('[data-a-group]').forEach(function (g) {
    var key = g.getAttribute('data-a-group');
    g.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; F[key] = b.getAttribute('data-v'); $$('button', g).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); apply(); });
  });
  $$('[data-chip]').forEach(function (b) { b.addEventListener('click', function () { var k = b.getAttribute('data-chip'); F.chips[k] = !F.chips[k]; b.setAttribute('aria-pressed', String(!!F.chips[k])); apply(); }); });
  stSel.addEventListener('change', function () { F.st = stSel.value; apply(); });
  $('[data-a-sort]').addEventListener('change', function (e) { F.sort = e.target.value; apply(); });
  function reset() {
    F = { q: '', control: '', level: '', st: '', chips: {}, sort: F.sort }; qEl.value = ''; stSel.value = '';
    $$('[data-a-group]').forEach(function (g) { $$('button', g).forEach(function (x, k) { x.setAttribute('aria-pressed', String(k === 0)); }); });
    $$('[data-chip]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); }); apply();
  }
  $('[data-a-reset]').addEventListener('click', reset); $('[data-a-reset2]').addEventListener('click', reset);
  $$('[data-a-states] path').forEach(function (p) {
    p.addEventListener('click', function () { var k = p.getAttribute('data-st'); F.st = F.st === k ? '' : k; stSel.value = F.st; apply(); });
  });
  function syncUrl() {
    if (!history.replaceState || location.protocol === 'file:' && location.hash.indexOf('#/universities') !== 0) return;
    var base = location.hash.indexOf('#/universities') === 0 ? '#/universities' : '';
    var q = F.q ? '?q=' + encodeURIComponent(F.q) : '';
    try { if (base) history.replaceState(null, '', location.pathname + location.search + base + q); else history.replaceState(null, '', location.pathname + q); } catch (e) { /* sandboxed preview (about:srcdoc) */ }
  }

  // ---- the map: one glowing dot per institution ----
  var mapEl = $('[data-a-map]'), cv = $('[data-a-canvas]'), ctx = cv.getContext('2d'), tip = $('[data-a-tip]'), cardEl = $('[data-a-card]');
  var W = 975, H = 610, dpr = 1, scale = 1, hover = null, focus = null, raf = 0, fadeTo = 1, intro = reduce ? 1 : 0, t0 = 0;
  var COL = { 1: [156, 196, 228], 2: [229, 138, 78], 3: [200, 190, 175] };
  function size() { var r = mapEl.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1); cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr); scale = r.width / W; kickDraw(); }
  function kickDraw() { if (!raf) raf = requestAnimationFrame(draw); }
  function draw(now) {
    raf = 0; if (!t0) t0 = now;
    if (intro < 1) intro = Math.min(1, (now - t0) / 1800);
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0); ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    var sweep = intro * 1.25 * W; // the country lights up from the east coast to the west
    for (var k = 0; k < U.length; k++) {
      var u = U[k]; if (u.x == null) continue;
      var lit = Math.max(0, Math.min(1, (sweep - (W - u.x)) / 120)); if (!lit) continue;
      var on = match[k], c = COL[u.control] || COL[3], r = .9 + u.size * .45 + (u.rank ? .8 : 0);
      ctx.fillStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + ((on ? .78 : .07) * lit).toFixed(3) + ')';
      ctx.beginPath(); ctx.arc(u.x, u.y, on ? r : r * .7, 0, 6.2832); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    // featured rings + shortlist rings
    for (var j = 0; j < U.length; j++) {
      var f = U[j]; if (!match[j] || f.x == null) continue;
      var picked = picks.indexOf(f.name) > -1;
      if (!(f.rank || picked)) continue;
      if ((W - f.x) > sweep) continue;
      ctx.strokeStyle = picked ? 'rgba(165,28,44,.95)' : 'rgba(247,242,232,.55)'; ctx.lineWidth = picked ? 1.6 : .7;
      ctx.beginPath(); ctx.arc(f.x, f.y, (picked ? 5 : 3.4), 0, 6.2832); ctx.stroke();
    }
    var h = hover || focus;
    if (h && h.x != null) {
      var pulse = reduce ? 0 : (Math.sin(now / 180) + 1) / 2;
      ctx.fillStyle = 'rgba(247,242,232,.95)'; ctx.beginPath(); ctx.arc(h.x, h.y, 3.2, 0, 6.2832); ctx.fill();
      ctx.strokeStyle = 'rgba(229,138,78,' + (.9 - pulse * .6).toFixed(2) + ')'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(h.x, h.y, 6 + pulse * 9, 0, 6.2832); ctx.stroke();
      placeTip(h);
      raf = requestAnimationFrame(draw);
    } else tip.hidden = true;
    if (intro < 1) raf = raf || requestAnimationFrame(draw);
  }
  function placeTip(u) {
    tip.hidden = false; tip.innerHTML = '<b>' + esc(u.name) + '</b><span>' + esc(u.city) + ', ' + esc(u.st) + ' · ' + esc(CONTROL[u.control]) + '</span>';
    var x = u.x * scale, y = u.y * scale, mw = mapEl.clientWidth;
    tip.style.transform = 'translate(' + Math.max(8, Math.min(mw - tip.offsetWidth - 8, x - tip.offsetWidth / 2)).toFixed(0) + 'px,' + Math.max(8, y - tip.offsetHeight - 14).toFixed(0) + 'px)';
  }
  function nearest(px, py) {
    var best = null, bd = 64 / (scale * scale);
    for (var k = 0; k < U.length; k++) { if (!match[k]) continue; var u = U[k]; if (u.x == null) continue; var dx = u.x - px, dy = u.y - py, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = u; } }
    return best;
  }
  mapEl.addEventListener('pointermove', function (e) {
    var r = mapEl.getBoundingClientRect(); var u = nearest((e.clientX - r.left) / scale, (e.clientY - r.top) / scale);
    if (u !== hover) { hover = u; mapEl.style.cursor = u ? 'pointer' : ''; kickDraw(); }
  });
  mapEl.addEventListener('pointerleave', function () { hover = null; kickDraw(); });
  mapEl.addEventListener('click', function (e) {
    var r = mapEl.getBoundingClientRect(); var u = nearest((e.clientX - r.left) / scale, (e.clientY - r.top) / scale);
    if (u) { e.stopPropagation(); e.preventDefault(); showCard(u); }
  }, true);
  function showCard(u) {
    focus = u;
    var on = picks.indexOf(u.name) > -1;
    cardEl.innerHTML = '<button type="button" class="atlas__cardx" aria-label="Close" data-cx>×</button>' + (u.rank ? '<span class="ucard__rank">★ Featured #' + u.rank + '</span>' : '') +
      '<h3>' + esc(u.name) + '</h3><p>' + esc(u.city) + ', ' + esc(stateNames[u.st] || u.st) + '</p><p class="atlas__cardmeta">' + [CONTROL[u.control], LEVEL[u.level], CAT[u.cat], SIZE[u.size]].filter(Boolean).map(esc).join(' · ') + '</p>' +
      (u.programs ? '<p class="atlas__cardprog">' + esc(u.programs) + '</p>' : '') +
      '<div class="atlas__cardact">' + '<button type="button" data-cpick>' + (on ? '✓ Shortlisted' : '+ Shortlist') + '</button></div>';
    cardEl.hidden = false; kickDraw();
    $('[data-cx]', cardEl).addEventListener('click', function () { cardEl.hidden = true; focus = null; kickDraw(); });
    $('[data-cpick]', cardEl).addEventListener('click', function () { togglePick(u.name); showCard(u); });
  }
  function focusDot(u, open) { focus = u; if (open) showCard(u); var top = mapEl.getBoundingClientRect().top; if (top < 0 || top > innerHeight * .5) mapEl.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); kickDraw(); }
  window.addEventListener('resize', size);
  if ('ResizeObserver' in window) new ResizeObserver(size).observe(mapEl);

  // ---- start ----
  var q0 = new URLSearchParams(location.search).get('q') || (location.hash.indexOf('?q=') > -1 ? decodeURIComponent(location.hash.split('?q=')[1]) : '');
  if (q0) { qEl.value = q0; F.q = q0; }
  window.TCDir = { search: function (q) { qEl.value = q || ''; F.q = qEl.value; apply(); } };
  size(); apply(); syncPicks();
})();
