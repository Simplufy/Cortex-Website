import { createFileRoute, Link } from "@tanstack/react-router";
import { BRAND } from "@/data/brand";
import { CASE_STUDIES, FAQS, INDUSTRIES, PILLARS } from "@/data/site";
import { AuditButton } from "@/components/audit-modal";
import { CortexMap } from "@/components/visuals";
import { FounderPhoto } from "@/components/logo";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { VslPlayer } from "@/components/vsl-player";

export const Route = createFileRoute("/audit/")({
  head: () =>
    pageHead({
      title: "Free AI Operations Audit",
      description:
        "Find out what AI could actually take off your team. We'll review how work moves through your business, the software you already use, and where people are still doing repetitive work manually.",
      path: "/audit",
    }),
  component: AuditLanding,
});

function Cta({ children = "Get My Free AI Operations Audit" }: { children?: string }) {
  return (
    <AuditButton className="w-full sm:w-auto">
      {children}
    </AuditButton>
  );
}

function AuditLanding() {
  return (
    <article className="overflow-x-clip pb-24 md:pb-0">
      <Hero />
      <ProofStrip />
      <Problem />
      <AuditWhat />
      <Method />
      <Industries />
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
      <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-gold uppercase">{BRAND.legal}</p>
      <h1 className="text-balance text-[1.55rem] leading-[1.12] font-medium tracking-tighter text-fg sm:text-4xl lg:text-[2.75rem]">
        See the leftover work in your operation.
        <br />
        <span className="text-gold">Leave with a ranked map of what AI can actually take off your team.</span>
      </h1>
      <p className="mt-3 max-w-md text-xs text-fg/50 sm:mt-4">
        For established service businesses. No obligation to implement anything.
      </p>
      <div className="mx-auto mt-5 w-full max-w-3xl sm:mt-6">
        <p className="mb-2 text-[10px] font-bold tracking-[0.22em] text-gold uppercase">
          See a real AI system inside a service business
        </p>
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
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed font-light text-fg/60 sm:text-base">
        We’ll map the work between your systems. You leave with a prioritized AI opportunity map.
      </p>
    </RevealSection>
  );
}

