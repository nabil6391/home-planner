"""Hand-traced plans for the double-storey terrace (corner lot) brochure photo.

The photo is too soft for colour extraction, so walls are traced by hand as
centre lines in image pixels. Scale comes from the width dimensions
(ground: 9144 mm over the lot, first: 6019 mm over the house); the brochure's
16585 mm length doesn't match either drawing, so the length uses the same
mm/px as the width — set LENGTH_SCALE if a measured length disagrees.

    /tmp/fpenv/bin/python scripts/trace_terrace.py
"""
import json
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'reference/floorplan-terrace.png'
OUT = ROOT / 'public/plans'
LENGTH_SCALE = 1.0  # multiply z (front-back) by this to correct the length
T = 9  # wall thickness, px (~150 mm)


def H(y, x0, x1, kind='wall', t=T):
    return (x0 - t / 2, y - t / 2, x1 + t / 2, y + t / 2, kind)


def V(x, y0, y1, kind='wall', t=T):
    return (x - t / 2, y0 - t / 2, x + t / 2, y1 + t / 2, kind)


FLOORS = {
    'tg': {
        'name': 'Terrace · Ground floor',
        'bbox': (106, 207, 682, 1450),
        'mm_per_px': 9144 / 568,
        'floor': [(106, 207, 682, 1450)],
        'walls': [
            V(112, 213, 1008),                                      # party wall
            H(213, 112, 395),                                       # back wall
            V(395, 213, 265),                                       # yard -> side passage (door below)
            V(215, 213, 295), H(345, 112, 215),                     # utility
            H(345, 305, 487),                                       # yard / bath
            V(312, 345, 385), H(437, 312, 487),                     # bath (door 385-432)
            V(312, 437, 530), H(598, 312, 487),                     # bedroom 4 (door 530-598)
            V(487, 345, 370), V(487, 420, 470), V(487, 560, 740), V(487, 990, 1008),  # side wall
            H(588, 112, 172), V(172, 588, 610),                     # store
            V(172, 657, 745), H(925, 112, 192),                     # stair wall
            H(1008, 112, 150), H(1008, 225, 260), H(1008, 470, 487),  # front wall
            V(676, 213, 1445, 'fence', 6), H(213, 452, 676, 'fence', 6), V(452, 213, 330, 'fence', 6),
            V(115, 1008, 1445, 'fence', 6), H(1445, 115, 150, 'fence', 6), H(1445, 430, 676, 'fence', 6),
        ],
        'openings': [
            (483, 370, 491, 420, 'window', 1.5, 2.1),   # bath
            (483, 470, 491, 560, 'window', 0.9, 2.1),   # bedroom 4
            (483, 740, 491, 990, 'window', 0.9, 2.1),   # living / dining
            (260, 1004, 470, 1012, 'glassdoor', 0, 2.1),  # living -> porch sliding doors
            (150, 1442, 430, 1448, 'railing', 0, 1.5),  # porch gate
        ],
        'fixtures': [
            (170, 217, 390, 245, 0.9, 'Yard counter', 'counter'),
            (117, 352, 220, 395, 0.9, 'Sink counter', 'counter'),
            (116, 640, 168, 920, 2.9, 'Staircase', 'stairs'),
        ],
        'rooms': [('Utility', 163, 260), ('Yard', 300, 285), ('Kitchen', 220, 470), ('Bath', 400, 400),
                  ('Bedroom 4', 400, 520), ('Store', 140, 615), ('Dining', 390, 650), ('Living', 380, 880),
                  ('Car porch', 290, 1230), ('Garden', 580, 820)],
    },
    'tf': {
        'name': 'Terrace · 1st floor',
        'bbox': (889, 195, 1278, 1054),
        'mm_per_px': 6019 / 382,
        'floor': [(889, 195, 1104, 1054), (1096, 325, 1278, 1054)],
        'walls': [
            V(895, 200, 1050),                                      # party wall
            H(200, 895, 940), H(200, 1060, 1100),                   # back wall
            V(1100, 200, 480), V(1100, 530, 585),                   # bed 2 / bed 3 (door 480-530)
            H(330, 1100, 1130), H(330, 1240, 1272),                 # bed 3 back
            V(1272, 330, 360), V(1272, 500, 600), V(1272, 770, 1050),  # side wall
            H(585, 1100, 1272),                                     # bed 3 / family
            H(460, 895, 1035),                                      # bed 2 bottom (door 1035-1100)
            V(1035, 460, 520), V(1035, 565, 585), H(585, 895, 1035),  # bath 2 (door 520-565)
            H(777, 895, 1050), H(777, 1100, 1272),                  # master (door 1050-1100)
            H(885, 895, 990), V(1037, 885, 1048),                   # bath 1 (door 990-1037)
            H(1048, 895, 1100), H(1048, 1220, 1272),                # front wall
        ],
        'openings': [
            (940, 196, 1060, 204, 'window', 0.9, 2.1),     # bedroom 2
            (1130, 326, 1240, 334, 'window', 0.9, 2.1),    # bedroom 3 back
            (1268, 360, 1276, 500, 'window', 0.9, 2.1),    # bedroom 3 side
            (1268, 600, 1276, 770, 'window', 0.9, 2.1),    # family
            (1100, 1044, 1220, 1052, 'window', 0.9, 2.1),  # master bay
        ],
        'fixtures': [
            (899, 590, 960, 775, 1.0, 'Stairs', 'void'),
            (960, 655, 1033, 775, 1.0, 'Void', 'void'),
        ],
        'rooms': [('Bedroom 2', 975, 360), ('Bedroom 3', 1190, 470), ('Bath 2', 965, 525),
                  ('Family', 1165, 670), ('Dressing', 965, 830), ('Master Bedroom', 1165, 880),
                  ('Bath 1', 965, 975)],
    },
}

