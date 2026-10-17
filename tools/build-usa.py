"""Builds index.html from tools/usa.tpl.html.
Photography: Wikimedia Commons (hot-linked, credited) — tools/photos.json.
Map: US states from us-atlas (tools/us-states.json, public domain Census data).
Run: python3 tools/build-usa.py"""
import json, pathlib, re, html
root = pathlib.Path(__file__).resolve().parent.parent
P = json.loads((root / 'tools/photos.json').read_text())
STATES = json.loads((root / 'tools/us-states.json').read_text())
CITY = json.loads((root / 'tools/us-cities.json').read_text())
esc = html.escape

def url(k, w):
    return P[k]['t'].replace('/1920px-', f'/{min(int(w), 3840)}px-')
def srcset(k):
    ws = [960, 1920] + ([3840] if P[k]['w'] / P[k]['h'] > 2 else [])
    return ', '.join(f'{url(k, w)} {w}w' for w in ws)
def img(k, cls='', alt=None, attr='', sizes='100vw'):
    p = P[k]; h = round(1920 * p['h'] / p['w'])
    a = esc(p['place'] if alt is None else alt)
    c = f' class="{cls}"' if cls else ''
    return f'<img{c} src="{url(k, 1920)}" srcset="{srcset(k)}" sizes="{sizes}" alt="{a}" width="1920" height="{h}" decoding="async" {attr}>'.replace(' >', '>')
def credit(k):
    p = P[k]
    return f'{esc(p["place"])} · photo {esc(p["by"])}, <a href="{p["page"]}" target="_blank" rel="noopener">{p["lic"]}</a>'

s = (root / 'tools/usa.tpl.html').read_text(encoding='utf-8')
s = s.replace('%%SPRITE%%', (root / 'tools/sprite.html').read_text(encoding='utf-8'))
s = re.sub(r'\{\{url:(\w+):(\d+)\}\}', lambda m: url(m[1], m[2]), s)
s = re.sub(r'\{\{credit:(\w+)\}\}', lambda m: credit(m[1]), s)
def imgtok(m):
    parts = m[1].split(':', 2); k, cls = parts[0], parts[1]; rest = parts[2] if len(parts) > 2 else ''
    alt = re.search(r'alt=([^:]*)', rest); attr = re.search(r'attr=(.*)$', rest)
    return img(k, cls, alt[1] if alt else None, attr[1] if attr else '')
s = re.sub(r'\{\{img:(.*?)\}\}', imgtok, s)


# hero word: overlap-free outlines (tools/make-hero-word.py), one outline + one fill layer per letter
HW = json.loads((root / 'tools/hero-word.json').read_text())
_W = HW['right'] - HW['left']; _pad = 60; _top = HW['cap'] + _pad; _H = HW['cap'] - HW['base'] + 2 * _pad
def _letter(l):
    vb = f'0 {-_top} {l["adv"]} {_H}'
    path = f'<path transform="scale(1 -1)" d="{l["d"]}"/>'
    left = (l['x'] - HW['left']) / _W * 100; width = l['adv'] / _W * 100
    return (f'<span class="hw" style="left:{left:.4f}%;width:{width:.4f}%">'
            f'<svg class="hw__o" viewBox="{vb}" preserveAspectRatio="none">{path}</svg>'
            f'<svg class="hw__f" viewBox="{vb}" preserveAspectRatio="none">{path}</svg></span>')
hero_word = (f'<div class="hero__word" data-hero-word aria-hidden="true" style="--hw-ratio:{_W}/{_H}">'
             + ''.join(_letter(l) for l in HW['letters']) + '</div>')
s = s.replace('%%HERO_WORD%%', hero_word)



# destinations
DEST = [('manhattan_night', 'ny', 'New York', 'Columbia University in Manhattan, and Cornell University upstate in Ithaca.', 'Lower Manhattan from Brooklyn'),
        ('boston', 'boston', 'Boston & Cambridge', 'MIT and Harvard University, both in Cambridge, Massachusetts.', 'Boston from Cambridge'),
        ('capitol', 'dc', 'Washington, D.C.', 'The nation’s capital, on the East Coast.', 'The Capitol at dusk'),
        ('chicago', 'chicago', 'Chicago', 'The University of Chicago, on the shore of Lake Michigan.', 'Chicago at sunrise'),
        ('stanford', 'sf', 'San Francisco Bay', 'Stanford University and UC Berkeley, in the heart of Silicon Valley.', 'Stanford Memorial Church'),
        ('gc_rays', 'gc', 'The Southwest', 'Wide open national parks like the Grand Canyon in Arizona.', 'Sun rays at Hopi Point, Grand Canyon')]
