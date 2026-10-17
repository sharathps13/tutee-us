"""Applies the Wikimedia Commons landmark photography to index.html (hero, destinations, why, contact, credits).
Photos are hot-linked from Wikimedia (licences/credits in tools/photos.json, shown in the footer)."""
import json, pathlib, re, html
root = pathlib.Path(__file__).resolve().parent.parent
P = json.loads((root / 'tools/photos.json').read_text())
def u(k, w):
    p = P[k]; w = min(w, 3840)
    return p['t'].replace('/1920px-', f'/{w}px-')
def srcset(k):
    big = 3840 if P[k]['w'] / P[k]['h'] > 2 else 1920
    ws = [960, 1920] + ([3840] if big == 3840 else [])
    return ', '.join(f'{u(k,w)} {w}w' for w in ws)
def img(k, cls='', extra='', sizes='100vw', alt=None):
    p = P[k]; h = round(1920 * p['h'] / p['w'])
    a = html.escape(alt if alt is not None else p['place'])
    return f'<img{(" class=%s" % chr(34) + cls + chr(34)) if cls else ""} src="{u(k,1920)}" srcset="{srcset(k)}" sizes="{sizes}" alt="{a}" width="1920" height="{h}" decoding="async" {extra}>'
s = (root / 'index.html').read_text(encoding='utf-8')

# ---- hero slides: real American landmarks
HERO = [('liberty', 'Statue of Liberty', 'New York Harbor', '50% 40%'),
        ('manhattan', 'Lower Manhattan', 'New York City', '62% 50%'),
        ('gg_fog', 'Golden Gate Bridge', 'San Francisco', '50% 50%'),
        ('gc_rays', 'Grand Canyon', 'Arizona', '50% 45%'),
        ('capitol', 'The Capitol', 'Washington, D.C.', '50% 55%')]
slides = '\n'.join(f'      <figure class="hx__slide{" is-active" if i == 0 else ""}" data-hx-slide>{img(k, extra=("fetchpriority=" + chr(34) + "high" + chr(34)) if i == 0 else "loading=" + chr(34) + "eager" + chr(34), alt="")}</figure>'.replace('<img ', f'<img style="--pos:{pos}" ', 1) for i, (k, n, c, pos) in enumerate(HERO))
thumbs = '\n'.join(f'      <button type="button" class="hx__thumb{" is-active" if i == 0 else ""}" data-hx-go="{i}" aria-label="Show {n}, {c}"><img src="{u(k, 330)}" alt="" width="330" height="{round(330 * P[k]["h"] / P[k]["w"])}" loading="lazy"><span><b>{n}</b>{c}</span><i></i></button>' for i, (k, n, c, pos) in enumerate(HERO))
hx = f'''    <div class="hx" data-hx aria-hidden="true">
{slides}
      <div class="hx__spot" data-hx-spot></div>
    </div>
    <div class="hx__reel" data-hx-reel role="group" aria-label="American landmarks">
{thumbs}
      <button type="button" class="hx__pause" data-hx-pause aria-label="Pause slideshow" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg></button>
    </div>
'''
s = re.sub(r'    <div class="hx" data-hx.*?\n    </div>\n    <div class="hx__reel".*?\n    </div>\n', lambda m: hx, s, count=1, flags=re.S)

# ---- why: Lower Manhattan by night
s = re.sub(r'<img src="assets/img/photos/usa-city-1200\.webp"[^>]*data-why-img>', img('manhattan_night', extra='loading="lazy" data-why-img', alt='Lower Manhattan skyline at night, seen from Brooklyn'), s)

# ---- contact: Golden Gate at sunset
s = s.replace('<div class="contact__portal" data-portal aria-hidden="true"><div class="contact__sky"></div><div class="contact__sun"></div></div>',
              '<div class="contact__portal" data-portal aria-hidden="true">' + img('gg_fog', 'contact__photo', 'loading="lazy"', alt='') + '</div>')

