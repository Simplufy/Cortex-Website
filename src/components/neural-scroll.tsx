import { useLayoutEffect, useRef, useState } from "react";
import { CortexMark } from "@/components/logo";

const TOOLS = [
  { name: "FieldRoutes", file: "fieldroutes.png", x0: 12, y0: 18, z0: 140, rx: 48, ry: -36, rz: -28 },
  { name: "GoHighLevel", file: "gohighlevel-mark.svg", x0: 88, y0: 14, z0: -90, rx: -32, ry: 44, rz: 22 },
  { name: "QuickBooks", file: "quickbooks.svg", x0: 8, y0: 72, z0: 70, rx: 22, ry: 18, rz: -14 },
  { name: "Meta", file: "meta.svg", x0: 92, y0: 68, z0: -130, rx: -18, ry: -50, rz: 30 },
  { name: "Google Business", file: "gmb.png", x0: 50, y0: 6, z0: 110, rx: 36, ry: 12, rz: -8 },
  { name: "ServiceTitan", file: "servicetitan.png", x0: 22, y0: 92, z0: -60, rx: -40, ry: 28, rz: 16 },
  { name: "Tekmetric", file: "tekmetric.png", x0: 78, y0: 90, z0: 160, rx: 14, ry: -22, rz: -34 },
  { name: "Jobber", file: "jobber.png", x0: 70, y0: 42, z0: -40, rx: -26, ry: 38, rz: 10 },
] as const;

const DUST = [
  { x0: 20, y0: 30, z0: 80, x1: 28, y1: 22 },
  { x0: 80, y0: 24, z0: -70, x1: 74, y1: 30 },
  { x0: 15, y0: 70, z0: 40, x1: 32, y1: 76 },
  { x0: 86, y0: 78, z0: -50, x1: 70, y1: 72 },
  { x0: 48, y0: 18, z0: 100, x1: 44, y1: 38 },
  { x0: 60, y0: 86, z0: -90, x1: 58, y1: 70 },
];

function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n));
}

