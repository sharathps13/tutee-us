/* TCSelect — replaces a native <select> with a modern, searchable dropdown. The native select stays in the
   form (visually hidden), so values, form data, resets and 'change' listeners keep working. */
(function () {
  'use strict';
  var uid = 0, current = null;
  function enhance(sel, o) {
    if (!sel) return null;
    if (sel.__tc) return sel.__tc;
    o = o || {}; uid++;
    var wrap = document.createElement('div');
    wrap.className = 'tcs' + (o.theme ? ' tcs--' + o.theme : '') + (o.cls ? ' ' + o.cls : '');
    sel.parentNode.insertBefore(wrap, sel); wrap.appendChild(sel);
    sel.classList.add('tcs__native'); sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
    var lab = sel.closest('label');
    var name = sel.getAttribute('aria-label') || (lab && lab.textContent.trim()) || 'Choose an option';
    var lid = 'tcs' + uid + '-list';
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'tcs__btn';
    btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', lid);
    btn.innerHTML = '<span class="tcs__cap"></span><span class="tcs__val"></span><svg class="tcs__chev" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 8 10 12.5 14.5 8"/></svg>';
    var pop = document.createElement('div');
    pop.setAttribute('data-lenis-prevent', '');
    pop.className = 'tcs__pop' + (o.theme ? ' tcs__pop--' + o.theme : '') + (o.cls ? ' ' + o.cls + '-pop' : ''); pop.hidden = true;
    pop.innerHTML = (o.search ? '<div class="tcs__search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="text" placeholder="' + (o.placeholder || 'Search…') + '" aria-label="Search ' + name + '" autocomplete="off" spellcheck="false"></div>' : '') +
      '<ul class="tcs__list" role="listbox" id="' + lid + '" tabindex="-1" aria-label="' + name + '"></ul><p class="tcs__none" hidden>No matches</p>';
    wrap.appendChild(btn); document.body.appendChild(pop); // portal: escapes overflow/3D-transformed parents
    var list = pop.querySelector('.tcs__list'), search = pop.querySelector('input'), none = pop.querySelector('.tcs__none');
    var valEl = btn.querySelector('.tcs__val'), capEl = btn.querySelector('.tcs__cap'), act = -1;
    if (o.caption) capEl.textContent = o.caption; else capEl.remove();

    function visible() { return Array.prototype.filter.call(list.children, function (li) { return !li.hidden; }); }
    function build() {
      list.innerHTML = '';
      Array.prototype.forEach.call(sel.options, function (op, i) {
        var li = document.createElement('li');
        li.setAttribute('role', 'option'); li.id = lid + '-' + i; li.className = 'tcs__opt'; li.dataset.i = i;
        var main = op.getAttribute('data-label') || op.textContent, sub = op.getAttribute('data-sub') || '', badge = op.getAttribute('data-badge') || '';
        li.innerHTML = (badge ? '<b class="tcs__badge">' + badge + '</b>' : '') + '<span class="tcs__txt"></span>' + (sub ? '<em class="tcs__sub"></em>' : '') +
          '<svg class="tcs__tick" viewBox="0 0 20 20" aria-hidden="true"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>';
        li.querySelector('.tcs__txt').textContent = main;
        if (sub) li.querySelector('.tcs__sub').textContent = sub;
        li.dataset.k = (main + ' ' + sub + ' ' + badge + ' ' + op.value).toLowerCase();
        li.addEventListener('mousedown', function (e) { e.preventDefault(); });
        li.addEventListener('click', function () { pick(i); close(true); });
        li.addEventListener('mousemove', function () { var v = visible(), k = v.indexOf(li); if (k !== act) setAct(k, true); });
        list.appendChild(li);
      });
      sync();
    }
    function sync() {
      var op = sel.options[sel.selectedIndex];
      valEl.textContent = op ? (op.getAttribute('data-short') || op.textContent) : '';
      wrap.classList.toggle('is-empty', !op || op.value === '');
      Array.prototype.forEach.call(list.children, function (li) {
        var on = +li.dataset.i === sel.selectedIndex;
        li.classList.toggle('is-sel', on); li.setAttribute('aria-selected', String(on));
      });
    }
    function pick(i) {
      if (sel.selectedIndex === i) { sync(); return; }
      sel.selectedIndex = i; sync();
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      wrap.classList.remove('is-picked'); void wrap.offsetWidth; wrap.classList.add('is-picked');
    }
    function setAct(n, noScroll) {
      var v = visible();
      Array.prototype.forEach.call(list.children, function (li) { li.classList.remove('is-act'); });
      if (!v.length) { act = -1; return; }
      act = Math.max(0, Math.min(v.length - 1, n));
      var li = v[act]; li.classList.add('is-act');
      (search || list).setAttribute('aria-activedescendant', li.id);
      if (noScroll) return;
      var t = li.offsetTop, b = t + li.offsetHeight;
      if (t < list.scrollTop) list.scrollTop = t - 6; else if (b > list.scrollTop + list.clientHeight) list.scrollTop = b - list.clientHeight + 6;
    }
    function filter(q) {
      q = q.trim().toLowerCase(); var n = 0;
      Array.prototype.forEach.call(list.children, function (li) { var h = !!q && li.dataset.k.indexOf(q) < 0; li.hidden = h; if (!h) n++; });
      none.hidden = n > 0; setAct(0);
    }
    function place() {
      var host = wrap.getBoundingClientRect(), below = innerHeight - host.bottom, up = below < 330 && host.top > below;
      pop.classList.toggle('is-up', up);
      var w = Math.max(host.width + 12, o.width || 0); pop.style.minWidth = w + 'px';
      var left = Math.min(Math.max(8, host.left - 6), innerWidth - Math.min(pop.offsetWidth || w, innerWidth - 16) - 8);
      pop.style.left = left + 'px';
      if (up) { pop.style.top = 'auto'; pop.style.bottom = (innerHeight - host.top + 10) + 'px'; } else { pop.style.bottom = 'auto'; pop.style.top = (host.bottom + 10) + 'px'; }
    }
    function openIt() {
      if (current && current !== api) current.close(false);
      // a modal <dialog> sits in the browser's top layer: the list must live inside it or it opens behind
      var host = wrap.closest('dialog[open]') || document.body; if (pop.parentNode !== host) host.appendChild(pop);
      current = api; pop.hidden = false; place();
      requestAnimationFrame(function () { wrap.classList.add('is-open'); pop.classList.add('is-open'); });
      btn.setAttribute('aria-expanded', 'true');
      if (search) { search.value = ''; filter(''); }
      var v = visible(), cur = -1;
      v.forEach(function (li, k) { if (+li.dataset.i === sel.selectedIndex) cur = k; });
      setAct(cur < 0 ? 0 : cur);
      try { (search || list).focus({ preventScroll: true }); } catch (e) {}
    }
    function close(refocus) {
      if (pop.hidden) return;
      wrap.classList.remove('is-open'); pop.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); pop.hidden = true;
      if (current === api) current = null;
      if (refocus) try { btn.focus({ preventScroll: true }); } catch (e) {}
    }
    function key(e) {
      var v = visible();
      if (e.key === 'ArrowDown') { e.preventDefault(); setAct(act + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setAct(act - 1); }
      else if (e.key === 'PageDown') { e.preventDefault(); setAct(act + 6); }
      else if (e.key === 'PageUp') { e.preventDefault(); setAct(act - 6); }
      else if (e.key === 'Home' && !search) { e.preventDefault(); setAct(0); }
      else if (e.key === 'End' && !search) { e.preventDefault(); setAct(v.length - 1); }
      else if (e.key === 'Enter') { e.preventDefault(); if (v[act]) { pick(+v[act].dataset.i); close(true); } }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); }
      else if (e.key === 'Tab') close(false);
      else if (!search && e.key.length === 1) {
        var ch = e.key.toLowerCase(), k = -1;
        v.forEach(function (li, j) { if (k < 0 && j > act && li.dataset.k.charAt(0) === ch) k = j; });
        if (k < 0) v.forEach(function (li, j) { if (k < 0 && li.dataset.k.charAt(0) === ch) k = j; });
        if (k >= 0) setAct(k);
      }
    }
    btn.addEventListener('click', function () { if (pop.hidden) openIt(); else close(true); });
    btn.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); openIt(); } });
    pop.addEventListener('keydown', key);
    if (search) search.addEventListener('input', function () { filter(search.value); });
    document.addEventListener('pointerdown', function (e) { if (!wrap.contains(e.target) && !pop.contains(e.target)) close(false); });
    window.addEventListener('resize', function () { close(false); });
    window.addEventListener('scroll', function () { if (!pop.hidden) { var r = wrap.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) close(false); else place(); } }, { passive: true });
    // keep the custom face in step when code changes the select (value set, options added, form reset)
    var proto = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');
    if (proto && proto.set) Object.defineProperty(sel, 'value', { configurable: true, get: function () { return proto.get.call(sel); }, set: function (v) { proto.set.call(sel, v); sync(); } });
    if (window.MutationObserver) new MutationObserver(build).observe(sel, { childList: true });
    sel.addEventListener('change', sync);
    if (sel.form) sel.form.addEventListener('reset', function () { setTimeout(sync, 0); });
    var api = { el: wrap, open: openIt, close: close, refresh: build, button: btn };
    sel.__tc = api; build();
    return api;
  }
  window.TCSelect = { enhance: enhance };
})();

