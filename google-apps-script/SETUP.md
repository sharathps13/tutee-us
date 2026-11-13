# Free counselling form → Google Sheet + business@tuteeconnect.com

Every enquiry from the USA landing page (home-page counselling card and University Atlas form) is sent to
a Google Apps Script web app, which:
- adds a row to the **Leads** tab of your Google Sheet: Date, Time (IST), Lead source ("USA landing page"),
  Country, Name, Phone, Email, State, University (shortlisted), Course, Preferred call time, Form, Page;
- emails the same details to **business@tuteeconnect.com** (Reply-To = the student's email).

## One-time setup (signed in as business@tuteeconnect.com)
1. Open the leads Google Sheet → **Extensions → Apps Script**.
2. Replace everything with `Code.gs` from this folder → **Save**.
3. **Deploy → New deployment →** type **Web app** · Execute as **Me** · Who has access **Anyone** → **Deploy** → allow access.
4. Copy the **Web app URL** (ends in `/exec`).
5. Put it in `assets/js/forms.js`: `var LEADS_URL = window.TC_LEADS_URL || 'PASTE-URL-HERE';` — or send it to us and we will add it and rebuild.
6. In the Apps Script editor run **testLead** once: a sample row appears and a sample email arrives.

Until the URL is added, the form still works through Web3Forms (email only, no sheet row).

Columns are matched by header name, so the same sheet can be shared with the other country pages:
each row's **Lead source** says which landing page it came from.
`netlify.toml` already allows the page to talk to `script.google.com`.
