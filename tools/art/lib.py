"""Shared helpers for painting the illustrated NYC scene: skia drawing + numpy compositing."""
import numpy as np, cv2, skia

W, H = 2400, 1350
HORIZON = 905  # waterline

def hexc(h, a=1.0):
    h = h.lstrip('#')
    return np.array([int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)] + [a], dtype=np.float32)

def mix(a, b, t):
    return a * (1 - t) + b * t

# ---------- noise ----------
def value_noise(h, w, cell, seed):
    rng = np.random.default_rng(seed)
    gh, gw = max(2, int(np.ceil(h / cell)) + 3), max(2, int(np.ceil(w / cell)) + 3)
    g = rng.random((gh, gw)).astype(np.float32)
    big = cv2.resize(g, (int(gw * cell), int(gh * cell)), interpolation=cv2.INTER_CUBIC)
    return big[cell:cell + h, cell:cell + w]

def fbm(h, w, cell, octaves=5, seed=0, gain=0.5):
    out = np.zeros((h, w), np.float32); amp = 1.0; tot = 0
    for o in range(octaves):
        c = max(2, int(cell / (2 ** o)))
        out += amp * value_noise(h, w, c, seed + o * 31); tot += amp; amp *= gain
    return out / tot

def stretched_fbm(h, w, cell, sx, sy, octaves=5, seed=0):
    hh, ww = max(4, int(h / sy)), max(4, int(w / sx))
    n = fbm(hh, ww, max(2, int(cell / max(sx, sy))), octaves, seed)
    return cv2.resize(n, (w, h), interpolation=cv2.INTER_CUBIC)

# ---------- layers (premultiplied float RGBA) ----------
def empty(h=H, w=W):
    return np.zeros((h, w, 4), np.float32)

def over(dst, src):
    a = src[..., 3:4]
    dst[..., :] = src + dst * (1 - a)
    return dst

def from_skia(surface):
    img = surface.makeImageSnapshot()
    arr = img.toarray(colorType=skia.ColorType.kRGBA_8888_ColorType, alphaType=skia.AlphaType.kPremul_AlphaType)
    return arr.astype(np.float32) / 255.0

def surface(w=W, h=H):
    s = skia.Surface(w, h)
    s.getCanvas().clear(skia.ColorTRANSPARENT)
    return s

def col(c, a=None):
    c = np.asarray(c, np.float32)
    alpha = c[3] if a is None else a
    return skia.Color4f(float(c[0]), float(c[1]), float(c[2]), float(alpha)).toColor()

def paint(c, a=None, stroke=None, blur=0):
    p = skia.Paint(AntiAlias=True, Color=col(c, a))
    if stroke:
        p.setStyle(skia.Paint.kStroke_Style); p.setStrokeWidth(stroke); p.setStrokeCap(skia.Paint.kRound_Cap)
    if blur:
        p.setMaskFilter(skia.MaskFilter.MakeBlur(skia.kNormal_BlurStyle, blur))
    return p

def lin_paint(p0, p1, colors, stops=None):
    p = skia.Paint(AntiAlias=True)
    p.setShader(skia.GradientShader.MakeLinear([skia.Point(*p0), skia.Point(*p1)], [col(c) for c in colors], stops))
    return p

def poly(pts, close=True):
    path = skia.Path()
    path.moveTo(*pts[0])
    for x, y in pts[1:]:
        path.lineTo(x, y)
    if close: path.close()
    return path

def smooth_path(pts, close=True, tension=0.5):
    """Catmull-Rom through points."""
    n = len(pts); path = skia.Path(); path.moveTo(*pts[0])
    rng = range(n if close else n - 1)
    for i in rng:
        p0 = pts[(i - 1) % n] if (close or i > 0) else pts[i]
        p1 = pts[i]; p2 = pts[(i + 1) % n]
        p3 = pts[(i + 2) % n] if (close or i + 2 < n) else p2
        c1 = (p1[0] + (p2[0] - p0[0]) * tension / 3, p1[1] + (p2[1] - p0[1]) * tension / 3)
        c2 = (p2[0] - (p3[0] - p1[0]) * tension / 3, p2[1] - (p3[1] - p1[1]) * tension / 3)
        path.cubicTo(*c1, *c2, *p2)
    if close: path.close()
    return path

# ---------- pixel ops ----------
def blur(layer, r):
    if r <= 0: return layer
    k = int(r * 3) | 1
    return cv2.GaussianBlur(layer, (k, k), r)

def tint_toward(layer, color, t):
    """Atmospheric haze: move colour toward `color` keeping alpha (premultiplied)."""
    a = layer[..., 3:4]
    layer[..., :3] = layer[..., :3] * (1 - t) + color[:3] * a * t
    return layer

def grain(layer, amount=0.02, seed=5, cell=1):
    rng = np.random.default_rng(seed)
    n = (rng.random(layer.shape[:2]).astype(np.float32) - 0.5) * 2 * amount
    a = layer[..., 3]
    for c in range(3): layer[..., c] = np.clip(layer[..., c] + n * a, 0, None)
    return layer

def mottle(layer, amount=0.05, cell=180, seed=9):
    """Low-frequency painterly variation in value."""
    n = (fbm(layer.shape[0], layer.shape[1], cell, 4, seed) - 0.5) * 2 * amount
    layer[..., :3] *= (1 + n[..., None])
    return layer

def to_rgba8(layer):
    a = np.clip(layer[..., 3:4], 0, 1)
    rgb = np.where(a > 1e-4, layer[..., :3] / np.maximum(a, 1e-4), 0)
    out = np.concatenate([np.clip(rgb, 0, 1), a], -1)
    return (out * 255 + 0.5).astype(np.uint8)

def save_webp(layer, path, width=None, quality=82, alpha=True):
    rgba = to_rgba8(layer)
    if width and width != rgba.shape[1]:
        h = int(rgba.shape[0] * width / rgba.shape[1])
        rgba = cv2.resize(rgba, (width, h), interpolation=cv2.INTER_AREA)
    if alpha:
        bgra = cv2.cvtColor(rgba, cv2.COLOR_RGBA2BGRA)
        cv2.imwrite(path, bgra, [cv2.IMWRITE_WEBP_QUALITY, quality])
    else:
        cv2.imwrite(path, cv2.cvtColor(rgba[..., :3], cv2.COLOR_RGB2BGR), [cv2.IMWRITE_WEBP_QUALITY, quality])

def flatten(layers, bg=None):
    out = empty(*layers[0].shape[:2]) if bg is None else bg.copy()
    for l in layers: over(out, l)
    return out
