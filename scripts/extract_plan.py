"""Extract the Type A1 floor plan into public/plans/a1.json + images.

Walls come from the green (and pale "hackable") pixels of the brochure image;
windows/railings are listed by hand below in image pixels. The plan is scaled
so the outer walls match the brochure's 13050 x 10720 mm dimensions.

    /tmp/fpenv/bin/python scripts/extract_plan.py
"""
import json
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'reference/floorplan-a1-a2.png'
OUT = ROOT / 'public/plans'
CROP = (340, 60, 1160, 730)  # Type A1 only (A2 below is cut off in the brochure)
W_MM, D_MM = 13050, 10720
MIN_RUN = 14  # px; runs shorter than this are wall thickness, not wall length

im = np.array(Image.open(SRC).convert('RGB')).astype(int)
x0c, y0c, x1c, y1c = CROP
im = im[y0c:y1c, x0c:x1c]
r, g, b = im[..., 0], im[..., 1], im[..., 2]
green = (g - r > 25) & (g - b > 5) & (g < 170)
hack = (abs(r - g) < 30) & (r > 190) & (r < 245) & (b < r - 10) & ~green

# Drop the numbered room badges and text specks: compact blobs, not long walls.
def clean(mask):
    lab, n = ndimage.label(mask)
    keep = np.zeros_like(mask)
    for i, sl in enumerate(ndimage.find_objects(lab), 1):
        h, w = sl[0].stop - sl[0].start, sl[1].stop - sl[1].start
        if max(h, w) >= 3 * min(h, w) and max(h, w) >= MIN_RUN:
            keep[sl] |= lab[sl] == i
        elif max(h, w) > 45:  # big L/T wall pieces
            keep[sl] |= lab[sl] == i
    return keep

green, hack = clean(green), clean(hack)

def runs(mask, axis):
    """Mask of pixels lying on a run of >= MIN_RUN along axis (1 = horizontal)."""
    out = np.zeros_like(mask)
    m = mask if axis == 1 else mask.T
    o = out if axis == 1 else out.T
    for i, row in enumerate(m):
        j, n = 0, len(row)
        while j < n:
            if row[j]:
                k = j
                while k < n and row[k]:
                    k += 1
                if k - j >= MIN_RUN:
                    o[i, j:k] = True
                j = k
            else:
                j += 1
    return out

def rects(mask, kind):
    out = []
    for axis in (1, 0):
        lab, _ = ndimage.label(runs(mask, axis))
        for sl in ndimage.find_objects(lab):
            y0, y1, x0, x1 = sl[0].start, sl[0].stop, sl[1].start, sl[1].stop
            length, thick = (x1 - x0, y1 - y0) if axis == 1 else (y1 - y0, x1 - x0)
            if length >= MIN_RUN and thick >= 3:
                out.append({'x0': x0, 'y0': y0, 'x1': x1, 'y1': y1, 'kind': kind})
    return out

walls = rects(green, 'wall') + rects(hack, 'hackable')

# Scale from the outer wall extents.
ys, xs = np.nonzero(green)
px_x0, px_x1, px_y0, px_y1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1
sx = W_MM / 1000 / (px_x1 - px_x0)
sz = D_MM / 1000 / (px_y1 - px_y0)
cx, cy = (px_x0 + px_x1) / 2, (px_y0 + px_y1) / 2
def to_m(x, y):
    return round((x - cx) * sx, 3), round((y - cy) * sz, 3)

# Openings, in original-image pixels: (x0, y0, x1, y1, kind, sill, head).
OPENINGS = [
    (395, 135, 517, 142, 'window', 0.9, 2.1),     # master bedroom
    (592, 135, 732, 142, 'glassdoor', 0.0, 2.1),  # living -> balcony slider
    (867, 135, 937, 142, 'window', 0.9, 2.1),     # bedroom 2
    (980, 135, 1105, 142, 'window', 0.9, 2.1),    # bedroom 1
    (560, 72, 848, 80, 'railing', 0.0, 1.1),      # balcony
    (405, 565, 450, 572, 'window', 1.5, 2.1),     # master bath
    (1045, 502, 1102, 507, 'window', 1.5, 2.1),   # bathroom
    (930, 565, 975, 572, 'window', 0.9, 2.1),     # bedroom 3
    (850, 575, 858, 615, 'window', 1.0, 2.1),     # kitchen -> yard
    (981, 572, 989, 712, 'railing', 0.0, 1.1),    # A/C ledge grille
]
openings = []
for ox0, oy0, ox1, oy1, kind, sill, head in OPENINGS:
    a = to_m(ox0 - x0c, oy0 - y0c)
    c = to_m(ox1 - x0c, oy1 - y0c)
    openings.append({'x0': a[0], 'z0': a[1], 'x1': c[0], 'z1': c[1], 'kind': kind, 'sill': sill, 'head': head})

