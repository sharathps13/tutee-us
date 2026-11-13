/* TCQuick — two ways to enquire without scrolling to the footer:
   1. open()       a "request a callback" window with the lead form (used by the mid-page callback strips)
   2. openCheck()  the 30-second eligibility check: three taps (level, field, intake), then the same form with
                   the answers attached. It never tells the visitor they are eligible — a counsellor reviews it. */
(function () {
  'use strict';
  if (window.TCQuick || !window.TCForms) return;
  var dlg = null, api = null, stepEl, formWrap, headK, headT, headP, bar, back, answers = {}, step = 0, mode = 'form', lastFocus = null;

  function intakes() {
    var d = new Date(), y = d.getFullYear(), m = d.getMonth();
    var spring = 'Spring ' + (y + 1), fall = 'Fall ' + (m >= 7 ? y + 1 : y); // Spring starts in January, Fall in August/September
    return (m >= 7 ? [spring, fall] : [fall, spring]).concat(['Later', 'Not sure yet']);
  }
  var STEPS = [
    { key: 'Study level', q: 'What would you like to study?', opts: ['Bachelor’s', 'Master’s', 'MBA', 'PhD / Research'] },
    { key: 'Field', q: 'Which field interests you most?', opts: ['Computer Science', 'Data Science / AI', 'Engineering', 'Business / Analytics', 'Health / Public Health', 'Other / Not decided'] },
    { key: 'Intake', q: 'When do you plan to start?', opts: intakes() }
  ];
  function courseFor(a) {
    var l = a['Study level'], f = a.Field;
    if (l === 'Bachelor’s') return 'Bachelor’s degree';
    if (l === 'PhD / Research') return 'PhD / Research';
    if (l === 'MBA') return 'MBA / Business & Management';
    return { 'Computer Science': 'MS in Computer Science', 'Data Science / AI': 'MS in Data Science / AI', 'Engineering': 'MS in Engineering', 'Business / Analytics': 'MS in Business Analytics', 'Health / Public Health': 'Health / Public Health' }[f] || 'Not decided yet';
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function build() {
    dlg = document.createElement('dialog');
    dlg.className = 'qk'; dlg.setAttribute('aria-labelledby', 'qkTitle');
    dlg.innerHTML =
      '<div class="qk__in" data-lenis-prevent>' +
        '<header class="qk__head"><button type="button" class="qk__back" data-qk-back aria-label="Previous question" hidden><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4.5 7 10l5.5 5.5"/></svg></button>' +
          '<p class="qk__k" data-qk-k></p><button type="button" class="qk__x" data-qk-x aria-label="Close"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15"/></svg></button></header>' +
        '<div class="qk__bar" aria-hidden="true"><i data-qk-bar></i></div>' +
        '<h3 class="qk__title" id="qkTitle" data-qk-t tabindex="-1"></h3><p class="qk__p" data-qk-p></p>' +
        '<div class="qk__step" data-qk-step></div>' +
        '<div class="qk__form" data-qk-form hidden><ul class="qk__sum" data-qk-sum></ul><form class="lead lead--flat" novalidate aria-label="Callback request form"><div data-form-slot></div></form></div>' +
      '</div>';
    document.body.appendChild(dlg);
    stepEl = dlg.querySelector('[data-qk-step]'); formWrap = dlg.querySelector('[data-qk-form]');
    headK = dlg.querySelector('[data-qk-k]'); headT = dlg.querySelector('[data-qk-t]'); headP = dlg.querySelector('[data-qk-p]');
    bar = dlg.querySelector('[data-qk-bar]'); back = dlg.querySelector('[data-qk-back]');
    api = window.TCForms.mount(dlg.querySelector('form'), { formName: 'Quick callback form', buttonText: 'Request my callback' });
    dlg.querySelector('[data-qk-x]').addEventListener('click', close);
    back.addEventListener('click', function () { if (step > 0) { step--; render(); } });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
    dlg.addEventListener('close', function () { document.body.classList.remove('lock'); if (lastFocus) try { lastFocus.focus({ preventScroll: true }); } catch (e) {} });
    stepEl.addEventListener('click', function (e) {
      if (e.target.closest('[data-qk-next]')) { step++; render(); return; }
      if (e.target.closest('[data-qk-restart]')) { answers = {}; step = 0; render(); return; }
      var b = e.target.closest('[data-qk-opt]'); if (!b) return;
      answers[STEPS[step].key] = b.getAttribute('data-qk-opt');
      [].forEach.call(stepEl.querySelectorAll('[data-qk-opt]'), function (o) { o.classList.toggle('is-on', o === b); });
      setTimeout(function () { step++; render(); }, 220);
    });
  }

  // the snapshot shown after the three answers: general, factual guidance only (no promise of admission or a visa)
  function results(a) {
    var lvl = a['Study level'] || '', fld = a.Field || '', intake = a.Intake || '';
    var grad = lvl !== 'Bachelor’s';
    var key = { 'Computer Science': /computer/i, 'Data Science / AI': /data|computer|statistic/i, 'Engineering': /engineer/i, 'Business / Analytics': /business|analytic|econom|financ/i, 'Health / Public Health': /health|medic|nurs|pharm/i }[fld];
    var U = window.TC_UNIVERSITIES || [], match = key ? U.filter(function (u) { return key.test(u.programs || ''); }) : U;
    var top = match.slice(0, 3).map(function (u) { return u.name; });
    var stem = /Computer|Data|Engineering/.test(fld);
    var docs = grad
      ? ['Bachelor’s degree transcripts', 'English test: TOEFL, IELTS, PTE or Duolingo', lvl === 'MBA' ? 'GMAT or GRE (many programmes), plus work experience' : 'GRE / GMAT where the programme asks for it', 'Statement of purpose and recommendation letters']
      : ['Class 10 and 12 marksheets', 'English test: TOEFL, IELTS, PTE or Duolingo', 'SAT / ACT where the university asks for it', 'Essays and recommendation letters'];
    var card = function (k, h, body) { return '<div class="qk__res"><span class="qk__rk">' + k + '</span><h4>' + h + '</h4>' + body + '</div>'; };
    var html = '<div class="qk__results">' +
      card('Universities', (key ? match.length : U.length) + ' featured US universities' + (key ? ' offer ' + esc(fld.split(' /')[0]) : ''),
        '<p>Including ' + top.map(esc).join(', ') + '. Explore all 3,969 in our University Atlas.</p>') +
      card('What you’ll usually need', 'Your ' + esc(lvl || 'application') + ' checklist', '<ul>' + docs.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('') + '</ul>') +
      card('Timeline', intake && intake !== 'Not sure yet' && intake !== 'Later' ? 'Aiming for ' + esc(intake) : 'Plan 9–12 months ahead',
        '<p>Most students start preparing 9–12 months before their intake. Deadlines vary by university and programme.</p>') +
      (stem && grad ? card('Work after study', 'Up to 36 months of practical training',
        '<p>Graduates of qualifying STEM degrees may be eligible for 12 months of OPT plus a 24-month STEM extension, subject to USCIS approval.</p>') :
        card('Work while you study', 'Up to 20 hours a week on campus', '<p>F-1 students can usually work on campus up to 20 hours a week during term.</p>')) +
      '</div>' +
      '<div class="qk__cta"><p>Want a profile-specific plan: the right universities, scholarships and a realistic timeline? Our experts will connect with you.</p>' +
      '<button type="button" class="btn btn--primary btn--gem btn--block" data-qk-next><span>Get my free evaluation</span><svg class="ico"><use href="#i-arrow"/></svg></button>' +
      '<button type="button" class="qk__again" data-qk-restart>Start again</button></div>';
    return html;
  }
  function render() {
    var quiz = mode === 'check', atRes = quiz && step === STEPS.length, atForm = !quiz || step > STEPS.length;
    dlg.classList.toggle('qk--form', atForm);
    back.hidden = !quiz || step === 0;
    bar.parentNode.hidden = !quiz;
    if (quiz) bar.style.width = ((Math.min(step, STEPS.length + 1) + 1) / (STEPS.length + 2) * 100) + '%';
    stepEl.hidden = atForm; formWrap.hidden = !atForm;
    if (atRes) {
      headK.textContent = 'Eligibility check · your snapshot';
      headT.textContent = 'Here’s what your US route could look like';
      headP.textContent = 'General guidance based on your answers. Every university sets its own requirements.';
      stepEl.innerHTML = results(answers);
    } else if (!atForm) {
      var S = STEPS[step];
      headK.textContent = 'Eligibility check · ' + (step + 1) + ' of ' + STEPS.length;
      headT.textContent = S.q; headP.textContent = step === 0 ? 'Three quick taps. It takes about 30 seconds.' : '';
      stepEl.innerHTML = '<div class="qk__opts" role="group" aria-label="' + esc(S.q) + '">' + S.opts.map(function (o) {
        return '<button type="button" class="qk__opt' + (answers[S.key] === o ? ' is-on' : '') + '" data-qk-opt="' + esc(o) + '"><span>' + esc(o) + '</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5.5 15.5 10 11 14.5"/></svg></button>';
      }).join('') + '</div>';
    } else {
      var sum = dlg.querySelector('[data-qk-sum]');
      if (quiz) {
        headK.textContent = 'Eligibility check · talk to an expert';
        headT.textContent = 'Get your personal evaluation';
        headP.textContent = 'Share your details and our experts will connect with you to review your profile and shortlist the right universities.';
        sum.hidden = false; sum.innerHTML = STEPS.map(function (S) { return '<li><span>' + esc(S.key) + '</span>' + esc(answers[S.key] || '—') + '</li>'; }).join('');
        api.setExtra({ 'Study level': answers['Study level'] || '', 'Field of interest': answers.Field || '', 'Planned intake': answers.Intake || '' });
        api.setValue('course', courseFor(answers));
      } else {
        headK.textContent = 'Free counselling';
        headT.textContent = 'Request a callback';
        headP.textContent = 'Share your details and a counsellor will call you at the time you choose.';
        sum.hidden = true; sum.innerHTML = ''; api.setExtra({});
      }
    }
    try { headT.focus({ preventScroll: true }); } catch (e) {}
    dlg.querySelector('.qk__in').scrollTop = 0;
  }
  function show(m) {
    if (!dlg) build();
    var mn = document.querySelector('[data-menu]'); if (mn && !mn.hidden) { var cx = mn.querySelector('[data-menu-close]'); if (cx) cx.click(); }
    mode = m; step = 0; if (m === 'check') answers = {};
    lastFocus = document.activeElement;
    render();
    if (typeof dlg.showModal === 'function') { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute('open', '');
    document.body.classList.add('lock');
  }
  function close() { if (dlg && dlg.open) dlg.close(); }

  window.TCQuick = { open: function () { show('form'); }, openCheck: function () { show('check'); }, close: close };
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-quick]'); if (!t) return;
    e.preventDefault(); e.stopPropagation();
    show(t.getAttribute('data-quick') === 'check' ? 'check' : 'form');
  }, true);
})();
