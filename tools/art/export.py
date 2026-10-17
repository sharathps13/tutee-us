"""Exports the painted layers to web assets. Run after scene.py day/dusk."""
import sys, os, numpy as np, cv2
sys.path.insert(0, os.path.dirname(__file__))
from lib import *
SRC = '/tmp/claude-0/art'; DST = os.path.join(os.path.dirname(__file__), '../../assets/img/scene')
os.makedirs(DST, exist_ok=True)
L = lambda n, m='day': np.load(f'{SRC}/{n}_{m}.npy')
save_webp(L('sky'), f'{DST}/sky.webp', None, 80, alpha=False)
save_webp(L('clouds')[:760], f'{DST}/clouds.webp', 2400, 78)
for n, q in (('city', 82), ('bridge', 84), ('park', 80), ('bloom', 70)):
    save_webp(L(n), f'{DST}/{n}.webp', None, q)
comp = L('comp'); save_webp(comp, f'{DST}/poster.webp', 1600, 80, alpha=False)
rgb = to_rgba8(comp)[..., :3]
cv2.imwrite(f'{DST}/../hero-poster.jpg', cv2.cvtColor(cv2.resize(rgb, (1600, 900), interpolation=cv2.INTER_AREA), cv2.COLOR_RGB2BGR), [cv2.IMWRITE_JPEG_QUALITY, 80])
dusk = L('comp', 'dusk'); save_webp(dusk, f'{DST}/dusk.webp', 2400, 78, alpha=False); save_webp(dusk, f'{DST}/dusk-1200.webp', 1200, 78, alpha=False)
# a tighter, closer crop of the city for the "USA introduction" chapter
city_close = comp[330:1000, 380:1580]
save_webp(city_close, f'{DST}/city-close.webp', 1600, 82, alpha=False)
for f in sorted(os.listdir(DST)): print(f, os.path.getsize(f'{DST}/{f}') // 1024, 'KB')
