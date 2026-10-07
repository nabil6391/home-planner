# Home Planner

Three.js furniture layout planner. Your furniture is modelled in `src/furniture.js`, and you arrange it in a hall you can resize.

```
npm install
npm run dev        # http://localhost:5300
npm run shots      # screenshots into shots/ (dev server must be running)
```

- Sizes in `CATALOG` (cm) are estimates from photos; edit per item in the app or change defaults there.
- "Space in front/behind" = legroom, recline, door swing, vent gap. Orange = that space is blocked; red = overlap or outside the hall.
- Layout autosaves to localStorage; Export/Import JSON to keep versions.
- Layouts: "Open hall" or a floor plan. Each layout keeps its own furniture.
- Type A1 plan: `scripts/extract_plan.py` reads `reference/floorplan-a1-a2.png` (walls from the green pixels,
  windows/counters listed by hand) → `public/plans/a1.*`. Scaled to 13050 × 10720 mm; accuracy ≈ ±2 cm (1 px ≈ 16.5 mm).
  Needs numpy/pillow/scipy (`python3 -m venv /tmp/fpenv && /tmp/fpenv/bin/pip install numpy pillow scipy`).
- Terrace (2 floors, separate layouts): `scripts/trace_terrace.py` — walls traced by hand from
  `reference/floorplan-terrace.png` (photo too soft for colour extraction). Width scaled from 9144/6019 mm;
  length uses the same mm/px (brochure's 16585 mm doesn't match the drawing) — set LENGTH_SCALE to correct.
- Both terrace floors show side by side in one layout ("terrace"). `PLAN=terrace node scripts/plan-shots.mjs` (a1 | terrace) — plan screenshots.
- `npm run shots` / `node scripts/plan-shots.mjs` — screenshots for the hall and the A1 plan.