function smoothstep(t: number) {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function endPoint(i: number, n: number, radius: number) {
  const a = ((-90 + (i * 360) / n) * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(a), y: 50 + radius * Math.sin(a) };
}

export function NeuralScroll() {
  const wrap = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [count, setCount] = useState(8);
  const [parx, setParx] = useState(0);
  const [pary, setPary] = useState(0);

  useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }

    let frame = 0;
    const measure = () => {
      setCount(window.innerWidth < 768 ? 6 : 8);
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      setP(total <= 0 ? 1 : clamp(-r.top / total, 0, 1));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const visible = TOOLS.slice(0, count);
  const radius = count === 6 ? 34 : 37;
  const form = smoothstep((p - 0.04) / 0.72);
  const lines = smoothstep((p - 0.38) / 0.48);
  const core = smoothstep((p - 0.42) / 0.4);
  const tilt = lerp(8, 22, form);
  const spin = lerp(-10, 0, form);

  return (
    <div ref={wrap} className="relative" style={{ height: "220vh" }}>
      <div className="sticky top-16 z-10 flex h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-bg">
        <div className="mx-auto w-full max-w-3xl shrink-0 px-6 pt-4 text-center md:pt-7">
          <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">Connect your tools</p>
          <h2 className="mt-3 text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
            {core > 0.55 ? "Then Cortex sits in the middle." : "Most operations look like this."}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-light text-fg/60 md:text-base">
            {core > 0.55
              ? "Agents watch the paths between the software you already run."
              : "Different logins. Different systems. People stitching the work together by hand."}
          </p>
        </div>

        <div
          ref={stage}
          className="relative mx-auto flex min-h-0 w-full max-w-[min(100%,68vh)] flex-1 items-center justify-center px-2 pb-6"
          style={{ perspective: "1100px" }}
          onMouseMove={(e) => {
            if (window.matchMedia("(pointer: coarse)").matches) return;
            const r = e.currentTarget.getBoundingClientRect();
            setParx(((e.clientX - r.left) / r.width - 0.5) * 10);
            setPary(((e.clientY - r.top) / r.height - 0.5) * -7);
          }}
          onMouseLeave={() => {
            setParx(0);
            setPary(0);
          }}
        >
          <div
            className="holo-world relative aspect-square w-full max-h-full"
            style={{
              transform: `rotateX(${tilt + pary}deg) rotateY(${parx}deg) rotateZ(${spin}deg)`,
            }}
          >
            <div className="holo-grid pointer-events-none absolute inset-[8%] rounded-full" style={{ opacity: 0.08 + form * 0.22 }} />
            <div
              className="pointer-events-none absolute inset-[12%] rounded-full border border-gold/20"
              style={{ opacity: lines, transform: "translateZ(0px)" }}
            />
            <div
              className="holo-ring pointer-events-none absolute inset-[4%] rounded-full border border-dashed border-gold/30"
              style={{ opacity: 0.15 + core * 0.45 }}
            />

            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              {visible.map((tool, i) => {
                const end = endPoint(i, visible.length, radius);
                const x = lerp(tool.x0, end.x, form);
                const y = lerp(tool.y0, end.y, form);
                const dx = x - 50;
                const dy = y - 50;
                const len = Math.hypot(dx, dy) || 1;
                const d = `M ${(50 + (dx / len) * 9).toFixed(2)} ${(50 + (dy / len) * 9).toFixed(2)} L ${(50 + (dx / len) * (len - 8)).toFixed(2)} ${(50 + (dy / len) * (len - 8)).toFixed(2)}`;
                const dash = Math.max(len - 17, 1);
                return (
                  <g key={tool.name}>
                    <path
                      d={d}
                      fill="none"
                      stroke="#ff571f"
                      strokeWidth="0.4"
                      strokeLinecap="round"
                      strokeDasharray={dash}
                      strokeDashoffset={dash * (1 - lines)}
                      opacity={0.2 + lines * 0.75}
                    />
                    {lines > 0.55 ? (
                      <circle r="0.7" fill="#ff9a62">
                        <animateMotion dur={`${2.2 + (i % 3) * 0.4}s`} repeatCount="indefinite" path={d} />
                      </circle>
                    ) : null}
                  </g>
                );
              })}
            </svg>

            <div
              className="absolute top-1/2 left-1/2 flex size-[19%] min-w-14 items-center justify-center rounded-full border border-gold/50 bg-bg/90 shadow-[0_0_50px_-6px_rgb(var(--gold-rgb)/0.85)] md:size-[17%]"
              style={{
                opacity: 0.1 + core * 0.9,
                transform: `translate(-50%, -50%) translateZ(${lerp(-40, 48, core)}px) scale(${0.7 + core * 0.3})`,
              }}
            >
              <div className="holo-core-glow pointer-events-none absolute inset-[-18%] rounded-full" />
              <CortexMark className="relative size-[62%]" />
            </div>

            {DUST.map((d, i) => (
              <span
                key={i}
                className="pointer-events-none absolute size-1.5 rounded-full bg-gold/70"
                style={{
                  left: `${lerp(d.x0, d.x1, form)}%`,
                  top: `${lerp(d.y0, d.y1, form)}%`,
                  transform: `translate(-50%, -50%) translateZ(${lerp(d.z0, 20, form)}px)`,
                  opacity: 0.25 + form * 0.5,
                  boxShadow: "0 0 10px rgb(255 87 31 / 0.8)",
                }}
              />
            ))}

            {visible.map((tool, i) => {
              const end = endPoint(i, visible.length, radius);
              const x = lerp(tool.x0, end.x, form);
              const y = lerp(tool.y0, end.y, form);
              const z = lerp(tool.z0, 12, form);
              const rx = lerp(tool.rx, 0, form);
              const ry = lerp(tool.ry, 0, form);
              const rz = lerp(tool.rz, 0, form);
              return (
                <div
                  key={tool.name}
                  className="absolute flex w-[23%] flex-col items-center sm:w-[18%]"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) translateZ(${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
                  }}
                >
                  <div
                    className="holo-float flex size-12 items-center justify-center rounded-2xl border border-gold/25 bg-surface/90 shadow-[0_18px_40px_-18px_black] backdrop-blur-sm sm:size-14 md:size-16"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  >
                    <img
                      src={`/images/logos/${tool.file}`}
                      alt={tool.name}
                      width={36}
                      height={36}
                      className="size-6 object-contain sm:size-8"
                    />
                  </div>
                  <span
                    className="mt-1.5 max-w-full truncate text-center text-[9px] font-medium tracking-wide text-fg/60 sm:text-[11px]"
                    style={{ opacity: 0.2 + lines * 0.8, transform: "translateZ(8px)" }}
                  >
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
