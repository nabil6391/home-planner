"""Extract the Type B1 floor plan into public/plans/b1.json + images.

Unlike A1 (green wall fill) and the terrace (hand-traced, no colour fill),
B1's walls are a solid light-grey fill (~rgb 182,192,187) with a pale purple
fill (~rgb 186,160,180) marking the hackable wall section. Windows/doors are
listed by hand below in image pixels, same approach as A1. Scaled so the
outer walls match the brochure's 12450 x 10500 mm dimensions.

    /tmp/fpenv/bin/python scripts/extract_plan_b1.py
"""
import json
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'reference/floorplan-b1-b2.png'
OUT = ROOT / 'public/plans'
CROP = (0, 0, 1374, 950)  # Type B1 only (B2 below is a separate plan)
W_MM, D_MM = 12450, 10500
MIN_RUN = 14  # px; runs shorter than this are wall thickness, not wall length

im = np.array(Image.open(SRC).convert('RGB')).astype(int)
x0c, y0c, x1c, y1c = CROP
im = im[y0c:y1c, x0c:x1c]
r, g, b = im[..., 0], im[..., 1], im[..., 2]
wall = (abs(r - g) < 15) & (abs(g - b) < 15) & (r > 165) & (r < 200)
hack = (abs(r - 180) < 20) & (abs(g - 158) < 22) & (abs(b - 178) < 20) & (r > g)

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

wall, hack = clean(wall), clean(hack)

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

walls = rects(wall, 'wall') + rects(hack, 'hackable')

# Scale from the outer wall extents.
ys, xs = np.nonzero(wall)
px_x0, px_x1, px_y0, px_y1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1
sx = W_MM / 1000 / (px_x1 - px_x0)
sz = D_MM / 1000 / (px_y1 - px_y0)
cx, cy = (px_x0 + px_x1) / 2, (px_y0 + px_y1) / 2
def to_m(x, y):
    return round((x - cx) * sx, 3), round((y - cy) * sz, 3)

# Openings, in original-image pixels: (x0, y0, x1, y1, kind, sill, head).
OPENINGS = [
    (555, 106, 640, 114, 'window', 0.9, 2.1),      # master bedroom
    (660, 106, 900, 114, 'glassdoor', 0.0, 2.1),   # living -> balcony slider
    (1035, 106, 1120, 114, 'window', 0.9, 2.1),    # bedroom 2
    (1180, 106, 1270, 114, 'window', 0.9, 2.1),    # bedroom 1
    (940, 106, 1300, 114, 'railing', 0.0, 1.1),    # A/C ledge grille
    (555, 455, 600, 463, 'window', 1.5, 2.1),      # master bath
    (1000, 590, 1040, 598, 'window', 1.0, 2.1),    # kitchen -> yard
]
openings = []
for ox0, oy0, ox1, oy1, kind, sill, head in OPENINGS:
    a = to_m(ox0 - x0c, oy0 - y0c)
    c = to_m(ox1 - x0c, oy1 - y0c)
    openings.append({'x0': a[0], 'z0': a[1], 'x1': c[0], 'z1': c[1], 'kind': kind, 'sill': sill, 'head': head})

# Built-in kitchen counters (fixed obstacles): (x0, y0, x1, y1, height), original pixels.
FIXTURES = [
    (825, 625, 1000, 660, 0.9, 'Kitchen counter'),
    (950, 730, 1000, 765, 0.9, 'Cooker counter'),
    (940, 575, 1000, 605, 0.9, 'Sink counter'),
]
fixtures = []
for fx0, fy0, fx1, fy1, h, name in FIXTURES:
    a, c = to_m(fx0 - x0c, fy0 - y0c), to_m(fx1 - x0c, fy1 - y0c)
    fixtures.append({'x0': a[0], 'z0': a[1], 'x1': c[0], 'z1': c[1], 'h': h, 'name': name})

wall_m = []
for w in walls:
    a, c = to_m(w['x0'], w['y0']), to_m(w['x1'], w['y1'])
    wall_m.append({'x0': a[0], 'z0': a[1], 'x1': c[0], 'z1': c[1], 'kind': w['kind']})

