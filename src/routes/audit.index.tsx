import { createFileRoute, Link } from "@tanstack/react-router";
import { BRAND } from "@/data/brand";
import { CASE_STUDIES, COMPARISON, CONNECT_TOOLS, FAQS, INDUSTRIES, industryParam } from "@/data/site";
import { AuditButton } from "@/components/audit-modal";
import { FounderPhoto } from "@/components/logo";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { VslPlayer } from "@/components/vsl-player";
import { PillarScene } from "@/components/home/pillar-scenes";

export const Route = createFileRoute("/audit/")({
  head: () =>
    pageHead({
      title: "Free AI Operations Audit",
      description:
        "Take a step past using ChatGPT and learn how to actually use AI to help grow your operation and scale revenue.",
      path: "/audit",
    }),
  component: AuditLanding,
});

function Cta({ children = "Get My Free AI Operations Audit" }: { children?: string }) {
  return (
    <AuditButton className="w-full sm:w-auto" variant="solid">
      {children}
    </AuditButton>
  );
}

function CtaBlock() {
  return (
    <div className="mt-10 flex justify-center">
      <Cta />
    </div>
  );
}

function AuditLanding() {
  return (
    <article className="overflow-x-clip pb-24 md:pb-0">
      <Hero />
      <Proof />
      <PastChatgpt />
      <Walkthrough />
      <LeaveWith />
      <LookAt />
      <Trades />
      <Founder />
      <Faq />
      <Final />
      <MobileDock />
    </article>
  );
}

function Hero() {
  return (
    <RevealSection className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-4 pb-8 text-center sm:px-6 sm:pt-6 lg:pt-8">
      <h1 className="text-balance text-[1.55rem] leading-[1.12] font-medium tracking-tighter text-fg sm:text-4xl lg:text-[2.75rem]">
        Find out how service businesses are leveraging AI
        <br />
        <span className="text-gold">without having to learn anything.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-fg/55 sm:mt-5 sm:text-lg">
        Take a step past using ChatGPT and learn how to actually use AI to help grow your operation & scale revenue.
      </p>
      <div className="mx-auto mt-5 w-full max-w-3xl sm:mt-6">
        <VslPlayer
          src={BRAND.homeServicesVslSrc}
          poster={BRAND.homeServicesVslPoster}
          cover="/images/cortex/covers/home-services.jpg?v=10"
          designed
          label="Watch how this works in a home service company"
        />
      </div>
      <div className="mt-5 w-full max-w-md sm:mt-6">
        <Cta />
      </div>
    </RevealSection>
  );
}

function Proof() {
  return (
    <RevealSection className="border-t border-fg/5">
      <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
        {[
          ["01", "30 minutes", "A walkthrough of how work actually moves in your shop, not a product demo."],
          ["02", "Your stack", "CRM, field software, ads, books. We map leftover around what you already pay for."],
          ["03", "A ranked map", "What to implement first, what to leave human, and what we would not touch."],
        ].map(([n, t, b]) => (
          <article key={n} className="border-fg/5 px-6 py-10 sm:border-l sm:first:border-l-0 sm:px-10">
            <p className="font-mono text-[12px] tracking-widest text-gold">{n}</p>
            <h2 className="mt-3 text-xl font-medium tracking-tight text-fg">{t}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-fg/50">{b}</p>
          </article>
        ))}
      </div>
      <div className="px-4 pb-10 sm:px-6">
        <CtaBlock />
      </div>
    </RevealSection>
  );
}

