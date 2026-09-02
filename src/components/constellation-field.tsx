import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const STARS: [number, number, number][] = [
  [80, 70, 1.1],
  [160, 140, 0.8],
  [240, 50, 1.3],
  [320, 200, 0.7],
  [410, 90, 1],
  [500, 160, 0.6],
  [590, 40, 1.2],
  [680, 210, 0.8],
  [760, 80, 1],
  [850, 170, 0.7],
  [940, 60, 1.1],
  [1020, 190, 0.9],
  [110, 280, 0.7],
  [210, 360, 1],
  [330, 300, 0.6],
  [450, 380, 0.9],
  [560, 280, 0.7],
  [670, 350, 1.1],
  [790, 290, 0.6],
  [910, 370, 0.8],
  [1040, 310, 0.7],
  [140, 480, 0.9],
  [280, 520, 0.6],
  [430, 470, 1],
  [600, 530, 0.7],
  [740, 480, 0.8],
  [880, 540, 0.6],
  [1010, 470, 1],
  [180, 620, 0.7],
  [360, 660, 0.9],
  [540, 610, 0.6],
  [720, 650, 0.8],
  [900, 630, 0.7],
  [50, 400, 0.8],
  [1150, 120, 1],
  [1180, 440, 0.7],
];

const NODES: [number, number][] = [
  [980, 160],
  [860, 280],
  [1080, 300],
  [980, 250],
];

const LINES: [number, number, number, number][] = [
  [980, 160, 980, 250],
  [980, 250, 860, 280],
  [980, 250, 1080, 300],
];

export function ConstellationField({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full text-gold", className)}
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {STARS.map(([x, y, r], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={r}
          fill="currentColor"
          className="constellation-star"
          style={{ animationDelay: `${(i % 7) * 0.45}s`, opacity: 0.18 + (i % 5) * 0.06 }}
        />
      ))}
      {LINES.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="constellation-line"
        />
      ))}
      {NODES.map(([x, y], i) => (
        <g key={`${x}-${y}`} className="constellation-node" style={{ animationDelay: `${i * 0.4}s` }}>
          <circle cx={x} cy={y} r="14" fill="currentColor" opacity="0.08" />
          <circle cx={x} cy={y} r="3.4" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function PointerGlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none fixed inset-0", className)}
      style={{
        background:
          "radial-gradient(520px circle at var(--mx, 50%) var(--my, 28%), rgb(var(--gold-rgb) / 0.16), transparent 58%)",
      }}
      aria-hidden
    />
  );
}
