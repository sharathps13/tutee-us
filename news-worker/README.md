# The Tutee Times — live news (optional, free)

Without this, the hero ticker and front page still change **every day**: the page builds today's edition
from the counsellors' story bank in `tools/news.json` (`pool`), dated today, and the paper keeps the last 7 days
for "Previous edition". Any hand-written edition you add under `editions` (with a date) replaces the automatic one
for that day — use it for breaking visa news or Tutee Connect announcements.

This Worker adds **live headlines from official sources** ("Live · USCIS …"), refreshed every morning.

## Set up (≈10 minutes, Cloudflare free plan)
1. Cloudflare → Workers & Pages → Create Worker → paste `worker.js` → Deploy.
2. Storage → KV → create a namespace, then in the Worker: Settings → Bindings → KV → name it `NEWS`.
3. Settings → Variables:
   - `FEEDS` — one per line, `Name|https://…rss-url`. Use the official RSS links listed on each site's
     own "RSS" page (e.g. the USCIS newsroom RSS, the State Department travel/visa news feed, an education
     ministry or university-news feed your team trusts). Check each link opens as XML in a browser first.
   - `ALLOWED_ORIGIN` — your site address, e.g. `https://usa.tuteeconnect.com`
   - optional `KEYWORDS` (comma list) to tune which headlines count as student-relevant
   - optional `REFRESH_KEY` — lets you force an update at `https://…workers.dev/refresh?key=…`
4. Settings → Triggers → Cron: `30 0 * * *` (every day 06:00 India time).
5. Put the Worker URL in `tools/usa.tpl.html` on the ticker: `data-feed="https://…workers.dev"` and rebuild.

Only headline, link, source and date are shown — readers click through to the original article.