function ProofStrip() {
  return (
    <RevealSection className="border-y border-fg/5 py-10 sm:py-14">
      <div className="mx-auto grid max-w-5xl gap-3 px-4 sm:gap-4 sm:px-6 md:grid-cols-3">
        {[
          ["30-minute operational walkthrough", "Show us how the work actually moves."],
          ["Built around your existing software", "No rip-and-replace requirement."],
          ["Leave with a prioritized roadmap", "Know where AI makes sense before spending money building it."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-5 text-center sm:p-6">
            <h3 className="font-medium text-fg">{t}</h3>
            <p className="mt-2 text-sm font-light text-fg/55">{b}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function Problem() {
  return (
    <RevealSection className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-16 sm:pb-12">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">The stall</p>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-5xl">
        You already have the software. Your team still does the work between it.
      </h2>
      <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
        {[
          ["Information lives in different systems", "Someone still has to piece together the full picture."],
          ["Follow-up depends on someone remembering", "Leads, estimates, approvals, declined work, and customer updates wait when the team gets busy."],
          ["Reporting takes people away from operations", "Managers rebuild the same numbers every day or every week."],
          ["Problems are found after they become problems", "Nobody is continuously watching every system for stalled work, exceptions, or missed opportunities."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-8">
            <h3 className="text-lg font-medium text-fg sm:text-xl">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60 sm:mt-3">{b}</p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 w-full max-w-md text-center sm:mt-12">
        <Cta />
      </div>
    </RevealSection>
  );
}

function AuditWhat() {
  return (
    <RevealSection className="border-t border-fg/5 pt-14 pb-14 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">The free audit</p>
        <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-5xl">What you actually get</h2>
        <p className="mt-4 text-sm font-light text-fg/60 sm:mt-5 sm:text-lg">
          We'll review your software stack, workflows, bottlenecks, reporting, follow-up, and repetitive administrative
          work. Then we'll show you the highest-value places AI could help, including what we'd automate first, what
          integrations are required, and what should stay human.
        </p>
      </div>
      <ol className="mx-auto mt-8 max-w-3xl space-y-3 px-4 sm:mt-12 sm:space-y-4 sm:px-6">
        {[
          ["Before the audit", "You tell us about your business, team, current software, and biggest operational bottlenecks."],
          ["During the audit", "We walk through how leads, jobs, customers, reporting, and internal handoffs actually move."],
          [
            "After the audit",
            "You receive a prioritized list of AI opportunities, integration requirements, implementation complexity, and the best place to start.",
          ],
        ].map(([t, b]) => (
          <li key={t} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-8">
            <h3 className="font-medium text-fg">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60 sm:mt-3">{b}</p>
          </li>
        ))}
      </ol>
      <div className="mx-auto mt-8 grid max-w-3xl gap-2 px-4 sm:mt-10 sm:grid-cols-2 sm:px-6">
        {[
          "AI opportunity map",
          "Priority workflows",
          "Integration feasibility",
          "Complexity assessment",
          "Recommended starting point",
          "What we would not automate",
        ].map((item) => (
          <div key={item} className="rounded-xl border border-fg/10 bg-surface px-4 py-3 text-sm text-fg/80">
            {item}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 w-full max-w-md text-center sm:mt-12">
        <Cta />
      </div>
    </RevealSection>
  );
}

function Method() {
  const study = CASE_STUDIES[0];
  return (
    <RevealSection className="border-t border-fg/5 pt-14 pb-14 sm:pt-16 sm:pb-16">
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-14 sm:px-6">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">How it works</p>
        <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-5xl">Audit. Design. Build. Deploy. Manage.</h2>
        <p className="mt-4 text-sm font-light text-fg/60 sm:mt-5 sm:text-lg">
          The audit is the first step. You see the opportunity before anyone starts building.
        </p>
      </div>
      <div className="mx-auto mb-10 max-w-5xl px-4 sm:mb-12 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-fg/10">
          <CortexMap variant={0} />
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:grid-cols-5">
        {PILLARS.map((p) => (
          <article key={p.num} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-6">
            <div className="text-[10px] font-bold tracking-widest text-gold uppercase">
              {p.num} {p.kicker}
            </div>
            <h3 className="mt-3 text-lg font-medium text-fg">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/55">{p.body}</p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-5xl px-4 text-center sm:mt-16 sm:px-6">
        <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">In the field</p>
        <h3 className="mt-3 text-2xl font-medium text-fg md:text-3xl">{study.name}</h3>
        <p className="mt-2 font-light text-fg/60">
          {study.role}. {study.location}.
        </p>
        <Link
          to="/case-studies/$slug"
          params={{ slug: study.slug }}
          className="mt-5 inline-block text-sm font-medium text-gold hover:text-gold-light"
        >
          View the deployment
        </Link>
      </div>
    </RevealSection>
  );
}

function Industries() {
  return (
    <RevealSection className="border-t border-fg/5 pt-14 pb-14 sm:pt-16 sm:pb-16">
      <div className="mx-auto mb-8 max-w-3xl px-4 text-center sm:mb-12 sm:px-6">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">Who this is for</p>
        <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-4xl">
          Built for the software and workflows your industry actually uses.
        </h2>
        <p className="mt-4 text-sm font-light text-fg/55 sm:text-base">
          Automotive, HVAC, pest, roofing, plumbing, and the rest of the trades.
        </p>
      </div>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 px-4 sm:px-6">
        {INDUSTRIES.map((i) => (
          <Link
            key={i.slug}
            to="/audit/$slug"
            params={{ slug: i.slug }}
            className="rounded-full border border-fg/10 bg-surface px-4 py-2 text-sm text-fg/70 hover:border-gold/40 hover:text-fg"
          >
            {i.name}
          </Link>
        ))}
      </div>
    </RevealSection>
  );
}

function Founder() {
  return (
    <RevealSection className="border-t border-fg/5 px-4 pt-14 pb-14 sm:px-6 sm:pt-16 sm:pb-16">
      <p className="mb-6 text-center text-[10px] font-bold tracking-widest text-gold uppercase sm:mb-8">From the founder</p>
      <blockquote className="mx-auto max-w-4xl text-center">
        <p className="text-balance text-xl leading-snug font-medium tracking-tight text-fg sm:text-2xl md:text-4xl">
          “Most companies do not have a software shortage.{" "}
          <span className="text-gold">They have a people-operating-the-software problem.</span> Cortex connects AI
          agents to those systems so the repetitive work between them no longer depends on someone remembering to do
          it.”
        </p>
        <footer className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
          <FounderPhoto className="size-12" />
          <div className="text-left">
            <div className="text-sm font-medium text-fg">{BRAND.founder}</div>
            <div className="text-xs text-fg/50">
              {BRAND.founderRole}, {BRAND.name}
            </div>
          </div>
        </footer>
      </blockquote>
    </RevealSection>
  );
}

function Faq() {
  return (
    <RevealSection className="border-t border-fg/5 pt-14 pb-14 sm:pt-16 sm:pb-16">
      <h2 className="mb-8 px-4 text-center text-2xl font-medium tracking-tight text-fg sm:mb-12 sm:text-3xl md:text-4xl">
        Questions before the audit
      </h2>
      <div className="mx-auto max-w-3xl space-y-3 px-4 sm:space-y-4 sm:px-6">
        {FAQS.filter((f) =>
          [
            "What is included in the Free AI Operations Audit?",
            "What software can you connect to?",
            "Do I need to replace my existing software?",
            "Will this replace my employees?",
            "Do you work with companies under $2M?",
            "How much does implementation cost?",
            "Can AI run locally?",
            "What happens after implementation?",
          ].includes(f.q),
        ).map((item) => (
          <article key={item.q} className="rounded-2xl border border-fg/10 bg-surface p-5 sm:p-6">
            <h3 className="font-medium text-fg">{item.q}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{item.a}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function Final() {
  return (
    <RevealSection className="border-t border-fg/5 py-16 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-5xl">
          Find the highest-value work AI can take off your team.
        </h2>
        <p className="mt-4 text-sm font-light text-fg/60 sm:mt-5 sm:text-lg">
          A minute to apply. Thirty minutes on how work moves. You leave with a map.
        </p>
        <div className="mx-auto mt-8 w-full max-w-md sm:mt-10">
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
