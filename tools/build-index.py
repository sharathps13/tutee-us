"""Assembles index.html from tools/index.tpl.html + shared snippets (tools/snippets.json)."""
# Illustrated edition only (archived).
import sys
if '--illustrated' not in sys.argv:
    sys.exit('This script belongs to the archived illustrated New York edition and would overwrite the live 3D site.\n'
             'Run with --illustrated only if you want to switch back to that edition.')

import json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
parts = json.loads((root / 'tools/snippets.json').read_text(encoding='utf-8'))
html = (root / 'tools/index.tpl.html').read_text(encoding='utf-8')
for k, v in parts.items(): html = html.replace(f'%%{k}%%', v)
assert '%%' not in html, 'unfilled placeholder'
(root / 'index.html').write_text(html, encoding='utf-8')
print('index.html', len(html))
