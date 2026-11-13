/* TCShort — the university shortlist, shared by the landing page finder and the University Atlas.
   - Picks are kept for this visit only (sessionStorage): a fresh visit starts with an empty shortlist.
   - The bottom-centre bar appears only once something is shortlisted, and only where universities are
     being chosen: on the Atlas, and on the landing page while the "Find your university" slide is on screen.
   - "Evaluate my shortlist" goes to the free-counselling card in the footer, turned over, with the
     shortlisted universities already filled in. */
(function () {
  'use strict';
  if (window.TCShort) return;
  var KEY = 'tc-shortlist', subs = [], bar = null, kT = 0, inFinder = false, lastDir = null;
  try { localStorage.removeItem(KEY); } catch (e) {} // older builds kept it forever
  var picks = load();

  function load() { try { var a = JSON.parse(sessionStorage.getItem(KEY) || '[]'); return Array.isArray(a) ? a.filter(function (s) { return typeof s === 'string' && s; }) : []; } catch (e) { return []; } }
  function save() { try { sessionStorage.setItem(KEY, JSON.stringify(picks)); } catch (e) {} }
  function emit(added) {
    save(); render(added);
    subs.forEach(function (fn) { try { fn(picks.slice()); } catch (e) {} });
  }
  function onAtlas() { return document.body.classList.contains('page-dir'); }

  // ---- the bar ----
  function buildBar() {
    bar = document.createElement('div');
    bar.className = 'sbar'; bar.hidden = true;
    bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Your university shortlist');
    bar.innerHTML =
      '<span class="sbar__n" aria-hidden="true">0</span>' +
      '<div class="sbar__txt" aria-live="polite"><span class="sbar__k">Your shortlist</span><span class="sbar__line"><b class="sbar__name"></b><span class="sbar__more"></span></span></div>' +
      '<button type="button" class="sbar__go" data-sbar-go><span>Evaluate</span><span class="sbar__gx">&nbsp;my shortlist</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5.5 15.5 10 11 14.5"/></svg></button>' +
      '<button type="button" class="sbar__x" data-sbar-x aria-label="Clear shortlist" title="Clear shortlist"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m6 6 8 8M14 6l-8 8"/></svg></button>';
    document.body.appendChild(bar);
    bar.addEventListener('click', function (e) {
      if (e.target.closest('[data-sbar-x]')) { picks = []; emit(); return; }
      if (e.target.closest('[data-sbar-go]') || e.target.closest('.sbar__txt')) evaluate();
    });
  }
  function shouldShow() { return picks.length > 0 && (onAtlas() || inFinder); }
  function render(added) {
    if (!bar) buildBar();
    var n = picks.length;
    if (n) {
      var latest = added || picks[n - 1];
      bar.querySelector('.sbar__n').textContent = n;
      bar.querySelector('.sbar__name').textContent = latest;
      bar.querySelector('.sbar__more').textContent = n > 1 ? ' +' + (n - 1) + ' more' : '';
      bar.querySelector('.sbar__txt').title = picks.join(' · ');
      bar.querySelector('.sbar__go').setAttribute('aria-label', 'Evaluate my shortlist of ' + n + (n === 1 ? ' university' : ' universities'));
      var k = bar.querySelector('.sbar__k');
      clearTimeout(kT);
      if (added) {
        k.textContent = '✓ Added to shortlist';
        bar.classList.add('is-added'); bar.classList.remove('is-bump'); void bar.offsetWidth; bar.classList.add('is-bump');
        kT = setTimeout(function () { k.textContent = 'Your shortlist'; bar.classList.remove('is-added'); }, 2600);
      }
    }
    var show = shouldShow();
    document.body.classList.toggle('has-selection', show);
    if (show) { if (bar.hidden) { bar.hidden = false; void bar.offsetWidth; } bar.classList.add('is-on'); }
    else { bar.classList.remove('is-on'); setTimeout(function () { if (!shouldShow()) bar.hidden = true; }, 400); }
  }

  // ---- "Evaluate my shortlist" → the free-counselling card in the footer ----
  function evaluate() {
    subs.forEach(function (fn) { try { fn(picks.slice()); } catch (e) {} }); // make sure the card's form has the list
    if (document.getElementById('contact')) {
      // landing page (or the single-file build, where the router brings the landing view back)
      var a = document.createElement('a'); a.href = '#contact'; a.hidden = true; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { if (window.TCNote) window.TCNote.open(false); }, 1300);
    } else {
      location.href = 'index.html#contact';
    }
  }

  window.TCShort = {
    get: function () { return picks.slice(); },
    has: function (name) { return picks.indexOf(name) > -1; },
    toggle: function (name) {
      var adding = picks.indexOf(name) < 0;
      picks = adding ? picks.concat(name) : picks.filter(function (n) { return n !== name; });
      emit(adding ? name : null); return adding;
    },
    set: function (list) { picks = list.slice(); emit(); },
    onChange: function (fn) { subs.push(fn); },
    evaluate: evaluate
  };

  function boot() {
    render();
    // landing page: the bar belongs to the university finder slide
    var finder = document.getElementById('finder');
    if (finder && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { inFinder = es[0].isIntersecting; render(); }, { threshold: 0, rootMargin: '-35% 0px -35% 0px' }).observe(finder);
    }
    // single-file build: switching between landing and Atlas views toggles body.page-dir
    if ('MutationObserver' in window) new MutationObserver(function () { var d = onAtlas(); if (d !== lastDir) { lastDir = d; render(); } }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
