#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { spawnSync } from "node:child_process";

const OUT_DIR = "/workspace/public/brand";
mkdirSync(OUT_DIR, { recursive: true });

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body { margin: 0; background: transparent; }
    #wm {
      width: 1024px;
      height: 1024px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }
    svg { width: 760px; height: 760px; display: block; }
  </style>
</head>
<body>
  <div id="wm">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="7.5" r="3.1" fill="#ff571f"/>
      <circle cx="7.2" cy="22.5" r="3.1" fill="#ff571f"/>
      <circle cx="24.8" cy="22.5" r="3.1" fill="#ff571f"/>
      <circle cx="16" cy="16.5" r="2.15" fill="#ff571f"/>
      <path d="M16 10.6 L16 14.35 M13.85 15.55 L9.55 20.55 M18.15 15.55 L22.45 20.55" stroke="#ff571f" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    </svg>
  </div>
</body>
</html>`;

writeFileSync("/tmp/youtube-watermark.html", html);

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({
  viewport: { width: 1024, height: 1024 },
  deviceScaleFactor: 1,
});
await page.goto("file:///tmp/youtube-watermark.html", { waitUntil: "networkidle" });
await page.locator("#wm").screenshot({
  path: `${OUT_DIR}/youtube-watermark-1024.png`,
  omitBackground: true,
});
await browser.close();

spawnSync(
  "python3",
  [
    "-c",
    `
from PIL import Image
src = Image.open("/workspace/public/brand/youtube-watermark-1024.png")
for size in (512, 150):
    out = src.resize((size, size), Image.Resampling.LANCZOS)
    path = f"/workspace/public/brand/youtube-watermark-{size}.png"
    out.save(path, "PNG")
    print("wrote", path, out.mode, out.size)
`,
  ],
  { stdio: "inherit" },
);

spawnSync(
  "zip",
  ["-u", "cortex-brand-kit.zip", "youtube-watermark-1024.png", "youtube-watermark-512.png", "youtube-watermark-150.png"],
  { cwd: OUT_DIR, stdio: "inherit" },
);
console.log("done");
