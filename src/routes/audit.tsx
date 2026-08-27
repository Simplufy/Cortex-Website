import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { BRAND } from "@/data/brand";
import { CASE_STUDIES, FAQS, INDUSTRIES, PILLARS } from "@/data/site";
import { AuditButton } from "@/components/audit-modal";
import { CortexMap } from "@/components/visuals";
import { FounderPhoto, LetterMark } from "@/components/logo";

export const Route = createFileRoute("/audit")({ component: AuditLanding });

function AuditLanding() {
  const quotes = CASE_STUDIES.filter((c) =>
    ["membership-hvac", "storm-roofing", "multi-trade-gc"].includes(c.slug),
  );
  return (
    <article>
      <Hero />
      <ProofStrip />
      <Problem />
      <Method />
      <AuditWhat />
      <Quotes quotes={quotes} />
      <Industries />
      <Founder />
      <Faq />
      <Final />
    </article>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-6 pb-12 text-center lg:pt-8 lg:pb-14">
      <p className="mb-4 text-[10px] font-bold tracking-[0.22em] text-gold uppercase">{BRAND.legal}</p>
      <h1 className="text-balance text-4xl leading-[1.08] font-medium tracking-tighter text-fg sm:text-5xl">
        Watch how companies connect the software they already pay for with AI
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed font-light text-fg/60 sm:text-lg">
        And take <span className="text-fg">200+ hours a month</span> of leftover admin off their people. Three minutes.
        Then grab the free audit.
      </p>
      <div className="mx-auto mt-5 max-w-2xl overflow-visible">
        <VslPlayer />
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <AuditButton>Get a Free AI Operations Audit</AuditButton>
      </div>
      <p className="mt-3 text-xs text-fg/40">No generic presentation. No obligation to build.</p>
    </section>
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
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 flex flex-col items-center justify-center bg-bg/25"
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
    <section className="border-y border-fg/5 py-14">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 text-center md:grid-cols-3">
        {[
          ["Keep your software", "CRM, shop tools, accounting stay. Agents sit on top."],
          ["Built for the trades", "Auto, HVAC, pest, roofing, home services first."],
          ["A useful report", "Where AI helps, what is hard, what we would not touch."],
        ].map(([t, b]) => (
          <div key={t}>
            <div className="text-lg font-medium text-fg">{t}</div>
            <div className="mt-2 text-sm font-light text-fg/50">{b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
      <p className="mb-4 text-center text-[10px] font-bold tracking-widest text-gold uppercase">The stall</p>
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-medium tracking-tight text-fg md:text-5xl">
        You already pay for the software. People still operate it by hand.
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        {[
          ["The tools don’t talk", "Job in one system. Customer in another. Ads in a third. A person is the integration."],
          ["Follow-up depends on memory", "Estimates, declined work, missed calls. The queue is whoever remembered."],
          ["A chatbot is not an operations system", "It waits for a prompt. It does not watch open jobs."],
          ["Reporting is still a Sunday job", "The owner rebuilds the week from five logins."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <AuditButton>Get a free audit</AuditButton>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">How it works</p>
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-5xl">Audit. Build. Deploy. Manage.</h2>
        <p className="mt-5 text-lg font-light text-fg/60">
          The audit is the first step. You see the opportunity before anyone sells you a build.
        </p>
      </div>
      <div className="mx-auto mb-12 max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-fg/10">
          <CortexMap variant={0} />
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="mt-12 text-center">
        <AuditButton>Get a free audit</AuditButton>
      </div>
    </section>
  );
}

function AuditWhat() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">The free audit</p>
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-5xl">What you get from the audit</h2>
        <p className="mt-5 text-lg font-light text-fg/60">
          A practical read on where agents could help inside this company. Not a generic AI presentation.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        {[
          ["What you bring", "How a job actually gets done. The software you already pay for. Where the week stalls."],
          ["What we do", "Map the stack. Mark the copying, the follow-up, the reports people still build by hand."],
          ["What you leave with", "Highest-value opportunities, complexity, and what we would not automate. No obligation to build."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <AuditButton>Get a free audit</AuditButton>
      </div>
    </section>
  );
}

function Quotes({
  quotes,
}: {
  quotes: { slug: string; quote: string; mark: string; person: string; role: string }[];
}) {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">From the field</p>
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-4xl">Example deployments</h2>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        {quotes.map((c) => (
          <blockquote key={c.slug} className="flex flex-col rounded-2xl border border-fg/10 bg-surface p-8">
            <p className="flex-1 text-lg leading-relaxed font-light text-fg/80">“{c.quote}”</p>
            <footer className="mt-8 flex items-center gap-3">
              <LetterMark letters={c.mark} className="size-10 text-xs" />
              <div>
                <div className="text-sm font-medium text-fg">{c.person}</div>
                <div className="text-xs text-fg/40">{c.role}</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">Who this is for</p>
        <h2 className="text-3xl font-medium tracking-tight text-fg md:text-4xl">Field service and the trades</h2>
        <p className="mt-4 font-light text-fg/55">Different trucks. Same leftover admin between the systems.</p>
      </div>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 px-6">
        {INDUSTRIES.map((i) => (
          <Link
            key={i.slug}
            to={i.href}
            className="rounded-full border border-fg/10 bg-surface px-4 py-2 text-sm text-fg/70 hover:border-gold/40 hover:text-fg"
          >
            {i.name}
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <AuditButton>Get a free audit</AuditButton>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="border-t border-fg/5 px-6 pt-24 pb-24">
      <p className="mb-8 text-center text-[10px] font-bold tracking-widest text-gold uppercase">From the founder</p>
      <blockquote className="mx-auto max-w-4xl text-center">
        <p className="text-balance text-2xl leading-snug font-medium tracking-tight text-fg md:text-4xl">
          “Most companies do not have a software shortage.{" "}
          <span className="text-gold">They have a people-operating-the-software problem.</span> We install agents that
          work inside the tools they already pay for.”
        </p>
        <footer className="mt-10 flex items-center justify-center gap-3">
          <FounderPhoto className="size-12" />
          <div className="text-left">
            <div className="text-sm font-medium text-fg">{BRAND.founder}</div>
            <div className="text-xs text-fg/40">
              {BRAND.founderRole}, {BRAND.name}
            </div>
          </div>
        </footer>
      </blockquote>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl">
        Questions before the audit
      </h2>
      <div className="mx-auto max-w-3xl space-y-4 px-6">
        {FAQS.slice(0, 8).map((item) => (
          <article key={item.q} className="rounded-2xl border border-fg/10 bg-surface p-6">
            <h3 className="font-medium text-fg">{item.q}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="px-6 py-28 text-center">
      <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">
        See where AI makes sense. And where it does not.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg font-light text-fg/60">
        No generic presentation. No obligation to build.
      </p>
      <div className="mt-10">
        <AuditButton>Get a Free AI Operations Audit</AuditButton>
      </div>
    </section>
  );
}
