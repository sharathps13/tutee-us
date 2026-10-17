"""Paints the layered NYC hero illustration (golden hour + dusk variants).
Run: python3 tools/art/scene.py [day|dusk] [outdir]
Layers (back→front): sky, clouds, city (Liberty + Lower Manhattan + harbour water), bridge, park, bloom."""
import sys, os, math
import numpy as np, cv2, skia
sys.path.insert(0, os.path.dirname(__file__))
from lib import *

MODE = sys.argv[1] if len(sys.argv) > 1 else 'day'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/tmp/claude-0/art'
os.makedirs(OUT, exist_ok=True)
DUSK = MODE == 'dusk'
rng = np.random.default_rng(1776)

SUN = (1240, 892)
P = {  # palette
    'sky_top': hexc('#90aec2') if not DUSK else hexc('#1d2c4a'),
    'sky_mid': hexc('#c3d1d8') if not DUSK else hexc('#4d5a7e'),
    'sky_low': hexc('#ead5c3') if not DUSK else hexc('#c98a86'),
    'sky_hor': hexc('#f8d1a8') if not DUSK else hexc('#f2a27a'),
    'haze':    hexc('#dcc9bf') if not DUSK else hexc('#9a7e8e'),
    'sun':     hexc('#fff2da') if not DUSK else hexc('#ffc58f'),
    'rim':     hexc('#ffd9ae') if not DUSK else hexc('#ffb07a'),
    'win':     hexc('#ffe1b0') if not DUSK else hexc('#ffd28a'),
}

# =====================================================================
# SKY
# =====================================================================
def paint_sky():
    ys = np.linspace(0, 1, H, dtype=np.float32)
    stops = [(0.0, P['sky_top']), (0.34, P['sky_mid']), (0.56, P['sky_low']), (0.67, P['sky_hor']), (1.0, P['sky_hor'])]
    sky = np.zeros((H, W, 4), np.float32); sky[..., 3] = 1
    xs = [a for a, _ in stops]
    for c in range(3):
        sky[..., c] = np.interp(ys, xs, [cc[c] for _, cc in stops])[:, None]
    # sun glow
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    d = np.sqrt(((xx - SUN[0]) / 1.35) ** 2 + (yy - SUN[1]) ** 2)
    glow = 0.85 * np.exp(-(d / 95) ** 2) + 0.42 * np.exp(-(d / 420) ** 2) + 0.18 * np.exp(-(d / 1100) ** 2)
    for c in range(3): sky[..., c] = sky[..., c] * (1 - glow * 0.55) + P['sun'][c] * glow * 0.55 + glow * 0.08
    # streaky altostratus near the horizon, lit from below
    n = stretched_fbm(H, W, 220, 9, 1, 5, seed=3)
    band = np.exp(-((yy - 700) / 170) ** 2) * (1 - np.exp(-(d / 260) ** 2) * 0.5)
    streak = np.clip((n - 0.52) * 3.2, 0, 1) * band
    sc = hexc('#f6c3a5') if not DUSK else hexc('#e98a7b')
    for c in range(3): sky[..., c] = sky[..., c] * (1 - streak * 0.5) + sc[c] * streak * 0.5
    # painterly value mottling + grain
    mottle(sky, 0.025, 260, 11); grain(sky, 0.012, 2)
    if DUSK:  # a few early stars high up
        st = (rng.random((H, W)) > 0.99965).astype(np.float32) * np.clip(1 - yy / 420, 0, 1)
        st = cv2.GaussianBlur(st, (3, 3), 0.6) * 2.2
        sky[..., :3] += st[..., None] * 0.9
    sky[..., :3] = np.clip(sky[..., :3], 0, 1)
    return sky

# =====================================================================
# CLOUDS (wide, for drift)
# =====================================================================
def paint_clouds(width=3000):
    h = 760; yy, xx = np.mgrid[0:h, 0:width].astype(np.float32)
    layer = np.zeros((H, width, 4), np.float32)
    n = fbm(h, width, 230, 6, seed=21)
    n2 = fbm(h, width, 60, 4, seed=44)
    # banks: upper-left, upper-right and a long low bank behind the skyline
    env = (0.95 * np.exp(-(((xx - 380) / 520) ** 2 + ((yy - 160) / 170) ** 2))
           + 0.9 * np.exp(-(((xx - 2380) / 600) ** 2 + ((yy - 120) / 150) ** 2))
           + 0.55 * np.exp(-(((xx - 1650) / 900) ** 2 + ((yy - 610) / 70) ** 2))
           + 0.5 * np.exp(-(((xx - 600) / 700) ** 2 + ((yy - 640) / 60) ** 2))
           + 0.35 * np.exp(-(((xx - 2850) / 300) ** 2 + ((yy - 400) / 120) ** 2)))
    dens = np.clip((n * 0.75 + n2 * 0.25 + env * 0.62 - 0.78) * 3.4, 0, 1)
    dens = cv2.GaussianBlur(dens, (0, 0), 1.6)
    # lighting: sun is low and central, so undersides glow and tops stay cool
    gy = np.gradient(cv2.GaussianBlur(dens, (0, 0), 10), axis=0)
    lit = np.clip(0.5 - gy * 24, 0, 1)
    top_c = hexc('#f4f1ec') if not DUSK else hexc('#7b7898')
    shade = hexc('#a8b6c3') if not DUSK else hexc('#3f4766')
    warm = hexc('#ffd0aa') if not DUSK else hexc('#f59a7c')
    sunfac = np.exp(-(((xx - 1240) / 1200) ** 2)) * np.clip((yy - 250) / 450, 0, 1)
    rgb = np.zeros((h, width, 3), np.float32)
    for c in range(3):
        base = shade[c] * (1 - lit) + top_c[c] * lit
        rgb[..., c] = base * (1 - sunfac * 0.65) + warm[c] * sunfac * 0.65
    a = dens * 0.92
    layer[:h, :, :3] = rgb * a[..., None]; layer[:h, :, 3] = a
    grain(layer, 0.01, 7)
    return layer

# =====================================================================
# STATUE OF LIBERTY (local units: x centred, y up 0..100)
# =====================================================================
LIB_FORT = [(-27, 0), (27, 0), (26.5, 2.6), (22.5, 7.6), (-22.5, 7.6), (-26.5, 2.6)]
LIB_PLINTH = [(-12.6, 7.4), (12.6, 7.4), (12.6, 10.6), (11.6, 10.6), (11.6, 13.2), (-11.6, 13.2), (-11.6, 10.6), (-12.6, 10.6)]
LIB_SHAFT = [(-10.4, 13), (10.4, 13), (9.5, 38.2), (-9.5, 38.2)]
LIB_CORNICE = [(-10.9, 38), (10.9, 38), (10.9, 40.8), (10.1, 40.8), (10.1, 44.2), (-10.1, 44.2), (-10.1, 40.8), (-10.9, 40.8)]
LIB_PARAPET = [(-8.7, 44), (8.7, 44), (8.4, 49.2), (-8.4, 49.2)]
LIB_BODY = [(-5.9, 49), (-5.5, 54), (-5.0, 61), (-4.6, 67), (-4.5, 72.5), (-4.75, 76.5), (-4.95, 79.0),
            (-5.6, 84.5), (-6.35, 90.5), (-6.9, 93.7), (-7.45, 94.7), (-6.6, 95.5), (-5.6, 95.1), (-5.15, 93.0),
            (-4.0, 86.0), (-2.7, 81.0), (-1.25, 81.4), (-1.55, 82.4), (-1.72, 84.0), (-1.45, 85.6), (-0.65, 86.45),
            (0.65, 86.45), (1.45, 85.6), (1.72, 84.0), (1.55, 82.4), (1.15, 81.4), (2.6, 80.6), (4.2, 80.0),
            (4.85, 78.3), (5.2, 75.6), (5.5, 72.6), (5.95, 71.6), (8.35, 77.7), (9.45, 77.1), (7.25, 66.4),
            (6.0, 66.0), (5.2, 64.6), (5.0, 60), (5.35, 55), (5.85, 49)]
