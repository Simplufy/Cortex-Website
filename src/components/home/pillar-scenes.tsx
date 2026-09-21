import { cn } from "@/lib/utils";

function AgentOrb({ className }: { className?: string }) {
  return (
    <span className={cn("scene-orb", className)} aria-hidden>
      <span className="scene-orb-core" />
    </span>
  );
}

export function GetWorkScene() {
  return (
    <div className="scene scene-get" aria-hidden>
      <div className="scene-grid" />
      <article className="scene-card scene-gbp">
        <div className="flex items-center gap-3">
          <img src="/images/logos/google.png" alt="" className="size-7 rounded-full" />
          <div>
            <p className="text-[13px] font-semibold text-fg">Bluewater Plumbing</p>
            <p className="text-[11px] text-fg/45">Google Business Profile</p>
          </div>
          <span className="ml-auto rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Open</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px]">
          <span className="font-semibold text-fg">4.9</span>
          <span className="scene-stars">★★★★★</span>
          <span className="text-fg/40">128 reviews</span>
        </div>
        <div className="scene-posts mt-4 space-y-2">
          {[
            ["Just wrapped a water heater swap on Maple.", "2m"],
            ["Drain camera on 12th. Before / after in the gallery.", "1h"],
            ["Same-week membership slots opened for Friday.", "Yesterday"],
          ].map(([t, d]) => (
            <div key={t} className="scene-post rounded-xl border border-fg/8 bg-bg px-3 py-2">
              <p className="text-[12px] leading-snug text-fg/80">{t}</p>
              <p className="mt-1 text-[10px] text-fg/35">{d}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="scene-card scene-composer">
        <p className="text-[10px] font-medium tracking-wide text-gold uppercase">Agent drafting</p>
        <p className="scene-type mt-2 text-[13px] leading-relaxed text-fg">
          Job recap ready for GBP and Facebook.
        </p>
        <div className="mt-3 flex gap-1.5">
          <span className="rounded-full bg-fg/5 px-2 py-1 text-[10px] text-fg/55">GBP</span>
          <span className="rounded-full bg-fg/5 px-2 py-1 text-[10px] text-fg/55">Facebook</span>
          <span className="rounded-full bg-gold/12 px-2 py-1 text-[10px] text-gold">Publish</span>
        </div>
      </article>
      <article className="scene-card scene-review">
        <p className="text-[11px] font-medium text-fg">New 5-star review</p>
        <p className="mt-1 text-[12px] leading-snug text-fg/55">“On time. Explained the leak. Sent the invoice before they left.”</p>
        <p className="mt-2 text-[10px] text-fg/35">Maria K. · asked automatically</p>
      </article>
      <AgentOrb className="scene-orb-a" />
      <AgentOrb className="scene-orb-b" />
    </div>
  );
}

export function WinWorkScene() {
  return (
    <div className="scene scene-win" aria-hidden>
      <div className="scene-grid" />
      <article className="scene-phone">
        <div className="scene-phone-bar" />
        <div className="scene-missed">
          <p className="text-[10px] font-medium text-gold uppercase">Missed call</p>
          <p className="text-[13px] font-semibold text-fg">(614) 555-0192</p>
          <p className="text-[11px] text-fg/45">Web lead · drain backup</p>
        </div>
        <div className="scene-thread">
          <div className="scene-bubble in">Hey, can someone look at a backup on Oak St today?</div>
          <div className="scene-bubble out">Got it. Two slots left after 2. Want 2:30 or 4?</div>
          <div className="scene-bubble in">2:30 works.</div>
          <div className="scene-typing">
            <span /><span /><span />
          </div>
        </div>
      </article>
      <article className="scene-card scene-crm">
        <div className="flex items-center gap-2">
          <img src="/images/logos/gohighlevel-mark.svg" alt="" className="size-5" />
          <p className="text-[12px] font-semibold text-fg">CRM · Oak St drain</p>
        </div>
        <div className="scene-pipeline mt-4">
          {["New", "Qualified", "Booked"].map((s) => (
            <div key={s} className="scene-step" data-step={s.toLowerCase()}>
              <span className="scene-dot" />
              {s}
            </div>
          ))}
        </div>
        <p className="scene-timer mt-4 font-mono text-[11px] text-gold">First response 00:11</p>
        <p className="mt-1 text-[11px] text-fg/45">You stay in the loop. Agent sent the first text.</p>
      </article>
      <AgentOrb className="scene-orb-c" />
    </div>
  );
}

export function RunShopScene() {
  return (
    <div className="scene scene-run" aria-hidden>
      <div className="scene-grid" />
      <article className="scene-card scene-dash">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold text-fg">Today in the stack</p>
          <span className="rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">watching</span>
        </div>
        <ul className="mt-4 space-y-2">
          {[
            ["RO-4418", "Stalled 4 days", "warn"],
            ["Inv 2081", "Unbilled $2,480", "gold"],
            ["Lead 17", "No follow-up", "warn"],
            ["Job 992", "Ready to close", "ok"],
          ].map(([id, note, tone]) => (
            <li key={id} className="scene-row" data-tone={tone}>
              <span className="font-mono text-[11px] text-fg/70">{id}</span>
              <span className="text-[12px] text-fg/80">{note}</span>
            </li>
          ))}
        </ul>
      </article>
      <div className="scene-stack">
        {[
          ["/images/logos/servicetitan.png", "Field"],
          ["/images/logos/gohighlevel-mark.svg", "CRM"],
          ["/images/logos/quickbooks.svg", "Books"],
        ].map(([src, label]) => (
          <div key={label} className="scene-tool">
            <img src={src} alt="" className="size-6 object-contain" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <svg className="scene-wires" viewBox="0 0 400 220" fill="none" aria-hidden>
        <path className="scene-wire" d="M40 180 C 120 180, 160 80, 240 80" />
        <path className="scene-wire scene-wire-2" d="M40 180 C 140 40, 260 40, 360 70" />
        <path className="scene-wire scene-wire-3" d="M80 200 C 180 210, 260 140, 340 140" />
      </svg>
      <AgentOrb className="scene-orb-d" />
    </div>
  );
}

export function PillarScene({ kind }: { kind: "get" | "win" | "run" }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#f3efe8]">
      {kind === "get" ? <GetWorkScene /> : kind === "win" ? <WinWorkScene /> : <RunShopScene />}
    </div>
  );
}
