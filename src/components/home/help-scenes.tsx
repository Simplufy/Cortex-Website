import type { ReactNode } from "react";
import type { HelpTopic } from "@/data/help";

function Logo({ file, name, className = "size-6 object-contain" }: { file: string; name: string; className?: string }) {
  return <img src={`/images/logos/${file}`} alt={name} title={name} className={className} />;
}

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="help-stage relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#f3efe8] ring-1 ring-fg/8">
      <div className="scene-grid" />
      <div className="help-scanline" aria-hidden />
      <span className="help-live">
        <b />
        Agent watching
      </span>
      {children}
    </div>
  );
}

function Orb() {
  return (
    <span className="scene-orb help-orb" aria-hidden>
      <span className="scene-orb-core" />
    </span>
  );
}

export function HelpScene({ topic }: { topic: HelpTopic }) {
  const scene = SCENES[topic.scene] ?? SCENES.stack;
  return scene(topic);
}

const SCENES: Record<string, (t: HelpTopic) => ReactNode> = {
  gbp: (t) => (
    <Stage>
      <article className="scene-card left-[6%] top-[10%] w-[58%] z-[2] help-float">
        <div className="flex items-center gap-3">
          <Logo file="gmb.png" name="Google Business Profile" className="size-8 object-contain" />
          <div>
            <p className="text-[13px] font-semibold">Bluewater Plumbing</p>
            <p className="text-[11px] text-fg/45">Google Business Profile</p>
          </div>
          <span className="ml-auto rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Open</span>
        </div>
        <p className="mt-3 text-[12px] font-semibold">4.9 <span className="help-stars text-gold"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></span> <span className="font-normal text-fg/40">128 reviews</span></p>
        <div className="mt-3 space-y-2">
          {["Just wrapped a water heater on Maple.", "Drain camera recap posted.", "Friday membership slots opened."].map((p, i) => (
            <div key={p} className="help-post rounded-xl border border-fg/8 bg-bg px-3 py-2" style={{ animationDelay: `${i * 1.6}s` }}>
              <p className="text-[12px] text-fg/80">{p}</p>
              <p className="mt-1 text-[10px] text-fg/35">{i === 0 ? "Publishing…" : `${i + 1}h ago`}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="scene-card right-[6%] top-[16%] w-[34%] z-[3] help-float-slow">
        <p className="text-[10px] font-medium tracking-wide text-gold uppercase">Agent drafting</p>
        <div className="mt-2 flex items-center gap-2">
          <Logo file="companycam.png" name="CompanyCam" />
          <span className="text-[11px] text-fg/55">3 photos attached</span>
        </div>
        <p className="mt-2 text-[12px] leading-relaxed text-fg/80">Job recap ready for GBP.</p>
        <span className="mt-3 inline-block rounded-full bg-gold/12 px-2 py-1 text-[10px] text-gold">Needs approval</span>
      </article>
      <Orb />
    </Stage>
  ),
  reviews: (t) => (
    <Stage>
      <article className="scene-card left-[8%] top-[14%] w-[52%] z-[2] help-float">
        <div className="flex items-center gap-2">
          <Logo file="gmb.png" name="Google" className="size-7" />
          <p className="text-[13px] font-semibold">Ask for the review</p>
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-fg/70">Hi Maria, thanks for having us out on Maple. If we earned it, a Google review helps more than you know.</p>
        <p className="mt-3 text-[11px] text-fg/40 help-type">Drafted from Jobber job #4418 · sending</p>
      </article>
      <article className="scene-card right-[8%] top-[18%] w-[36%] z-[3] help-pop">
        <p className="help-stars mt-1 text-[22px] tracking-widest text-gold"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></p>
        <p className="mt-1 text-[13px] font-medium">New 5-star</p>
        <p className="mt-1 text-[12px] text-fg/55">“On time. Explained the leak.”</p>
      </article>
      <article className="scene-card right-[10%] bottom-[12%] w-[40%] z-[3] help-float-slow">
        <div className="flex items-center gap-2">
          <Logo file="podium.png" name="Podium" />
          <Logo file="birdeye.png" name="Birdeye" />
        </div>
        <p className="mt-2 text-[11px] text-fg/50">Using the review tool you already pay for.</p>
      </article>
    </Stage>
  ),
  ads: () => (
    <Stage>
      <article className="scene-card left-[7%] top-[12%] w-[55%] z-[2] help-float">
        <div className="mb-4 flex items-center gap-3">
          <Logo file="google.png" name="Google Ads" className="size-7" />
          <Logo file="meta.svg" name="Meta" className="size-7" />
          <p className="text-[13px] font-semibold">Spend vs booked</p>
        </div>
        {[
          ["Google Ads", 72, "$1,840", "11 jobs"],
          ["Meta", 38, "$620", "4 jobs"],
          ["LSAs", 90, "$2,100", "0 booked"],
        ].map(([n, w, spend, jobs]) => (
          <div key={String(n)} className="mb-3">
            <div className="mb-1 flex justify-between text-[11px] text-fg/60">
              <span>{n}</span><span>{spend} · {jobs}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-fg/8">
              <div className="help-bar h-full bg-gold" style={{ width: `${w}%` }} />
            </div>
          </div>
        ))}
        <p className="mt-2 text-[11px] font-medium text-gold help-blink">Exception: LSAs spending, nothing booked.</p>
      </article>
      <article className="scene-card right-[7%] bottom-[14%] w-[36%] z-[3] help-float">
        <Logo file="callrail.png" name="CallRail" className="size-7" />
        <p className="mt-2 text-[12px] text-fg/70">CallRail shows 19 tracked calls. 3 became jobs in ServiceTitan.</p>
      </article>
    </Stage>
  ),
  recap: () => (
    <Stage>
      <div className="absolute left-[8%] top-[12%] z-[2] grid w-[44%] grid-cols-2 gap-2">
        {["Before", "After", "Van", "Tag"].map((label, i) => (
          <div key={label} className="help-photo relative aspect-square overflow-hidden rounded-xl bg-white ring-1 ring-fg/8" style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-stone-200" />
            <span className="absolute bottom-2 left-2 text-[10px] font-medium text-fg/50">{label}</span>
          </div>
        ))}
      </div>
      <article className="scene-card right-[7%] top-[16%] w-[42%] z-[3] help-float">
        <div className="flex items-center gap-2">
          <Logo file="companycam.png" name="CompanyCam" />
          <span className="text-[12px] font-medium">CompanyCam · 4 photos</span>
        </div>
        <p className="mt-3 text-[12px] leading-relaxed text-fg/75">Maple Street water heater swap. Drafted for GBP and Facebook.</p>
        <span className="mt-3 inline-block rounded-full bg-gold/12 px-2 py-1 text-[10px] text-gold">Queue for approval</span>
      </article>
    </Stage>
  ),
  local: () => (
    <Stage>
      <div className="absolute inset-8 rounded-2xl bg-[linear-gradient(180deg,#e8f0e4,#f6f1e8)] ring-1 ring-fg/8">
        <span className="help-pin absolute top-[38%] left-[46%] h-8 w-8 rounded-full bg-gold shadow-[0_0_0_10px_rgba(255,87,31,0.18)]" />
        <span className="help-pin help-pin-2 absolute h-5 w-5 rounded-full bg-gold/70" />
        <article className="scene-card left-[8%] top-[10%] w-[48%] help-float">
          <div className="flex items-center gap-2">
            <Logo file="google.png" name="Google" />
            <p className="text-[13px] font-semibold">Map pack</p>
          </div>
          <p className="mt-2 text-[12px] text-fg/60">Bluewater Plumbing · Open · 4.9</p>
        </article>
      </div>
    </Stage>
  ),
  neighbor: () => (
    <Stage>
      <div className="absolute inset-x-8 top-[18%] flex justify-between">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="help-house">
            <div className="h-10 w-12 rounded-t-md bg-white ring-1 ring-fg/10" />
            <div className="mx-auto h-4 w-8 -mt-1 bg-gold/80" style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
          </div>
        ))}
      </div>
      <article className="scene-card bottom-[12%] left-[10%] right-[10%] z-[3] help-float">
        <p className="text-[12px] font-medium">Finished 14 on Oak. Drafting neighbor offers for 12 and 16.</p>
        <p className="mt-1 text-[11px] text-fg/45">From today's Jobber route, not a bought list.</p>
      </article>
    </Stage>
  ),
  phone: () => (
    <Stage>
      <article className="absolute left-[10%] top-[8%] bottom-[8%] w-[40%] rounded-[28px] border border-fg/10 bg-white p-3 shadow-[0_22px_60px_rgba(17,17,17,0.12)]">
        <div className="mx-auto mb-3 h-2 w-16 rounded-full bg-fg/10" />
        <div className="help-ring rounded-xl bg-gold/10 p-3">
          <p className="text-[10px] font-medium text-gold uppercase">Missed call</p>
          <p className="text-[14px] font-semibold">(614) 555-0192</p>
          <p className="mt-1 flex items-center gap-2 text-[11px] text-fg/45">
            CallRail · ringing
            <span className="help-dots text-gold"><i /><i /><i /></span>
          </p>
        </div>
        <div className="mt-3 space-y-2">
          <div className="help-bubble ml-auto max-w-[90%] rounded-2xl bg-gold px-3 py-2 text-[11px] text-white">Got your call. Two slots left after 2. 2:30 or 4?</div>
          <div className="help-bubble help-bubble-2 max-w-[85%] rounded-2xl bg-fg/5 px-3 py-2 text-[11px] text-fg/80">2:30 works.</div>
        </div>
      </article>
      <article className="scene-card right-[7%] top-[20%] w-[42%] z-[3] help-float">
        <div className="flex items-center gap-2">
          <Logo file="gohighlevel-mark.svg" name="GoHighLevel" />
          <p className="text-[12px] font-semibold">CRM · Oak St drain</p>
        </div>
        <p className="mt-3 font-mono text-[12px] text-gold help-count">First response 00:11</p>
        <p className="mt-1 text-[11px] text-fg/50">Logged in GoHighLevel. You stayed in the loop.</p>
      </article>
    </Stage>
  ),
  speed: (t) => SCENES.phone(t),
  qualify: () => (
    <Stage>
      <div className="absolute inset-x-8 top-10 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-3 ring-1 ring-fg/8 help-float">
          <p className="text-[10px] font-medium text-emerald-700 uppercase">Real work</p>
          <div className="help-cycle">
          {["Maple · water heater", "12th · drain backup"].map((x) => (
            <p key={x} className="mt-2 rounded-lg bg-emerald-50 px-2 py-1.5 text-[12px]">{x}</p>
          ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white p-3 ring-1 ring-fg/8 help-float-slow">
          <p className="text-[10px] font-medium text-fg/40 uppercase">Filtered</p>
          <div className="help-cycle">
          {["Out of area zip", "How much for a quote"].map((x) => (
            <p key={x} className="mt-2 rounded-lg bg-fg/5 px-2 py-1.5 text-[12px] text-fg/40">{x}</p>
          ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 flex items-center gap-2">
        <Logo file="gohighlevel-mark.svg" name="GoHighLevel" />
        <span className="text-[11px] text-fg/50">Tagged in the CRM with a reason.</span>
      </div>
    </Stage>
  ),
  quotes: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[12%] w-[84%] z-[2] help-float">
        <div className="mb-3 flex items-center gap-2">
          <Logo file="tekmetric.png" name="Tekmetric" />
          <Logo file="servicetitan.png" name="ServiceTitan" />
          <p className="text-[12px] font-semibold">Aging estimates</p>
        </div>
        <div className="help-cycle">
        {[
          ["EST-208", "Water heater", "11 days", true],
          ["EST-214", "AC replace", "4 days", false],
          ["EST-221", "Drain camera", "2 days", false],
        ].map(([id, job, age, hot]) => (
          <div key={String(id)} className={`mb-2 flex items-center justify-between rounded-xl px-3 py-2 ${hot ? "bg-gold/10 ring-1 ring-gold/30" : "bg-fg/4"}`}>
            <span className="font-mono text-[11px]">{id}</span>
            <span className="text-[12px]">{job}</span>
            <span className={`text-[11px] ${hot ? "font-medium text-gold help-blink" : "text-fg/45"}`}>{age}</span>
          </div>
        ))}
        </div>
        <p className="mt-2 text-[11px] text-fg/50">Follow-up drafted from EST-208. Advisor still sends.</p>
      </article>
    </Stage>
  ),
  declined: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[12%] w-[84%] help-float">
        <div className="mb-3 flex items-center gap-2">
          <Logo file="tekmetric.png" name="Tekmetric" className="h-6 w-auto" />
          <p className="text-[12px] font-semibold">RO-4418 · declined lines</p>
        </div>
        <div className="help-cycle">
        {[
          ["Front brakes", "Approved", false],
          ["Rear pads", "Declined", true],
          ["Cabin filter", "Declined", true],
        ].map(([n, s, d]) => (
          <div key={String(n)} className="mb-2 flex items-center justify-between rounded-xl bg-bg px-3 py-2 ring-1 ring-fg/8">
            <span className="text-[12px]">{n}</span>
            <span className={`text-[11px] ${d ? "text-gold" : "text-emerald-700"}`}>{s}</span>
          </div>
        ))}
        </div>
        <p className="mt-2 text-[11px] text-fg/50">Queue for Thursday follow-up. Still in Tekmetric.</p>
      </article>
    </Stage>
  ),
  reactivate: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[12%] w-[84%] help-float">
        <div className="mb-3 flex items-center gap-2">
          <Logo file="gohighlevel-mark.svg" name="GoHighLevel" />
          <p className="text-[12px] font-semibold">Quiet accounts</p>
        </div>
        <div className="help-cycle">
        {[
          ["The Millers", "Last job 14 mo", "Draft ready"],
          ["Oak HOA", "Lapsed plan", "Seasonal"],
          ["12th Street", "Last wash spring", "On the route"],
        ].map(([n, m, t]) => (
          <div key={String(n)} className="mb-2 flex items-center justify-between rounded-xl bg-bg px-3 py-2 ring-1 ring-fg/8">
            <div>
              <p className="text-[12px] font-medium">{n}</p>
              <p className="text-[11px] text-fg/45">{m}</p>
            </div>
            <span className="text-[11px] text-gold">{t}</span>
          </div>
        ))}
        </div>
      </article>
    </Stage>
  ),
  chat: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[10%] w-[55%] h-[70%] help-float">
        <p className="text-[11px] font-medium text-fg/45">Site chat · 12:10pm</p>
        <div className="mt-3 space-y-2">
          <div className="help-bubble max-w-[80%] rounded-2xl bg-fg/5 px-3 py-2 text-[12px]">Need someone on a backup today?</div>
          <div className="flex items-center gap-1 px-2 text-fg/40">
            <span className="help-dots"><i /><i /><i /></span>
          </div>
          <div className="help-bubble help-bubble-2 ml-auto max-w-[80%] rounded-2xl bg-gold px-3 py-2 text-[12px] text-white">Yes. 2:30 or 4 on Oak. Which works?</div>
        </div>
      </article>
      <article className="scene-card right-[7%] bottom-[12%] w-[38%] help-float">
        <Logo file="gohighlevel-mark.svg" name="GoHighLevel" />
        <p className="mt-2 text-[12px]">Logged in the CRM. Not a screenshot.</p>
      </article>
    </Stage>
  ),
  stalled: () => (
    <Stage>
      <article className="scene-card left-[6%] top-[10%] w-[88%] help-float">
        <p className="mb-3 text-[12px] font-semibold">Today in the stack</p>
        <div className="help-cycle">
        {[
          ["RO-4418", "Stalled 4 days", "tekmetric.png"],
          ["File 2091", "Quiet after estimate", "acculynx.png"],
          ["Job 992", "Ready to close", "jobber.png"],
        ].map(([id, note, logo]) => (
          <div key={String(id)} className="mb-2 flex items-center gap-3 rounded-xl bg-bg px-3 py-2 ring-1 ring-fg/8">
            <Logo file={String(logo)} name="" className="size-5 object-contain" />
            <span className="font-mono text-[11px] text-fg/60">{id}</span>
            <span className="text-[12px]">{note}</span>
          </div>
        ))}
        </div>
      </article>
    </Stage>
  ),
  dispatch: () => (
    <Stage>
      <div className="absolute inset-x-6 top-8 grid grid-cols-3 gap-2">
        {["Tue", "Wed", "Thu"].map((d, i) => (
          <div key={d} className="rounded-2xl bg-white p-2 ring-1 ring-fg/8">
            <p className="text-[11px] font-medium">{d}</p>
            {["8:00", "10:30", "1:00"].map((t, j) => (
              <div key={t} className={`mt-2 rounded-lg px-2 py-1 text-[10px] ${i === 1 && j === 1 ? "help-slot" : "bg-fg/5 text-fg/50"}`}>
                {i === 1 && j === 1 ? "Unconfirmed" : t}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-8 flex items-center gap-2">
        <Logo file="servicetitan.png" name="ServiceTitan" />
        <Logo file="jobber.png" name="Jobber" />
      </div>
    </Stage>
  ),
  parts: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[14%] w-[84%] help-float">
        <p className="mb-3 text-[12px] font-semibold">Start Monday · material hold</p>
        <div className="help-cycle">
        {[
          ["Panels", "On truck", "ok"],
          ["Hardware", "Backorder", "warn"],
          ["Crew", "On the board", "warn"],
        ].map(([n, s, tone]) => (
          <div key={String(n)} className={`mb-2 flex justify-between rounded-xl px-3 py-2 ring-1 ring-fg/8 ${tone === "warn" ? "help-warn" : "bg-bg"}`}>
            <span className="text-[12px]">{n}</span>
            <span className={`text-[11px] ${tone === "warn" ? "text-gold" : "text-emerald-700"}`}>{s}</span>
          </div>
        ))}
        </div>
      </article>
    </Stage>
  ),
  permits: () => (
    <Stage>
      <article className="scene-card left-[10%] top-[14%] w-[80%] help-float">
        <p className="mb-3 text-[12px] font-semibold">Install-ready checklist</p>
        {["HOA packet", "City permit", "Utility locate", "Crew"].map((n, i) => (
          <div key={n} className="mb-2 flex items-center gap-2 text-[12px]">
            <span className="help-check grid size-4 place-items-center rounded-full text-[10px] text-white" style={{ animationDelay: `${i * 0.7}s` }}>✓</span>
            {n}
          </div>
        ))}
        <p className="mt-2 text-[11px] text-gold help-blink">Start is on the board. Permit is not.</p>
      </article>
    </Stage>
  ),
  extras: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[12%] w-[84%] help-float">
        <p className="text-[12px] font-semibold">Bid vs what happened</p>
        <p className="mt-3 text-[12px] text-fg/50">Original: 42 linear feet</p>
        <p className="help-pop mt-2 text-[13px] font-medium text-gold">+ 8 ft seat wall · CompanyCam day 2</p>
        <p className="mt-4 text-[11px] text-fg/50 help-type">Change order drafting</p>
      </article>
    </Stage>
  ),
  punch: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[12%] w-[84%] help-float">
        {["Touch up north wall", "Missing cap on gate", "Final photos", "Balance due"].map((n, i) => (
          <div key={n} className="mb-2 flex items-center gap-2 text-[12px]">
            <span className="help-check size-4 rounded" style={{ animationDelay: `${i * 0.7}s` }} />
            {n}
          </div>
        ))}
        <div className="mt-3 flex gap-2">
          <Logo file="buildertrend.png" name="Buildertrend" />
          <Logo file="companycam.png" name="CompanyCam" />
        </div>
      </article>
    </Stage>
  ),
  briefing: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[10%] w-[84%] help-float">
        <p className="text-[11px] font-medium tracking-wide text-gold uppercase">Overnight briefing</p>
        <p className="mt-2 text-[13px] font-semibold help-type">4 exceptions. Not a wall of green.</p>
        <ul className="help-cycle mt-3 space-y-1.5 text-[12px] text-fg/70">
          <li>RO-4418 stalled 4 days · Tekmetric</li>
          <li>LSAs spent $2,100 · 0 booked · Google Ads</li>
          <li>Inv 2081 unbilled $2,480 · QuickBooks</li>
          <li>Missed call 12:11 · CallRail</li>
        </ul>
      </article>
    </Stage>
  ),
  unbilled: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[14%] w-[84%] help-float">
        <div className="mb-3 flex items-center gap-2">
          <Logo file="quickbooks.svg" name="QuickBooks" className="h-7 w-auto" />
          <p className="text-[12px] font-semibold">Done in ops · missing in books</p>
        </div>
        <div className="help-cycle">
        {[
          ["Inv —", "Glass job 992", "$480"],
          ["Inv —", "After-hours RO", "$2,000"],
        ].map(([a, b, c]) => (
          <div key={String(b)} className="mb-2 flex justify-between rounded-xl bg-gold/10 px-3 py-2 text-[12px]">
            <span>{b}</span><span className="font-medium text-gold help-count">{c}</span>
          </div>
        ))}
        </div>
      </article>
    </Stage>
  ),
  invoices: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[14%] w-[84%] help-float">
        <div className="mb-3 flex items-center gap-2">
          <Logo file="quickbooks.svg" name="QuickBooks" className="h-7 w-auto" />
          <p className="text-[12px] font-semibold">Open invoices</p>
        </div>
        <div className="help-cycle">
        {[
          ["2081", "Oak Street", "34 days"],
          ["2094", "Millers", "12 days"],
        ].map(([id, n, age]) => (
          <div key={id} className="mb-2 flex justify-between rounded-xl bg-bg px-3 py-2 text-[12px] ring-1 ring-fg/8">
            <span className="font-mono">{id}</span><span>{n}</span><span className="text-gold help-blink">{age}</span>
          </div>
        ))}
        </div>
        <p className="mt-2 text-[11px] text-fg/50 help-type">Reminder drafting</p>
      </article>
    </Stage>
  ),
  deposits: () => (
    <Stage>
      <div className="absolute inset-x-8 top-12 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white p-4 ring-1 ring-fg/8 help-float">
          <p className="text-[10px] text-fg/40 uppercase">Sold</p>
          <p className="mt-1 text-2xl font-medium">$48k</p>
        </div>
        <div className="rounded-2xl bg-white p-4 ring-1 ring-gold/30 help-float-slow">
          <p className="text-[10px] text-gold uppercase">Collected</p>
          <p className="help-count mt-1 text-2xl font-medium">$19k</p>
        </div>
      </div>
      <p className="absolute bottom-8 left-8 text-[12px] text-fg/55 help-blink">3 jobs sold with no deposit in QuickBooks.</p>
    </Stage>
  ),
  updates: () => (
    <Stage>
      <article className="absolute left-[12%] top-[12%] w-[50%] rounded-[28px] bg-white p-4 ring-1 ring-fg/10 help-float">
        <p className="text-[11px] text-fg/40">To customer · draft</p>
        <p className="mt-3 text-[13px] leading-relaxed help-type">The water heater is in. Pickup slips to Thursday 4pm.</p>
        <p className="mt-3 text-[11px] text-gold help-blink">From Tekmetric · not sent yet</p>
      </article>
      <div className="absolute right-[10%] top-[28%] help-float-slow">
        <Logo file="tekmetric.png" name="Tekmetric" className="h-8 w-auto" />
      </div>
    </Stage>
  ),
  confirms: (t) => SCENES.dispatch(t),
  warranty: () => (
    <Stage>
      <article className="scene-card left-[8%] top-[14%] w-[84%] help-float">
        <p className="text-[12px] font-semibold">Callback · original job 992</p>
        <p className="mt-3 text-[12px] text-fg/70">Customer texted the owner. Agent filed it against the RO instead of leaving it in iMessage.</p>
        <p className="mt-2 text-[11px] text-gold help-type">Filing against RO-992</p>
        <div className="mt-4 flex gap-2">
          <Logo file="tekmetric.png" name="Tekmetric" />
          <Logo file="companycam.png" name="CompanyCam" />
        </div>
      </article>
    </Stage>
  ),
  human: () => (
    <Stage>
      <article className="scene-card left-[10%] top-[16%] w-[80%] help-float">
        <p className="text-[12px] font-semibold">Permissions on this path</p>
        <div className="help-cycle">
        {[
          ["Draft customer text", "Allowed"],
          ["Send without you", "Off"],
          ["Create invoice", "Needs you"],
          ["Log the note", "Allowed"],
        ].map(([n, s]) => (
          <div key={String(n)} className="mt-2 flex justify-between text-[12px]">
            <span>{n}</span>
            <span className={s === "Allowed" ? "text-emerald-700" : "text-gold"}>{s}</span>
          </div>
        ))}
        </div>
      </article>
    </Stage>
  ),
  stack: (t) => (
    <Stage>
      <svg className="help-wire" viewBox="0 0 400 300" aria-hidden>
        <path d="M70 90 C 140 90, 180 150, 250 150" />
        <path d="M90 210 C 160 210, 200 120, 310 110" />
      </svg>
      <div className="absolute inset-0 z-[2] flex flex-wrap items-center justify-center gap-4 p-10">
        {t.logos.map((l, i) => (
          <div key={l.file} className="help-logo-float flex size-16 items-center justify-center rounded-2xl bg-white ring-1 ring-fg/8" style={{ animationDelay: `${i * 0.15}s` }}>
            <Logo file={l.file} name={l.name} className="size-9 object-contain" />
          </div>
        ))}
      </div>
      <p className="absolute bottom-6 left-0 right-0 text-center text-[12px] text-fg/50">Your stack stays the system of record.</p>
    </Stage>
  ),
};