src = Image.open(SRC).convert('RGB')
OUT.mkdir(parents=True, exist_ok=True)

for fid, f in FLOORS.items():
    bx0, by0, bx1, by1 = f['bbox']
    s = f['mm_per_px'] / 1000
    sz = s * LENGTH_SCALE
    cx, cy = (bx0 + bx1) / 2, (by0 + by1) / 2
    X = lambda px: round((px - cx) * s, 3)  # noqa: E731
    Z = lambda py: round((py - cy) * sz, 3)  # noqa: E731

    walls = [{'x0': X(a), 'z0': Z(b), 'x1': X(c), 'z1': Z(d), 'kind': k} for a, b, c, d, k in f['walls']]
    openings = [{'x0': X(a), 'z0': Z(b), 'x1': X(c), 'z1': Z(d), 'kind': k, 'sill': sill, 'head': head}
                for a, b, c, d, k, sill, head in f['openings']]
    fixtures = [{'x0': X(a), 'z0': Z(b), 'x1': X(c), 'z1': Z(d), 'h': h, 'name': n, 'kind': k}
                for a, b, c, d, h, n, k in f['fixtures']]
    rooms = [{'name': n, 'x': X(x), 'z': Z(y)} for n, x, y in f['rooms']]

    mask = Image.new('L', (bx1 - bx0, by1 - by0), 0)
    md = ImageDraw.Draw(mask)
    for a, b, c, d in f['floor']:
        md.rectangle([a - bx0, b - by0, c - bx0 - 1, d - by0 - 1], fill=255)
    mask.save(OUT / f'{fid}-floor.png')
    src.crop(f['bbox']).save(OUT / f'{fid}-drawing.png')

    plan = {'id': fid, 'name': f['name'], 'w': X(bx1) - X(bx0), 'd': Z(by1) - Z(by0),
            'walls': walls, 'openings': openings, 'fixtures': fixtures, 'rooms': rooms,
            'floor': f'plans/{fid}-floor.png', 'drawing': f'plans/{fid}-drawing.png'}
    (OUT / f'{fid}.json').write_text(json.dumps(plan, indent=1))
    print(f"{fid}: {plan['w']:.2f} x {plan['d']:.2f} m, {len(walls)} walls")

    # Debug overlay
    dbg = src.crop(f['bbox']).resize(((bx1 - bx0) * 2, (by1 - by0) * 2))
    d = ImageDraw.Draw(dbg)
    P = lambda x, y: ((x - bx0) * 2, (y - by0) * 2)  # noqa: E731
    for a, b, c, e, k in f['walls']:
        d.rectangle([*P(a, b), *P(c, e)], fill=(220, 30, 30) if k == 'wall' else (230, 140, 0))
    for a, b, c, e, *_ in f['openings']:
        d.rectangle([*P(a, b), *P(c, e)], fill=(30, 90, 255))
    for a, b, c, e, *_ in f['fixtures']:
        d.rectangle([*P(a, b), *P(c, e)], outline=(140, 0, 200), width=3)
    dbg.save(f'/tmp/{fid}-debug.png')
