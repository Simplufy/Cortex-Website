#!/usr/bin/env python3
"""YouTube watermark: spokes meet at the center node, optically centered."""
from pathlib import Path
import cairosvg
from PIL import Image, ImageDraw

OUT = Path("/workspace/public/brand")
PREVIEW = Path("/workspace/screenshots")
PREVIEW.mkdir(parents=True, exist_ok=True)

# Spokes run node-center to node-center, then circles sit on top so the
# three lines actually meet in the middle. ViewBox is square around the
# visual bbox so padding is even.
SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3.2 -4.2 38.4 38.4" width="1024" height="1024">
  <path d="M16 7.5 L16 16.5 M7.2 22.5 L16 16.5 M24.8 22.5 L16 16.5"
        stroke="#ff571f" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <circle cx="16" cy="7.5" r="3.15" fill="#ff571f"/>
  <circle cx="7.2" cy="22.5" r="3.15" fill="#ff571f"/>
  <circle cx="24.8" cy="22.5" r="3.15" fill="#ff571f"/>
  <circle cx="16" cy="16.5" r="2.25" fill="#ff571f"/>
</svg>
"""

svg_path = Path("/tmp/youtube-watermark.svg")
svg_path.write_text(SVG)
png_1024 = OUT / "youtube-watermark-1024.png"
cairosvg.svg2png(
    url=str(svg_path),
    write_to=str(png_1024),
    output_width=1024,
    output_height=1024,
    background_color="rgba(0,0,0,0)",
)

src = Image.open(png_1024).convert("RGBA")
alpha = src.split()[-1]
bbox = alpha.getbbox()
print("1024 bbox", bbox)
if bbox:
    l, t, r, b = bbox
    print("padding LTRB", l, t, 1024 - r, 1024 - b)

for size in (512, 150):
    out = src.resize((size, size), Image.Resampling.LANCZOS)
    path = OUT / f"youtube-watermark-{size}.png"
    out.save(path, "PNG")
    print("wrote", path)

def plate(bg, size):
    canvas = Image.new("RGBA", (size, size), bg)
    mark = src.resize((int(size * 0.72), int(size * 0.72)), Image.Resampling.LANCZOS)
    x = (size - mark.size[0]) // 2
    y = (size - mark.size[1]) // 2
    canvas.alpha_composite(mark, (x, y))
    return canvas.convert("RGB")

dark = plate((5, 5, 5, 255), 512)
light = plate((245, 245, 245, 255), 512)
tiny = src.resize((48, 48), Image.Resampling.LANCZOS)
frame = Image.new("RGB", (480, 270), (18, 18, 18))
frame.paste(tiny, (480 - 56, 270 - 56), tiny)
qa = Image.new("RGB", (1024, 512), (20, 20, 20))
qa.paste(dark, (0, 0))
qa.paste(light, (512, 0))
qa.save(PREVIEW / "youtube-watermark-qa.png", "PNG")
frame.save(PREVIEW / "youtube-watermark-40px.png", "PNG")
print("qa written")
