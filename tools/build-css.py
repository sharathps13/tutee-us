"""Concatenates src/css → assets/css/site.css. Run: python3 tools/build-css.py"""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
parts = ['usa.css', 'carry.css', 'usa-responsive.css']
css = '\n\n'.join((root / 'src/css' / p).read_text(encoding='utf-8') for p in parts)
(root / 'assets/css/site.css').write_text(css, encoding='utf-8')
print('site.css', len(css))