function PastChatgpt() {
  return (
    <RevealSection className="border-t border-fg/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">Past the ChatGPT tab</p>
          <h2 className="mt-3 text-[clamp(1.7rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-tight text-fg">
            Using ChatGPT is not the same as AI in the operation.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-fg/55">
            The leftover work still lives in the CRM, the field software, and whoever remembered to follow up. The audit is how you see the difference before anyone builds anything.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-[22px] border border-fg/8">
          <div className="grid grid-cols-2 bg-surface px-5 py-3 text-[11px] font-medium tracking-[0.14em] text-fg/40 uppercase sm:px-8">
            <span>What most shops have now</span>
            <span className="text-gold">What the audit is for</span>
          </div>
          {COMPARISON.map((row) => (
            <div key={row.typical} className="grid grid-cols-2 border-t border-fg/8 px-5 py-4 sm:px-8 sm:py-5">
              <p className="pr-3 text-[14px] leading-relaxed text-fg/40">{row.typical}</p>
              <p className="text-[14px] leading-relaxed font-medium text-fg">{row.cortex}</p>
            </div>
          ))}
        </div>
        <CtaBlock />
      </div>
    </RevealSection>
  );
}

function Walkthrough() {
  return (
    <RevealSection className="border-t border-fg/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">The 30 minutes</p>
          <h2 className="mt-3 text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.12] font-medium tracking-tight text-fg">
            We walk the leftover. You leave knowing where AI belongs.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-fg/55">
            Not a pitch deck. How leads, jobs, money, and follow-up actually move through the software your team already uses.
          </p>
        </div>
        <ol className="mt-10 space-y-0 lg:mt-0">
          {[
            ["Before", "You tell us the business, the stack, and the leftover that hurts. Leads that go cold. Jobs that stall. Invoices that sit."],
            ["During", "We walk leads, jobs, customers, reporting, and handoffs. Named tools are examples, not a certified list we pretend already works."],
            ["After", "A ranked map. What to implement first, what integrations are real, what should stay human, and the best place to start."],
          ].map(([t, b], i) => (
            <li key={t} className="grid grid-cols-[4rem_1fr] gap-5 border-t border-fg/8 py-8 first:border-t-0 first:pt-0">
              <span className="font-mono text-sm tracking-widest text-gold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-fg">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg/55">{b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <CtaBlock />
    </RevealSection>
  );
}

function LeaveWith() {
  return (
    <RevealSection className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-surface px-6 py-12 sm:px-12 sm:py-16">
        <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">You leave with</p>
        <h2 className="mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.12] font-medium tracking-tight text-fg">
          A map, not a homework assignment in how AI works.
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {[
            "AI opportunity map ranked by leftover work",
            "Priority workflows in ops, sales, and marketing",
            "What we can actually connect in your stack",
            "Complexity, so you are not sold a 40-agent toy box",
            "The first path we would implement",
            "What we would not automate on purpose",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fg/70">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Cta />
        </div>
      </div>
    </RevealSection>
  );
}

function LookAt() {
  return (
    <RevealSection className="border-t border-fg/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">What we look at</p>
        <h2 className="mt-3 text-[clamp(1.7rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-tight text-fg">
          Get work. Win work. Run the shop. Get paid.
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-fg/55">
          The audit is not a software tour. It is leftover jobs in the tools you already run.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
        {[
          { kind: "get" as const, t: "Get work", b: "GBP, ads, recaps, reviews. The listing and the spend you already pay for." },
          { kind: "win" as const, t: "Win work", b: "Missed calls, form fills, aging quotes, declined lines." },
          { kind: "run" as const, t: "Run the shop", b: "Stalled jobs, unbilled work, the owner report nobody wants to build." },
        ].map((p) => (
          <article key={p.t} className="rounded-[24px] bg-surface">
            <div className="p-3 pb-0">
              <PillarScene kind={p.kind} />
            </div>
            <div className="px-6 pt-5 pb-6">
              <h3 className="text-lg font-medium text-fg">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg/50">{p.b}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
        {CONNECT_TOOLS.slice(0, 10).map((t) => (
          <span key={t.name} className="inline-flex items-center gap-2 rounded-full border border-fg/8 bg-elevated px-3 py-1.5">
            <img src={`/images/logos/${t.file}`} alt="" className="size-4 object-contain" />
            <span className="text-[12px] text-fg/65">{t.name}</span>
          </span>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-xl px-4 text-center text-[12px] text-fg/40">
        Named tools are examples we see. What we can connect depends on the audit.
      </p>
      <CtaBlock />
    </RevealSection>
  );
}

const FEATURED = ["automotive", "hvac", "plumbing", "roofing", "home-services", "pest-control", "contracting", "smart-home", "windows"] as const;

function Trades() {
  const featured = FEATURED.map((slug) => INDUSTRIES.find((i) => i.slug === slug)!);
  const rest = INDUSTRIES.filter((i) => !FEATURED.includes(i.slug as (typeof FEATURED)[number])).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  return (
    <RevealSection className="border-t border-fg/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">Who this is for</p>
        <h2 className="mt-3 text-[clamp(1.7rem,3.6vw,2.75rem)] leading-[1.12] font-medium tracking-tight text-fg">
          Built for the trades you already run.
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((ind) => (
          <Link
            key={ind.slug}
            to="/audit/$slug"
            params={{ slug: ind.slug }}
            className="group overflow-hidden rounded-[22px] border border-fg/8 bg-elevated transition-shadow hover:shadow-[0_16px_50px_rgba(17,17,17,0.08)]"
          >
            <img src={`/images/cortex/trades/${ind.slug}.jpg`} alt="" className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-medium text-fg group-hover:text-gold">{ind.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-fg/50">{ind.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-2">
        {rest.map((ind) => (
          <Link
            key={ind.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(ind) }}
            className="rounded-full border border-fg/10 bg-elevated px-4 py-2 text-sm text-fg/70 hover:border-gold/40 hover:text-fg"
          >
            {ind.name}
          </Link>
        ))}
      </div>
      <CtaBlock />
    </RevealSection>
  );
}

function Founder() {
  const study = CASE_STUDIES[0];
  return (
    <RevealSection className="border-t border-fg/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">From the founder</p>
        <h2 className="mt-3 text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.12] font-medium tracking-tight text-fg">
          Most companies do not have a software shortage. They have leftover work between the logins.
        </h2>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-fg/60">
          <p>
            ChatGPT is a tab you open. It does not watch stalled jobs, missed calls, or unbilled work unless you paste them in. That is why shops try AI and still feel like they are behind.
          </p>
          <p>
            Cortex implements agents in the software you already run. The audit is how we show you where that is real, and where a person still has to own it.
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
          See it in a real shop
        </Link>
        <div className="mt-10">
          <Cta />
        </div>
      </div>
    </RevealSection>
  );
}

const FAQ_KEEP = [
  "What is included in the Free AI Operations Audit?",
  "What software can you connect to?",
  "Do I need to replace my existing software?",
  "Will this replace my employees?",
  "Do you work with companies under $2M?",
  "How much does implementation cost?",
  "Can AI run locally?",
  "What happens after implementation?",
];

function Faq() {
  return (
    <RevealSection className="border-t border-fg/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">Before you apply</p>
        <h2 className="mt-3 text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.12] font-medium tracking-tight text-fg">
          Questions owners actually ask
        </h2>
        <div className="mt-10 divide-y divide-fg/10 border-y border-fg/10">
          {FAQS.filter((f) => FAQ_KEEP.includes(f.q)).map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-medium tracking-tight text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="mt-0.5 text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-fg/55">{item.a}</p>
            </details>
          ))}
        </div>
        <CtaBlock />
      </div>
    </RevealSection>
  );
}

function Final() {
  return (
    <RevealSection className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-surface px-6 py-14 text-center sm:px-12 sm:py-16">
        <h2 className="text-[clamp(1.7rem,3.8vw,2.85rem)] leading-[1.12] font-medium tracking-tight text-fg">
          Find out where AI belongs in your operation. Without learning it yourself.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-fg/55">
          A minute to apply. Thirty minutes on how work moves. You leave with a ranked map.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <Cta />
        </div>
      </div>
    </RevealSection>
  );
}

function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-fg/10 bg-bg/92 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <Cta>Request your free audit</Cta>
    </div>
  );
}