LIB_TORCH_CUP = [(-8.05, 96.4), (-5.15, 96.4), (-5.7, 97.6), (-7.5, 97.6)]
LIB_FLAME = [(-7.25, 97.6), (-5.95, 97.6), (-6.05, 99.0), (-6.55, 100.7), (-7.05, 99.0)]

def draw_liberty(canvas, cx, base, s, body_c, stone_c, rim_c, flame_c, dark_c):
    T = lambda pts: [(cx + x * s, base - y * s) for x, y in pts]
    rays = []
    for i in range(7):
        ang = math.radians(18 + i * 24)
        hx, hy = 0.0, 84.2
        tip = (hx + math.cos(ang) * 4.6, hy + math.sin(ang) * 4.2)
        b1 = (hx + math.cos(ang - 0.17) * 1.55, hy + math.sin(ang - 0.17) * 1.55)
        b2 = (hx + math.cos(ang + 0.17) * 1.55, hy + math.sin(ang + 0.17) * 1.55)
        rays.append([b1, tip, b2])

    def shape(pts, c, smooth=False):
        path = smooth_path(T(pts), True, 0.35) if smooth else poly(T(pts))
        return path, c
    stone_parts = [LIB_FORT, LIB_PLINTH, LIB_SHAFT, LIB_CORNICE, LIB_PARAPET]
    # 1) rim light pass: whole silhouette in rim colour
    for pts in stone_parts: canvas.drawPath(poly(T(pts)), paint(rim_c))
    canvas.drawPath(poly(T(LIB_BODY)), paint(rim_c))
    for r in rays: canvas.drawPath(poly(T(r)), paint(rim_c))
    # 2) body colour, nudged left so a sliver of rim stays on the sun-facing (right) edge
    canvas.save(); canvas.translate(-2.2, 0.6)
    for pts in stone_parts:
        p = poly(T(pts))
        canvas.drawPath(p, lin_paint((0, base - 49 * s), (0, base), [mix(stone_c, rim_c, 0.1), mix(stone_c, dark_c, 0.35)]))
        # the pedestal is square: the left face sits in shade
        canvas.save(); canvas.clipPath(p, doAntiAlias=True)
        canvas.drawRect(skia.Rect.MakeLTRB(cx - 30 * s, base - 50 * s, cx - 1.2 * s, base + 2), paint(dark_c, 0.32))
        canvas.restore()
    bp = poly(T(LIB_BODY))
    canvas.drawPath(bp, lin_paint((cx - 7 * s, 0), (cx + 9 * s, 0), [mix(body_c, dark_c, 0.5), mix(body_c, dark_c, 0.15), mix(body_c, rim_c, 0.25)], [0, 0.55, 1]))
    canvas.save(); canvas.clipPath(bp, doAntiAlias=True)
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 10 * s, base - 101 * s, cx + 10 * s, base - 49 * s),
                    lin_paint((0, base - 100 * s), (0, base - 49 * s), [col_arr(rim_c, 0.18), col_arr(dark_c, 0.0), col_arr(dark_c, 0.25)], [0, 0.4, 1]))
    canvas.restore()
    for r in rays: canvas.drawPath(poly(T(r)), paint(body_c))
    canvas.restore()
    # 3) architectural detail on the pedestal (bands, loggia openings) and robe folds
    det = paint(dark_c, 0.35, stroke=max(1, s * 0.12))
    for yv in (10.6, 13.2, 38.2, 40.8, 44.2):
        canvas.drawLine(*T([(-9.6, yv)])[0], *T([(9.6, yv)])[0], det)
    op = paint(dark_c, 0.55)
    for i in range(-2, 3):
        x0 = i * 3.0
        canvas.drawRoundRect(skia.Rect.MakeLTRB(*T([(x0 - 0.7, 43.4)])[0], *T([(x0 + 0.7, 41.4)])[0]), s * 0.3, s * 0.3, op)
    canvas.drawRect(skia.Rect.MakeLTRB(*T([(-1.6, 30.5)])[0], *T([(1.6, 21.5)])[0]), paint(dark_c, 0.28))
    fold = paint(dark_c, 0.3, stroke=max(1, s * 0.13))
    for fx in (-3.0, -1.2, 0.8, 2.6):
        pth = skia.Path(); a = T([(fx, 50), (fx + 0.6, 58), (fx - 0.2, 66), (fx + 0.4, 72)])
        pth.moveTo(*a[0]); pth.cubicTo(*a[1], *a[2], *a[3]); canvas.drawPath(pth, fold)
    canvas.drawPath(poly(T([(5.95, 71.6), (8.35, 77.7), (8.55, 77.5), (6.3, 71.4)])), paint(rim_c, 0.8))  # lit tablet edge
    # torch
    canvas.drawRect(skia.Rect.MakeLTRB(*T([(-7.0, 96.5)])[0], *T([(-6.15, 94.8)])[0]), paint(mix(body_c, rim_c, 0.3)))
    canvas.drawPath(poly(T(LIB_TORCH_CUP)), paint(mix(flame_c, body_c, 0.35)))
    canvas.drawPath(smooth_path(T(LIB_FLAME), True, 0.6), paint(flame_c))
    fx, fy = T([(-6.55, 98.8)])[0]
    g = skia.Paint(AntiAlias=True); g.setShader(skia.GradientShader.MakeRadial(skia.Point(fx, fy), s * 5.5, [col(flame_c, 0.55), col(flame_c, 0)]))
    canvas.drawCircle(fx, fy, s * 5.5, g)

def liberty_island(canvas, cx, base, s, land_c, tree_c, wall_c):
    w = 44 * s
    isl = smooth_path([(cx - w * 0.75, base + 3), (cx - w * 0.55, base - 7), (cx - w * 0.1, base - 11), (cx + w * 0.4, base - 10),
                       (cx + w * 0.8, base - 4), (cx + w * 0.95, base + 3)], True, 0.5)
    canvas.drawPath(isl, paint(land_c))
    for i in range(46):
        x = cx + rng.uniform(-w * 0.62, w * 0.82); r = rng.uniform(3, 8) * s / 5.6
        if abs(x - cx) < 25 * s: continue
        canvas.drawCircle(x, base - 8 - rng.uniform(0, 6), r, paint(mix(tree_c, land_c, rng.uniform(0, 0.4))))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - w * 0.5, base - 6, cx + w * 0.62, base + 1), paint(wall_c, 0.9))

