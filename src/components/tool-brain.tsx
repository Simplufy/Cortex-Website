const CX = 660;
const CY = 470;
const VIEW_W = 1320;
const VIEW_H = 960;
const LOGO_R = 420;
const CHIP_R = 44;
const MARK = 10;

const TOOLS = [
  { name: "FieldRoutes", file: "fieldroutes.png", angle: -90 },
  { name: "GoHighLevel", file: "gohighlevel-mark.svg", angle: -18 },
  { name: "QuickBooks", file: "quickbooks.svg", angle: 54 },
  { name: "Meta", file: "meta.svg", angle: 126 },
  { name: "Google Business", file: "gmb.png", angle: 198 },
] as const;

function polar(angle: number, r: number) {
  const a = (angle * Math.PI) / 180;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

function markPt(x: number, y: number) {
  return { x: CX + (x - 16) * MARK, y: CY + (y - 16.5) * MARK };
}

const TOP = markPt(16, 7.5);
const BL = markPt(7.2, 22.5);
const BR = markPt(24.8, 22.5);
const CORE = { x: CX, y: CY };
const CORE_R = 2.15 * MARK + 3;
const OUTER_R = 3.1 * MARK;

function spokePath(angle: number) {
  const start = polar(angle, LOGO_R - CHIP_R);
  const end = polar(angle, CORE_R);
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} L ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

export function ToolBrain() {
  return (
    <div className="relative mx-auto w-full max-w-6xl" style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <defs>
          <filter id="brain-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="brain-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff571f" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#ff571f" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#ff571f" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r="150" fill="url(#brain-core)" className="brain-core-wash" />

        {TOOLS.map((tool) => {
          const d = spokePath(tool.angle);
          return (
            <g key={tool.name}>
              <path d={d} fill="none" stroke="#ff571f" strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
              <path d={d} fill="none" stroke="#ff9a62" strokeWidth="2" strokeLinecap="round" className="brain-flow-line" />
              <circle r="3.4" fill="#ff571f" filter="url(#brain-glow)" className="brain-packet">
                <animateMotion dur="2.8s" repeatCount="indefinite" path={d} />
              </circle>
              <circle r="2.2" fill="#ff9a62" className="brain-packet">
                <animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite" path={d} />
              </circle>
            </g>
          );
        })}

        <path
          d={`M ${TOP.x} ${TOP.y} L ${CORE.x} ${CORE.y} M ${BL.x} ${BL.y} L ${CORE.x} ${CORE.y} M ${BR.x} ${BR.y} L ${CORE.x} ${CORE.y}`}
          fill="none"
          stroke="#ff571f"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <circle cx={TOP.x} cy={TOP.y} r={OUTER_R} fill="#ff571f" filter="url(#brain-glow)" />
        <circle cx={BL.x} cy={BL.y} r={OUTER_R} fill="#ff571f" filter="url(#brain-glow)" />
        <circle cx={BR.x} cy={BR.y} r={OUTER_R} fill="#ff571f" filter="url(#brain-glow)" />
        <circle cx={CORE.x} cy={CORE.y} r={2.15 * MARK} fill="#ff571f" />
        <text
          x={CX}
          y={CY + 6 * MARK + 36}
          textAnchor="middle"
          fill="#ff571f"
          fontSize="18"
          fontWeight="700"
          letterSpacing="6"
        >
          CORTEX
        </text>
      </svg>

      {TOOLS.map((tool) => {
        const p = polar(tool.angle, LOGO_R);
        return (
          <div
            key={tool.name}
            className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:w-28"
            style={{ left: `${(p.x / VIEW_W) * 100}%`, top: `${(p.y / VIEW_H) * 100}%` }}
          >
            <div className="flex size-14 items-center justify-center rounded-2xl border border-gold/30 bg-surface/90 shadow-[0_0_24px_-12px_rgb(var(--gold-rgb)/0.8)] backdrop-blur-sm sm:size-16">
              <img src={`/images/logos/${tool.file}`} alt="" width={36} height={36} className="size-8 object-contain sm:size-9" />
            </div>
            <span className="mt-2 text-center text-[10px] leading-tight font-medium tracking-wide text-fg/70 sm:text-xs">
              {tool.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
