"""Concatenates assets/js/main.js from its parts in tools/."""
# Illustrated edition only (archived).
import sys
if '--illustrated' not in sys.argv:
    sys.exit('This script belongs to the archived illustrated New York edition and would overwrite the live 3D site.\n'
             'Run with --illustrated only if you want to switch back to that edition.')

import pathlib
t = pathlib.Path(__file__).resolve().parent
src = ''.join((t / f).read_text(encoding='utf-8') + '\n' for f in ['main.head.js', 'main.explorer.js', 'main.faq.js', 'main.tail.js'])
(t.parent / 'assets/js/main.js').write_text(src, encoding='utf-8'); print('main.js', len(src))