# ---- photo credits in the footer
used = ['liberty', 'manhattan', 'gg_fog', 'gc_rays', 'capitol', 'manhattan_night', 'brooklyn', 'boston', 'chicago', 'stanford', 'gc_evening', 'gg_day']
cred = '; '.join(f'<a href="{P[k]["page"]}" target="_blank" rel="noopener">{html.escape(P[k]["place"])}</a> by {html.escape(P[k]["by"])} (<a href="{P[k]["licurl"]}" target="_blank" rel="noopener">{P[k]["lic"]}</a>)' for k in used)
block = f'<p class="foot__credits">Photography via Wikimedia Commons: {cred}. Photos cropped and colour-graded on this page.</p>'
s = re.sub(r'<p class="foot__credits">.*?</p>', '', s, flags=re.S)
s = s.replace('<div class="wrap foot__base">', '<div class="wrap">' + block + '</div>\n  <div class="wrap foot__base">', 1)
s = s.replace('<link rel="preload" href="assets/img/photos/hero-times.webp" as="image">', f'<link rel="preconnect" href="https://thumb.wikimedia.org" crossorigin>\n<link rel="preload" href="{u("liberty",1920)}" as="image">')
(root / 'index.html').write_text(s, encoding='utf-8')
print('ok')

# ---- destinations explorer (inserted once, after the ticker)
DEST = [('manhattan_night', 'New York', 'Columbia University in Manhattan, Cornell University upstate in Ithaca.', 'Lower Manhattan from Brooklyn'),
        ('boston', 'Boston & Cambridge', 'MIT and Harvard University, both across the river in Cambridge, Massachusetts.', 'Boston from Cambridge'),
        ('capitol', 'Washington, D.C.', 'The nation’s capital, on the East Coast between New York and the South.', 'The Capitol at dusk'),
        ('chicago', 'Chicago', 'The University of Chicago, on the shore of Lake Michigan.', 'Chicago at sunrise'),
        ('stanford', 'San Francisco Bay', 'Stanford University and UC Berkeley, on either side of the Bay.', 'Stanford Memorial Church'),
        ('gc_evening', 'The Southwest', 'Wide open national parks like the Grand Canyon, Arizona.', 'Grand Canyon, Powell Point')]
s = (root / 'index.html').read_text(encoding='utf-8')
figs = '\n'.join(f'      <figure class="dest__fig{" is-active" if i == 0 else ""}" data-dest-fig>{img(k, extra="loading=" + chr(34) + "lazy" + chr(34), alt=cap)}<figcaption>{html.escape(cap)} · {html.escape(P[k]["by"])}</figcaption></figure>' for i, (k, n, d, cap) in enumerate(DEST))
items = '\n'.join(f'        <li><button type="button" class="dest__item{" is-active" if i == 0 else ""}" data-dest-go="{i}" aria-pressed="{"true" if i == 0 else "false"}"><span class="dest__name">{html.escape(n)}</span><span class="dest__line">{html.escape(d)}</span></button></li>' for i, (k, n, d, cap) in enumerate(DEST))
section = f'''<!-- ============ DESTINATIONS — coast to coast ============ -->
<section id="destinations" class="dest" data-section="home" data-dest aria-labelledby="destTitle">
  <div class="dest__pin" data-dest-pin>
    <div class="dest__media" data-dest-media>
{figs}
    </div>
    <div class="dest__panel">
      <h2 class="dest__title" id="destTitle">Coast to coast, your campus is out there.</h2>
      <ol class="dest__list">
{items}
      </ol>
      <a class="dest__link" href="universities.html">Browse the full university directory <svg class="ico"><use href="#i-arrow"/></svg></a>
    </div>
    <div class="dest__progress" aria-hidden="true"><i data-dest-bar></i></div>
  </div>
</section>
'''
s = re.sub(r'<!-- ============ DESTINATIONS.*?</section>\n', '', s, flags=re.S)
s = s.replace('<!-- ============ SERVICES — 3D explorer ============ -->', section + '\n<!-- ============ SERVICES — 3D explorer ============ -->', 1)
(root / 'index.html').write_text(s, encoding='utf-8')
print('dest ok')
