import { useLayoutEffect, useRef, useState } from "react";
import { CortexMark } from "@/components/logo";

const TOOLS = [
  { name: "FieldRoutes", file: "fieldroutes.png", x0: 36, y0: 34, z0: 28, rx: 16, ry: -18, rz: -14 },
  { name: "GoHighLevel", file: "gohighlevel-mark.svg", x0: 62, y0: 38, z0: -18, rx: -12, ry: 16, rz: 10 },
  { name: "QuickBooks", file: "quickbooks.svg", x0: 44, y0: 58, z0: 22, rx: 10, ry: 8, rz: -8 },
  { name: "Meta", file: "meta.svg", x0: 58, y0: 56, z0: -22, rx: -8, ry: -14, rz: 12 },
  { name: "Google Business", file: "gmb.png", x0: 50, y0: 30, z0: 16, rx: 14, ry: 6, rz: -6 },
  { name: "ServiceTitan", file: "servicetitan.png", x0: 34, y0: 50, z0: -12, rx: -10, ry: 12, rz: 8 },
  { name: "Tekmetric", file: "tekmetric.png", x0: 66, y0: 50, z0: 20, rx: 8, ry: -10, rz: -12 },
  { name: "Jobber", file: "jobber.png", x0: 50, y0: 48, z0: 8, rx: -6, ry: 8, rz: 6 },
] as const;

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

    let raf = 0;
    let tracking = false;
    let last = -1;
    const measure = () => {
      setCount(window.innerWidth < 768 ? 6 : 8);
      const r = el.getBoundingClientRect();
      const total = Math.max(el.offsetHeight - window.innerHeight, 1);
      const next = clamp(-r.top / total, 0, 1);
      if (Math.abs(next - last) < 0.002) return;
      last = next;
      setP(next);
    };
    const loop = () => {
      measure();
      if (tracking) raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        tracking = entry.isIntersecting;
        if (tracking) raf = requestAnimationFrame(loop);
        else cancelAnimationFrame(raf);
      },
      { threshold: [0, 0.01, 1] },
    );
    io.observe(el);
    measure();
    window.addEventListener("scroll", measure, { passive: true, capture: true });
    window.addEventListener("resize", measure);
    return () => {
      tracking = false;
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const visible = TOOLS.slice(0, count);
  const radius = count === 6 ? 32 : 34;
  const form = smoothstep((p - 0.08) / 0.7);
  const lines = smoothstep((p - 0.4) / 0.45);
  const core = smoothstep((p - 0.46) / 0.38);
  const tilt = lerp(6, 16, form);
  const spin = lerp(-6, 0, form);

  return (
    <div ref={wrap} className="relative z-20" style={{ height: "220vh" }}>
      <div className="sticky top-16 flex h-[calc(100dvh-4rem)] flex-col bg-bg">
        <div className="mx-auto w-full max-w-3xl shrink-0 px-6 pt-4 text-center md:pt-6">
          <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">Then we connect them</p>
          <h2 className="mt-3 text-balance text-2xl font-medium tracking-tight text-fg md:text-4xl">
            {core > 0.55 ? "Cortex sits in the middle." : "Most operations look like this."}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-light text-fg/60 md:text-base">
            {core > 0.55
              ? "Agents watch the paths between the software you already run."
              : "Different logins. Different systems. People stitching the work together by hand."}
          </p>
        </div>

        <div
          className="relative mx-auto flex min-h-0 w-full max-w-[min(92%,58vh)] flex-1 items-center justify-center px-2 pb-6"
          style={{ perspective: "900px" }}
          onMouseMove={(e) => {
            if (window.matchMedia("(pointer: coarse)").matches) return;
            const r = e.currentTarget.getBoundingClientRect();
            setParx(((e.clientX - r.left) / r.width - 0.5) * 8);
            setPary(((e.clientY - r.top) / r.height - 0.5) * -6);
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
            <div className="holo-grid pointer-events-none absolute inset-[10%] rounded-full" style={{ opacity: 0.1 + form * 0.22 }} />
            <div className="pointer-events-none absolute inset-[14%] rounded-full border border-gold/25" style={{ opacity: lines }} />
            <div
              className="holo-ring pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-gold/30"
              style={{ opacity: 0.2 + core * 0.45 }}
            />

            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
              {visible.map((tool, i) => {
                const end = endPoint(i, visible.length, radius);
                const x = lerp(tool.x0, end.x, form);
                const y = lerp(tool.y0, end.y, form);
                const dx = x - 50;
                const dy = y - 50;
                const len = Math.hypot(dx, dy) || 1;
                const d = `M ${(50 + (dx / len) * 9).toFixed(2)} ${(50 + (dy / len) * 9).toFixed(2)} L ${(50 + (dx / len) * (len - 7)).toFixed(2)} ${(50 + (dy / len) * (len - 7)).toFixed(2)}`;
                const dash = Math.max(len - 16, 1);
                return (
                  <g key={tool.name}>
                    <path
                      d={d}
                      fill="none"
                      stroke="#ff571f"
                      strokeWidth="0.45"
                      strokeLinecap="round"
                      strokeDasharray={dash}
                      strokeDashoffset={dash * (1 - lines)}
                      opacity={0.25 + lines * 0.7}
                    />
                    {lines > 0.6 ? (
                      <circle r="0.75" fill="#ff9a62">
                        <animateMotion dur={`${2.2 + (i % 3) * 0.4}s`} repeatCount="indefinite" path={d} />
                      </circle>
                    ) : null}
                  </g>
                );
              })}
            </svg>

            <div
              className="absolute top-1/2 left-1/2 z-10 flex size-[20%] min-w-14 items-center justify-center rounded-full border border-gold/50 bg-bg shadow-[0_0_50px_-6px_rgb(var(--gold-rgb)/0.85)] md:size-[17%]"
              style={{
                opacity: 0.2 + core * 0.8,
                transform: `translate(-50%, -50%) translateZ(24px) scale(${0.75 + core * 0.25})`,
              }}
            >
              <div className="holo-core-glow pointer-events-none absolute inset-[-18%] rounded-full" />
              <CortexMark className="relative size-[62%]" />
            </div>

            {visible.map((tool, i) => {
              const end = endPoint(i, visible.length, radius);
              const x = lerp(tool.x0, end.x, form);
              const y = lerp(tool.y0, end.y, form);
              const z = lerp(tool.z0, 10, form);
              const rx = lerp(tool.rx, 0, form);
              const ry = lerp(tool.ry, 0, form);
              const rz = lerp(tool.rz, 0, form);
              return (
                <div
                  key={tool.name}
                  className="absolute z-20 flex w-[24%] flex-col items-center sm:w-[18%]"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) translateZ(${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
                  }}
                >
                  <div
                    className="holo-float flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-surface shadow-[0_18px_40px_-18px_black] sm:size-14 md:size-16"
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
                    className="mt-1.5 max-w-full truncate text-center text-[9px] font-medium tracking-wide text-fg/70 sm:text-[11px]"
                    style={{ opacity: 0.45 + lines * 0.55 }}
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
