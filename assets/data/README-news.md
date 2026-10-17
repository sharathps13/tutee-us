# The Tutee Times — daily edition

The hero ticker and the "Read today's edition" front page read **`assets/data/news.json`**.
When the site is on a web server, the page fetches this file on every visit, so a new
edition goes live as soon as the file is updated — no rebuild needed.
(The single-file preview uses the copy embedded at build time from `tools/news.json`.)

## Add a new day
Add an object to `editions` with today's date (YYYY-MM-DD). The page shows the newest
edition dated today or earlier; older ones stay available under "Previous edition".

```json
{
  "date": "2026-10-17",
  "sample": false,
  "breaking": "Optional one-line breaking headline (leave empty for none)",
  "ear":  { "label": "Intake watch", "text": "Short box beside the masthead" },
  "lead": { "section": "Visa", "headline": "…", "deck": "…", "body": ["para 1", "para 2"],
            "img": "assets/img/photos/…webp", "caption": "…",
            "source": "USCIS", "url": "https://www.uscis.gov/…", "cta": "contact" },
  "stories": [ { "section": "…", "headline": "…", "deck": "…", "body": ["…"], "source": "…", "url": "…", "cta": "" } ]
}
```
`cta` can be: `contact`, `opt`, `loans`, `calc`, `finder` (or empty).

## Rules for every story
- Write summaries in your own words (2–4 sentences); link the original with `source` + `url`. Don't paste full articles or use news photos without permission.
- Visa/USCIS stories: check against the official source before publishing; never promise outcomes.
- Set `"sample": false` once real, checked news is in the edition (it removes the "Sample edition" note).

## Automating it (next step)
A small scheduled job (e.g. a Cloudflare Worker cron at 6:00 AM IST) can draft the day's edition from
official feeds (USCIS newsroom, travel.state.gov, Study in the States) plus your team's Tutee Connect
stories, and write `news.json` for one person to approve.
