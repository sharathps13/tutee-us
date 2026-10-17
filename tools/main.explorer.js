  (function explorer() {
    var wrap = $('[data-explorer]'); if (!wrap) return;
    var stage = $('[data-explorer-stage]', wrap);
    var cards = $$('.xcard', stage);
    var N = cards.length, active = 0, inView = false;
    var dots = $('[data-explorer-dots]', wrap);
    var tEl = $('[data-explorer-title]', wrap), gEl = $('[data-explorer-tag]', wrap), iEl = $('[data-explorer-icon]', wrap);

    cards.forEach(function (c, i) {
      c.setAttribute('role', 'group');
      c.setAttribute('aria-roledescription', 'slide');
      c.setAttribute('aria-label', (i + 1) + ' of ' + N + ': ' + $('h3', c).textContent);
      var d = document.createElement('button');
      d.type = 'button'; d.setAttribute('role', 'tab'); d.setAttribute('aria-label', $('h3', c).textContent);
      d.addEventListener('click', function () { go(i); });
      dots.appendChild(d);
      c.addEventListener('click', function (e) {
        if (e.target.closest('[data-expand]')) { go(i); openSheet(i); return; }
        if (dragMoved) return;
        if (i !== active) go(i); else openSheet(i);
      });
    });

    function layout() {
      var mobile = mqMobile.matches;
      var w = cards[0].offsetWidth || 360;
      cards.forEach(function (c, i) {
        var o = ((i - active + N + Math.floor(N / 2)) % N) - Math.floor(N / 2);
        var a = Math.abs(o), s = Math.sign(o);
        var maxV = mobile ? 1 : 2;
        var x, z, ry, sc;
        if (a === 0) { x = 0; z = 0; ry = 0; sc = 1; }
        else if (a === 1) { x = s * w * (mobile ? 0.82 : 0.86); z = -220; ry = -s * (mobile ? 14 : 24); sc = 0.9; }
        else { x = s * w * (mobile ? 1.5 : 1.55); z = -440; ry = -s * 32; sc = 0.82; }
        if (a > 2) { x = s * w * 2.1; z = -600; ry = -s * 38; sc = 0.7; }
        c.style.setProperty('--x', x.toFixed(1) + 'px');
        c.style.setProperty('--z', z + 'px');
        c.style.setProperty('--ry', ry + 'deg');
        c.style.setProperty('--s', sc);
        c.style.setProperty('--dim', a === 0 ? 0 : a === 1 ? 0.38 : 0.62);
        c.style.zIndex = String(10 - a);
        c.classList.toggle('is-active', a === 0);
        c.classList.toggle('is-hidden', a > maxV);
        c.setAttribute('aria-hidden', a > maxV ? 'true' : 'false');
        c.tabIndex = a === 0 ? 0 : -1;
        $('[data-expand]', c).tabIndex = a === 0 ? 0 : -1;
      });
      $$('button', dots).forEach(function (d, i) { d.classList.toggle('is-active', i === active); d.setAttribute('aria-selected', i === active ? 'true' : 'false'); });
      var c = cards[active];
      tEl.textContent = $('h3', c).textContent;
      gEl.textContent = $('.xcard__tag', c).textContent;
      iEl.querySelector('use').setAttribute('href', $('.xcard__icon use', c).getAttribute('href'));
    }
    function go(i) { active = (i + N) % N; layout(); }
    $('[data-explorer-prev]', wrap).addEventListener('click', function () { go(active - 1); });
    $('[data-explorer-next]', wrap).addEventListener('click', function () { go(active + 1); });
    $('[data-explorer-open]', wrap).addEventListener('click', function () { openSheet(active); });

    // pointer tilt on the active card
    if (finePointer && !reduce) {
      stage.addEventListener('pointermove', function (e) {
        var c = cards[active], r = c.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        if (Math.abs(x) > 0.7 || Math.abs(y) > 0.7) { c.style.setProperty('--tx', '0deg'); c.style.setProperty('--ty', '0deg'); return; }
        c.style.setProperty('--tx', (-y * 7).toFixed(2) + 'deg');
        c.style.setProperty('--ty', (x * 9).toFixed(2) + 'deg');
        c.style.setProperty('--mx', ((x + 0.5) * 100).toFixed(1) + '%');
        c.style.setProperty('--my', ((y + 0.5) * 100).toFixed(1) + '%');
      });
      stage.addEventListener('pointerleave', function () { cards.forEach(function (c) { c.style.setProperty('--tx', '0deg'); c.style.setProperty('--ty', '0deg'); }); });
    }

    // drag / swipe
    var startX = 0, startY = 0, dragging = false, dragMoved = false;
    stage.addEventListener('pointerdown', function (e) { dragging = true; dragMoved = false; startX = e.clientX; startY = e.clientY; });
    window.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      if (Math.abs(e.clientX - startX) > 8 && Math.abs(e.clientX - startX) > Math.abs(e.clientY - startY)) dragMoved = true;
    }, { passive: true });
    window.addEventListener('pointerup', function (e) {
      if (!dragging) return; dragging = false;
      var dx = e.clientX - startX;
      if (dragMoved && Math.abs(dx) > 45) go(active + (dx < 0 ? 1 : -1));
      setTimeout(function () { dragMoved = false; }, 0);
    });
    stage.addEventListener('dragstart', function (e) { e.preventDefault(); });

    // keyboard (when the explorer is on screen)
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { inView = es[0].isIntersecting; }, { threshold: 0.4 }).observe(stage);
    document.addEventListener('keydown', function (e) {
      if (!inView || sheet.open || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
      if (e.key === 'ArrowRight') { go(active + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { go(active - 1); e.preventDefault(); }
    });
    stage.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('xcard')) { e.preventDefault(); openSheet(active); } });

    // detail sheet
    var sheet = $('#serviceSheet'), sheetIdx = 0;
    function fillSheet(i) {
      sheetIdx = (i + N) % N;
      var c = cards[sheetIdx];
      $('[data-sheet-title]', sheet).textContent = $('h3', c).textContent;
      $('[data-sheet-tag]', sheet).textContent = $('.xcard__tag', c).textContent;
      $('[data-sheet-idx]', sheet).textContent = $('.xcard__idx', c).textContent;
      $('[data-sheet-text]', sheet).innerHTML = $('.xcard__full', c).innerHTML;
      var img = $('[data-sheet-img]', sheet), src = $('.xcard__img', c);
      img.src = src.currentSrc || src.src; img.style.objectPosition = getComputedStyle(c).getPropertyValue('--pos');
      $('[data-sheet-icon]', sheet).setAttribute('href', $('.xcard__icon use', c).getAttribute('href'));
      sheet.style.setProperty('--tint', getComputedStyle(c).getPropertyValue('--tint'));
    }
    function openSheet(i) {
      fillSheet(i);
      if (typeof sheet.showModal === 'function') sheet.showModal(); else sheet.setAttribute('open', '');
      document.body.classList.add('lock');
    }
    function closeSheet() { if (sheet.open) sheet.close(); }
    sheet.addEventListener('close', function () { document.body.classList.remove('lock'); go(sheetIdx); });
    $('[data-sheet-close]', sheet).addEventListener('click', closeSheet);
    $('[data-sheet-prev]', sheet).addEventListener('click', function () { fillSheet(sheetIdx - 1); });
    $('[data-sheet-next]', sheet).addEventListener('click', function () { fillSheet(sheetIdx + 1); });
    $('[data-sheet-cta]', sheet).addEventListener('click', function (e) { e.preventDefault(); closeSheet(); $('#contact').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); });
    sheet.addEventListener('click', function (e) { if (e.target === sheet) closeSheet(); });

    window.addEventListener('resize', layout);
    layout();
    window.TCOpenService = function (i) { go(i); openSheet(i); };
  })();

  /* ---------------- universities ring ---------------- */