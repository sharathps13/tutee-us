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
      '<div class="field"><span class="field__label">Destination</span><div class="chips" data-chips><svg class="ico"><use href="#i-landmark"/></svg><span class="chips__empty" data-chips-empty>General US Inquiry</span></div>' +
        '<input type="hidden" name="destination" value="General US Inquiry" data-destination></div>' +
      '<button class="btn btn--primary btn--block lead__submit" type="submit" data-submit><span data-submit-label>Submit Profile</span><svg class="ico"><use href="#i-arrow"/></svg></button>' +
      '<p class="lead__note">Free immediate consultation.</p>';
  }

  function mount(form, opts) {
    opts = opts || {};
    var slot = form.querySelector('[data-form-slot]') || form;
    var uid = 'lf' + Math.random().toString(36).slice(2, 7);
    slot.innerHTML = fieldsHTML(uid);
    var status = form.querySelector('[data-status]');
    var btn = form.querySelector('[data-submit]');
    var label = form.querySelector('[data-submit-label]');
    var dest = form.querySelector('[data-destination]');
    var chips = form.querySelector('[data-chips]');
    var empty = form.querySelector('[data-chips-empty]');
    var defaultLabel = opts.buttonText || 'Submit Profile';
    var selection = [];
    label.textContent = defaultLabel;

    function renderChips() {
      chips.querySelectorAll('.chipx').forEach(function (c) { c.remove(); });
      empty.hidden = selection.length > 0;
      selection.forEach(function (name) {
        var b = document.createElement('span');
        b.className = 'chipx';
        b.innerHTML = esc(name) + '<button type="button" aria-label="Remove ' + esc(name) + '"><svg class="ico"><use href="#i-close"/></svg></button>';
        b.querySelector('button').addEventListener('click', function () {
          selection = selection.filter(function (n) { return n !== name; });
          sync(); if (opts.onSelectionChange) opts.onSelectionChange(selection.slice());
        });
        chips.appendChild(b);
      });
      if (selection.length > 1) {
        var clr = document.createElement('button'); clr.type = 'button'; clr.className = 'chipx chipx--clear'; clr.textContent = 'Clear';
        clr.addEventListener('click', function () { selection = []; sync(); if (opts.onSelectionChange) opts.onSelectionChange([]); });
        chips.appendChild(clr);
      }
    }
    function sync() {
      dest.value = selection.length ? selection.join(', ') : 'General US Inquiry';
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
      if (first) { first.focus(); return; }
      var data = Object.fromEntries(new FormData(form).entries());
      data.email = String(data.email).trim();
      data.phone_number = String(data.phone_number).replace(/\D/g, '');
      if (data.country_code === '+91' && data.phone_number.length === 11) data.phone_number = data.phone_number.slice(1);
      data.phone = data.country_code + ' ' + data.phone_number;
      delete data.country_code; delete data.phone_number;
      btn.disabled = true; label.textContent = 'Evaluating Profile…'; form.classList.add('is-busy');
      try {
        var res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        var json = await res.json();
        if (json.success) {
          show('success', 'Profile submitted successfully! We will contact you soon.');
          label.textContent = 'Submitted!';
          form.reset(); clearMarks(); selection = []; sync(); label.textContent = 'Submitted!';
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
      getSelection: function () { return selection.slice(); }
    };
  }

  window.TCForms = { mount: mount };
})();
