import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { BRAND } from "@/data/brand";
import { CASE_STUDIES, FAQS, INDUSTRIES, PILLARS, industryParam } from "@/data/site";
import { AuditButton } from "@/components/audit-modal";
import { CortexMap } from "@/components/visuals";
import { FounderPhoto } from "@/components/logo";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/audit")({
  head: () =>
    pageHead({
      title: "Free AI Operations Audit",
      description:
        "Find out what AI could actually take off your team. We'll review how work moves through your business, the software you already use, and where people are still doing repetitive work manually.",
      path: "/audit",
    }),
  component: AuditLanding,
});

function AuditLanding() {
  return (
    <article>
      <Hero />
      <ProofStrip />
      <Problem />
      <AuditWhat />
      <Method />
      <Industries />
      <Founder />
      <Faq />
      <Final />
    </article>
  );
}

function Hero() {
  return (
    <RevealSection className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col items-center justify-start px-6 pt-5 pb-6 text-center lg:justify-center lg:py-6">
      <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-gold uppercase">{BRAND.legal}</p>
      <h1 className="text-balance text-3xl leading-[1.08] font-medium tracking-tighter text-fg sm:text-4xl lg:text-[2.75rem]">
        Find out what AI could actually take off your team.
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed font-light text-fg/60 sm:text-base">
        We'll map the work between your systems. You leave with a prioritized AI opportunity map.
      </p>
      <div className="mx-auto mt-5 flex w-full max-w-lg flex-col items-center">
        <p className="mb-2 text-[10px] font-bold tracking-[0.22em] text-gold uppercase">
          See a real AI system inside a service business
        </p>
        <VslPlayer />
        <div className="mt-5">
          <AuditButton variant="solid">Get My Free AI Operations Audit</AuditButton>
        </div>
        <p className="mt-2 text-xs text-fg/50">For established service businesses. No obligation to implement anything.</p>
      </div>
    </RevealSection>
  );
}

function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    void v.play();
    setPlaying(true);
  };

  return (
    <div className="vsl-frame">
      <div className="vsl-glow-core" aria-hidden />
      <div className="vsl-glow-orbit" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-surface vsl-rim">
        <video
          ref={videoRef}
          className="aspect-video w-full object-cover"
          poster={BRAND.vslPoster}
          src={BRAND.vslSrc}
          playsInline
          preload="metadata"
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <track kind="captions" srcLang="en" label="English" src="/videos/vsl.vtt" />
        </video>
        {!playing && (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 flex flex-col items-center justify-center bg-bg/25 focus-visible:ring-2 focus-visible:ring-gold/60"
            aria-label="Play briefing"
          >
            <span className="flex size-16 items-center justify-center rounded-full border border-gold/40 bg-bg/70 text-gold backdrop-blur-sm transition-transform hover:scale-105">
              <Play className="ml-0.5 size-7" fill="currentColor" />
            </span>
            <span className="mt-4 text-[10px] font-bold tracking-[0.2em] text-fg/80 uppercase">Watch the briefing</span>
          </button>
        )}
      </div>
    </div>
  );
}