# destinations: a flight across the map with a pile of postcards
order = [d[1] for d in DEST]
segs = []
for (k1, k2) in zip(order, order[1:]):
    (x1, y1), (x2, y2) = CITY[k1], CITY[k2]
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2; dx, dy = x2 - x1, y2 - y1; L = (dx * dx + dy * dy) ** .5 or 1
    nx, ny = -dy / L, dx / L
    if ny > 0: nx, ny = -nx, -ny
    bow = min(90, L * .28)
    segs.append(f'M{x1} {y1} Q{mx + nx * bow:.1f} {my + ny * bow:.1f} {x2} {y2}')
dx_states = ''.join(f'<path d="{st["d"]}"/>' for st in STATES)
dx_route = ''.join(f'<path class="dx__base" d="{d}"/>' for d in segs) + ''.join(f'<path class="dx__seg" data-dx-seg d="{d}"/>' for d in segs)
dx_pts = ''.join(f'<g class="dx__pt{" is-active" if i == 0 else ""}" data-dx-pt="{i}" transform="translate({CITY[c][0]} {CITY[c][1]})"><g data-dx-s><circle class="halo" r="16"/><circle r="5"/><text y="-14" text-anchor="middle">{esc(n)}</text></g></g>' for i, (k, c, n, d, cap) in enumerate(DEST))
plane = '<g class="dx__plane" data-dx-plane><g data-dx-s><circle class="dx__glow" r="20"/><path d="M11 0 L1 -2 L-3 -9 L-6 -9 L-4 -2 L-9 -2 L-11 -5 L-13 -5 L-12 0 L-13 5 L-11 5 L-9 2 L-4 2 L-6 9 L-3 9 L1 2 Z"/></g></g>'
dx_map = f'<svg class="dx__map" viewBox="0 0 975 610" preserveAspectRatio="none" aria-hidden="true" data-dx-map><g class="dx__states">{dx_states}</g><g class="dx__route">{dx_route}</g>{dx_pts}{plane}</svg>'
ROT = [-4, 3, -2.5, 4, -3.5, 2]
cards = []
for i, (k, c, n, d, cap) in enumerate(DEST):
    short = n.split(' & ')[0].replace('Washington, D.C.', 'Washington').replace('San Francisco Bay', 'San Francisco').replace('The Southwest', 'the Southwest')
    cards.append(
      f'<article class="pc" data-pc="{i}" style="--rot:{ROT[i % len(ROT)]}deg" aria-label="Postcard from {esc(n)}"><div class="pc__in">'
      f'<div class="pc__face pc__front">{img(k, "", cap, "loading=" + chr(34) + ("eager" if i < 2 else "lazy") + chr(34), sizes="(max-width: 760px) 80vw, 40vw")}'
      f'<span class="pc__greet">Greetings from</span><span class="pc__name">{esc(short)}</span>'
      f'<svg class="pc__post" viewBox="0 0 120 120" aria-hidden="true"><defs><path id="pcp{i}" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"/></defs><circle cx="60" cy="60" r="54"/><circle cx="60" cy="60" r="34"/><text font-size="11"><textPath href="#pcp{i}" textLength="270">TUTEE CONNECT · AIRMAIL · USA ·</textPath></text><text x="60" y="68" text-anchor="middle" font-size="22">0{i + 1}</text></svg>'
      f'<span class="pc__cap">{esc(cap)} · {esc(P[k]["by"])}, {P[k]["lic"]}</span></div>'
      f'<div class="pc__face pc__back"><div class="pc__msg"><p>{esc(d)}</p><p class="pc__sign">— See you in {esc(short)}!<br>Tutee Connect</p></div>'
      f'<div class="pc__addr"><span class="pc__stamp"><b>{esc(short[:3].upper())}</b><small>USA</small></span><i>To</i><span>A future student</span><span>Somewhere in India</span><span>Bound for the USA</span></div></div>'
      f'</div></article>')
dx_cards = ''.join(cards)
tabs = ''.join(f'<button type="button" class="dx__tab{" is-active" if i == 0 else ""}" data-dx-go="{i}" data-name="{esc(n)}" data-desc="{esc(d)}" aria-pressed="{str(i == 0).lower()}"><span>0{i + 1}</span>{esc(n)}</button>' for i, (k, c, n, d, cap) in enumerate(DEST))
s = s.replace('%%DX_MAP%%', dx_map).replace('%%DX_CARDS%%', dx_cards).replace('%%DX_TABS%%', tabs).replace('%%DX_FIRST_NAME%%', esc(DEST[0][2])).replace('%%DX_FIRST_DESC%%', esc(DEST[0][3])).replace('%%DX_N%%', f'{len(DEST):02d}')

