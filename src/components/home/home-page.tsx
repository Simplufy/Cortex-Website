import { Link } from "@tanstack/react-router";
import { GhostButton } from "@/components/ui/beam-button";
import { FounderPhoto } from "@/components/logo";
import { AuditButton } from "@/components/audit-modal";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal } from "@/components/fx/agent-terminal";
import { PillarScene } from "@/components/home/pillar-scenes";
import { BRAND } from "@/data/brand";
import {
  CASE_STUDIES,
  CONNECT_TOOLS,
  FAQS,
  INDUSTRIES,
  industryParam,
} from "@/data/site";

export function HomePage() {
  return (
    <>
      <Hero />
      <Assistant />
      <AgentTerminal />
      <Pillars />
      <Industries />
      <Letter />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <main className="px-4 pt-6 pb-6 sm:px-6 sm:pt-8 lg:pt-10">
      <div className="hero-enter mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-3 text-[12px] font-medium tracking-[0.18em] text-gold uppercase sm:mb-4">AI for service companies</p>
        <h1 className="max-w-4xl text-[clamp(1.55rem,4.6vw,3.35rem)] leading-[1.06] font-medium tracking-[-0.04em] text-fg">
          <span className="block text-gold">Stop trying to learn AI.</span>
          <span className="block">ChatGPT can't run a company.</span>
          <span className="block">Agents inside your software can.</span>
        </h1>
        <div className="mt-5 flex w-full flex-col items-stretch gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:items-center">
          <AuditButton variant="solid" className="w-full sm:w-auto">
            Get your free audit
          </AuditButton>
          <GhostButton className="w-full sm:w-auto" to="/how-we-work">
            See how it works
          </GhostButton>
        </div>
      </div>
      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3 sm:mt-8 lg:grid-cols-4">
        {PROOF.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-fg/8 bg-elevated shadow-[0_12px_40px_rgba(17,17,17,0.06)]">
            <img src={p.img} alt="" className="h-24 w-full object-cover sm:h-28" />
            <div className="p-3 sm:p-4">
              <p className="text-[10px] font-medium tracking-wide text-gold uppercase sm:text-[11px]">{p.kicker}</p>
              <p className="mt-0.5 text-[13px] font-medium text-fg sm:text-sm">{p.title}</p>
              <p className="mt-0.5 text-[12px] text-fg/50">{p.body}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

const PROOF = [
  { img: "/images/cortex/trades/automotive.jpg", kicker: "Automotive", title: "Redline Auto", body: "Repair, collision, detailing" },
  { img: "/images/cortex/trades/plumbing.jpg", kicker: "Plumbing", title: "Bluewater Plumbing", body: "Follow-up isn't whoever is free" },
  { img: "/images/cortex/trades/hvac.jpg", kicker: "HVAC", title: "Arctic Air", body: "Memberships, stalled jobs, missed calls" },
  { img: "/images/cortex/trades/roofing.jpg", kicker: "Roofing", title: "Skyline Roofing", body: "Storm file leftover, watched" },
];

const COMMANDS = [
  "Follow up leftover estimates",
  "Watch stalled jobs",
  "Catch missed calls",
  "Draft the invoice reminder",
  "Flag unbilled work",
  "Ask for the review",
  "Summarize the day",
  "Route the next lead",
];

function Assistant() {
  return (
    <RevealSection className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">Your always-on layer</p>
        <h2 className="mt-4 text-[clamp(1.8rem,4.4vw,3.25rem)] leading-[1.08] font-medium tracking-tight text-fg">
          Your own custom AI that works inside the software you already run.
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-fg/55">
          ChatGPT waits for a prompt. Cortex implements agents that watch leftover work across marketing, sales, and operations, and stop when a person is required.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
        {COMMANDS.map((c) => (
          <span key={c} className="rounded-full border border-fg/10 bg-elevated px-4 py-2 text-sm text-fg/70 shadow-sm">
            {c}
          </span>
        ))}
      </div>
      <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-2 text-[13px] text-fg/40">
        <span className="rounded-full bg-gold/10 px-3 py-1 font-medium text-gold">In your software</span>
        <span>Not another login to live in</span>
      </div>
      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
        {CONNECT_TOOLS.slice(0, 12).map((t) => (
          <span key={t.name} className="inline-flex items-center gap-2 rounded-full border border-fg/8 bg-surface px-3 py-1.5">
            <img src={`/images/logos/${t.file}`} alt="" width={16} height={16} className="size-4 object-contain" />
            <span className="text-[12px] text-fg/65">{t.name}</span>
          </span>
        ))}
      </div>
    </RevealSection>
  );
}

const PILLAR_BLOCKS = [
  {
    kicker: "Get work",
    kind: "get" as const,
    title: "Show up where customers are looking. Stand out when they find you.",
    body: "Marketing leftover still sits in ads, GBP, and a review tab nobody opened. We implement agents that keep you visible in the channels you already pay for.",
    points: [
      ["Get discovered", "Keep Google, ads, and the site moving without a ChatGPT session."],
      ["Stay active", "Job recaps and review asks go out from the software you already run."],
      ["Boost trust", "The work you already did becomes the next job, automatically."],
    ],
  },
  {
    kicker: "Win work",
    kind: "win" as const,
    title: "Answer every leftover request and convert it before it goes cold.",
    body: "Speed to lead is not a personality trait. It is a job. Agents watch the CRM and the phone so follow-up is not whoever happens to be free.",
    points: [
      ["Answer inbound", "Missed calls and web leads get a first response while you stay in the loop."],
      ["Qualify the job", "Spam and tire-kickers get filtered. Real work gets to a person."],
      ["Stand out", "Estimates and follow-ups leave your systems looking like you wrote them."],
    ],
  },
  {
    kicker: "Run the shop",
    kind: "run" as const,
    title: "Watch the queue in field software and books, not in a chat tab.",
    body: "Reporting, stalled jobs, unbilled work. The leftover between systems is where shops leak. Agents sit on top of the stack you already bought.",
    points: [
      ["See the leftover", "What did not move today, in the software the team already uses."],
      ["Get paid", "Unbilled and unpaid work gets flagged instead of remembered."],
      ["Keep the tools", "Tekmetric, Jobber, ServiceTitan, QuickBooks stay. We implement around them."],
    ],
  },
];

function Pillars() {
  return (
    <div className="space-y-4 px-4 pb-8 sm:px-6 sm:pb-12">
      {PILLAR_BLOCKS.map((p, i) => (
        <RevealSection key={p.kicker} className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-surface">
          <div className={`grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">{p.kicker}</p>
              <h2 className="mt-3 text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.12] font-medium tracking-tight text-fg">{p.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-fg/55">{p.body}</p>
              <ul className="mt-8 space-y-5">
                {p.points.map(([t, b]) => (
                  <li key={t}>
                    <p className="font-medium text-fg">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-fg/50">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-h-[280px]">
              <PillarScene kind={p.kind} />
            </div>
          </div>
        </RevealSection>
      ))}
    </div>
  );
}

function Industries() {
  const list = [...INDUSTRIES].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <RevealSection className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">Industries</p>
        <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium tracking-tight text-fg">
          Cortex is here to service your industry.
        </h2>
      </div>
      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((ind) => (
          <li key={ind.slug}>
            <Link
              to="/industries/$slug"
              params={{ slug: industryParam(ind) }}
              className="group flex items-center gap-2.5 text-[15px] font-medium text-fg hover:text-gold"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
                <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
                  <path d="M2 6.2 L4.5 8.6 L10 3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="underline decoration-fg/20 underline-offset-4 group-hover:decoration-gold">{ind.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </RevealSection>
  );
}

function Letter() {
  const study = CASE_STUDIES[0];
  return (
    <RevealSection className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">Open letter from the founder</p>
        <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-tight text-fg">
          Cortex isn't another AI login. It's a promise you don't have to learn this yourself.
        </h2>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-fg/60">
          <p>
            Most owners have tried ChatGPT. That's not AI in the business. The leftover work still lives in the CRM, the field software, and whoever remembered to follow up.
          </p>
          <p>
            Cortex implements agents in the software you already run. Follow-up, monitoring, and reporting become jobs with permissions, logs, and a person in the loop. You stay the operator.
          </p>
          <p>
            One of the first deployments connects agents across repair, collision, detailing, and glass, including shop-management, CRM, ads, reputation, and the books.
          </p>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <FounderPhoto className="size-14 ring-1 ring-fg/10" />
          <div>
            <p className="font-medium text-fg">{BRAND.founder}</p>
            <p className="text-sm text-fg/45">
              {BRAND.founderRole}, {BRAND.name}
            </p>
          </div>
        </div>
        <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="mt-8 inline-block text-sm font-medium text-gold hover:text-gold-light">
          See the live deployment →
        </Link>
      </div>
    </RevealSection>
  );
}

function Faq() {
  return (
    <RevealSection className="border-t border-fg/6 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">FAQ</p>
        <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.75rem)] font-medium tracking-tight text-fg">Questions owners actually ask</h2>
        <div className="mt-10">
          {FAQS.slice(0, 8).map((item) => (
            <details key={item.q} className="group border-b border-fg/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-fg/55">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function FinalCta() {
  return (
    <RevealSection className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-fg px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium tracking-tight">
          See where AI belongs in your operation, without learning it.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/60">
          A free 30-minute audit. You leave with a ranked map of what agents could take off your team in the software you already run.
        </p>
        <div className="mt-8">
          <AuditButton variant="solid">Get your free audit</AuditButton>
        </div>
        <p className="mt-4 text-[13px] text-white/40">No credit card. No obligation to build.</p>
      </div>
    </RevealSection>
  );
}
