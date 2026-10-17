
  /* ---------------- journey stops open the matching service ---------------- */
  $$('[data-open-service]').forEach(function (b) {
    b.addEventListener('click', function () { if (window.TCOpenService) window.TCOpenService(parseInt(b.getAttribute('data-open-service'), 10)); });
  });

  /* ---------------- visa tabs ---------------- */
  (function visa() {
    var box = $('[data-visa]'); if (!box) return;
    var tabs = $$('[role="tab"]', box), panels = $$('[role="tabpanel"]', box);
    function show(i, focus) {
      tabs.forEach(function (t, k) { var on = k === i; t.classList.toggle('is-active', on); t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
      panels.forEach(function (p, k) { var on = k === i; p.hidden = !on; p.classList.toggle('is-active', on); });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(i); });
      t.addEventListener('keydown', function (e) {
        var d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
        if (d) { e.preventDefault(); show((i + d + tabs.length) % tabs.length, true); }
      });
    });
  })();

  /* ---------------- lead form ---------------- */
  var leadForm = $('[data-lead-form]');
  if (leadForm && window.TCForms) leadApi = window.TCForms.mount(leadForm, { buttonText: 'Get Free Counselling' });

  /* ---------------- scroll choreography (GSAP) ---------------- */
  function choreograph() {
    if (!hasGsap || reduce) return;
    $$('[data-split]').forEach(splitWords);

    // hero intro
    var heroLines = $$('[data-hero-line]');
    gsap.set(heroLines, { yPercent: 115 });
    gsap.set('[data-hero-in]', { y: 24, opacity: 0 });
    gsap.timeline({ delay: 0.2, defaults: { ease: 'power4.out' } })
      .fromTo('[data-scene]', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' }, 0)
      .to(heroLines, { yPercent: 0, duration: 1.3, stagger: 0.12 }, 0.25)
      .to('[data-hero-in]', { y: 0, opacity: 1, duration: 1.1, stagger: 0.1 }, '-=0.95');

    // hero exit: copy lifts away while the camera pushes into the skyline (layers handled in the hero module)
    var heroEl = $('#home');
    if (heroEl) {
      gsap.to('[data-hero-content]', { yPercent: -30, opacity: 0, ease: 'none', scrollTrigger: { trigger: heroEl, start: 'top top', end: '42% top', scrub: true } });
      gsap.to('.hero__foot', { y: 50, opacity: 0, ease: 'none', scrollTrigger: { trigger: heroEl, start: '10% top', end: '38% top', scrub: true } });
      gsap.fromTo('.hero__veil', { opacity: 1 }, { opacity: 0, ease: 'none', scrollTrigger: { trigger: heroEl, start: 'top top', end: '40% top', scrub: true } });
    }

    // split headings
    $$('[data-split]').forEach(function (h) {
      gsap.fromTo($$('.wi', h), { yPercent: 110, rotate: 4 }, { yPercent: 0, rotate: 0, duration: 1.1, ease: 'power4.out', stagger: 0.045,
        scrollTrigger: { trigger: h, start: 'top 88%', once: true } });
    });
    // generic reveals
    gsap.set('[data-reveal]', { opacity: 0 });
    ScrollTrigger.batch('[data-reveal]', { start: 'top 92%', once: true,
      onEnter: function (els) { gsap.fromTo(els, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.08, overwrite: true }); } });

    var mm = gsap.matchMedia();
    // USA intro: a window onto Times Square opens from a framed card to full-bleed
    mm.add('(min-width: 761px)', function () {
      var tl = gsap.timeline({ scrollTrigger: { trigger: '[data-window]', start: 'top top', end: '+=110%', scrub: true, pin: true, anticipatePin: 1 } });
      tl.fromTo('[data-window-frame]', { clipPath: 'inset(16% 26% 16% 26% round 30px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'power2.inOut' }, 0)
        .fromTo('[data-window-img]', { scale: 1.3 }, { scale: 1, ease: 'power2.inOut' }, 0)
        .fromTo('.window__cap', { opacity: 0, y: 60 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.4);
    });
    mm.add('(max-width: 760px)', function () {
      gsap.fromTo('[data-window-frame]', { clipPath: 'inset(6% 8% 6% 8% round 24px)' }, { clipPath: 'inset(0% 0% 0% 0% round 20px)', ease: 'none',
        scrollTrigger: { trigger: '[data-window]', start: 'top 85%', end: 'center 50%', scrub: true } });
    });

    // universities feature card rises in
    gsap.fromTo('[data-ufeature]', { y: 60, opacity: 0, rotateX: 8 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '[data-ufeature]', start: 'top 88%', once: true } });
    gsap.fromTo('[data-uindex] li', { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.04, scrollTrigger: { trigger: '[data-uindex]', start: 'top 85%', once: true } });
    // programmes panel
    gsap.fromTo('[data-prog-panel]', { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '[data-prog-panel]', start: 'top 90%', once: true } });
    gsap.fromTo('.prog__tab', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: '[data-prog-tabs]', start: 'top 88%', once: true } });
    // services stage tilts up out of depth
    gsap.fromTo('[data-explorer-stage]', { rotateX: 14, yPercent: 8, opacity: 0.3 }, { rotateX: 0, yPercent: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: '#services', start: 'top 85%', end: 'top 15%', scrub: true } });

    // journey: pinned horizontal travel with a drawn route
    mm.add('(min-width: 761px)', function () {
      var track = $('[data-journey-track]'), line = $('[data-journey-line]');
      if (!track) return;
      var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
      var len = line.getTotalLength(); line.style.strokeDasharray = len; line.style.strokeDashoffset = len;
      var tl = gsap.timeline({ scrollTrigger: { trigger: '[data-journey]', start: 'top top', end: function () { return '+=' + (dist() + window.innerHeight * 0.4); }, scrub: true, pin: true, anticipatePin: 1, invalidateOnRefresh: true } });
      tl.to(track, { x: function () { return -dist(); }, ease: 'none' }, 0).to(line, { strokeDashoffset: 0, ease: 'none' }, 0);
      tl.fromTo('.stop', { y: 30 }, { y: 0, stagger: 0.08, ease: 'none' }, 0);
    });

    // scholarships: sheets start stacked, then separate
    mm.add('(min-width: 761px)', function () {
      gsap.fromTo('[data-deck-card]', { yPercent: function (i) { return -i * 104; }, rotate: function (i) { return [-4, 3, -2][i]; }, xPercent: function (i) { return [0, 5, -4][i]; } },
        { yPercent: 0, rotate: 0, xPercent: 0, ease: 'power2.inOut', stagger: 0.05, scrollTrigger: { trigger: '[data-deck]', start: 'top 80%', end: 'bottom 75%', scrub: true } });
    });
    // finance: the logo field tilts as it passes
    gsap.fromTo('[data-fin-plane]', { rotateX: 62, z: -200 }, { rotateX: 46, z: 0, ease: 'none', scrollTrigger: { trigger: '#financial-aid', start: 'top bottom', end: 'bottom top', scrub: true } });
    // earn: cards hinge up
    gsap.fromTo('.ecard', { rotateX: -70, y: 80, opacity: 0, transformOrigin: '50% 100%' }, { rotateX: 0, y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.14, scrollTrigger: { trigger: '[data-earn]', start: 'top 82%', once: true } });
    // visa steps cascade
    gsap.fromTo('[data-visa] .vsteps li, [data-visa] .vfacts div', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: '[data-visa]', start: 'top 80%', once: true } });

    // settlement route draws; milestones light up
    var line = $('[data-route-line]');
    if (line) {
      var len = line.getTotalLength();
      line.style.strokeDasharray = len; line.style.strokeDashoffset = len;
      var ms = $$('[data-milestone]'), at = [0.02, 0.34, 0.64, 0.95];
      gsap.to(line, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '[data-route]', start: 'top 65%', end: 'bottom 70%', scrub: true,
        onUpdate: function (s) { ms.forEach(function (m, i) { m.classList.toggle('is-on', s.progress >= at[i]); }); } } });
    }
    gsap.to('.family__plate--a', { y: -46, x: -20, ease: 'none', scrollTrigger: { trigger: '[data-family]', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.to('.family__plate--b', { y: 40, x: 24, ease: 'none', scrollTrigger: { trigger: '[data-family]', start: 'top bottom', end: 'bottom top', scrub: true } });
    // testimonials drift at different speeds
    mm.add('(min-width: 761px)', function () {
      $$('[data-stories] .stories__col').forEach(function (col) {
        var sp = parseFloat(col.getAttribute('data-speed')) || 0;
        gsap.fromTo(col, { yPercent: -sp }, { yPercent: sp, ease: 'none', scrollTrigger: { trigger: '[data-stories]', start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    });
    // final CTA: New York at dusk opens from the horizon, slowly drifting
    gsap.fromTo('[data-portal]', { clipPath: 'circle(10% at 50% 100%)' }, { clipPath: 'circle(150% at 50% 100%)', ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top 95%', end: 'top 20%', scrub: true } });
    gsap.fromTo('[data-dusk]', { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom bottom', scrub: true } });
    gsap.fromTo('[data-lead-form]', { y: 70, rotateX: 10, opacity: 0 }, { y: 0, rotateX: 0, opacity: 1, ease: 'power3.out', duration: 1.2, scrollTrigger: { trigger: '[data-lead-form]', start: 'top 90%', once: true } });

    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(choreograph); else choreograph();
})();