# finder map: states + count bubbles placed by JS from data (centroids stored on the bubbles)
fstates = ''.join(f'<path class="st" data-st="{st["id"]}" d="{st["d"]}"><title>{esc(st["name"])}</title></path>' for st in STATES)
bubbles = ''.join(f'<g class="bub" data-bub="{st["id"]}" transform="translate({st["cx"]} {st["cy"]})" tabindex="-1"><circle r="0"/><text dy="4"></text></g>' for st in STATES if st['id'] not in ('AK', 'HI'))
bubbles += ''.join(f'<g class="bub" data-bub="{st["id"]}" transform="translate({st["cx"]} {st["cy"]})" tabindex="-1"><circle r="0"/><text dy="4"></text></g>' for st in STATES if st['id'] in ('AK', 'HI'))
s = s.replace('%%FINDER_MAP%%', f'<g class="finder__states">{fstates}</g><g class="finder__bubbles">{bubbles}</g>')

# services (content unchanged from the original site)
SVC = json.loads((root / 'tools/services.json').read_text())
# Expanding panels: nine slim panels; the active one widens to show the full service.
ICON = ['compass', 'languages', 'grad', 'pen', 'passport', 'home', 'wallet', 'shield', 'users']
panels = []
for i, sv in enumerate(SVC):
    on = i == 0
    paras = ''.join(f'<p>{p}</p>' for p in sv['full'])
    panels.append(f'''      <li class="xp__p{' is-on' if on else ''}" data-xp="{i}">
        <div class="xp__bg" aria-hidden="true"><img src="{sv['img']}" alt="" width="800" height="534" loading="lazy" style="object-position:{sv.get('pos', '50% 50%')}"></div>
        <button type="button" class="xp__face" id="xpBtn{i}" aria-expanded="{'true' if on else 'false'}" aria-controls="xpBody{i}" data-xp-btn>
          <span class="xp__no">{i + 1:02d}</span>
          <svg class="ico xp__ico" aria-hidden="true"><use href="#i-{ICON[i]}"/></svg>
          <span class="xp__name">{sv['title']}</span>
          <span class="xp__plus" aria-hidden="true"></span>
        </button>
        <div class="xp__body" id="xpBody{i}" role="region" aria-labelledby="xpBtn{i}">
          <div class="xp__inner">
            <p class="xp__tag">{sv['tag']}</p>
            <h3 class="xp__title">{sv['title']}</h3>
            <div class="xp__copy">{paras}</div>
            <a class="xp__cta" href="#contact">Request this service <svg class="ico"><use href="#i-arrow"/></svg></a>
          </div>
        </div>
      </li>''')
s = s.replace('%%SERVICES%%', '\n'.join(panels))

# STEM OPT ruler: one tick per month, grouped by the stage it belongs to
s = s.replace('%%OPT_TICKS%%', ''.join(f'<i data-m="{m}" class="{"a" if m <= 12 else "b"}{" yr" if m % 12 == 0 else ""}"></i>' for m in range(1, 37)))

used = ['brooklyn', 'manhattan_night', 'boston', 'capitol', 'chicago', 'stanford', 'gc_rays']
cred = '; '.join(f'<a href="{P[k]["page"]}" target="_blank" rel="noopener">{esc(P[k]["place"])}</a> by {esc(P[k]["by"])} (<a href="{P[k]["licurl"]}" target="_blank" rel="noopener">{P[k]["lic"]}</a>)' for k in used)
s = s.replace('%%CREDITS%%', f'<p class="foot__credits">Photography from Wikimedia Commons: {cred}. Images are cropped and colour-graded on this page. US map: US Census Bureau via us-atlas.</p>')
# daily paper: embed the current editions (offline / single-file fallback) and publish the JSON the page refreshes from
NEWS = json.loads((root / 'tools/news.json').read_text())
(root / 'assets/data').mkdir(exist_ok=True)
(root / 'assets/data/news.json').write_text(json.dumps(NEWS, ensure_ascii=False, indent=1), encoding='utf-8')
s = s.replace('%%NEWS_JSON%%', json.dumps(NEWS, ensure_ascii=False).replace('</', '<\\/'))
assert '%%' not in s and '{{' not in s, re.findall(r'(%%\w+%%|\{\{.*?\}\})', s)[:5]
(root / 'index.html').write_text(s, encoding='utf-8')
print('index.html', len(s))
