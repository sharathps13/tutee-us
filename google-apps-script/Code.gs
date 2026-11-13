/**
 * Tutee Connect — website leads → Google Sheet + email to business@tuteeconnect.com
 * One script for every country landing page (USA, Germany, …). Each lead is one row; the
 * "Lead source" column says which landing page it came from (e.g. "USA landing page").
 *
 * Setup (once) — signed in as business@tuteeconnect.com:
 *  1. Open the leads Google Sheet → Extensions → Apps Script → replace everything with this file → Save.
 *  2. Deploy → New deployment → type "Web app"
 *       Execute as: Me (business@tuteeconnect.com)      Who has access: Anyone
 *     → Authorize → copy the Web app URL (ends in /exec).
 *  3. Paste that URL into LEADS_URL in assets/js/forms.js of the landing page (or send it to us), then redeploy the site.
 *  4. Run testLead() once from the editor: a sample row appears and an email arrives.
 *  If you edit this script later: Deploy → Manage deployments → Edit → Version: New version (the URL stays the same).
 *
 * Columns are matched by their header name, so an existing "Leads" tab keeps its columns;
 * any missing ones are added at the end automatically.
 */
const SECRET   = 'CHANGE-ME-to-a-long-random-text';   // only for server-to-server posts (e.g. the Germany Netlify function)
const NOTIFY   = 'business@tuteeconnect.com';
const SHEET    = 'Leads';
const TZ       = 'Asia/Kolkata';
const HEADERS  = ['Received', 'Date', 'Time (IST)', 'Lead source', 'Country', 'Name', 'Phone', 'Email', 'State',
                  'University', 'Course', 'Preferred call time', 'Form', 'Page', 'Programme', 'Based in', 'Details', 'Source'];

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false, error: 'bad json' }); }
  const fromWeb = d.channel === 'web';                               // website forms post directly
  if (!fromWeb && d.secret !== SECRET) return out({ ok: false, error: 'unauthorised' });
  if (d.botcheck) return out({ ok: true });                          // honeypot filled = bot
  if (!d.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email || '')) return out({ ok: false, error: 'invalid' });
  Object.keys(d).forEach(k => { if (typeof d[k] === 'string') d[k] = clean(d[k]); });

  const now = new Date();
  const country = d.country || '';
  const row = {
    'Received': now,
    'Date': Utilities.formatDate(now, TZ, 'dd-MM-yyyy'),
    'Time (IST)': Utilities.formatDate(now, TZ, 'hh:mm:ss a'),
    'Lead source': d.lead_source || (country ? country + ' landing page' : 'Website'),
    'Country': country,
    'Name': d.name,
    'Phone': d.phone ? "'" + d.phone : '',
    'Email': d.email,
    'State': d.state || '',
    'University': d.university || '',
    'Course': d.course || d.study_level || '',
    'Preferred call time': d.call_time || '',
    'Form': d.form || '',
    'Page': d.page || '',
    'Programme': d.study_level || '',
    'Based in': d.origin || '',
    'Details': d.destination || '',
    'Source': d.source || ''
  };

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET);
    if (!sh) { sh = ss.insertSheet(SHEET); sh.appendRow(HEADERS); sh.setFrozenRows(1); sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold'); }
    let head = sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0].map(String);
    const missing = HEADERS.filter(h => head.indexOf(h) < 0);
    if (missing.length) { sh.getRange(1, head.length + 1, 1, missing.length).setValues([missing]).setFontWeight('bold'); head = head.concat(missing); }
    sh.appendRow(head.map(h => row[h] == null ? '' : row[h]));
  } finally { lock.releaseLock(); }

  const lines = [
    'New enquiry from the ' + row['Lead source'], '',
    'Date / time:        ' + row['Date'] + '  ' + row['Time (IST)'] + ' IST',
    'Full name:          ' + d.name,
    'Phone:              ' + (d.phone || ''),
    'Email:              ' + d.email,
    'State:              ' + row['State'],
    'Shortlisted univ.:  ' + (row['University'] || '-'),
    'Course:             ' + row['Course'],
    'Preferred call:     ' + row['Preferred call time'],
    'Lead source:        ' + row['Lead source'] + (row['Form'] ? ' · ' + row['Form'] : ''),
    'Page:               ' + row['Page'], '',
    'All leads: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
  ];
  const opts = { name: 'Tutee Connect Website', replyTo: d.email };
  MailApp.sendEmail(NOTIFY, 'New lead – ' + row['Lead source'] + ': ' + d.name, lines.join('\n'), opts);
  return out({ ok: true });
}

// stops "=…", "+…" etc. being read as a formula
function clean(v) { return String(v).slice(0, 600).replace(/^[=+\-@]/, "'$&"); }
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

// Run once from the editor: adds a sample row and sends a sample email.
function testLead() {
  doPost({ postData: { contents: JSON.stringify({ channel: 'web', lead_source: 'USA landing page', country: 'USA',
    form: 'Apps Script test', name: 'Test Lead', email: 'test@example.com', phone: '+91 9876543210', state: 'Tamil Nadu',
    university: 'Stanford University', course: 'MS in Computer Science', call_time: 'Evening (3 – 6 PM)', page: 'https://example.com/' }) } });
}
