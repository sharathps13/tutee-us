// The Tutee Times — live wire. A Cloudflare Worker that, every morning, reads official RSS/Atom feeds,
// keeps the student-relevant headlines and serves them as JSON to the website's hero ticker.
// Only headline, link, source and date are stored — never article text (copyright).
// Bindings: KV namespace NEWS. Vars: FEEDS ("Name|https://feed-url" one per line), ALLOWED_ORIGIN, KEYWORDS (optional).
// Cron trigger (wrangler.toml / dashboard): e.g. "30 0 * * *"  (06:00 IST).

const DEFAULT_KEYWORDS = 'student,students,f-1,f1,visa,opt,stem,sevp,sevis,h-1b,h1b,international,university,universities,college,i-20,education,scholarship,uscis,embassy,consulate,interview,appointment';

export default {
  async scheduled(event, env, ctx) { ctx.waitUntil(refresh(env)); },
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const allowed = (env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
    const cors = { 'Access-Control-Allow-Origin': allowed.length === 0 ? '*' : (allowed.includes(origin) ? origin : allowed[0]), 'Vary': 'Origin', 'content-type': 'application/json', 'cache-control': 'public, max-age=900' };
    const url = new URL(req.url);
    if (url.pathname === '/refresh' && url.searchParams.get('key') === env.REFRESH_KEY && env.REFRESH_KEY) { await refresh(env); }
    const body = (await env.NEWS.get('items')) || '{"items":[]}';
    return new Response(body, { headers: cors });
  }
};

async function refresh(env) {
  const feeds = String(env.FEEDS || '').split(/\n|;/).map(l => l.trim()).filter(Boolean).map(l => { const [name, u] = l.split('|'); return { name: name.trim(), url: (u || '').trim() }; }).filter(f => /^https:\/\//.test(f.url));
  const kw = String(env.KEYWORDS || DEFAULT_KEYWORDS).toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  const all = [];
  for (const f of feeds) {
    try {
      const r = await fetch(f.url, { headers: { 'user-agent': 'TuteeTimes/1.0 (+https://tuteeconnect.com)' } });
      if (!r.ok) continue;
      const xml = await r.text();
      for (const it of parse(xml)) {
        const t = it.title.toLowerCase();
        if (kw.length && !kw.some(k => t.includes(k))) continue;
        all.push({ title: it.title.slice(0, 160), link: it.link, source: f.name, date: it.date });
      }
    } catch (e) { /* skip a failing feed */ }
  }
  const seen = new Set();
  const items = all.filter(x => /^https:\/\//.test(x.link) && !seen.has(x.link) && seen.add(x.link))
    .sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 12);
  if (items.length) await env.NEWS.put('items', JSON.stringify({ updated: new Date().toISOString(), items }));
}

function parse(xml) {
  const out = [], dec = s => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/\s+/g, ' ').trim();
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) || [];
  for (const b of blocks) {
    const title = dec((b.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '');
    let link = ((b.match(/<link[^>]*href="([^"]+)"/i) || [])[1]) || dec((b.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1] || '');
    const raw = dec((b.match(/<(pubDate|published|updated|dc:date)[^>]*>([\s\S]*?)<\/\1>/i) || [])[2] || '');
    const d = raw ? new Date(raw) : null;
    if (title && link) out.push({ title, link, date: d && !isNaN(d) ? d.toISOString() : '' });
  }
  return out;
}
