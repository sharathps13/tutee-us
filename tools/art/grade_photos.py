"""Soft editorial grade for the site photos so they sit with the illustration (warm highlights, matte shadows)."""
import cv2, numpy as np, os, sys
SRC = '/tmp/claude-0/orig/assets'; DST = os.path.join(os.path.dirname(__file__), '../../assets/img/photos')
jobs = [('usa-city.webp', 'usa-city', [1200, 720]), ('students-campus.webp', 'students-campus', [1200, 720]),
        ('family-BPwzWlqu.webp', 'family', [800]), ('team-working.jpg', 'team-working', [1200, 800])]
rng = np.random.default_rng(3)
for src, name, widths in jobs:
    im = cv2.imread(f'{SRC}/{src}')
    for w in widths:
        r = cv2.resize(im, (w, int(im.shape[0] * w / im.shape[1])), interpolation=cv2.INTER_AREA)
        st = cv2.edgePreservingFilter(r, flags=cv2.RECURS_FILTER, sigma_s=30, sigma_r=0.22)
        f = st.astype(np.float32) / 255
        lum = (f @ np.array([0.114, 0.587, 0.299], np.float32))[..., None]
        warm = np.array([0.66, 0.82, 1.0], np.float32); cool = np.array([0.45, 0.33, 0.22], np.float32)
        f = f + (warm - f) * np.clip(lum - 0.55, 0, 1) * 0.4 + (cool - f) * np.clip(0.42 - lum, 0, 1) * 0.35
        f = f * 0.9 + 0.07
        f += (rng.random(f.shape[:2]).astype(np.float32)[..., None] - 0.5) * 0.025
        cv2.imwrite(f'{DST}/{name}-{w}.webp', (np.clip(f, 0, 1) * 255).astype(np.uint8), [cv2.IMWRITE_WEBP_QUALITY, 80])
for f in sorted(os.listdir(DST)): print(f, os.path.getsize(f'{DST}/{f}') // 1024, 'KB')