# Built-in kitchen counters (fixed obstacles): (x0, y0, x1, y1, height), original pixels.
FIXTURES = [
    (674, 672, 850, 712, 0.9, 'Kitchen counter'),
    (686, 572, 850, 611, 0.9, 'Kitchen island'),
]
fixtures = []
for fx0, fy0, fx1, fy1, h, name in FIXTURES:
    a, c = to_m(fx0 - x0c, fy0 - y0c), to_m(fx1 - x0c, fy1 - y0c)
    fixtures.append({'x0': a[0], 'z0': a[1], 'x1': c[0], 'z1': c[1], 'h': h, 'name': name})

wall_m = []
for w in walls:
    a, c = to_m(w['x0'], w['y0']), to_m(w['x1'], w['y1'])
    wall_m.append({'x0': a[0], 'z0': a[1], 'x1': c[0], 'z1': c[1], 'kind': w['kind']})

ROOMS = [(1, 'Foyer', 597, 688), (2, 'Kitchen', 765, 645), (3, 'Yard', 888, 645), (4, 'Dining', 714, 497),
         (5, 'Living', 658, 264), (6, 'Balcony', 705, 108), (7, 'Bedroom 1', 1045, 233), (8, 'Bedroom 2', 853, 233),
         (9, 'Bedroom 3', 926, 495), (10, 'Bathroom', 1070, 418), (11, 'Utility', 504, 516),
         (12, 'Master Bedroom', 465, 278), (13, 'Master Bath', 427, 480), (14, 'A/C Ledge', 953, 645)]
rooms = [{'n': n, 'name': name, 'x': to_m(x - x0c, y - y0c)[0], 'z': to_m(x - x0c, y - y0c)[1]} for n, name, x, y in ROOMS]

# Interior = not reachable from outside once walls, openings and the entrance are closed.
barrier = green | hack
for ox0, oy0, ox1, oy1, *_ in OPENINGS:
    barrier[oy0 - y0c - 2:oy1 - y0c + 2, ox0 - x0c - 2:ox1 - x0c + 2] = True
barrier[712 - y0c:724 - y0c, 555 - x0c:640 - x0c] = True  # foyer entrance (foyer is the private lobby)
barrier = ndimage.binary_dilation(barrier, iterations=2)
outside, _ = ndimage.label(~barrier)
ext = outside == outside[0, 0]
interior = ~ext
interior = interior[px_y0:px_y1, px_x0:px_x1]

OUT.mkdir(parents=True, exist_ok=True)
Image.fromarray((interior * 255).astype(np.uint8)).save(OUT / 'a1-floor.png')
drawing = Image.open(SRC).convert('RGB').crop((x0c + px_x0, y0c + px_y0, x0c + px_x1, y0c + px_y1))
drawing.save(OUT / 'a1-drawing.png')

plan = {
    'id': 'a1', 'name': 'Type A1 · 4R2B (balcony) · 1,210 sq ft',
    'w': W_MM / 1000, 'd': D_MM / 1000,
    'walls': wall_m, 'openings': openings, 'fixtures': fixtures, 'rooms': rooms,
    'floor': 'plans/a1-floor.png', 'drawing': 'plans/a1-drawing.png',
}
(OUT / 'a1.json').write_text(json.dumps(plan, indent=1))
print(f'{len(wall_m)} walls, {len(openings)} openings, scale {sx*1000:.2f} x {sz*1000:.2f} mm/px')

# Debug overlay
dbg = Image.open(SRC).convert('RGB').crop(CROP)
from PIL import ImageDraw  # noqa: E402
d = ImageDraw.Draw(dbg)
for w in walls:
    d.rectangle([w['x0'], w['y0'], w['x1'] - 1, w['y1'] - 1], outline=(255, 0, 0) if w['kind'] == 'wall' else (255, 140, 0))
for ox0, oy0, ox1, oy1, kind, *_ in OPENINGS:
    d.rectangle([ox0 - x0c, oy0 - y0c, ox1 - x0c, oy1 - y0c], outline=(0, 90, 255), width=2)
dbg.resize((dbg.width * 2, dbg.height * 2), Image.NEAREST).save('/tmp/plan-debug.png')
Image.fromarray((interior * 255).astype(np.uint8)).save('/tmp/plan-interior.png')
