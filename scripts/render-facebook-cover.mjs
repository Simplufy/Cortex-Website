#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { spawnSync } from "node:child_process";

const OUT_DIR = "/workspace/public/brand";
const PREVIEW_DIR = "/workspace/screenshots";
mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(PREVIEW_DIR, { recursive: true });

const coverHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { background: #050505; }
    #cover {
      width: 1640px;
      height: 624px;
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
      top: 70px;
      width: 780px;
      height: 160px;
      transform: translateX(-50%);
      background: radial-gradient(ellipse at center, rgba(255,87,31,0.18) 0%, rgba(255,87,31,0) 70%);
      pointer-events: none;
    }
    .top {
      position: absolute;
      top: 10px;
      left: 120px;
      right: 120px;
      text-align: center;
    }
    .name {
      font-size: 82px;
      font-weight: 500;
      letter-spacing: 0.32em;
      line-height: 1;
      text-transform: uppercase;
    }
    .sides {
      position: absolute;
      left: 64px;
      right: 64px;
      top: 290px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .col {
      width: 460px;
    }
    .col.right { text-align: right; }
    .kicker {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.34em;
      text-transform: uppercase;
      color: #ff571f;
      margin-bottom: 16px;
    }
    .copy {
      font-size: 34px;
      font-weight: 400;
      line-height: 1.28;
      color: rgba(255,255,255,0.82);
    }
    .mark {
      position: absolute;
      width: 44px;
      height: 44px;
      opacity: 0.95;
    }
    .mark.left { top: 20px; left: 48px; }
    .mark.right { top: 20px; right: 48px; }
  </style>
</head>
<body>
  <div id="cover">
    <canvas class="stars" width="1640" height="624"></canvas>
    <div class="glow"></div>
    <svg class="mark left" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="7.5" r="3.1" fill="#ff571f"/>
      <circle cx="7.2" cy="22.5" r="3.1" fill="#ff571f"/>
      <circle cx="24.8" cy="22.5" r="3.1" fill="#ff571f"/>
      <circle cx="16" cy="16.5" r="2.15" fill="#ff571f"/>
      <path d="M16 10.6 L16 14.35 M13.85 15.55 L9.55 20.55 M18.15 15.55 L22.45 20.55" stroke="#ff571f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>
    <svg class="mark right" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="7.5" r="3.1" fill="#ff571f"/>
      <circle cx="7.2" cy="22.5" r="3.1" fill="#ff571f"/>
      <circle cx="24.8" cy="22.5" r="3.1" fill="#ff571f"/>
      <circle cx="16" cy="16.5" r="2.15" fill="#ff571f"/>
      <path d="M16 10.6 L16 14.35 M13.85 15.55 L9.55 20.55 M18.15 15.55 L22.45 20.55" stroke="#ff571f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>
    <div class="top">
      <div class="name">Cortex</div>
    </div>
    <div class="sides">
      <div class="col">
        <div class="kicker">What agents do</div>
        <div class="copy">Monitor work. Follow up.<br/>Build reports.</div>
      </div>
      <div class="col right">
        <div class="kicker">On your stack</div>
        <div class="copy">Catch problems.<br/>On software you already run.</div>
      </div>
    </div>
  </div>
  <script>
    const c = document.querySelector("canvas.stars");
    const ctx = c.getContext("2d");
    const dots = [
      [120, 90, 1.2], [210, 40, 0.8], [340, 120, 1], [480, 28, 0.7],
      [620, 80, 0.9], [780, 36, 1.1], [910, 110, 0.7], [1040, 48, 0.9],
      [1180, 96, 1], [1320, 32, 0.8], [1460, 88, 1.1], [1540, 160, 0.7],
      [80, 200, 0.7], [260, 180, 0.6], [400, 220, 0.8], [1280, 200, 0.7],
      [1500, 240, 0.9], [90, 420, 0.8], [180, 510, 0.7], [300, 470, 0.6],
      [1380, 460, 0.8], [1520, 520, 0.9], [1460, 400, 0.6], [70, 560, 0.7],
      [540, 500, 0.5], [1100, 510, 0.5], [980, 560, 0.6], [720, 40, 0.6],
    ];
    for (const [x, y, r] of dots) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  </script>
</body>
</html>`;

const coverPath = "/tmp/facebook-cover.html";
writeFileSync(coverPath, coverHtml);

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1640, height: 624 }, deviceScaleFactor: 1 });
await page.goto("file://" + coverPath, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);
await page.locator("#cover").screenshot({ path: `${OUT_DIR}/facebook-cover-1640x624.png` });

const previewHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #eef0f2; font-family: system-ui, sans-serif; padding: 40px; }
    .row { display: flex; gap: 40px; align-items: flex-start; justify-content: center; }
    .frame { background: #fff; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,.08); overflow: hidden; }
    .label { font-size: 13px; color: #65676b; margin-bottom: 10px; font-weight: 600; }
    .desktop { width: 820px; }
    .mobile { width: 390px; }
    .cover { position: relative; background: #050505; overflow: hidden; }
    .desktop .cover { height: 312px; }
    .mobile .cover { height: 148px; }
    .cover img.bg { width: 100%; height: 100%; object-fit: cover; object-position: center center; display: block; }
    .avatar {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      border: 4px solid #fff;
      object-fit: cover;
      background: #050505;
      box-shadow: 0 0 0 1px rgba(0,0,0,.08);
    }
    .desktop .avatar { width: 168px; height: 168px; bottom: -44px; }
    .mobile .avatar { width: 100px; height: 100px; bottom: -16px; }
    .body { padding: 56px 20px 28px; text-align: center; }
    .mobile .body { padding-top: 76px; }
    .name { font-size: 28px; font-weight: 700; }
    .mobile .name { font-size: 22px; }
    .bio { margin-top: 8px; color: #65676b; font-size: 14px; line-height: 1.4; }
  </style>
</head>
<body>
  <div class="row">
    <div>
      <div class="label">Desktop · 820×312 crop + profile photo</div>
      <div class="frame desktop">
        <div class="cover">
          <img class="bg" src="file://${OUT_DIR}/facebook-cover-1640x624.png" alt="" />
          <img class="avatar" src="file://${OUT_DIR}/profile-dark-800.png" alt="" />
        </div>
        <div class="body">
          <div class="name">Cortex AI</div>
          <div class="bio">Profile photo sits in the center gap.</div>
        </div>
      </div>
    </div>
    <div>
      <div class="label">Mobile · tighter crop + larger photo</div>
      <div class="frame mobile">
        <div class="cover">
          <img class="bg" src="file://${OUT_DIR}/facebook-cover-1640x624.png" alt="" />
          <img class="avatar" src="file://${OUT_DIR}/profile-dark-800.png" alt="" />
        </div>
        <div class="body">
          <div class="name">Cortex AI</div>
          <div class="bio">Name above. Copy on the sides.</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const previewPath = "/tmp/facebook-cover-preview.html";
writeFileSync(previewPath, previewHtml);
const preview = await browser.newPage({ viewport: { width: 1400, height: 720 }, deviceScaleFactor: 1 });
await preview.goto("file://" + previewPath, { waitUntil: "networkidle" });
await preview.waitForTimeout(150);
await preview.screenshot({ path: `${PREVIEW_DIR}/facebook-cover-preview.png`, fullPage: true });
await browser.close();

spawnSync(
  "python3",
  [
    "-c",
    "from PIL import Image; im=Image.open('/workspace/public/brand/facebook-cover-1640x624.png').convert('RGB'); im.save('/workspace/public/brand/facebook-cover-1640x624.jpg', quality=92, optimize=True)",
  ],
  { stdio: "inherit" },
);

spawnSync("zip", ["-u", "cortex-brand-kit.zip", "facebook-cover-1640x624.png", "facebook-cover-1640x624.jpg"], {
  cwd: OUT_DIR,
  stdio: "inherit",
});

console.log("wrote facebook cover + preview");