# =====================================================================
# SKYLINE
# =====================================================================
def building(canvas, x0, x1, top, base, body, rim_side, win_density, crown=None, glass=False, seed=0):
    r = np.random.default_rng(seed)
    w = x1 - x0
    dark = hexc('#1c2433') if not DUSK else hexc('#0f1424')
    shade_w = w * r.uniform(0.22, 0.38)
    # tiers / setbacks for taller buildings
    tiers = [(x0, x1, top)]
    if (base - top) > 140 and r.random() < 0.6:
        inset = w * r.uniform(0.12, 0.22); t2 = top - r.uniform(25, 60)
        tiers.append((x0 + inset, x1 - inset * r.uniform(0.6, 1.2), t2))
        if r.random() < 0.4:
            inset2 = (tiers[-1][1] - tiers[-1][0]) * 0.22; t3 = t2 - r.uniform(15, 35)
            tiers.append((tiers[-1][0] + inset2, tiers[-1][1] - inset2, t3))
    for k, (a0, a1, t0) in enumerate(tiers):
        b0 = base if k == 0 else tiers[k - 1][2]
        ww = a1 - a0; sw = ww * (shade_w / w)
        lit_left = rim_side == 'l'
        face = lin_paint((0, t0), (0, base), [mix(body, P['sky_mid'], 0.16), mix(body, dark, 0.12)])
        canvas.drawRect(skia.Rect.MakeLTRB(a0, t0, a1, b0), face)
        # shaded side face (away from the sun)
        side = skia.Rect.MakeLTRB(a0, t0, a0 + sw, b0) if not lit_left else skia.Rect.MakeLTRB(a1 - sw, t0, a1, b0)
        canvas.drawRect(side, paint(dark, 0.22))
        if glass:
            g = lin_paint((a0, 0), (a1, 0), [col_arr(P['rim'], 0.0), col_arr(P['rim'], 0.32), col_arr(P['sky_mid'], 0.1)])
            canvas.drawRect(skia.Rect.MakeLTRB(a0 + sw, t0, a1, b0), g)
            for xx in np.arange(a0 + sw + 2, a1, 4.0):
                canvas.drawLine(float(xx), t0, float(xx), b0, paint(dark, 0.07, stroke=1))
        # floor lines + windows
        if ww > 9:
            for yy in np.arange(t0 + 5, b0, 6.0):
                canvas.drawLine(a0, float(yy), a1, float(yy), paint(dark, 0.10 if not glass else 0.06, stroke=1))
            cols = max(2, int(ww / 5.5)); cw = ww / cols
            for i in range(cols):
                for yy in np.arange(t0 + 6, b0 - 2, 6.0):
                    if r.random() < win_density * 0.35:
                        lit = r.random() < (0.10 if not DUSK else 0.5)
                        c = P['win'] if lit else mix(body, P['sky_low'], 0.5)
                        canvas.drawRect(skia.Rect.MakeXYWH(a0 + i * cw + cw * 0.25, float(yy), max(1.2, cw * 0.5), 2.6),
                                        paint(c, (0.85 if lit else 0.25) * r.uniform(0.5, 1)))
        # sun rim
        rw = max(1.2, min(3.2, ww * 0.05))
        rect = skia.Rect.MakeLTRB(a1 - rw, t0, a1, b0) if rim_side == 'r' else skia.Rect.MakeLTRB(a0, t0, a0 + rw, b0)
        canvas.drawRect(rect, lin_paint((0, t0), (0, t0 + (b0 - t0) * 0.8 + 1), [col_arr(P['rim'], 0.95), col_arr(P['rim'], 0.0)]))
        canvas.drawRect(skia.Rect.MakeLTRB(a0 - 1, t0 - 2, a1 + 1, t0 + 1), paint(mix(body, P['rim'], 0.35)))
    # roof furniture
    tx0, tx1, tt = tiers[-1]
    if r.random() < 0.35 and (tx1 - tx0) > 14 and (base - tt) < 220:   # water tower
        cx = tx0 + (tx1 - tx0) * r.uniform(0.3, 0.7)
        canvas.drawRect(skia.Rect.MakeLTRB(cx - 4, tt - 13, cx + 4, tt - 4), paint(mix(body, dark, 0.35)))
        canvas.drawPath(poly([(cx - 5, tt - 13), (cx + 5, tt - 13), (cx, tt - 18)]), paint(mix(body, dark, 0.4)))
        for lx in (cx - 3, cx + 3): canvas.drawLine(lx, tt - 4, lx, tt, paint(dark, 0.5, stroke=1))
    elif r.random() < 0.3 and (base - tt) > 200:
        cx = (tx0 + tx1) / 2
        canvas.drawLine(cx, tt, cx, tt - r.uniform(20, 45), paint(mix(body, dark, 0.3), stroke=1.4))

def col_arr(c, a):
    c = np.array(c, np.float32).copy(); c[3] = a; return c

def one_wtc(canvas, cx, top, base, body):
    L, R = cx - 40, cx + 40; TL, TR = cx - 21, cx + 21; Tc = (cx, top)
    canvas.drawPath(poly([(L, base), (R, base), (TR, top), (TL, top)]), paint(mix(body, hexc('#1c2433'), 0.15)))
    canvas.drawPath(poly([(L, base), (R, base), Tc]), lin_paint((0, top), (0, base), [mix(body, P['rim'], 0.45), mix(body, P['sky_low'], 0.2)]))
    canvas.drawPath(poly([(R, base), (TR, top), Tc]), paint(mix(body, P['rim'], 0.18)))
    canvas.drawRect(skia.Rect.MakeLTRB(TL - 2, top - 8, TR + 2, top), paint(mix(body, hexc('#1c2433'), 0.2)))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 2.2, top - 118, cx + 2.2, top - 8), paint(mix(body, P['sky_mid'], 0.2)))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 5, top - 30, cx + 5, top - 26), paint(mix(body, P['sky_mid'], 0.2)))
    canvas.drawLine(cx + 1.6, top - 118, cx + 1.6, top - 8, paint(P['rim'], 0.7, stroke=1))
    # base fins
    for i in range(9):
        x = L + 4 + i * 9
        canvas.drawLine(x, base - 120, x, base, paint(hexc('#1c2433'), 0.18, stroke=1))

def empire_state(canvas, cx, base, body):
    tiers = [(64, 905, 735), (50, 735, 690), (40, 690, 668), (30, 668, 640), (22, 640, 615), (14, 615, 598), (9, 598, 578), (4, 578, 545)]
    for w, b, t in tiers:
        canvas.drawRect(skia.Rect.MakeLTRB(cx - w / 2, t, cx + w / 2, b), paint(body))
        canvas.drawRect(skia.Rect.MakeLTRB(cx - w / 2, t, cx - w / 2 + 2.5, b), paint(P['rim'], 0.45))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 1.1, 505, cx + 1.1, 545), paint(body))
    for i in range(-3, 4):
        canvas.drawLine(cx + i * 6.5, 650, cx + i * 6.5, 905, paint(mix(body, P['sky_mid'], 0.25), 0.5, stroke=1))

def chrysler(canvas, cx, base, body):
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 20, 690, cx + 20, base), paint(body))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 14, 655, cx + 14, 690), paint(body))
    for i, (r, y) in enumerate([(14, 655), (11.5, 640), (9, 627), (6.5, 616), (4, 607)]):
        path = skia.Path(); path.addArc(skia.Rect.MakeLTRB(cx - r, y - r, cx + r, y + r), 180, 180); path.close()
        canvas.drawPath(path, paint(mix(body, P['rim'], 0.12 * i)))
        canvas.drawPath(path, paint(P['rim'], 0.35, stroke=1))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 1, 560, cx + 1, 607), paint(body))

def woolworth(canvas, cx, base, body):
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 34, 760, cx + 34, base), paint(body))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 18, 680, cx + 18, 760), paint(body))
    canvas.drawPath(poly([(cx - 18, 680), (cx + 18, 680), (cx + 10, 662), (cx, 640), (cx - 10, 662)]), paint(mix(body, P['rim'], 0.25)))
    canvas.drawRect(skia.Rect.MakeLTRB(cx - 1, 618, cx + 1, 642), paint(body))
    for x in (cx - 18, cx + 18): canvas.drawRect(skia.Rect.MakeLTRB(x - 2, 668, x + 2, 682), paint(body))
    canvas.drawRect(skia.Rect.MakeLTRB(cx + 15, 680, cx + 18, base), paint(P['rim'], 0.4))

