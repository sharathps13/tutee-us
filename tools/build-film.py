"""Assembles index.html from tools/index.film.html + the shared icon sprite (tools/sprite.html).
Run: python3 tools/build-film.py"""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'tools/index.film.html').read_text(encoding='utf-8')
sprite = (root / 'tools/sprite.html').read_text(encoding='utf-8')
html = html.replace('%%SPRITE%%', sprite)
(root / 'index.html').write_text(html, encoding='utf-8')
print('index.html', len(html))