/* Lead form — same Web3Forms integration and payload as the original site:
   access_key, subject, from_name, botcheck, name, phone ("<code> <number>"), email, destination. */
(function () {
  'use strict';

  var ACCESS_KEY = 'c3d875cf-0480-4d8e-a7be-2fb2c1268a0d';
  var ENDPOINT = 'https://api.web3forms.com/submit';
  /* Google Sheet + email to business@tuteeconnect.com (google-apps-script/Code.gs, deployed as a Web app).
     Paste the Web app URL here (or set window.TC_LEADS_URL before this script). While it is empty, leads go by Web3Forms only. */
  var LEADS_URL = window.TC_LEADS_URL || '';
  var LEAD_SOURCE = 'USA landing page';
  var STATES = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir',
    'Ladakh', 'Lakshadweep', 'Puducherry', 'Outside India'];
  var COURSES = ['MS in Computer Science', 'MS in Data Science / AI', 'MS in Engineering', 'MS in Business Analytics', 'MBA / Business & Management', 'Health / Public Health',
    'Bachelor\u2019s degree', 'PhD / Research', 'Not decided yet', 'Other'];
  var CALL_TIMES = ['Morning (9 AM \u2013 12 PM)', 'Afternoon (12 \u2013 3 PM)', 'Evening (3 \u2013 6 PM)', 'Late evening (6 \u2013 9 PM)', 'Any time'];

  var CODES = [
    ['AE', '+971'], ['AF', '+93'], ['AR', '+54'], ['AT', '+43'], ['AU', '+61'], ['BE', '+32'], ['BR', '+55'], ['CH', '+41'], ['CL', '+56'], ['CN', '+86'],
    ['CO', '+57'], ['DE', '+49'], ['DK', '+45'], ['DZ', '+213'], ['EG', '+20'], ['ES', '+34'], ['FI', '+358'], ['FR', '+33'], ['GR', '+30'], ['HU', '+36'],
    ['ID', '+62'], ['IE', '+353'], ['IN', '+91'], ['IR', '+98'], ['IT', '+39'], ['JP', '+81'], ['KE', '+254'], ['KR', '+82'], ['LK', '+94'], ['MA', '+212'],
    ['MM', '+95'], ['MX', '+52'], ['MY', '+60'], ['NG', '+234'], ['NL', '+31'], ['NO', '+47'], ['NZ', '+64'], ['PE', '+51'], ['PH', '+63'], ['PK', '+92'],
    ['PL', '+48'], ['PT', '+351'], ['QA', '+974'], ['RO', '+40'], ['RU/KZ', '+7'], ['SA', '+966'], ['SE', '+46'], ['SG', '+65'], ['TH', '+66'], ['TN', '+216'],
    ['TR', '+90'], ['TZ', '+255'], ['UA', '+380'], ['UG', '+256'], ['UK', '+44'], ['US/CA', '+1'], ['VE', '+58'], ['VN', '+84'], ['ZA', '+27']
  ];

  var NAMES = {"AE": "United Arab Emirates", "AF": "Afghanistan", "AR": "Argentina", "AT": "Austria", "AU": "Australia", "BE": "Belgium", "BR": "Brazil", "CH": "Switzerland", "CL": "Chile", "CN": "China", "CO": "Colombia", "DE": "Germany", "DK": "Denmark", "DZ": "Algeria", "EG": "Egypt", "ES": "Spain", "FI": "Finland", "FR": "France", "GR": "Greece", "HU": "Hungary", "ID": "Indonesia", "IE": "Ireland", "IN": "India", "IR": "Iran", "IT": "Italy", "JP": "Japan", "KE": "Kenya", "KR": "South Korea", "LK": "Sri Lanka", "MA": "Morocco", "MM": "Myanmar", "MX": "Mexico", "MY": "Malaysia", "NG": "Nigeria", "NL": "Netherlands", "NO": "Norway", "NZ": "New Zealand", "PE": "Peru", "PH": "Philippines", "PK": "Pakistan", "PL": "Poland", "PT": "Portugal", "QA": "Qatar", "RO": "Romania", "RU/KZ": "Russia / Kazakhstan", "SA": "Saudi Arabia", "SE": "Sweden", "SG": "Singapore", "TH": "Thailand", "TN": "Tunisia", "TR": "Turkey", "TZ": "Tanzania", "UA": "Ukraine", "UG": "Uganda", "UK": "United Kingdom", "US/CA": "United States / Canada", "VE": "Venezuela", "VN": "Vietnam", "ZA": "South Africa"};
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function selectHTML(uid, name, label, icon, list, ph, req) {
    return '<div class="field field--sel"><label class="field__label" for="' + uid + '-' + name + '">' + label + '</label>' +
      '<span class="field__box field__box--select field__box--wide"><select id="' + uid + '-' + name + '" name="' + name + '" aria-label="' + esc(label.replace(' *', '')) + '"' + (req ? ' required' : '') + ' aria-describedby="' + uid + '-' + name + 'e">' +
      '<option value="">' + esc(ph) + '</option>' + list.map(function (v) { return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join('') + '</select></span>' +
      '<p class="field__err" id="' + uid + '-' + name + 'e" aria-live="polite"></p></div>';
  }

  function fieldsHTML(uid) {
    var opts = CODES.map(function (c) { return '<option value="' + c[1] + '" data-badge="' + c[0].split('/')[0] + '" data-label="' + esc(NAMES[c[0]] || c[0]) + '" data-sub="' + c[1] + '" data-short="' + c[0].split('/')[0] + ' ' + c[1] + '"' + (c[1] === '+91' ? ' selected' : '') + '>' + c[0] + ' (' + c[1] + ')</option>'; }).join('');
    return '' +
      '<input type="hidden" name="access_key" value="' + ACCESS_KEY + '">' +
      '<input type="hidden" name="subject" value="New Lead from Tutee Connect Landing Page!">' +
      '<input type="hidden" name="from_name" value="Tutee Connect Notification System">' +
      '<input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<div class="lead__status" role="status" aria-live="polite" data-status hidden></div>' +
      '<label class="field"><span class="field__label">Your Name *</span><span class="field__box"><svg class="ico"><use href="#i-user"/></svg>' +
        '<input type="text" name="name" placeholder="Your Name *" autocomplete="name" required aria-describedby="' + uid + '-ne"><i class="field__flag" aria-hidden="true"></i></span><span class="field__err" id="' + uid + '-ne" aria-live="polite"></span></label>' +
      '<div class="field field--phone"><label class="field__label" for="' + uid + '-cc">Phone Number *</label><span class="field__row">' +
        '<span class="field__box field__box--select"><select id="' + uid + '-cc" name="country_code" aria-label="Country code">' + opts + '</select></span>' +
        '<span class="field__box"><svg class="ico"><use href="#i-phone"/></svg><input type="tel" name="phone_number" placeholder="Phone Number *" autocomplete="tel-national" inputmode="tel" required aria-label="Phone Number" aria-describedby="' + uid + '-pe"><i class="field__flag" aria-hidden="true"></i></span>' +
      '</span><p class="field__err" id="' + uid + '-pe" aria-live="polite"></p></div>' +
      '<label class="field"><span class="field__label">Your Email *</span><span class="field__box"><svg class="ico"><use href="#i-mail"/></svg>' +
        '<input type="email" name="email" placeholder="Your Email *" autocomplete="email" required aria-describedby="' + uid + '-ee"><i class="field__flag" aria-hidden="true"></i></span><span class="field__err" id="' + uid + '-ee" aria-live="polite"></span></label>' +
      selectHTML(uid, 'state', 'State *', 'i-pin', STATES, 'Select your state', true) +
      selectHTML(uid, 'course', 'Course *', 'i-cap', COURSES, 'Select a course', true) +
      selectHTML(uid, 'call_time', 'Preferred call time (IST) *', 'i-clock', CALL_TIMES, 'Select a time', true) +
      '<div class="field field--uni" data-uniwrap><span class="field__label" id="' + uid + '-ul">Shortlisted universities</span>' +
        '<input type="hidden" name="university" value="" data-uni><input type="hidden" name="destination" value="General US Inquiry" data-destination>' +
        '<button type="button" class="field__box unis__btn is-empty" data-uni-btn aria-haspopup="dialog" aria-expanded="false" aria-labelledby="' + uid + '-ul ' + uid + '-uv">' +
          '<svg class="ico"><use href="#i-landmark"/></svg><span class="unis__val" id="' + uid + '-uv" data-uni-val>Universities (optional)</span>' +
          '<span class="unis__n" data-uni-n hidden></span><svg class="unis__chev" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 8 10 12.5 14.5 8"/></svg></button></div>' +
      '<button class="btn btn--primary btn--block lead__submit" type="submit" data-submit><span data-submit-label>Submit Profile</span><svg class="ico"><use href="#i-arrow"/></svg></button>' +
      '<p class="lead__note">Free immediate consultation.</p>';
  }

  function mount(form, opts) {
    opts = opts || {};
    var slot = form.querySelector('[data-form-slot]') || form;
    var uid = 'lf' + Math.random().toString(36).slice(2, 7);
    var extra = {};
    slot.innerHTML = fieldsHTML(uid);
    var status = form.querySelector('[data-status]');
    var btn = form.querySelector('[data-submit]');
    var label = form.querySelector('[data-submit-label]');
    var dest = form.querySelector('[data-destination]');
    var defaultLabel = opts.buttonText || 'Submit Profile';
    var selection = [];
    label.textContent = defaultLabel;

    // ---- shortlisted universities: one dropdown field (see the shortlist, remove, or search to add) ----
    var uniIn = form.querySelector('[data-uni]'), uBtn = form.querySelector('[data-uni-btn]'), uVal = form.querySelector('[data-uni-val]'), uN = form.querySelector('[data-uni-n]');
    var PH = 'Universities (optional)';
    var NAMES_U = (window.TC_UNIVERSITIES || []).map(function (u) { return u.name; });
    var uPop = document.createElement('div'); uPop.className = 'tcs__pop unis__pop'; uPop.hidden = true; uPop.setAttribute('data-lenis-prevent', '');
    uPop.setAttribute('role', 'dialog'); uPop.setAttribute('aria-label', 'Shortlisted universities');
    uPop.innerHTML = '<div class="unis__head"><span>Your shortlist</span><button type="button" class="unis__clear" data-u-clear>Clear all</button></div>' +
      '<ul class="unis__list" data-u-list></ul><p class="unis__empty" data-u-empty>No universities yet. Search below to add one.</p>' +
      '<div class="tcs__search unis__search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="text" placeholder="Add a university…" aria-label="Search universities to add" autocomplete="off" spellcheck="false" data-u-q></div>' +
      '<ul class="unis__sug" data-u-sug aria-label="Matching universities"></ul>';
    document.body.appendChild(uPop);
    var uList = uPop.querySelector('[data-u-list]'), uEmpty = uPop.querySelector('[data-u-empty]'), uQ = uPop.querySelector('[data-u-q]'), uSug = uPop.querySelector('[data-u-sug]'), uClr = uPop.querySelector('[data-u-clear]');
    function changed() { sync(); if (opts.onSelectionChange) opts.onSelectionChange(selection.slice()); }
    function renderChips() {
      if (!uBtn) return;
      var n = selection.length;
      uVal.textContent = n ? selection[0] : PH;
      uBtn.classList.toggle('is-empty', !n);
      uN.hidden = n < 2; uN.textContent = '+' + (n - 1);
      uList.innerHTML = selection.map(function (name, i) { return '<li><span class="unis__dot" aria-hidden="true"></span><span class="unis__name">' + esc(name) + '</span><button type="button" data-u-rm="' + i + '" aria-label="Remove ' + esc(name) + '"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m6 6 8 8M14 6l-8 8"/></svg></button></li>'; }).join('');
      uList.hidden = !n; uEmpty.hidden = n > 0; uClr.hidden = n < 2;
      if (!uPop.hidden) suggest();
    }
    function suggest() {
      var q = uQ.value.trim().toLowerCase();
      if (!q) { uSug.innerHTML = ''; return; }
      var res = NAMES_U.filter(function (nm) { return selection.indexOf(nm) < 0 && nm.toLowerCase().indexOf(q) > -1; }).slice(0, 6);
      uSug.innerHTML = res.length ? res.map(function (nm) { return '<li><button type="button" data-u-add="' + esc(nm) + '"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 5v10M5 10h10"/></svg><span>' + esc(nm) + '</span></button></li>'; }).join('')
        : '<li class="unis__none">No match. Press Enter to add “' + esc(uQ.value.trim()) + '”.</li>';
    }
    function placeU() {
      var host = uBtn.getBoundingClientRect(), w = Math.max(host.width, 300), below = innerHeight - host.bottom, up = below < 340 && host.top > below;
      uPop.classList.toggle('is-up', up); uPop.style.width = w + 'px'; uPop.style.maxWidth = 'calc(100vw - 16px)';
      uPop.style.left = Math.min(Math.max(8, host.left), innerWidth - w - 8) + 'px';
      if (up) { uPop.style.top = 'auto'; uPop.style.bottom = (innerHeight - host.top + 8) + 'px'; } else { uPop.style.bottom = 'auto'; uPop.style.top = (host.bottom + 8) + 'px'; }
    }
    function openU() {
      // inside a modal <dialog> the list must live in the dialog (top layer), otherwise it opens behind it
      var host = uBtn.closest('dialog[open]') || document.body; if (uPop.parentNode !== host) host.appendChild(uPop);
      uPop.hidden = false; uQ.value = ''; renderChips(); suggest(); placeU();
      requestAnimationFrame(function () { uPop.classList.add('is-open'); });
      uBtn.setAttribute('aria-expanded', 'true'); uBtn.classList.add('is-open');
      try { uQ.focus({ preventScroll: true }); } catch (e) {}
    }
    function closeU(refocus) {
      if (uPop.hidden) return;
      uPop.classList.remove('is-open'); uPop.hidden = true; uBtn.setAttribute('aria-expanded', 'false'); uBtn.classList.remove('is-open');
      if (refocus) try { uBtn.focus({ preventScroll: true }); } catch (e) {}
    }
    if (uBtn) {
      uBtn.addEventListener('click', function () { if (uPop.hidden) openU(); else closeU(true); });
      uBtn.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { e.preventDefault(); openU(); } });
      uPop.addEventListener('mousedown', function (e) { if (e.target !== uQ) e.preventDefault(); });
      uPop.addEventListener('click', function (e) {
        var rm = e.target.closest('[data-u-rm]'), add = e.target.closest('[data-u-add]');
        if (rm) { selection.splice(+rm.getAttribute('data-u-rm'), 1); changed(); placeU(); try { uQ.focus({ preventScroll: true }); } catch (er) {} }
        else if (add) { selection.push(add.getAttribute('data-u-add')); uQ.value = ''; changed(); placeU(); try { uQ.focus({ preventScroll: true }); } catch (er) {} }
        else if (e.target.closest('[data-u-clear]')) { selection = []; changed(); placeU(); }
      });
      uQ.addEventListener('input', suggest);
      uQ.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeU(true); }
        else if (e.key === 'Enter') {
          e.preventDefault();
          var first = uSug.querySelector('[data-u-add]'), v = uQ.value.trim();
          if (first) first.click(); else if (v && selection.indexOf(v) < 0) { selection.push(v.slice(0, 120)); uQ.value = ''; changed(); placeU(); }
        }
        else if (e.key === 'ArrowDown') { var f = uSug.querySelector('button'); if (f) { e.preventDefault(); f.focus(); } }
        else if (e.key === 'Tab' && !e.shiftKey && !uSug.querySelector('button')) closeU(false);
      });
      uSug.addEventListener('keydown', function (e) {
        var bs = [].slice.call(uSug.querySelectorAll('button')), k = bs.indexOf(document.activeElement);
        if (e.key === 'ArrowDown' && k < bs.length - 1) { e.preventDefault(); bs[k + 1].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); if (k > 0) bs[k - 1].focus(); else uQ.focus(); }
        else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeU(true); }
      });
      document.addEventListener('pointerdown', function (e) { if (!uPop.hidden && !uPop.contains(e.target) && !uBtn.contains(e.target)) closeU(false); });
      window.addEventListener('resize', function () { closeU(false); });
      window.addEventListener('scroll', function () { if (!uPop.hidden) { var r = uBtn.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) closeU(false); else placeU(); } }, { passive: true });
    }
    function sync() {
      dest.value = selection.length ? selection.join(', ') : 'General US Inquiry';
      if (uniIn) uniIn.value = selection.join(', ');
      renderChips();
      if (opts.dynamicButton) label.textContent = selection.length ? 'Apply to ' + selection.length + ' ' + (selection.length === 1 ? 'University' : 'Universities') : defaultLabel;
    }

    function show(kind, msg) {
      status.hidden = false;
      status.className = 'lead__status lead__status--' + kind;
      status.innerHTML = '<svg class="ico"><use href="#' + (kind === 'success' ? 'i-check' : 'i-close') + '"/></svg><span>' + esc(msg) + '</span>';
    }

    // ---- inline validation: checked when you leave a field, cleared as soon as it is fixed ----
    var cc = form.querySelector('select[name="country_code"]');
    if (window.TCSelect) window.TCSelect.enhance(cc, { search: true, placeholder: 'Search country or code', cls: 'tcs--cc' });
    var SELS = ['state', 'course', 'call_time'];
    SELS.forEach(function (n) {
      var el = form.elements[n]; if (!el) return;
      if (window.TCSelect) window.TCSelect.enhance(el, n === 'state' ? { search: true, placeholder: 'Search state' } : {});
      el.addEventListener('change', function () { checkSel(el); });
    });
    function checkSel(el) {
      var box = el.closest('.field'), bad = !el.value, err = box.querySelector('.field__err');
      box.classList.toggle('is-bad', bad); el.setAttribute('aria-invalid', String(bad));
      var face = box.querySelector('.tcs, .field__box'); if (face) { face.classList.toggle('is-bad', bad); face.classList.toggle('is-good', !bad); }
      if (err) { err.textContent = bad ? 'Please choose one.' : ''; err.classList.toggle('is-on', bad); }
      return !bad;
    }
    var PHONE = {
      '+91': [10, 10, /^[6-9]/, 'Indian mobile numbers have 10 digits and start with 6, 7, 8 or 9.'],
      '+1': [10, 10, /^[2-9]/, 'US and Canada numbers have 10 digits.'],
      '+971': [8, 9, null, 'UAE numbers have 8–9 digits (mobiles start with 5).'],
      '+44': [9, 10, null, 'UK numbers have 10 digits without the leading 0.']
    };
    function checkName(v) {
      v = v.trim();
      if (!v) return 'Please enter your name.';
      if (v.length < 2) return 'Your name looks too short.';
      if (/[0-9@#$%^*_=+<>{}\[\]\\|~]/.test(v)) return 'Please use letters only in your name.';
      return '';
    }
    function checkEmail(v) {
      v = v.trim();
      if (!v) return 'Please enter your email address.';
      if (/\s/.test(v)) return 'Email addresses can’t contain spaces.';
      if (!/^[^@]+@[^@]+$/.test(v)) return 'Email needs one “@”, e.g. name@gmail.com';
      if (!/^[a-z0-9._%+\-]+@[a-z0-9\-]+(\.[a-z0-9\-]+)*\.[a-z]{2,}$/i.test(v) || /\.\./.test(v) || /^\.|\.@|@\./.test(v)) return 'That email doesn’t look right — please check for typos.';
      return '';
    }
    function checkPhone(v) {
      if (/[a-z]/i.test(v)) return 'Please use numbers only in your phone number.';
      var d = v.replace(/\D/g, '');
      if (!d) return 'Please enter your phone number.';
      var code = cc ? cc.value : '', r = PHONE[code];
      if (code === '+91' && d.length === 11 && d.charAt(0) === '0') d = d.slice(1);
      if (/^(\d)\1+$/.test(d)) return 'That number doesn’t look real — please check it.';
      if (r) { if (d.length < r[0] || d.length > r[1] || (r[2] && !r[2].test(d))) return r[3]; return ''; }
      if (d.length < 6 || d.length > 14) return 'Please enter a valid phone number (6–14 digits).';
      return '';
    }
    var RULES = { name: checkName, email: checkEmail, phone_number: checkPhone };
    function errEl(inp) { return form.querySelector('#' + inp.getAttribute('aria-describedby')); }
    function mark(inp, msg) {
      var box = inp.closest('.field__box'), field = inp.closest('.field'), el = errEl(inp);
      var bad = !!msg, good = !msg && !!inp.value.trim();
      box.classList.toggle('is-bad', bad); box.classList.toggle('is-good', good); field.classList.toggle('is-bad', bad);
      inp.setAttribute('aria-invalid', String(bad));
      if (el) { el.textContent = msg || ''; el.classList.toggle('is-on', bad); }
      if (bad && !box.__shook && box.animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        box.__shook = 1;
        box.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(-3px)' }, { transform: 'translateX(0)' }], { duration: 320 });
      }
      if (!bad) box.__shook = 0;
      return !bad;
    }
    function validate(inp) { return mark(inp, RULES[inp.name](inp.value)); }
    Object.keys(RULES).forEach(function (n) {
      var inp = form.elements[n]; if (!inp) return;
      // leaving an empty field is fine (no nagging); empty fields are only flagged when the form is submitted
      inp.addEventListener('blur', function () { if (inp.value.trim()) validate(inp); else if (!inp.__submitted) mark(inp, ''); });
      inp.addEventListener('input', function () {
        inp.__touched = true;
        if (n === 'phone_number') {
          var c = inp.value.replace(/[^0-9 ()\-]/g, '');
          if (c !== inp.value) { inp.value = c; mark(inp, 'Please use numbers only in your phone number.'); return; }
        }
        var box = inp.closest('.field__box');
        if (!inp.value.trim() && !inp.__submitted) { mark(inp, ''); return; }
        if (box.classList.contains('is-bad') || box.classList.contains('is-good')) validate(inp);
      });
    });
    if (cc) cc.addEventListener('change', function () { var p = form.elements.phone_number; if (p.value.trim()) validate(p); });
    function clearMarks() {
      Object.keys(RULES).forEach(function (n) {
        var inp = form.elements[n]; if (!inp) return;
        inp.__touched = false; inp.__submitted = false;
        inp.closest('.field__box').classList.remove('is-bad', 'is-good');
        inp.closest('.field').classList.remove('is-bad');
        inp.removeAttribute('aria-invalid');
        var el = errEl(inp); if (el) { el.textContent = ''; el.classList.remove('is-on'); }
      });
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      status.hidden = true;
      var first = null;
      ['name', 'phone_number', 'email'].forEach(function (n) { var inp = form.elements[n]; inp.__touched = true; inp.__submitted = true; if (!validate(inp) && !first) first = inp; });
      SELS.forEach(function (n) { var el = form.elements[n]; if (el && !checkSel(el) && !first) first = el; });
      if (first) { var tb = first.tagName === 'SELECT' && first.__tc ? first.__tc.button : first; try { tb.focus(); } catch (e2) {} return; }
      var data = Object.fromEntries(new FormData(form).entries());
      data.email = String(data.email).trim();
      data.phone_number = String(data.phone_number).replace(/\D/g, '');
      if (data.country_code === '+91' && data.phone_number.length === 11) data.phone_number = data.phone_number.slice(1);
      data.phone = data.country_code + ' ' + data.phone_number;
      delete data.country_code; delete data.phone_number;
      // the shortlisted university: what the student typed, else what they picked on the map
      data.university = String(data.university || '').trim() || (selection.length ? selection.join(', ') : '');
      data.destination = data.university || 'General US Inquiry';
      // answers from the eligibility check (if the visitor took it) travel with the enquiry
      var extraTxt = Object.keys(extra).map(function (k) { return k + ': ' + extra[k]; }).join(' · ');
      Object.keys(extra).forEach(function (k) { data[k] = extra[k]; });
      var now = new Date();
      var lead = {
        channel: 'web', botcheck: data.botcheck ? '1' : '',
        lead_source: LEAD_SOURCE, country: 'USA', form: opts.formName || form.getAttribute('aria-label') || 'Free counselling form',
        name: String(data.name || '').trim(), phone: data.phone, email: data.email, state: data.state || '',
        university: data.university, course: data.course || '', call_time: data.call_time || '',
        notes: extraTxt, submitted_at: now.toISOString(), client_time: now.toString(), page: location.href.split('#')[0]
      };
      // Web3Forms email gets the same details in readable form
      data.subject = 'New lead – ' + LEAD_SOURCE + ': ' + lead.name;
      data['Lead source'] = LEAD_SOURCE; data.State = lead.state; data['Shortlisted university'] = lead.university || '-';
      data.Course = lead.course; data['Preferred call time'] = lead.call_time; data['Submitted at'] = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
      delete data.state; delete data.university; delete data.course; delete data.call_time;
      btn.disabled = true; label.textContent = 'Evaluating Profile…'; form.classList.add('is-busy');
      try {
        var sheetOk = false;
        if (LEADS_URL) {
          // Google Sheet + email to business@ (text/plain keeps it a simple request; Apps Script replies cross-origin)
          try { await fetch(LEADS_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(lead) }); sheetOk = true; }
          catch (e3) { console.error('Lead sheet error:', e3); }
        }
        var json = { success: sheetOk };
        if (!sheetOk) { // no sheet configured, or it failed: Web3Forms delivers the email
          var res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
          json = await res.json();
        }
        if (json.success) {
          show('success', 'Profile submitted successfully! We will contact you soon.');
          label.textContent = 'Submitted!';
          form.reset(); clearMarks(); SELS.forEach(function (n) { var el = form.elements[n]; if (!el) return; var b = el.closest('.field'); b.classList.remove('is-bad'); var f = b.querySelector('.tcs, .field__box'); if (f) f.classList.remove('is-bad', 'is-good'); }); selection = []; sync(); label.textContent = 'Submitted!';
          form.classList.add('is-done');
          setTimeout(function () { btn.disabled = false; form.classList.remove('is-done'); status.hidden = true; sync(); label.textContent = opts.dynamicButton && selection.length ? label.textContent : defaultLabel; }, 5000);
          if (opts.onSuccess) opts.onSuccess();
          return;
        }
        console.error('Web3Forms Error:', json);
        show('error', json.message || 'Something went wrong. Please try again.');
      } catch (err) {
        console.error('Fetch Error:', err);
        show('error', 'Network error. Please check your connection and try again.');
      } finally {
        form.classList.remove('is-busy');
        if (!form.classList.contains('is-done')) { btn.disabled = false; sync(); }
      }
    });

    // Handoff from elsewhere (same key the original app used)
    try {
      var pre = localStorage.getItem('selectedUniversity');
      if (pre) { selection = pre.split(',').map(function (s) { return s.trim(); }).filter(Boolean); localStorage.removeItem('selectedUniversity'); }
    } catch (e) { /* storage unavailable */ }
    sync();

    return {
      setSelection: function (list) { selection = list.slice(); sync(); },
      setExtra: function (o) { extra = o || {}; },
      setValue: function (name, v) { var el = form.elements[name]; if (el) { el.value = v; el.dispatchEvent(new Event('change', { bubbles: true })); } },
      getSelection: function () { return selection.slice(); }
    };
  }

  window.TCForms = { mount: mount };
})();