def spruce8(canvas, x0, x1, top, base, body):
    pts = [(x0, base), (x0, top + 30)]
    for i in range(14):
        y = top + 30 - i * 2.2
        pts.append((x0 + (i % 2) * 3, y))
    pts += [(x0 + 6, top), (x1, top), (x1, base)]
    canvas.drawPath(poly(pts), lin_paint((x0, 0), (x1, 0), [mix(body, P['rim'], 0.05), mix(body, P['rim'], 0.42)]))
    for j in range(0, int(base - top), 12):  # rippled stainless facade
        canvas.drawLine(x1 - 6, top + j, x1, top + j + 6, paint(P['rim'], 0.25, stroke=1))

def row(canvas, x_from, x_to, env, body, rim_side, density, seed, wmin=18, wmax=48, glass_p=0.3, jitter=(0.6, 1.05)):
    r = np.random.default_rng(seed); specs = []; x = x_from
    while x < x_to:
        w = r.uniform(wmin, wmax); h = env(x) * r.uniform(*jitter)
        specs.append((x, min(x + w, x_to + 10), HORIZON - h, r.random() < glass_p, int(r.integers(1e6))))
        x += w + r.uniform(-w * 0.35, 1)
    for x0, x1, top, glass, sd in sorted(specs, key=lambda b: b[2]):
        building(canvas, x0, x1, top, HORIZON, mix(body, P['haze'], r.uniform(0, 0.12)), rim_side if x0 < SUN[0] else 'l', density, glass=glass, seed=sd)

def haze_mist(layer, strength, height=140):
    yy = np.arange(H, dtype=np.float32)[:, None, None]
    m = np.clip((yy - (HORIZON - height)) / height, 0, 1) ** 1.5 * strength
    layer[..., :3] = layer[..., :3] * (1 - m) + P['haze'][:3] * layer[..., 3:4] * m

def paint_city():
    """Liberty Island + Lower Manhattan + Midtown beyond, without water."""
    far_c = hexc('#8f9db3') if not DUSK else hexc('#5d5f7e')
    mid_c = hexc('#7a889f') if not DUSK else hexc('#454866')
    near_c = hexc('#5f6c83') if not DUSK else hexc('#2f3350')
    g = lambda x, c, w: math.exp(-((x - c) / w) ** 2)

    # far: Midtown and Jersey City haze
    sf = surface(); cf = sf.getCanvas()
    row(cf, 440, 2380, lambda x: 70 + 140 * g(x, 1800, 300) + 110 * g(x, 760, 260) + 60 * g(x, 2200, 180), far_c, 'r', 0.3, 11, 14, 36)
    empire_state(cf, 1765, HORIZON, mix(far_c, hexc('#4d5874'), 0.35))
    chrysler(cf, 1880, HORIZON, mix(far_c, hexc('#4d5874'), 0.3))
    far = from_skia(sf); tint_toward(far, P['haze'], 0.5 if not DUSK else 0.35); haze_mist(far, 0.5)

    # mid: the dense Financial District mass
    sm = surface(); cm = sm.getCanvas()
    row(cm, 480, 1330, lambda x: 90 + 250 * g(x, 760, 240) + 110 * g(x, 1060, 150), mid_c, 'r', 0.45, 23, 20, 46, 0.4)
    row(cm, 1330, 2300, lambda x: 60 + 70 * g(x, 1700, 260), mid_c, 'l', 0.35, 29, 16, 40, 0.2, (0.5, 1.0))
    mid = from_skia(sm); tint_toward(mid, P['haze'], 0.3 if not DUSK else 0.22); haze_mist(mid, 0.45)

    # near: waterfront towers and named landmarks
    sn = surface(); cn = sn.getCanvas()
    row(cn, 520, 1200, lambda x: 60 + 190 * g(x, 700, 170) + 90 * g(x, 980, 120), near_c, 'r', 0.55, 37, 24, 58, 0.35, (0.45, 0.95))
    one_wtc(cn, 640, 452, HORIZON, mix(near_c, P['haze'], 0.18))
    building(cn, 712, 752, 590, HORIZON, mix(near_c, P['haze'], 0.1), 'r', 0.6, glass=True, seed=5)    # 3 WTC
    cn.drawPath(poly([(760, HORIZON), (806, HORIZON), (798, 612), (768, 620)]), lin_paint((760, 0), (806, 0), [mix(near_c, hexc('#1c2433'), 0.2), mix(near_c, P['rim'], 0.35)]))  # 4 WTC
    building(cn, 858, 884, 650, HORIZON, near_c, 'r', 0.6, seed=8)                                        # 70 Pine
    cn.drawPath(poly([(858, 650), (884, 650), (874, 625), (871, 596), (868, 625)]), paint(near_c))
    woolworth(cn, 1010, HORIZON, mix(near_c, P['haze'], 0.1))
    spruce8(cn, 1072, 1112, 585, HORIZON, mix(near_c, P['haze'], 0.06))
    # waterfront: piers, trees of the Battery and the FDR edge
    for i in range(70):
        x = rng.uniform(500, 1340); cn.drawCircle(x, HORIZON - rng.uniform(2, 7), rng.uniform(3, 7), paint(mix(hexc('#3f5641') if not DUSK else hexc('#232b38'), P['haze'], rng.uniform(0.1, 0.4))))
    cn.drawRect(skia.Rect.MakeLTRB(490, HORIZON - 4, 1360, HORIZON + 2), paint(mix(near_c, hexc('#1c2433'), 0.3)))
    near = from_skia(sn); tint_toward(near, P['haze'], 0.14 if not DUSK else 0.1); haze_mist(near, 0.35, 110)
    for l, a in ((far, 0.03), (mid, 0.04), (near, 0.05)):
        mottle(l, a, 90, int(a * 1000)); grain(l, 0.018, int(a * 777))

    # Liberty, closer & to the left
    sl = surface(); cl = sl.getCanvas()
    lib_s = 5.5; lib_cx = 300; lib_base = HORIZON - 4
    liberty_island(cl, lib_cx, HORIZON + 4, lib_s, hexc('#6c7a5e') if not DUSK else hexc('#3d4652'), hexc('#4f6447') if not DUSK else hexc('#2c3442'), hexc('#b8a48e') if not DUSK else hexc('#6f6470'))
    body = hexc('#7c9f97') if not DUSK else hexc('#3c5f66')
    draw_liberty(cl, lib_cx, lib_base - 2, lib_s, body, hexc('#a99a89') if not DUSK else hexc('#6e6774'),
                 P['rim'], hexc('#ffcf6e'), hexc('#25333a'))
    lib = from_skia(sl)
    mottle(lib, 0.07, 30, 4); tint_toward(lib, P['haze'], 0.24 if not DUSK else 0.15); grain(lib, 0.02, 31)
    haze_mist(lib, 0.3, 90)

    city = empty(); over(city, far); over(city, mid); over(city, near); over(city, lib)
    return city, (far, mid, near, lib)

