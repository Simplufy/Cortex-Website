#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { spawnSync } from "node:child_process";

const OUT_DIR = "/workspace/public/brand";
const PREVIEW_DIR = "/workspace/screenshots";
mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(PREVIEW_DIR, { recursive: true });

const mark = `
<svg viewBox="0 0 32 32" aria-hidden="true">
  <circle cx="16" cy="7.5" r="3.1" fill="#ff571f"/>
  <circle cx="7.2" cy="22.5" r="3.1" fill="#ff571f"/>
  <circle cx="24.8" cy="22.5" r="3.1" fill="#ff571f"/>
  <circle cx="16" cy="16.5" r="2.15" fill="#ff571f"/>
  <path d="M16 10.6 L16 14.35 M13.85 15.55 L9.55 20.55 M18.15 15.55 L22.45 20.55" stroke="#ff571f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
</svg>`;

const bannerHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { background: #050505; }
    #banner {
      width: 2560px;
      height: 1440px;
      position: relative;
      overflow: hidden;
      background: #050505;
      font-family: "Inter Tight", sans-serif;
      color: #fff;
    }
    canvas.stars { position: absolute; inset: 0; }
    /* YouTube safe area: 1546 × 423, centered */
    .safe {
      position: absolute;
      left: 507px;
      top: 508px;
      width: 1546px;
      height: 423px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 56px;
    }
    .lockup {
      display: flex;
      align-items: center;
      gap: 36px;
    }
    .lockup .mark { width: 118px; height: 118px; flex-shrink: 0; }
    .name {
      font-size: 92px;
      font-weight: 500;
      letter-spacing: 0.28em;
      line-height: 1;
      text-transform: uppercase;
    }
    .eyebrow {
      margin-top: 14px;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #ff571f;
    }
    .side {
      width: 420px;
      text-align: right;
      flex-shrink: 0;
    }
    .kicker {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: #ff571f;
      margin-bottom: 12px;
    }
    .copy {
      font-size: 28px;
      font-weight: 400;
      line-height: 1.3;
      color: rgba(255,255,255,0.8);
    }
    .glow {
      position: absolute;
      left: 520px;
      top: 560px;
      width: 900px;
      height: 320px;
      background: radial-gradient(ellipse at center, rgba(255,87,31,0.16) 0%, rgba(255,87,31,0) 70%);
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div id="banner">
    <canvas class="stars" width="2560" height="1440"></canvas>
    <div class="glow"></div>
    <div class="safe">
      <div class="lockup">
        <div class="mark">${mark}</div>
        <div>
          <div class="name">Cortex</div>
          <div class="eyebrow">AI systems for service businesses</div>
        </div>
      </div>
      <div class="side">
        <div class="kicker">On your stack</div>
        <div class="copy">Monitor. Follow up.<br/>Build reports.</div>
      </div>
    </div>
  </div>
  <script>
    const c = document.querySelector("canvas.stars");
    const ctx = c.getContext("2d");
    const dots = [];
    for (let i = 0; i < 90; i++) {
      dots.push([
        Math.random() * 2560,
        Math.random() * 1440,
        Math.random() * 1.4 + 0.4,
        Math.random() * 0.18 + 0.08,
      ]);
    }
    for (const [x, y, r, a] of dots) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255," + a + ")";
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  </script>
</body>
</html>`;

const bannerPath = "/tmp/youtube-banner.html";
writeFileSync(bannerPath, bannerHtml);

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 1 });
await page.goto("file://" + bannerPath, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(250);
await page.locator("#banner").screenshot({ path: `${OUT_DIR}/youtube-banner-2560x1440.png` });

const previewHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #eef0f2; font-family: system-ui, sans-serif; padding: 36px; color: #202124; }
    h2 { font-size: 13px; font-weight: 600; color: #5f6368; margin: 0 0 10px; }
    .stack { display: flex; flex-direction: column; gap: 36px; max-width: 1280px; margin: 0 auto; }
    .frame { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 28px rgba(0,0,0,.08); }
    .crop { overflow: hidden; background: #050505; }
    .crop img { display: block; }
    .desktop img {
      width: 1280px;
      height: 720px;
      object-fit: none;
      object-position: center center;
      transform: scale(1);
      /* show the 2560×423 center strip scaled to 1280×212 */
      width: 1280px;
      height: 212px;
      object-fit: cover;
      object-position: center center;
    }
    .mobile {
      width: 390px;
    }
    .mobile .crop { height: 107px; }
    .mobile img {
      width: 390px;
      height: 107px;
      object-fit: cover;
      object-position: center center;
    }
    .tv img {
      width: 1280px;
      height: 720px;
      object-fit: contain;
      background: #050505;
    }
    .row { display: flex; gap: 28px; align-items: flex-start; }
  </style>
</head>
<body>
  <div class="stack">
    <div>
      <h2>Desktop — full width, center 423px strip (this is the channel header on a computer)</h2>
      <div class="frame desktop"><div class="crop"><img src="file://${OUT_DIR}/youtube-banner-2560x1440.png" alt="" /></div></div>
    </div>
    <div class="row">
      <div>
        <h2>Mobile — center 1546×423 only</h2>
        <div class="frame mobile"><div class="crop"><img src="file://${OUT_DIR}/youtube-banner-2560x1440.png" alt="" /></div></div>
      </div>
    </div>
    <div>
      <h2>TV — full 2560×1440 (extra starfield around the safe area)</h2>
      <div class="frame tv"><div class="crop"><img src="file://${OUT_DIR}/youtube-banner-2560x1440.png" alt="" /></div></div>
    </div>
  </div>
</body>
</html>`;

const previewPath = "/tmp/youtube-banner-preview.html";
writeFileSync(previewPath, previewHtml);
const preview = await browser.newPage({ viewport: { width: 1360, height: 1400 }, deviceScaleFactor: 1 });
await preview.goto("file://" + previewPath, { waitUntil: "networkidle" });
await preview.waitForTimeout(200);
await preview.screenshot({ path: `${PREVIEW_DIR}/youtube-banner-preview.png`, fullPage: true });
await browser.close();

spawnSync(
  "python3",
  [
    "-c",
    "from PIL import Image; im=Image.open('/workspace/public/brand/youtube-banner-2560x1440.png').convert('RGB'); im.save('/workspace/public/brand/youtube-banner-2560x1440.jpg', quality=92, optimize=True)",
  ],
  { stdio: "inherit" },
);

spawnSync(
  "zip",
  ["-u", "cortex-brand-kit.zip", "youtube-banner-2560x1440.png", "youtube-banner-2560x1440.jpg"],
  { cwd: OUT_DIR, stdio: "inherit" },
);

console.log("wrote youtube banner + preview");