# Drop a few short slivers the wall-colour mask picked up from furniture icons
# (TV stand, dining chair, bed pillow, nightstand, desk) rather than real walls.
NOISE = [
    (-4.36, -3.67, -4.30, -3.28),   # master bedroom: pillow icon line
    (1.90, -2.68, 2.22, -2.62),     # bedroom 2: nightstand icon line
    (4.30, 1.12, 4.58, 1.19),       # study: desk icon line
    (-1.21, -3.03, -1.15, -2.66),   # living: TV stand icon line
    (-0.73, 1.20, -0.66, 1.63),     # dining: chair icon line
    (-4.83, -3.20, -4.47, -3.14),   # master bedroom: pillow icon shading
    (0.85, -0.06, 1.21, 0.01),      # utility: room-badge drop shadow
]
def is_noise(w):
    return any(nx0 - 0.03 <= w['x0'] and w['x1'] <= nx1 + 0.03 and nz0 - 0.03 <= w['z0'] and w['z1'] <= nz1 + 0.03 for nx0, nz0, nx1, nz1 in NOISE)
wall_m = [w for w in wall_m if not is_noise(w)]

ROOMS = [(1, 'Foyer', 780, 745), (2, 'Kitchen', 915, 685), (3, 'Yard', 1045, 655), (4, 'Dining', 855, 525),
         (5, 'Living', 820, 255), (6, 'Balcony', 830, 142), (7, 'Bedroom 2', 1047, 247), (8, 'Bedroom 1', 1219, 247),
         (9, 'Utility', 985, 416), (10, 'Study', 1197, 488), (11, 'Bathroom', 1048, 533),
         (12, 'Master Bedroom', 622, 211), (13, 'Master Bathroom', 658, 499), (14, 'A/C Ledge', 1156, 131)]
rooms = [{'n': n, 'name': name, 'x': to_m(x - x0c, y - y0c)[0], 'z': to_m(x - x0c, y - y0c)[1]} for n, name, x, y in ROOMS]

# Interior = union of room footprints, read by hand off a pixel grid (original-image
# pixels). Flood-fill from the wall mask is fragile here: hairline anti-aliasing gaps
# at wall corners/T-junctions let it leak straight through to the exterior.
INTERIOR_RECTS = [
    (526, 106, 730, 700),    # master bedroom + wardrobe + master bath + corridor
    (700, 106, 930, 600),    # living + dining
    (700, 600, 820, 774),    # foyer
    (820, 600, 1000, 774),   # kitchen
    (1000, 600, 1320, 774),  # yard + bathroom/study bottom
    (930, 106, 1125, 600),   # bedroom 2 + utility
    (1125, 106, 1320, 600),  # bedroom 1 + study + bathroom
]
interior_full = np.zeros(wall.shape, dtype=bool)
for ix0, iy0, ix1, iy1 in INTERIOR_RECTS:
    interior_full[iy0 - y0c:iy1 - y0c, ix0 - x0c:ix1 - x0c] = True
interior_full &= ~ndimage.binary_dilation(wall | hack, iterations=1)
interior = interior_full[px_y0:px_y1, px_x0:px_x1]

OUT.mkdir(parents=True, exist_ok=True)
Image.fromarray((interior * 255).astype(np.uint8)).save(OUT / 'b1-floor.png')
drawing = Image.open(SRC).convert('RGB').crop((x0c + px_x0, y0c + px_y0, x0c + px_x1, y0c + px_y1))
drawing.save(OUT / 'b1-drawing.png')

plan = {
    'id': 'b1', 'name': 'Type B1 · 3R2B (balcony) · 1,151 sq ft',
    'w': W_MM / 1000, 'd': D_MM / 1000,
    'walls': wall_m, 'openings': openings, 'fixtures': fixtures, 'rooms': rooms,
    'floor': 'plans/b1-floor.png', 'drawing': 'plans/b1-drawing.png',
}
(OUT / 'b1.json').write_text(json.dumps(plan, indent=1))
print(f'{len(wall_m)} walls, {len(openings)} openings, scale {sx*1000:.2f} x {sz*1000:.2f} mm/px')

# Debug overlay
dbg = Image.open(SRC).convert('RGB').crop(CROP)
from PIL import ImageDraw  # noqa: E402
d = ImageDraw.Draw(dbg)
for w in walls:
    d.rectangle([w['x0'], w['y0'], w['x1'] - 1, w['y1'] - 1], outline=(255, 0, 0) if w['kind'] == 'wall' else (255, 140, 0))
for ox0, oy0, ox1, oy1, kind, *_ in OPENINGS:
    d.rectangle([ox0 - x0c, oy0 - y0c, ox1 - x0c, oy1 - y0c], outline=(0, 90, 255), width=2)
dbg.resize((dbg.width * 2, dbg.height * 2), Image.NEAREST).save('/tmp/plan-b1-debug.png')
Image.fromarray((interior * 255).astype(np.uint8)).save('/tmp/plan-b1-interior.png')
