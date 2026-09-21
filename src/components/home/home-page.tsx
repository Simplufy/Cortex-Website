import { Link } from "@tanstack/react-router";
import { GhostButton } from "@/components/ui/beam-button";
import { FounderPhoto } from "@/components/logo";
import { AuditButton } from "@/components/audit-modal";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal } from "@/components/fx/agent-terminal";
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
      <ProofRow />
      <Stats />
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
    <main className="px-4 pt-10 pb-4 sm:px-6 sm:pt-16 lg:pt-20">
      <div className="hero-enter mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 text-[13px] font-medium tracking-[0.18em] text-gold uppercase">AI for service companies</p>
        <h1 className="max-w-4xl text-[clamp(2rem,6.2vw,4.35rem)] leading-[1.04] font-medium tracking-[-0.04em] text-fg">
          <span className="block text-gold">Stop trying to learn AI.</span>
          <span className="block">ChatGPT can't run a company.</span>
          <span className="block">Agents inside your software can.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-fg/55 sm:mt-7 sm:text-xl">
          Get leftover work done, win more follow-up, and keep the tools you already pay for. Cortex implements agents in your CRM, field software, ads, and books.
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center">
          <AuditButton variant="solid" className="w-full sm:w-auto">
            Get your free audit
          </AuditButton>
          <GhostButton className="w-full sm:w-auto" to="/how-we-work">
            See how it works
          </GhostButton>
        </div>
        <p className="mt-4 text-[13px] text-fg/40">No obligation to build. 30 minutes. You keep your software.</p>
      </div>
    </main>
  );
}

const PROOF = [
  { img: "/images/cortex/covers/automotive.jpg?v=10", kicker: "Live deployment", title: "Detail Driven", body: "Repair, collision, detailing, glass" },
  { img: "/images/cortex/covers/plumbing.jpg?v=10", kicker: "Plumbing", title: "Agents in the shop software", body: "Follow-up isn't whoever is free" },
  { img: "/images/cortex/covers/hvac.jpg?v=10", kicker: "HVAC", title: "Watch the leftover", body: "Memberships, stalled jobs, missed calls" },
  { img: "/images/cortex/covers/electrical.jpg?v=10", kicker: "Electrical", title: "Implemented, not a chatbot", body: "CRM, dispatch, and books stay" },
];

function ProofRow() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-4 sm:overflow-visible">
        {PROOF.map((p) => (
          <article key={p.title} className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-fg/8 bg-elevated shadow-[0_12px_40px_rgba(17,17,17,0.06)] sm:w-auto">
            <img src={p.img} alt="" className="h-28 w-full object-cover sm:h-32" />
            <div className="p-4">
              <p className="text-[11px] font-medium tracking-wide text-gold uppercase">{p.kicker}</p>
              <p className="mt-1 text-sm font-medium text-fg">{p.title}</p>
              <p className="mt-1 text-[13px] text-fg/50">{p.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    ["Software you already run", "CRM, field, ads, books stay the system of record"],
    ["30-minute audit", "A ranked map of what AI can actually take off your team"],
    ["Human in the loop", "Agents draft. You approve anything that commits the company"],
  ];
  return (
    <section className="border-y border-fg/6 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3">
        {items.map(([n, b]) => (
          <div key={n}>
            <p className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">{n}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg/50">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
    title: "Show up where customers are looking. Stand out when they find you.",
    body: "Marketing leftover still sits in ads, GBP, and a review tab nobody opened. We implement agents that keep you visible in the channels you already pay for.",
    img: "/images/cortex/covers/home-services.jpg?v=10",
    points: [
      ["Get discovered", "Keep Google, ads, and the site moving without a ChatGPT session."],
      ["Stay active", "Job recaps and review asks go out from the software you already run."],
      ["Boost trust", "The work you already did becomes the next job, automatically."],
    ],
  },
  {
    kicker: "Win work",
    title: "Answer every leftover request and convert it before it goes cold.",
    body: "Speed to lead is not a personality trait. It is a job. Agents watch the CRM and the phone so follow-up is not whoever happens to be free.",
    img: "/images/cortex/covers/automotive.jpg?v=10",
    points: [
      ["Answer inbound", "Missed calls and web leads get a first response while you stay in the loop."],
      ["Qualify the job", "Spam and tire-kickers get filtered. Real work gets to a person."],
      ["Stand out", "Estimates and follow-ups leave your systems looking like you wrote them."],
    ],
  },
  {
    kicker: "Run the shop",
    title: "Watch the queue in field software and books, not in a chat tab.",
    body: "Reporting, stalled jobs, unbilled work. The leftover between systems is where shops leak. Agents sit on top of the stack you already bought.",
    img: "/images/cortex/covers/plumbing.jpg?v=10",
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
            <div className="overflow-hidden rounded-[22px]">
              <img src={p.img} alt="" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </RevealSection>
      ))}
    </div>
  );
}

function Industries() {
  const featured = INDUSTRIES.filter((i) => ["automotive", "hvac", "plumbing", "electrical", "home-services", "roofing"].includes(i.slug));
  const rest = INDUSTRIES.filter((i) => !featured.some((f) => f.slug === i.slug));
  return (
    <RevealSection className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">Built for the trades</p>
        <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium tracking-tight text-fg">
          Powering service businesses that already have software.
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((ind) => (
          <Link
            key={ind.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(ind) }}
            className="group overflow-hidden rounded-[22px] border border-fg/8 bg-elevated transition-shadow hover:shadow-[0_16px_50px_rgba(17,17,17,0.08)]"
          >
            <img src={`/images/cortex/covers/${ind.slug}.jpg?v=10`} alt="" className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-medium text-fg group-hover:text-gold">{ind.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-fg/50">{ind.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-2">
        {rest.map((i) => (
          <Link
            key={i.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(i) }}
            className="rounded-full border border-fg/8 bg-surface px-4 py-2 text-[13px] text-fg/60 hover:border-gold/30 hover:text-fg"
          >
            {i.name}
          </Link>
        ))}
      </div>
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
