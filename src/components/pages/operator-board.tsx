const VARIANTS = {
  "detail-driven": {
    operation: "Detail Driven",
    nav: ["Command", "Repair", "Collision", "Detailing", "Glass", "Money", "Demand"],
    exceptions: [
      { shop: "Repair", source: "Tekmetric", label: "Aging repair orders" },
      { shop: "Collision", source: "CCC ONE", label: "Quiet files" },
      { shop: "Detailing", source: "Bookings", label: "Unconfirmed appointments" },
      { shop: "Finance", source: "QuickBooks", label: "Unbilled completed work" },
    ],
    feeds:
      "Feeds from Tekmetric, CCC ONE, GoHighLevel, QuickBooks, Stripe, Google Ads, Meta, GA4, and Google Business Profile. Least privilege. Not a master login.",
  },
  operator: {
    operation: "Operator",
    nav: ["Command", "Operations", "Money", "Demand", "Shops"],
    exceptions: [
      { shop: "Operations", source: "Field software", label: "Aging jobs" },
      { shop: "Sales", source: "CRM", label: "Unsold estimates" },
      { shop: "Finance", source: "QuickBooks", label: "Unbilled completed work" },
      { shop: "Marketing", source: "Ads", label: "Spend vs booked" },
    ],
    feeds:
      "Feeds from CRM, field software, books, ads, and reviews. Least privilege. Not a master login.",
  },
} as const;

const PANES = [
  { kicker: "Operations", rows: ["Board load", "Stalled work", "Capacity exceptions"] },
  { kicker: "Finance", rows: ["Unbilled work", "A/R aging", "Memberships"] },
  { kicker: "Marketing", rows: ["Spend vs booked", "Reviews", "Lead sources"] },
] as const;

const POINTS = [
  {
    title: "One board",
    body: "Operations, marketing, finance, and the shops. Exceptions and numbers from the stack you already pay for.",
  },
  {
    title: "Least privilege",
    body: "Each view and each agent gets the systems it needs. Not a master login to the company.",
  },
  {
    title: "Systems stay",
    body: "Shop software, CRM, books, ads remain the system of record. The dashboard reads them. It does not replace them.",
  },
] as const;

export function OperatorBoard({ variant = "detail-driven" }: { variant?: keyof typeof VARIANTS }) {
  const v = VARIANTS[variant];
  return (
    <div className="overflow-hidden rounded-2xl border border-fg/10 bg-elevated">
      <div className="flex items-center justify-between gap-3 border-b border-fg/10 px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="size-1.5 shrink-0 rounded-full bg-gold" />
          <p className="truncate text-xs font-medium tracking-wide text-fg">
            Cortex <span className="text-fg/35">/</span> {v.operation}
          </p>
        </div>
        <p className="shrink-0 text-[10px] font-bold tracking-widest text-gold uppercase">Private</p>
      </div>

      <div className="flex flex-nowrap gap-1 overflow-x-auto border-b border-fg/10 px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {v.nav.map((item, i) => (
          <span
            key={item}
            className={
              i === 0
                ? "shrink-0 rounded-md bg-gold/15 px-2.5 py-1 text-xs font-medium text-gold"
                : "shrink-0 rounded-md px-2.5 py-1 text-xs text-fg/45"
            }
          >
            {item}
          </span>
        ))}
      </div>

      <div className="grid gap-3 p-4 sm:p-5 md:grid-cols-3">
        <div className="rounded-xl border border-fg/10 bg-surface p-4 md:col-span-3">
          <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Exceptions today</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {v.exceptions.map((row) => (
              <li key={row.label} className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-fg/85">{row.label}</span>
                <span className="shrink-0 text-xs text-fg/35">
                  {row.shop} · {row.source}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {PANES.map((pane) => (
          <div key={pane.kicker} className="rounded-xl border border-fg/10 bg-surface p-4">
            <p className="text-[10px] font-bold tracking-widest text-gold uppercase">{pane.kicker}</p>
            <ul className="mt-3 space-y-2">
              {pane.rows.map((row) => (
                <li key={row} className="flex items-center gap-2 text-sm text-fg/70">
                  <span className="size-1 shrink-0 rounded-full bg-fg/25" />
                  {row}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="border-t border-fg/10 px-4 py-3 text-xs leading-relaxed text-fg/40 sm:px-5">{v.feeds}</p>
    </div>
  );
}

export function DashboardShowcase() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <OperatorBoard variant="operator" />
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {POINTS.map((row) => (
          <li key={row.title} className="rounded-xl border border-fg/10 bg-surface p-5">
            <div className="text-sm font-medium text-fg">{row.title}</div>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{row.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