function ProofStrip() {
  return (
    <RevealSection className="border-y border-fg/5 py-14">
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        {[
          ["30-minute operational walkthrough", "Show us how the work actually moves."],
          ["Built around your existing software", "No rip-and-replace requirement."],
          ["Leave with a prioritized roadmap", "Know where AI makes sense before spending money building it."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-6 text-center">
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
    <RevealSection className="mx-auto max-w-6xl px-6 pt-24 pb-16">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">The stall</p>
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-medium tracking-tight text-fg md:text-5xl">
        You already have the software. Your team still does the work between it.
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        {[
          ["Information lives in different systems", "Someone still has to piece together the full picture."],
          ["Follow-up depends on someone remembering", "Leads, estimates, approvals, declined work, and customer updates wait when the team gets busy."],
          ["Reporting takes people away from operations", "Managers rebuild the same numbers every day or every week."],
          ["Problems are found after they become problems", "Nobody is continuously watching every system for stalled work, exceptions, or missed opportunities."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <AuditButton variant="solid">Get My Free AI Operations Audit</AuditButton>
      </div>
    </RevealSection>
  );
}

function AuditWhat() {
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">The free audit</p>
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-5xl">What you actually get</h2>
        <p className="mt-5 text-lg font-light text-fg/60">
          We'll review your software stack, workflows, bottlenecks, reporting, follow-up, and repetitive administrative
          work. Then we'll show you the highest-value places AI could help — including what we'd automate first, what
          integrations are required, and what should stay human.
        </p>
      </div>
      <ol className="mx-auto mt-12 max-w-3xl space-y-4 px-6">
        {[
          ["Before the audit", "You tell us about your business, team, current software, and biggest operational bottlenecks."],
          ["During the audit", "We walk through how leads, jobs, customers, reporting, and internal handoffs actually move."],
          [
            "After the audit",
            "You receive a prioritized list of AI opportunities, integration requirements, implementation complexity, and the best place to start.",
          ],
        ].map(([t, b]) => (
          <li key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </li>
        ))}
      </ol>
      <div className="mx-auto mt-10 grid max-w-3xl gap-2 px-6 sm:grid-cols-2">
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
      <div className="mt-12 text-center">
        <AuditButton variant="solid">Get My Free AI Operations Audit</AuditButton>
      </div>
    </RevealSection>
  );
}

function Method() {
  const study = CASE_STUDIES[0];
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">How it works</p>
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-5xl">Audit. Design. Build. Deploy. Manage.</h2>
        <p className="mt-5 text-lg font-light text-fg/60">
          The audit is the first step. You see the opportunity before anyone starts building.
        </p>
      </div>
      <div className="mx-auto mb-12 max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-fg/10">
          <CortexMap variant={0} />
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {PILLARS.map((p) => (
          <article key={p.num} className="rounded-2xl border border-fg/10 bg-surface p-6">
            <div className="text-[10px] font-bold tracking-widest text-gold uppercase">
              {p.num} {p.kicker}
            </div>
            <h3 className="mt-3 text-lg font-medium text-fg">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/55">{p.body}</p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-5xl px-6 text-center">
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
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">Who this is for</p>
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-4xl">
          Built for the software and workflows your industry actually uses.
        </h2>
        <p className="mt-4 font-light text-fg/55">Automotive, HVAC, pest, roofing, plumbing, and the rest of the trades.</p>
      </div>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 px-6">
        {INDUSTRIES.map((i) => (
          <Link
            key={i.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(i) }}
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
    <RevealSection className="border-t border-fg/5 px-6 pt-24 pb-24">
      <p className="mb-8 text-center text-[10px] font-bold tracking-widest text-gold uppercase">From the founder</p>
      <blockquote className="mx-auto max-w-4xl text-center">
        <p className="text-balance text-2xl leading-snug font-medium tracking-tight text-fg md:text-4xl">
          “Most companies do not have a software shortage.{" "}
          <span className="text-gold">They have a people-operating-the-software problem.</span> Cortex connects AI
          agents to those systems so the repetitive work between them no longer depends on someone remembering to do
          it.”
        </p>
        <footer className="mt-10 flex items-center justify-center gap-3">
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
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl">
        Questions before the audit
      </h2>
      <div className="mx-auto max-w-3xl space-y-4 px-6">
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
          <article key={item.q} className="rounded-2xl border border-fg/10 bg-surface p-6">
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
    <RevealSection className="border-t border-fg/5 py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-5xl">
          Find the highest-value work AI can take off your team.
        </h2>
        <p className="mt-5 text-lg font-light text-fg/60">
          A minute to apply. Thirty minutes on how work moves. You leave with a map.
        </p>
        <div className="mt-10">
          <AuditButton variant="solid">Get My Free AI Operations Audit</AuditButton>
        </div>
      </div>
    </RevealSection>
  );
}
