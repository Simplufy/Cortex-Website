const NODES = [
  { name: "ServiceTitan", short: "Titan", file: "servicetitan.png", x: 72, y: 38 },
  { name: "FieldRoutes", short: "Routes", file: "fieldroutes.png", x: 320, y: 28 },
  { name: "GoHighLevel", short: "GHL", file: "gohighlevel-mark.svg", x: 568, y: 38 },
  { name: "Jobber", short: "Jobber", file: "jobber.png", x: 72, y: 120 },
  { name: "Housecall Pro", short: "Housecall", file: "housecallpro.png", x: 320, y: 120 },
  { name: "Podium", short: "Podium", file: "podium.png", x: 568, y: 120 },
  { name: "QuickBooks", short: "QBO", file: "quickbooks.svg", x: 72, y: 202 },
  { name: "Tekmetric", short: "Tekmetric", file: "tekmetric.png", x: 320, y: 212 },
  { name: "Google", short: "Google", file: "gmb.png", x: 568, y: 202 },
] as const;

const LOOP_OUTER =
  "M 72 38 C 160 12 240 12 320 28 C 400 12 480 12 568 38 C 596 70 596 90 568 120 C 596 150 596 170 568 202 C 480 228 400 228 320 212 C 240 228 160 228 72 202 C 44 170 44 150 72 120 C 44 90 44 70 72 38";
const LOOP_DIAG = "M 72 202 C 180 90 320 40 568 38";
const LOOP_CROSS = "M 72 38 C 180 150 320 190 568 202";

const CX = 180;
const CY = 128;
const RX = 122;
const RY = 92;
const RING_IDX = [1, 2, 5, 8, 7, 6, 3, 0] as const;
const MOBILE_NODES = [
  { ...NODES[4], x: CX, y: CY },
  ...RING_IDX.map((idx, n) => {
    const a = ((-90 + n * 45) * Math.PI) / 180;
    return { ...NODES[idx], x: +(CX + RX * Math.cos(a)).toFixed(1), y: +(CY + RY * Math.sin(a)).toFixed(1) };
  }),
];
const MOBILE_RING = `M ${CX} ${CY - RY} A ${RX} ${RY} 0 1 1 ${CX - 0.1} ${CY - RY}`;
const MOBILE_DIAG = `M ${CX - RX} ${CY} C ${CX - 40} ${CY - 36} ${CX + 40} ${CY + 36} ${CX + RX} ${CY}`;
const MOBILE_CROSS = `M ${CX} ${CY - RY} C ${CX + 36} ${CY - 20} ${CX - 36} ${CY + 20} ${CX} ${CY + RY}`;

const AGENTS = [
  { id: "claude", src: "/images/agents/claude-bot.png", label: "JOB", chip: "#d47857" },
  { id: "gemini", src: "/images/agents/gemini-bot.png", label: "LEAD", chip: "#4d8dff" },
  { id: "gpt", src: "/images/agents/gpt-bot.png", label: "INV", chip: "#6aa89c" },
] as const;

type Node = { name: string; short: string; file: string; x: number; y: number };

function AgentStage({
  id,
  w,
  h,
  nodes,
  paths,
  sprite,
}: {
  id: string;
  w: number;
  h: number;
  nodes: readonly Node[];
  paths: readonly [string, string, string];
  sprite: { w: number; h: number };
}) {
  return (
    <div className="relative w-full" style={{ aspectRatio: `${w} / ${h}` }}>
      <svg viewBox={`0 0 ${w} ${h}`} className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <filter id={`${id}-shadow`} x="-40%" y="-20%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#000" floodOpacity="0.55" />
          </filter>
        </defs>
        {AGENTS.map((agent, i) => (
          <g key={agent.id} className="hero-agents-runner" filter={`url(#${id}-shadow)`}>
            <animateMotion
              dur={["28s", "32s", "30s"][i]}
              begin={["0s", "-8s", "-16s"][i]}
              repeatCount="indefinite"
              rotate="0"
              calcMode="linear"
              keyPoints="0;1;1;0;0"
              keyTimes="0;0.38;0.5;0.88;1"
              path={paths[i]}
            />
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -2; 0 0"
                dur="2.8s"
                repeatCount="indefinite"
              />
              <image href={agent.src} x={-sprite.w / 2} y={-sprite.h + 8} width={sprite.w} height={sprite.h} />
              <g transform={`translate(${sprite.w / 2 - 4},${-sprite.h + 10})`}>
                <rect width="26" height="11" rx="2" fill={agent.chip} />
                <text
                  x="13"
                  y="8.2"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="6.6"
                  fontWeight="700"
                  letterSpacing="1.05"
                  className="font-mono"
                >
                  {agent.label}
                </text>
              </g>
            </g>
          </g>
        ))}
      </svg>
      {nodes.map((node, i) => (
        <div
          key={node.name}
          className="pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: `${(node.x / w) * 100}%`, top: `${(node.y / h) * 100}%` }}
        >
          <div
            className="hero-agents-app flex size-8 items-center justify-center rounded-[11px] border border-white/12 bg-[#0c0c0c] shadow-[0_0_18px_rgb(255_87_31/0.12)] sm:size-10"
            style={{ animationDelay: `${(i % 9) * 0.18}s` }}
          >
            <img src={`/images/logos/${node.file}`} alt="" width={28} height={28} className="size-5 object-contain sm:size-6" />
          </div>
          <span className="mt-0.5 font-mono text-[6px] tracking-[0.14em] text-fg/40 uppercase sm:mt-1 sm:text-[7px]">
            {node.short}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroAgents() {
  return (
    <div className="hero-agents animate-fade-up relative mx-auto mb-4 w-full sm:mb-7 sm:max-w-xl md:max-w-2xl" aria-hidden>
      <div className="sm:hidden">
        <AgentStage
          id="m"
          w={360}
          h={250}
          nodes={MOBILE_NODES}
          paths={[MOBILE_RING, MOBILE_DIAG, MOBILE_CROSS]}
          sprite={{ w: 40, h: 54 }}
        />
      </div>
      <div className="hidden sm:block">
        <AgentStage
          id="d"
          w={640}
          h={240}
          nodes={NODES}
          paths={[LOOP_OUTER, LOOP_DIAG, LOOP_CROSS]}
          sprite={{ w: 42, h: 56 }}
        />
      </div>
    </div>
  );
}
