"""Builds universities.html from the template, reusing the icon sprite, header and footer
from index.html so both pages stay in sync. Run: python3 tools/build-pages.py"""
import pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent
index = (root / 'index.html').read_text(encoding='utf-8')

def between(a, b):
    i = index.index(a); j = index.index(b, i)
    return index[i:j]

sprite = between('<!-- ============ ICON SPRITE ============ -->', '<!-- ============ HEADER ============ -->')
header = between('<!-- ============ HEADER ============ -->', '<!-- section rail (desktop) -->')
footer = between('<!-- ============ FOOTER ============ -->', '</body>')

# on the directory page, in-page anchors point back to the landing page
for frag in ['home', 'services', 'testimonials', 'contact', 'finder', 'why', 'destinations', 'funding', 'visa']:
    header = header.replace(f'href="#{frag}"', f'href="index.html#{frag}"')
    footer = footer.replace(f'href="#{frag}"', f'href="index.html#{frag}"')
header = header.replace('data-spy="services"', '').replace('data-spy="testimonials"', '')
header = header.replace('<a href="index.html#finder" data-spy="finder">Universities</a>', '<a href="universities.html" class="is-active" aria-current="page">Universities</a>')
header = header.replace('data-spy="finder"', '')
header = re.sub(r'<!-- section rail.*', '', header, flags=re.S)
header = header.replace(' data-menu-link', '')

tpl = (root / 'tools' / 'universities.tpl.html').read_text(encoding='utf-8')
import json, html as _h
STATES = json.loads((root / 'tools/us-states.json').read_text())
atlas_states = ''.join(f'<path data-st="{st["id"]}" d="{st["d"]}"><title>{_h.escape(st["name"])}</title></path>' for st in STATES)
tpl = tpl.replace('%%ATLAS_STATES%%', atlas_states)
out = tpl.replace('%%SPRITE%%', sprite).replace('%%HEADER%%', header).replace('%%FOOTER%%', footer)
(root / 'universities.html').write_text(out, encoding='utf-8')
print('universities.html written', len(out))
