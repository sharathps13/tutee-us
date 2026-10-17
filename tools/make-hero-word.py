"""Builds tools/hero-word.json: clean, overlap-free outlines of the hero word (Manrope ExtraBold),
so the outline stroke never shows the font's internal contour overlaps.
Run: python3 tools/make-hero-word.py"""
import json, pathlib
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.ttLib.removeOverlaps import removeOverlaps
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
import uharfbuzz as hb, io
root = pathlib.Path(__file__).resolve().parent.parent
WORD, WGHT, TRACK = 'AMERICA', 800, 20  # tracking in font units
f = TTFont(root / 'assets/fonts/manrope-latin-wght-normal.woff2')
f = instantiateVariableFont(f, {'wght': WGHT}); f.flavor = None
removeOverlaps(f)
buf = io.BytesIO(); f.save(buf); data = buf.getvalue()
face = hb.Face(data); font = hb.Font(face); b = hb.Buffer(); b.add_str(WORD); b.guess_segment_properties()
hb.shape(font, b, {'kern': True, 'liga': False})
gs = f.getGlyphSet(); order = f.getGlyphOrder(); upm = f['head'].unitsPerEm
x, letters = 0, []
for info, pos in zip(b.glyph_infos, b.glyph_positions):
    name = order[info.codepoint]; g = gs[name]
    pen = SVGPathPen(gs); g.draw(pen); bp = BoundsPen(gs); g.draw(bp)
    letters.append({'ch': WORD[info.cluster], 'd': pen.getCommands(), 'x': x, 'adv': pos.x_advance, 'bounds': bp.bounds})
    x += pos.x_advance + TRACK
x -= TRACK
cap = max(l['bounds'][3] for l in letters); base = min(l['bounds'][1] for l in letters)
left = letters[0]['bounds'][0]; right = letters[-1]['x'] + letters[-1]['bounds'][2]
out = {'upm': upm, 'cap': cap, 'base': base, 'left': left, 'right': right, 'letters': letters}
(root / 'tools/hero-word.json').write_text(json.dumps(out))
print(upm, cap, base, left, right, [(l['ch'], l['x'], l['adv']) for l in letters])
