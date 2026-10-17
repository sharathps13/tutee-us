# Tutee Assistant — live AI answers (optional)

The chat in the FAQ section answers instantly from 32 built-in Q&As. Questions it can't match
can be sent to a real AI model through this small Cloudflare Worker. Without it, the chat
offers "Ask a counsellor" / WhatsApp instead.

The API key stays on the server — never put it in the web page.

## Set up (about 10 minutes)
1. Create an Anthropic API key at https://console.anthropic.com (billing applies per use).
2. Create a free Cloudflare account → Workers & Pages → Create → Worker → paste `worker.js` → Deploy.
3. In the Worker's Settings → Variables:
   - `ANTHROPIC_API_KEY` — your key (type: Secret)
   - `MODEL` — a current Claude model ID from https://docs.claude.com/en/docs/about-claude/models
   - `ALLOWED_ORIGIN` — your site address, e.g. `https://usa.tuteeconnect.com` (comma-separate several)
4. Copy the Worker URL (e.g. `https://tutee-ask.yourname.workers.dev`).
5. In `tools/usa.tpl.html`, add it to the chat: `<div class="ask__frame" data-ask data-ai-endpoint="https://…workers.dev">`,
   then rebuild the page.

## Keeping it in sync
After editing answers in `tools/faq_kb.py`, run `python3 tools/build-ai-worker.py` and redeploy `worker.js`
so the AI uses the same reference answers.

Answers from the AI are labelled "AI answer" in the chat and always offer "Talk to a counsellor".
