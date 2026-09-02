#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { spawnSync } from "node:child_process";

const OUT_DIR = "/workspace/public/brand";
const PREVIEW_DIR = "/workspace/screenshots";
mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(PREVIEW_DIR, { recursive: true });

const mark = `<svg viewBox="0 0 32 32" aria-hidden="true">
  <circle cx="16" cy="7.5" r="3.1" fill="#ff571f"/>
  <circle cx="7.2" cy="22.5" r="3.1" fill="#ff571f"/>
  <circle cx="24.8" cy="22.5" r="3.1" fill="#ff571f"/>
  <circle cx="16" cy="16.5" r="2.15" fill="#ff571f"/>
  <path d="M16 10.6 L16 14.35 M13.85 15.55 L9.55 20.55 M18.15 15.55 L22.45 20.55" stroke="#ff571f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
</svg>`;

// X header 1500×500
// Mobile crops ~180px each side. Avatar covers bottom-left ~220×90 of the banner.
// Safe zone: x 280–1220, y 36–390
const headerHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { background: #050505; }
    #header {
      width: 1500px;
      height: 500px;
      position: relative;
      overflow: hidden;
      background: #050505;
      font-family: "Inter Tight", sans-serif;
      color: #fff;
    }
    canvas.stars { position: absolute; inset: 0; }
    .glow {
      position: absolute;
      left: 50%;
      top: 90px;
      width: 820px;
      height: 260px;
      transform: translateX(-50%);
      background: radial-gradient(ellipse at center, rgba(255,87,31,0.22) 0%, rgba(255,87,31,0) 70%);
      pointer-events: none;
    }
    .safe {
      position: absolute;
      left: 340px;
      top: 24px;
      width: 880px;
      height: 380px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 0;
    }
    .mark-wrap {
      width: 92px;
      height: 92px;
      flex-shrink: 0;
      margin-bottom: 14px;
      filter: drop-shadow(0 0 22px rgba(255,87,31,0.5));
    }
    .mark-wrap svg { width: 100%; height: 100%; }
    .lockup { text-align: center; max-width: none; }
    .name {
      font-size: 70px;
      font-weight: 500;
      letter-spacing: 0.3em;
      line-height: 1;
      text-transform: uppercase;
    }
    .eyebrow {
      margin-top: 12px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: #ff571f;
      line-height: 1.4;
    }
    .rule {
      margin: 16px auto 0;
      width: 48px;
      height: 2px;
      background: #ff571f;
    }
    .copy {
      margin-top: 12px;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.35;
      color: rgba(255,255,255,0.78);
    }
    .rule {
      margin-top: 18px;
      width: 56px;
      height: 2px;
      background: #ff571f;
    }
    .copy {
      margin-top: 14px;
      font-size: 22px;
      font-weight: 400;
      line-height: 1.35;
      color: rgba(255,255,255,0.78);
    }
  </style>
</head>
<body>
  <div id="header">
    <canvas class="stars" width="1500" height="500"></canvas>
    <div class="glow"></div>
    <div class="safe">
      <div class="mark-wrap">${mark}</div>
      <div class="lockup">
        <div class="name">Cortex</div>
        <div class="eyebrow">AI systems for service businesses</div>
        <div class="rule"></div>
        <div class="copy">Monitor · Follow up · Report<br/>On the software you already run</div>
      </div>
    </div>
  </div>
  <script>
    const c = document.querySelector("canvas.stars");
    const ctx = c.getContext("2d");
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * 1500;
      const y = Math.random() * 500;
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255," + (Math.random() * 0.18 + 0.08) + ")";
      ctx.arc(x, y, Math.random() * 1.3 + 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
  </script>
</body>
</html>`;

writeFileSync("/tmp/x-header.html", headerHtml);

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1500, height: 500 }, deviceScaleFactor: 1 });
await page.goto("file:///tmp/x-header.html", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(250);
await page.locator("#header").screenshot({ path: `${OUT_DIR}/x-header-1500x500.png` });

const previewHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #eef0f2; font-family: system-ui, sans-serif; padding: 36px; color: #0f1419; }
    h2 { font-size: 13px; font-weight: 600; color: #536471; margin: 0 0 10px; }
    .stack { display: flex; flex-direction: column; gap: 40px; max-width: 900px; margin: 0 auto; }
    .frame { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 28px rgba(0,0,0,.08); }
    .banner { position: relative; overflow: hidden; background: #050505; }
    .banner img.bg { display: block; width: 100%; height: 100%; object-fit: none; object-position: center center; }
    .desktop .banner { width: 750px; height: 250px; }
    .desktop img.bg { width: 750px; height: 250px; object-fit: fill; }
    .desktop .avatar {
      position: absolute; left: 16px; bottom: -44px;
      width: 90px; height: 90px; border-radius: 50%;
      border: 4px solid #fff; object-fit: cover; background: #050505;
    }
    .mobile { width: 390px; }
    .mobile .banner { width: 390px; height: 130px; }
    .mobile img.bg {
      width: 390px; height: 130px;
      object-fit: none;
      /* simulate ~180px side crop of 1500 → visible 1140×500 */
      object-fit: cover;
      object-position: center center;
    }
    .mobile .avatar {
      position: absolute; left: 12px; bottom: -36px;
      width: 72px; height: 72px; border-radius: 50%;
      border: 3px solid #fff; object-fit: cover; background: #050505;
    }
    .body { padding: 52px 20px 24px; }
    .mobile .body { padding-top: 44px; }
    .name { font-size: 20px; font-weight: 800; }
  </style>
</head>
<body>
  <div class="stack">
    <div>
      <h2>Desktop — 1500×500, profile photo bottom-left</h2>
      <div class="frame desktop">
        <div class="banner">
          <img class="bg" src="file://${OUT_DIR}/x-header-1500x500.png" alt="" />
          <img class="avatar" src="file://${OUT_DIR}/profile-dark-800.png" alt="" />
        </div>
        <div class="body"><div class="name">Cortex</div></div>
      </div>
    </div>
    <div>
      <h2>Mobile — sides cropped, larger photo over the left</h2>
      <div class="frame mobile">
        <div class="banner">
          <img class="bg" src="file://${OUT_DIR}/x-header-1500x500.png" alt="" />
          <img class="avatar" src="file://${OUT_DIR}/profile-dark-800.png" alt="" />
        </div>
        <div class="body"><div class="name">Cortex</div></div>
      </div>
    </div>
  </div>
</body>
</html>`;

writeFileSync("/tmp/x-header-preview.html", previewHtml);
const preview = await browser.newPage({ viewport: { width: 860, height: 820 }, deviceScaleFactor: 1 });
await preview.goto("file:///tmp/x-header-preview.html", { waitUntil: "networkidle" });
await preview.waitForTimeout(200);
await preview.screenshot({ path: `${PREVIEW_DIR}/x-header-preview.png`, fullPage: true });
await browser.close();

spawnSync(
  "python3",
  [
    "-c",
    "from PIL import Image; im=Image.open('/workspace/public/brand/x-header-1500x500.png').convert('RGB'); im.save('/workspace/public/brand/x-header-1500x500.jpg', quality=92, optimize=True)",
  ],
  { stdio: "inherit" },
);

spawnSync("zip", ["-u", "cortex-brand-kit.zip", "x-header-1500x500.png", "x-header-1500x500.jpg"], {
  cwd: OUT_DIR,
  stdio: "inherit",
});
console.log("wrote x header");
