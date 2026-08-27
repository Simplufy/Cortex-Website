import { cn } from "@/lib/utils";

const MAPS: { nodes: { x: number; y: number; label: string }[]; edges: [number, number][] }[] = [
  {
    nodes: [
      { x: 12, y: 42, label: "Call" },
      { x: 28, y: 22, label: "Write-up" },
      { x: 46, y: 18, label: "Approve" },
      { x: 64, y: 22, label: "Parts" },
      { x: 82, y: 38, label: "Bay" },
      { x: 70, y: 62, label: "QC" },
      { x: 48, y: 72, label: "Invoice" },
      { x: 26, y: 66, label: "Follow-up" },
      { x: 50, y: 44, label: "Cortex" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [8, 1],
      [8, 3],
      [8, 4],
      [8, 6],
    ],
  },
  {
    nodes: [
      { x: 14, y: 30, label: "Intake" },
      { x: 32, y: 18, label: "Dispatch" },
      { x: 54, y: 16, label: "Membership" },
      { x: 76, y: 28, label: "Install" },
      { x: 84, y: 54, label: "Start-up" },
      { x: 62, y: 72, label: "Warranty" },
      { x: 36, y: 70, label: "Callback" },
      { x: 18, y: 54, label: "Capacity" },
      { x: 48, y: 44, label: "Cortex" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [7, 1],
      [8, 1],
      [8, 2],
      [8, 3],
      [8, 5],
    ],
  },
  {
    nodes: [
      { x: 16, y: 24, label: "Call" },
      { x: 38, y: 16, label: "Emergency" },
      { x: 62, y: 16, label: "Booked" },
      { x: 84, y: 32, label: "On-call" },
      { x: 78, y: 58, label: "Price book" },
      { x: 52, y: 76, label: "Complete" },
      { x: 26, y: 64, label: "Invoice" },
      { x: 48, y: 44, label: "Cortex" },
    ],
    edges: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
      [2, 4],
      [4, 5],
      [5, 6],
      [7, 1],
      [7, 2],
      [7, 4],
      [7, 5],
    ],
  },
  {
    nodes: [
      { x: 14, y: 36, label: "Survey" },
      { x: 32, y: 18, label: "Estimate" },
      { x: 54, y: 16, label: "Won" },
      { x: 74, y: 28, label: "Permit" },
      { x: 86, y: 52, label: "Material" },
      { x: 68, y: 74, label: "Change order" },
      { x: 40, y: 72, label: "Inspect" },
      { x: 20, y: 58, label: "Close" },
      { x: 50, y: 44, label: "Cortex" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [8, 1],
      [8, 3],
      [8, 5],
      [8, 6],
    ],
  },
  {
    nodes: [
      { x: 14, y: 28, label: "Lead" },
      { x: 34, y: 16, label: "Adjuster" },
      { x: 56, y: 16, label: "Funded" },
      { x: 78, y: 28, label: "Produce" },
      { x: 86, y: 54, label: "Dry-in" },
      { x: 68, y: 74, label: "Final" },
      { x: 42, y: 74, label: "Collect" },
      { x: 20, y: 54, label: "File" },
      { x: 50, y: 44, label: "Cortex" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [8, 0],
      [8, 2],
      [8, 3],
      [8, 6],
    ],
  },
];

export function CortexMap({ variant = 0, className }: { variant?: number; className?: string }) {
  const map = MAPS[variant % MAPS.length];
  return (
    <div className={cn("relative aspect-video overflow-hidden bg-bg", className)}>
      <svg viewBox="0 0 100 90" className="h-full w-full" aria-hidden>
        {map.edges.map(([a, b], i) => (
          <line
            key={i}
            x1={map.nodes[a].x}
            y1={map.nodes[a].y}
            x2={map.nodes[b].x}
            y2={map.nodes[b].y}
            stroke="currentColor"
            className="text-gold/35"
            strokeWidth="0.35"
          />
        ))}
        {map.nodes.map((n, i) => {
          const core = n.label === "Cortex";
          return (
            <g key={n.label}>
              <circle
                cx={n.x}
                cy={n.y}
                r={core ? 4.2 : 2.1}
                className={core ? "fill-gold" : "fill-gold/80"}
              />
              <text
                x={n.x}
                y={n.y + (core ? 8.5 : 6.2)}
                textAnchor="middle"
                className="fill-fg"
                style={{ fontSize: core ? 3.2 : 2.6, fontWeight: core ? 600 : 400 }}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function OsDashboard() {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-fg/10 bg-elevated p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Today</p>
          <p className="text-sm font-medium text-fg">Operations board</p>
        </div>
        <span className="rounded-full border border-gold/30 px-2.5 py-1 text-[10px] text-gold">Live</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Jobs in motion", "42"],
          ["Waiting on a yes", "9"],
          ["Done, not billed", "6"],
        ].map(([l, n]) => (
          <div key={l} className="rounded-xl border border-fg/10 bg-surface p-3">
            <div className="text-2xl font-medium text-fg">{n}</div>
            <div className="mt-1 text-[10px] tracking-wide text-fg/45 uppercase">{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {["North crew · panel upgrade", "Route 4 · membership visits", "Bay 2 · waiting on parts"].map((row, i) => (
          <div key={row} className="flex items-center justify-between rounded-lg border border-fg/8 bg-bg/60 px-3 py-2">
            <span className="text-xs text-fg/70">{row}</span>
            <span className={cn("size-1.5 rounded-full", i === 1 ? "bg-gold" : "bg-fg/30")} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function OsCharts() {
  const bars = [42, 58, 51, 73, 66, 84, 78];
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-fg/10 bg-elevated p-4 sm:p-6">
      <p className="text-[10px] font-bold tracking-widest text-gold uppercase">This week</p>
      <p className="mb-6 text-sm font-medium text-fg">Cycle time vs last week</p>
      <div className="flex h-32 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm bg-gold/80" style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {[
          ["Close rate", "61%"],
          ["Callbacks", "4.2%"],
          ["Util.", "87%"],
        ].map(([l, n]) => (
          <div key={l}>
            <div className="text-lg font-medium text-fg">{n}</div>
            <div className="text-[10px] text-fg/40 uppercase">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OsCards() {
  const cards = [
    ["Price book", "Owned by ops"],
    ["Memberships", "Self-scheduling"],
    ["Permits", "On the job file"],
    ["Handoffs", "No dropped balls"],
  ];
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-fg/10 bg-elevated p-4 sm:p-6">
      <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">The fabric</p>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(([t, b]) => (
          <div key={t} className="rounded-xl border border-fg/10 bg-surface p-4">
            <div className="text-sm font-medium text-fg">{t}</div>
            <div className="mt-1 text-xs text-fg/45">{b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
