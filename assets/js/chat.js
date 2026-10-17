/* Tutee AI counselor — same scripted answers and lead-capture flow as the original widget.
   Leads go to Web3Forms with subject "New Lead from Chatbot!". */
(function () {
  'use strict';
  var ACCESS_KEY = 'c3d875cf-0480-4d8e-a7be-2fb2c1268a0d';
  var SUGGESTIONS = ['How to get an F-1 Visa?', 'Tell me about Scholarships', 'Cost of studying in USA?', 'Evaluate My Profile'];
  var WELCOME = "Hi! 👋 I'm your **Tutee Connect AI Counselor**. \n\nI can answer questions about F-1 Visas, top US universities, and our 99% success rate programs. How can I help you today?";

  function answer(text) {
    var q = text.toLowerCase();
    if (/visa|f1|f-1|interview/.test(q)) return 'The F-1 Visa is for international students studying in the US. The great news is Tutee Connect boasts a **99% F-1 Visa Success Rate**! We provide expert mock interviews and rigorous documentation support so you are fully prepared.';
    if (/scholarship|fund|financial|aid/.test(q)) return 'Many top US universities offer generous Merit-based and Need-based scholarships. We analyze your academic profile and help you apply to universities where you have the highest chance of securing funding.';
    if (/cost|fee|tuition|money|expense/.test(q)) return 'Tuition in the US typically ranges from $15,000 to $55,000+ per year depending on the university. However, we help students secure **Non-collateral Education Loans** and find on-campus jobs to manage living expenses.';
    if (/job|work|earn|part time/.test(q)) return "Absolutely! With an F-1 Visa, you can work on-campus for up to 20 hours a week during the semester. Our 'Earn While You Learn' initiative actively guides our students on how to secure these jobs immediately upon arrival.";
    if (/gre|toefl|ielts|exam/.test(q)) return 'Standardized tests like the GRE, TOEFL, or IELTS are usually required, though many universities are now test-optional. We can help you shortlist universities that perfectly match your current test scores.';
    if (/tutee|connect|service|help/.test(q)) return 'Tutee Connect provides end-to-end support for US admissions! From University Shortlisting and Applications, to Visa Mock Interviews, Education Loans, and post-landing settlement. We are your one-stop solution.';
    return "That's a great question! Studying in the US involves a lot of moving parts (admissions, visas, loans), and our experts at Tutee Connect are dedicated to navigating every single detail with you.";
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>'); }
  function time() { return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }

  function init() {
    var root = document.querySelector('[data-chat-root]');
    if (!root) return;
    root.innerHTML =
      '<button class="fab fab--ai" type="button" aria-label="Open AI Chat" aria-expanded="false" data-chat-open>' +
        '<img src="assets/img/logo/icon-96.png" alt="" width="40" height="40"><span class="fab__live"></span>' +
        '<span class="fab__label"><strong>Ask Tutee AI</strong><small>Get Instant Guidance</small></span></button>' +
      '<section class="chat" role="dialog" aria-label="Tutee AI chat" aria-modal="false" data-chat hidden>' +
        '<header class="chat__head"><img src="assets/img/logo/icon-96.png" alt="Tutee AI" width="40" height="40"><div><h3>Tutee AI <svg class="ico"><use href="#i-sparkle"/></svg></h3><p>Expert Counselor • Online</p></div>' +
          '<button type="button" class="chat__btn" aria-label="Restart Conversation" title="Restart Conversation" data-chat-reset><svg class="ico"><use href="#i-refresh"/></svg></button>' +
          '<button type="button" class="chat__btn" aria-label="Close chat" data-chat-close><svg class="ico"><use href="#i-close"/></svg></button></header>' +
        '<div class="chat__promo"><span><svg class="ico"><use href="#i-landmark"/></svg>Free Consultation Available</span><button type="button" data-chat-book>Book Now</button></div>' +
        '<div class="chat__log" data-chat-log aria-live="polite"></div>' +
        '<form class="chat__form" data-chat-form><textarea rows="1" placeholder="Ask me anything…" aria-label="Message" data-chat-input></textarea>' +
          '<button type="submit" aria-label="Send" data-chat-send disabled><svg class="ico"><use href="#i-send"/></svg></button></form>' +
        '<p class="chat__disclaimer">AI generated responses. Confirm essential info with our team.</p>' +
      '</section>';

    var openBtn = root.querySelector('[data-chat-open]');
    var panel = root.querySelector('[data-chat]');
    var log = root.querySelector('[data-chat-log]');
    var form = root.querySelector('[data-chat-form]');
    var input = root.querySelector('[data-chat-input]');
    var send = root.querySelector('[data-chat-send]');

    var state = 'idle', lead = { name: '', phone: '', email: '' }, askedForName = false, busy = false, count = 0;

    function scroll() { log.scrollTop = log.scrollHeight; }
    function bubble(role, content) {
      var row = document.createElement('div');
      row.className = 'msg msg--' + role;
      row.innerHTML = (role === 'ai' ? '<img src="assets/img/logo/icon-96.png" alt="" width="28" height="28">' : '<span class="msg__me"><svg class="ico"><use href="#i-user"/></svg></span>') +
        '<div class="msg__b"><div>' + (role === 'ai' ? md(content) : esc(content)) + '</div><time>' + time() + '</time></div>';
      log.appendChild(row); count++; scroll(); return row;
    }
    function typing(on) {
      var t = log.querySelector('.msg--typing');
      if (on && !t) { t = document.createElement('div'); t.className = 'msg msg--ai msg--typing'; t.innerHTML = '<img src="assets/img/logo/icon-96.png" alt="" width="28" height="28"><div class="msg__b"><i></i><i></i><i></i></div>'; log.appendChild(t); scroll(); }
      if (!on && t) t.remove();
      busy = on; send.disabled = on || !input.value.trim();
    }
    function suggestions() {
      var wrap = document.createElement('div'); wrap.className = 'chat__suggest';
      SUGGESTIONS.forEach(function (s) { var b = document.createElement('button'); b.type = 'button'; b.textContent = s; b.addEventListener('click', function () { handle(s); }); wrap.appendChild(b); });
      log.appendChild(wrap);
    }
    function reset() {
      log.innerHTML = ''; state = 'idle'; lead = { name: '', phone: '', email: '' }; askedForName = false; count = 0;
      bubble('ai', WELCOME); suggestions(); input.value = ''; typing(false);
    }

    function handle(text) {
      if (!text.trim() || busy) return;
      var sug = log.querySelector('.chat__suggest'); if (sug) sug.remove();
      bubble('user', text); input.value = ''; autosize();
      if (state !== 'idle') {
        typing(true);
        setTimeout(async function () {
          if (state === 'asking_name') {
            lead.name = text; state = 'asking_phone'; typing(false);
            bubble('ai', 'Thanks ' + text.split(' ')[0] + '! What is the best **Phone Number** (with country code) to reach you at?');
          } else if (state === 'asking_phone') {
            typing(false);
            if (!/^[0-9]{7,15}$/.test(text.replace(/\D/g, ''))) { bubble('ai', "That doesn't look like a valid phone number. Please enter a valid number (e.g., +1 234 567 8900)."); return; }
            lead.phone = text; state = 'asking_email'; bubble('ai', 'Got it. Lastly, what is your **Email Address**?');
          } else if (state === 'asking_email') {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) { typing(false); bubble('ai', "That doesn't look like a valid email address. Could you double-check and try again?"); return; }
            lead.email = text; state = 'submitting';
            typing(false);
            var note = bubble('ai', 'Perfect! Submitting your profile to our experts now…');
            var reply;
            try {
              var r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ access_key: ACCESS_KEY, subject: 'New Lead from Chatbot!', from_name: 'Tutee AI Counselor', name: lead.name, phone: lead.phone, email: lead.email, destination: 'Chatbot General Inquiry' }) });
              var j = await r.json();
              reply = j.success ? '✅ **Success!** Your profile has been assigned to an expert counselor. They will contact you shortly to help with your admission and visa process.\n\nIs there anything else I can help you with in the meantime?'
                : 'Oops, something went wrong submitting your profile. Please try using the main contact form on our website.';
            } catch (e) { reply = 'Network error while submitting. Please try the main contact form or WhatsApp!'; }
            note.querySelector('.msg__b > div').innerHTML = md(reply);
            state = 'idle';
          }
        }, 600);
        return;
      }
      if (text === 'Evaluate My Profile') {
        typing(true);
        setTimeout(function () { state = 'asking_name'; typing(false); bubble('ai', "I'd be happy to help you evaluate your profile! Our expert human counselors review these directly to ensure accuracy.\n\nCould I please get your **Full Name**?"); }, 500);
        return;
      }
      typing(true);
      setTimeout(function () {
        typing(false); bubble('ai', answer(text));
        if (!askedForName) {
          askedForName = true; typing(true);
          setTimeout(function () { typing(false); bubble('ai', 'To give you the most accurate and personalized guidance for your unique profile, could I quickly grab your **Full Name**?'); state = 'asking_name'; }, 1500);
        }
      }, 500);
    }

    function autosize() { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; send.disabled = busy || !input.value.trim(); }
    input.addEventListener('input', autosize);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handle(input.value); } });
    form.addEventListener('submit', function (e) { e.preventDefault(); handle(input.value); });

    function open() { panel.hidden = false; requestAnimationFrame(function () { panel.classList.add('is-open'); }); openBtn.setAttribute('aria-expanded', 'true'); document.documentElement.classList.add('chat-open'); setTimeout(function () { input.focus({ preventScroll: true }); }, 250); }
    function close() { panel.classList.remove('is-open'); openBtn.setAttribute('aria-expanded', 'false'); document.documentElement.classList.remove('chat-open'); setTimeout(function () { panel.hidden = true; }, 350); openBtn.focus({ preventScroll: true }); }
    openBtn.addEventListener('click', open);
    root.querySelector('[data-chat-close]').addEventListener('click', close);
    root.querySelector('[data-chat-reset]').addEventListener('click', reset);
    root.querySelector('[data-chat-book]').addEventListener('click', function () {
      close();
      var c = document.getElementById('contact');
      if (c) c.scrollIntoView({ behavior: 'smooth' }); else location.href = 'index.html#contact';
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) close(); });
    reset();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