# =====================================================================
# WATER with reflections
# =====================================================================
def paint_water(reflect_src):
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    water = empty()
    t = np.clip((yy - HORIZON) / (H - HORIZON), 0, 1)
    top_c = mix(P['sky_hor'], P['sky_low'], 0.3); far_c = hexc('#9fb2bd') if not DUSK else hexc('#5a5f7c')
    deep = hexc('#3f5e72') if not DUSK else hexc('#1f2b44')
    base = np.zeros((H, W, 3), np.float32)
    k = np.clip(t * 2.2, 0, 1) ** 0.8
    for c in range(3): base[..., c] = top_c[c] * (1 - k) + (far_c[c] * (1 - t) + deep[c] * t) * k
    # sun glitter column
    d = np.abs(xx - SUN[0]) / (60 + t * 520)
    wave = stretched_fbm(H, W, 30, 6, 1, 4, seed=77)
    glit = np.exp(-d ** 2) * np.clip((wave - 0.45) * 4, 0, 1) * (1 - t * 0.6)
    glow = np.exp(-d ** 2 * 0.25) * (1 - t) * 0.35
    for c in range(3): base[..., c] = base[..., c] * (1 - glow) + P['sun'][c] * glow
    # reflections of city: flip, ripple, blur, darken
    src = reflect_src[: HORIZON + 6][::-1]
    refl = empty(); hh = min(src.shape[0], H - HORIZON)
    rows = src[:hh].copy()
    ry = np.arange(hh, dtype=np.float32)[:, None]
    disp = (np.sin(ry * 0.55 + stretched_fbm(hh, W, 40, 8, 1, 3, seed=5) * 9) * (1.5 + ry * 0.05)).astype(np.float32)
    mapx = (np.arange(W, dtype=np.float32)[None, :] + disp).astype(np.float32)
    mapy = np.repeat(ry, W, 1).astype(np.float32)
    rows = cv2.remap(rows, mapx, mapy, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
    rows = blur(rows, 1.6)
    fade = np.clip(1 - ry / 330, 0, 1) * 0.55
    rows *= fade[..., None]
    rows[..., :3] *= 0.82
    refl[HORIZON:HORIZON + hh] = rows
    w4 = np.concatenate([base, np.ones((H, W, 1), np.float32)], -1)
    over(w4, refl)
    # ripple lines
    lines = np.clip((stretched_fbm(H, W, 18, 16, 1, 3, seed=91) - 0.6) * 5, 0, 1) * t ** 0.5
    for c in range(3): w4[..., c] = w4[..., c] * (1 - lines * 0.18) + P['sky_mid'][c] * lines * 0.18
    for c in range(3): w4[..., c] = w4[..., c] + glit * (P['sun'][c] * 0.9 - w4[..., c]) * 0.9
    mask = (yy >= HORIZON).astype(np.float32)
    mask = cv2.GaussianBlur(mask, (0, 0), 1.0)
    w4 *= mask[..., None]
    grain(w4, 0.012, 13)
    return w4


# =====================================================================
# BROOKLYN BRIDGE
# =====================================================================
NEAR = dict(cx=2010, hw=78, top=372, apex=478, spring=530, deck=772, arch_hw=21, arch_dx=36)
FAR = dict(cx=1480, hw=25, top=690, apex=716, spring=726, deck=845, arch_hw=6.6, arch_dx=11.5)

def deck_y(x):
    if x >= NEAR['cx']: return NEAR['deck'] + (x - NEAR['cx']) * (760 - NEAR['deck']) / (2400 - NEAR['cx'])
    if x >= FAR['cx']: return FAR['deck'] + (x - FAR['cx']) * (NEAR['deck'] - FAR['deck']) / (NEAR['cx'] - FAR['cx'])
    return FAR['deck'] + (FAR['cx'] - x) * (872 - FAR['deck']) / (FAR['cx'] - 1150)

def tower_path(t, bottom):
    cx, hw = t['cx'], t['hw']
    path = skia.Path()
    path.addRect(skia.Rect.MakeLTRB(cx - hw, t['top'], cx + hw, bottom))
    for sgn in (-1, 1):  # two pointed gothic arches (holes)
        ax = cx + sgn * t['arch_dx']; aw = t['arch_hw']
        hole = skia.Path()
        hole.moveTo(ax - aw, t['deck'] + 4); hole.lineTo(ax - aw, t['spring'])
        hole.quadTo(ax - aw * 0.95, t['apex'] + (t['spring'] - t['apex']) * 0.25, ax, t['apex'])
        hole.quadTo(ax + aw * 0.95, t['apex'] + (t['spring'] - t['apex']) * 0.25, ax + aw, t['spring'])
        hole.lineTo(ax + aw, t['deck'] + 4); hole.close()
        path = skia.Op(path, hole, skia.PathOp.kDifference_PathOp)
    return path

def paint_bridge():
    sfc = surface(); c = sfc.getCanvas()
    stone = hexc('#9c8a7e') if not DUSK else hexc('#5e5560')
    stone_dk = hexc('#5d524f') if not DUSK else hexc('#2e2a36')
    cable = hexc('#3b3638') if not DUSK else hexc('#1d1a24')
    def haze(cl, x):  # farther (left) parts dissolve into the haze
        k = np.clip((NEAR['cx'] - x) / 900, 0, 1) * (0.55 if not DUSK else 0.4)
        return mix(cl, P['haze'], k)

    # main cables first (behind the towers' faces)
    def quad_through(p0, m, p2):
        cpt = (2 * m[0] - (p0[0] + p2[0]) / 2, 2 * m[1] - (p0[1] + p2[1]) / 2)
        return cpt
    nt, ft = NEAR, FAR
    pairs = [((nt['cx'] - nt['hw'] + 8, nt['top'] + 22), (ft['cx'] + ft['hw'] - 3, ft['top'] + 7)),
             ((nt['cx'] + nt['hw'] - 8, nt['top'] + 24), (ft['cx'] - ft['hw'] + 3, ft['top'] + 7))]
    cable_paths = []
    for (p0, p2) in pairs:
        mx = (p0[0] + p2[0]) / 2
        m = (mx, deck_y(mx) - 26)
        cp = quad_through(p0, m, p2)
        path = skia.Path(); path.moveTo(*p0); path.quadTo(*cp, *p2)
        cable_paths.append((path, p0, cp, p2))
    # side span to the Brooklyn anchorage (off canvas right)
    for (p0) in [(nt['cx'] + nt['hw'] - 8, nt['top'] + 24), (nt['cx'] - nt['hw'] + 8, nt['top'] + 22)]:
        p2 = (2440, 640); m = ((p0[0] + p2[0]) / 2, (p0[1] + p2[1]) / 2 + 40)
        cp = quad_through(p0, m, p2); path = skia.Path(); path.moveTo(*p0); path.quadTo(*cp, *p2)
        cable_paths.append((path, p0, cp, p2))

    def qpt(p0, cp, p2, t):
        return ((1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * cp[0] + t * t * p2[0], (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * cp[1] + t * t * p2[1])

    # suspenders + diagonal stays (the famous web)
    for idx, (path, p0, cp, p2) in enumerate(cable_paths):
        n = 150
        for i in range(2, n - 1):
            t = i / n; x, y = qpt(p0, cp, p2, t)
            if abs(x - nt['cx']) < nt['hw'] or abs(x - ft['cx']) < ft['hw']: continue
            dy = deck_y(x) - 2
            if dy - y < 4: continue
            w = 0.8 if x < 1800 else 1.0
            c.drawLine(x, y, x, dy, paint(haze(cable, x), 0.55 if idx < 2 else 0.5, stroke=w))
    for t in (nt, ft):
        topy = t['top'] + (24 if t is nt else 8)
        n = 13 if t is nt else 7
        span_l = 300 if t is nt else 100; span_r = 260 if t is nt else 95
        for k in range(1, n + 1):
            for sgn, span in ((-1, span_l), (1, span_r)):
                x2 = t['cx'] + sgn * (t['hw'] + span * k / n)
                for ox in (-t['hw'] * 0.75, t['hw'] * 0.75):
                    c.drawLine(t['cx'] + ox * 0.6, topy + 4, x2, deck_y(x2) - 1, paint(haze(cable, x2), 0.33, stroke=0.9 if t is nt else 0.6))
    for idx, (path, p0, cp, p2) in enumerate(cable_paths):
        w = 3.2 if idx in (0, 2) else 2.6
        c.drawPath(path, paint(haze(cable, 1700), 0.95, stroke=w))
        c.drawPath(path, paint(P['rim'], 0.35, stroke=0.8))

    # deck with truss
    xs = np.linspace(1150, 2400, 120)
    top_pts = [(float(x), deck_y(x)) for x in xs]
    thick = lambda x: 5 + 17 * np.clip((x - 1150) / 1250, 0, 1) ** 1.4
    bot_pts = [(float(x), deck_y(x) + thick(x)) for x in xs[::-1]]
    deck_path = poly(top_pts + bot_pts)
    c.drawPath(deck_path, lin_paint((1150, 0), (2400, 0), [haze(stone_dk, 1150), haze(stone_dk, 1900), stone_dk]))
    for x in np.arange(1160, 2400, 7.0):
        c.drawLine(float(x), deck_y(x) + 2, float(x) + 3, deck_y(x) + thick(x) - 1, paint(haze(hexc('#2a2629'), x), 0.35, stroke=0.8))
    c.drawPath(poly(top_pts + [(x, y + 2.2) for x, y in top_pts[::-1]]), paint(P['rim'], 0.55))  # lit railing edge

    # towers
    for t, bottom in ((ft, HORIZON + 2), (nt, HORIZON + 30)):
        tp = tower_path(t, bottom)
        base_c = haze(stone, t['cx'])
        c.drawPath(tp, lin_paint((t['cx'] - t['hw'], 0), (t['cx'] + t['hw'], 0), [mix(base_c, P['rim'], 0.55), mix(base_c, P['rim'], 0.1), mix(base_c, stone_dk, 0.5)], [0, 0.3, 1]))
        c.save(); c.clipPath(tp, doAntiAlias=True)
        c.drawRect(skia.Rect.MakeLTRB(t['cx'] - t['hw'], t['top'], t['cx'] + t['hw'], bottom), lin_paint((0, t['top']), (0, bottom), [col_arr(stone_dk, 0.0), col_arr(stone_dk, 0.0), col_arr(stone_dk, 0.45)], [0, 0.5, 1]))
        c.restore()
        c.save(); c.clipPath(tp, doAntiAlias=True)
        # stone courses + shaded inner arch reveals
        for y in np.arange(t['top'] + 4, bottom, 7.0 if t is nt else 3.0):
            c.drawLine(t['cx'] - t['hw'], float(y), t['cx'] + t['hw'], float(y), paint(stone_dk, 0.12, stroke=1))
        rv = paint(stone_dk, 0.35)
        for sgn in (-1, 1):
            ax = t['cx'] + sgn * t['arch_dx']; aw = t['arch_hw']
            c.drawRect(skia.Rect.MakeLTRB(ax + aw - 3, t['apex'], ax + aw + 4, t['deck'] + 6), rv)
        # cornice + top cap
        c.drawRect(skia.Rect.MakeLTRB(t['cx'] - t['hw'], t['top'], t['cx'] + t['hw'], t['top'] + (16 if t is nt else 5)), paint(mix(base_c, P['rim'], 0.2)))
        c.drawRect(skia.Rect.MakeLTRB(t['cx'] - t['hw'], t['top'] + (16 if t is nt else 5), t['cx'] + t['hw'], t['top'] + (19 if t is nt else 6)), paint(stone_dk, 0.45))
        # buttress pilasters
        for px in (t['cx'] - t['hw'] * 0.02, ):
            c.drawRect(skia.Rect.MakeLTRB(px - t['hw'] * 0.09, t['top'] + 18, px + t['hw'] * 0.09, bottom), paint(mix(base_c, P['rim'], 0.15), 0.6))
        c.restore()
        c.drawRect(skia.Rect.MakeLTRB(t['cx'] - t['hw'] - (5 if t is nt else 1.5), t['top'] - (6 if t is nt else 2), t['cx'] + t['hw'] + (5 if t is nt else 1.5), t['top'] + 1),
                   paint(mix(base_c, P['rim'], 0.3)))
        # deck passing through the arches
        for sgn in (-1, 1):
            ax = t['cx'] + sgn * t['arch_dx']; aw = t['arch_hw']
            c.drawRect(skia.Rect.MakeLTRB(ax - aw, deck_y(ax), ax + aw, deck_y(ax) + thick(ax)), paint(haze(stone_dk, ax)))
    if DUSK:  # necklace lights
        for path, p0, cp, p2 in cable_paths[:2]:
            for i in range(0, 40):
                x, y = qpt(p0, cp, p2, i / 40); c.drawCircle(x, y, 1.6, paint(P['win'], 0.9))
    layer = from_skia(sfc)
    mottle(layer, 0.1, 12, 3); mottle(layer, 0.05, 60, 4); grain(layer, 0.022, 41)
    return layer

# =====================================================================
# PARK foreground (Brooklyn Bridge Park lawn, trees, lamp, flowers)
# =====================================================================
EDGE = [(-20, 935), (160, 960), (420, 1010), (700, 1048), (1000, 1066), (1300, 1066), (1520, 1052), (1680, 1022),
        (1800, 975), (1950, 932), (2150, 902), (2400, 885), (2440, 885)]

def edge_y(x):
    xs = [p[0] for p in EDGE]; ys = [p[1] for p in EDGE]
    return float(np.interp(x, xs, ys))

def tree(canvas, cx, base, crown_cx, crown_cy, rx, ry, seed, palette, light_dir=(0.6, -0.8)):
    r = np.random.default_rng(seed)
    trunk_c = hexc('#46372d') if not DUSK else hexc('#221d24')
    lx, ly = light_dir
    # trunk with a slight lean and root flare
    tw = max(6, rx * 0.075)
    tp = skia.Path(); tp.moveTo(cx - tw * 1.8, base)
    tp.cubicTo(cx - tw, base - 20, cx - tw * 0.8, crown_cy + ry * 0.6, crown_cx - tw * 0.5, crown_cy + ry * 0.15)
    tp.lineTo(crown_cx + tw * 0.5, crown_cy + ry * 0.15)
    tp.cubicTo(cx + tw * 0.8, crown_cy + ry * 0.6, cx + tw, base - 20, cx + tw * 1.8, base); tp.close()
    canvas.drawPath(tp, lin_paint((cx - tw, 0), (cx + tw, 0), [trunk_c, mix(trunk_c, P['rim'], 0.45)] if lx > 0 else [mix(trunk_c, P['rim'], 0.45), trunk_c]))
    # limbs
    for k in range(7):
        a = r.uniform(-2.8, -0.35); L = r.uniform(0.35, 0.75)
        bx, by = crown_cx + r.uniform(-0.1, 0.1) * rx, crown_cy + ry * r.uniform(0.05, 0.4)
        canvas.drawLine(bx, by, bx + math.cos(a) * rx * L, by + math.sin(a) * ry * L, paint(trunk_c, stroke=tw * r.uniform(0.25, 0.5)))
    # crown = several sub-clumps
    clumps = []
    for k in range(int(r.integers(7, 11))):
        ang = r.uniform(0, 2 * math.pi); rad = r.uniform(0.0, 0.62)
        clumps.append((math.cos(ang) * rad, math.sin(ang) * rad * 0.9 - 0.05, r.uniform(0.32, 0.5)))
    clumps.append((0, -0.1, 0.55))
    clumps.sort(key=lambda c: c[0] * lx + c[1] * ly)
    for (ux, uy, ur) in clumps:
        ccx, ccy = crown_cx + ux * rx, crown_cy + uy * ry
        crx, cry = ur * rx, ur * ry * 0.85
        n = int(crx * cry / 9)
        dabs = []
        for i in range(n):
            ang = r.uniform(0, 2 * math.pi); rad = math.sqrt(r.random())
            x = math.cos(ang) * rad; y = math.sin(ang) * rad
            if rad > 0.82 + 0.25 * math.sin(ang * 6 + ux * 9) * math.cos(ang * 4): continue
            dabs.append((x, y))
        dabs.sort(key=lambda d: d[0] * lx + d[1] * ly)
        for x, y in dabs:
            # light: clump-local plus whole-crown position
            gl = ((x * lx + y * ly) * 0.6 + ((ux + x * ur) * lx + (uy + y * ur) * ly) * 0.55 + 1) / 2
            gl = float(np.clip(gl + r.uniform(-0.12, 0.12), 0, 1))
            c0 = mix(palette[0], palette[1], np.clip(gl * 1.35 - 0.2, 0, 1))
            if gl > 0.78: c0 = mix(c0, palette[2], (gl - 0.78) * 2.6)
            rr = r.uniform(0.028, 0.055) * rx
            canvas.drawCircle(ccx + x * crx, ccy + y * cry, rr, paint(c0, 0.92))
    # a few sky holes
    for i in range(int(rx / 12)):
        ang = r.uniform(0, 2 * math.pi); rad = r.uniform(0.35, 0.75)
        canvas.drawCircle(crown_cx + math.cos(ang) * rad * rx, crown_cy + math.sin(ang) * rad * ry, r.uniform(1.5, 4), paint(mix(P['sky_low'], palette[1], 0.45), 0.55))

def lamp_post(canvas, x, base, h):
    c_post = hexc('#26332c') if not DUSK else hexc('#151b1c')
    top = base - h
    canvas.drawRect(skia.Rect.MakeLTRB(x - 9, base - 30, x + 9, base), paint(c_post))       # base
    canvas.drawPath(poly([(x - 6, base - 30), (x + 6, base - 30), (x + 3.5, top + 40), (x - 3.5, top + 40)]), lin_paint((x - 6, 0), (x + 6, 0), [c_post, mix(c_post, P['rim'], 0.5)]))
    for i in range(3):
        canvas.drawLine(x - 1.5 + i * 1.5, base - 32, x - 1 + i, top + 44, paint(hexc('#000000'), 0.18, stroke=0.8))
    canvas.drawRect(skia.Rect.MakeLTRB(x - 6, top + 34, x + 6, top + 42), paint(c_post))
    globe = skia.Path(); globe.addOval(skia.Rect.MakeLTRB(x - 13, top + 2, x + 13, top + 36))
    gc = hexc('#fff1d6') if not DUSK else hexc('#ffd89a')
    canvas.drawPath(globe, lin_paint((x - 13, 0), (x + 13, 0), [mix(gc, hexc('#c9b9a0'), 0.4), gc]))
    canvas.drawPath(poly([(x - 9, top + 4), (x + 9, top + 4), (x + 4, top - 6), (x - 4, top - 6)]), paint(c_post))
    canvas.drawCircle(x, top - 9, 3, paint(c_post))
    g = skia.Paint(AntiAlias=True)
    g.setShader(skia.GradientShader.MakeRadial(skia.Point(x, top + 19), 120 if DUSK else 60, [col(gc, 0.55 if DUSK else 0.25), col(gc, 0)]))
    canvas.drawCircle(x, top + 19, 120 if DUSK else 60, g)

def paint_park():
    sfc = surface(); c = sfc.getCanvas()
    r = np.random.default_rng(99)
    g_lit = hexc('#b4b061') if not DUSK else hexc('#4c5a3e')
    g_mid = hexc('#6c8338') if not DUSK else hexc('#2f3d2c')
    g_dark = hexc('#304a26') if not DUSK else hexc('#1b2620')
    patch = fbm(H, W, 160, 4, 17)
    # lawn body
    pts = EDGE + [(2440, 1400), (-20, 1400)]
    lawn = smooth_path(pts, True, 0.25)
    c.drawPath(lawn, lin_paint((0, 880), (0, 1350), [g_lit, g_mid, g_dark], [0, 0.35, 1]))
    c.save(); c.clipPath(lawn, doAntiAlias=True)
    # warm low sun raking across the slope
    sweep = skia.Paint(AntiAlias=True)
    sweep.setShader(skia.GradientShader.MakeRadial(skia.Point(1240, 940), 900, [col(P['rim'], 0.45), col(P['rim'], 0)]))
    c.drawRect(skia.Rect.MakeLTRB(0, 860, W, H), sweep)
    # riprap granite blocks along the water edge
    for i in range(160):
        x = r.uniform(-10, 2410); y = edge_y(x) + r.uniform(-2, 14)
        if x > 1700: continue
        w = r.uniform(10, 26); h = r.uniform(6, 13)
        rc = mix(hexc('#9a8f86') if not DUSK else hexc('#4a4650'), P['rim'], r.uniform(0, 0.35))
        c.drawPath(poly([(x, y), (x + w * 0.2, y - h), (x + w * 0.85, y - h * 0.8), (x + w, y)]), paint(rc))
        c.drawLine(x + w * 0.2, y - h, x + w * 0.85, y - h * 0.8, paint(P['rim'], 0.5, stroke=1))
    # grass strokes (denser, longer toward the viewer)
    for i in range(34000):
        x = r.uniform(-10, 2410); y0 = edge_y(x)
        y = y0 + (1350 - y0) * r.random() ** 0.85
        depth = (y - 880) / 470
        L = 3 + depth * 26 * r.uniform(0.5, 1.2)
        ang = -math.pi / 2 + r.uniform(-0.35, 0.35)
        t = r.random() * 0.6 + patch[min(int(y), H - 1), min(max(int(x), 0), W - 1)] * 0.8 - 0.2
        cc = mix(g_dark, g_lit, np.clip(t * (1.25 - depth * 0.55), 0, 1))
        if r.random() < 0.25: cc = mix(cc, P['rim'], 0.35 * (1 - depth))
        c.drawLine(x, y, x + math.cos(ang) * L, y + math.sin(ang) * L, paint(cc, 0.75, stroke=0.6 + depth * 1.8))
    # value structure: shaded foreground, golden band of light across the middle lawn
    mul = lin_paint((0, 1000), (0, 1350), [col_arr(hexc('#ffffff'), 1.0), col_arr(hexc('#ffffff'), 1.0), col_arr(hexc('#8a9a78'), 1.0), col_arr(hexc('#56684a'), 1.0)], [0, 0.35, 0.7, 1])
    mul.setBlendMode(skia.BlendMode.kMultiply); c.drawRect(skia.Rect.MakeLTRB(0, 860, W, H), mul)
    band = skia.Paint(AntiAlias=True)
    band.setShader(skia.GradientShader.MakeRadial(skia.Point(1150, 1100), 700, [col(P['rim'], 0.35), col(P['rim'], 0)]))
    band.setBlendMode(skia.BlendMode.kScreen); c.save(); c.scale(1, 0.32); c.translate(0, 1100 / 0.32 - 1100)
    c.drawCircle(1150, 1100, 700, band); c.restore()
    # long shadow of the left tree across the lawn
    sh = paint(hexc('#1f3220'), 0.28, blur=18)
    c.drawPath(smooth_path([(0, 990), (380, 1030), (620, 1080), (560, 1110), (200, 1080), (0, 1060)], True, 0.5), sh)
    c.restore()

    # trees
    pal_green = (hexc('#2e4a26') if not DUSK else hexc('#151f1a'), hexc('#7d9a3f') if not DUSK else hexc('#33452c'), hexc('#e4c56c') if not DUSK else hexc('#7b6a4a'))
    pal_amber = (hexc('#5a4a22') if not DUSK else hexc('#231c1c'), hexc('#c9893a') if not DUSK else hexc('#5a3c2c'), hexc('#ffd28a') if not DUSK else hexc('#a2704a'))
    tree(c, -10, 975, 10, 740, 175, 160, 3, pal_green, (0.8, -0.6))
    tree(c, 2290, 900, 2280, 770, 130, 105, 5, pal_amber, (-0.7, -0.7))
    tree(c, 2150, 912, 2140, 810, 80, 72, 8, pal_green, (-0.7, -0.7))
    tree(c, 1880, 960, 1880, 885, 52, 50, 12, pal_green, (-0.8, -0.6))
    # lamp + bench
    lamp_post(c, 1545, 1110, 225)
    # wildflower meadow
    flowers = [hexc('#f07a31'), hexc('#ef8c3c'), hexc('#a892d2'), hexc('#8f7cc4'), hexc('#f5efe4'), hexc('#f2c94c')]
    if DUSK: flowers = [mix(f, hexc('#33304a'), 0.45) for f in flowers]
    drift = fbm(H, W, 210, 4, 23)
    for i in range(16000):
        x = r.uniform(-10, 2410); y0 = max(edge_y(x), 1000)
        y = y0 + 20 + (1350 - y0) * r.random() ** 0.7
        if y > 1360: continue
        dv = drift[min(int(y), H - 1), min(max(int(x), 0), W - 1)]
        if r.random() > np.clip((dv - 0.36) / 0.26, 0, 1) ** 1.5 * (0.35 + 0.65 * np.clip((y - 1050) / 250, 0, 1)): continue
        depth = np.clip((y - 1000) / 350, 0, 1)
        zone = drift[min(int(y), H - 1), min(max(int(x), 0), W - 1)]
        fc = flowers[([0, 1, 0, 4, 2, 0, 5][int(min(zone, 0.999) * 7)] if r.random() < 0.7 else int(r.integers(6))) % len(flowers)]
        if depth > 0.7 and r.random() < 0.35: fc = flowers[0]
        rad = 1.2 + depth * 6.5 * r.uniform(0.6, 1.2)
        if (x < 600 or x > 1650 or y > 1150) and r.random() < 0.85:
            c.drawLine(x, y + rad, x + r.uniform(-2, 2), y + rad * 3.5, paint(g_mid, 0.8, stroke=max(0.6, rad * 0.25)))
            if rad > 4:
                for k in range(5):
                    a = k * 2 * math.pi / 5 + r.uniform(0, 1)
                    c.drawCircle(x + math.cos(a) * rad * 0.5, y + math.sin(a) * rad * 0.38, rad * 0.5, paint(mix(fc, P['rim'], r.uniform(0, 0.3)), 0.8))
                c.drawCircle(x, y, rad * 0.22, paint(hexc('#7a5420'), 0.8))
            else:
                c.drawCircle(x, y, rad, paint(fc, 0.92))
    layer = from_skia(sfc)
    mottle(layer, 0.06, 120, 6); grain(layer, 0.02, 61)
    # slight depth-of-field: soften the lowest band
    yy = np.arange(H, dtype=np.float32)[:, None, None]
    soft = blur(layer, 2.2); k = np.clip((yy - 1230) / 120, 0, 1)
    layer = layer * (1 - k) + soft * k
    return layer

def paint_bloom():
    """Out-of-focus flowers and blades right at the lens."""
    sfc = surface(); c = sfc.getCanvas(); r = np.random.default_rng(7)
    cols = [hexc('#f07a31'), hexc('#a892d2'), hexc('#f5efe4'), hexc('#f2c94c'), hexc('#88a24a')]
    if DUSK: cols = [mix(f, hexc('#2a2a40'), 0.5) for f in cols]
    for i in range(240):
        x = r.uniform(-40, 2440); y = r.uniform(1235, 1400)
        if 700 < x < 1700 and r.random() < 0.7: continue   # keep the centre low and calm
        if r.random() < 0.6:
            L = r.uniform(60, 160); a = -math.pi / 2 + r.uniform(-0.4, 0.4)
            c.drawLine(x, y + 60, x + math.cos(a) * L, y + 60 + math.sin(a) * L, paint(mix(cols[4], hexc('#2e4a26'), r.uniform(0, 0.6)), 0.9, stroke=r.uniform(4, 9)))
        else:
            fc = cols[int(r.integers(4))]; rad = r.uniform(12, 26)
            for k in range(5):
                a = k * 2 * math.pi / 5
                c.drawCircle(x + math.cos(a) * rad * 0.6, y + math.sin(a) * rad * 0.5, rad * 0.6, paint(fc, 0.9))
    layer = from_skia(sfc)
    return blur(layer, 7)

def finish(layer, bloom_amt=0.12):
    """Shared grade: cool shadows, warm highlights, soft bloom — ties all layers into one painting."""
    a = np.maximum(layer[..., 3:4], 1e-4)
    rgb = layer[..., :3] / a
    lum = (rgb @ np.array([0.299, 0.587, 0.114], np.float32))[..., None]
    sh = hexc('#2c4a63')[:3] if not DUSK else hexc('#2a2650')[:3]
    hi = hexc('#ffd9b0')[:3] if not DUSK else hexc('#ffb48a')[:3]
    rgb = rgb + (sh - rgb) * np.clip(0.55 - lum, 0, 1) * 0.18 + (hi - rgb) * np.clip(lum - 0.62, 0, 1) * 0.22
    bright = np.clip(lum - 0.72, 0, 1) * rgb
    rgb = rgb + cv2.GaussianBlur(bright, (0, 0), 14) * bloom_amt * 3
    layer[..., :3] = np.clip(rgb, 0, 1.2) * layer[..., 3:4]
    return layer

if __name__ == '__main__':
    import time; t0 = time.time()
    sky = paint_sky(); clouds = paint_clouds(); print('sky+clouds', round(time.time() - t0, 1))
    city, parts = paint_city(); print('city', round(time.time() - t0, 1))
    bridge = paint_bridge(); print('bridge', round(time.time() - t0, 1))
    refl_src = city.copy(); over(refl_src, bridge)
    water = paint_water(refl_src); print('water', round(time.time() - t0, 1))
    park = paint_park(); print('park', round(time.time() - t0, 1))
    bloom = paint_bloom()
    citywater = water.copy(); over(citywater, city)
    for l in (sky, citywater, bridge, park): finish(l)
    layers = {'sky': sky, 'clouds': clouds, 'city': citywater, 'bridge': bridge, 'park': park, 'bloom': bloom}
    for k, v in layers.items(): np.save(f'{OUT}/{k}_{MODE}.npy', v)
    comp = sky.copy(); over(comp, clouds[:, 200:200 + W]); over(comp, citywater); over(comp, bridge); over(comp, park); over(comp, bloom)
    np.save(f'{OUT}/comp_{MODE}.npy', comp)
    save_webp(comp, f'{OUT}/preview_{MODE}.webp', 2400, 88, alpha=False)
    print('done', round(time.time() - t0, 1))
