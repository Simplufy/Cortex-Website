import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GhostButton } from "@/components/ui/beam-button";
import { SectionHead } from "@/components/ui/page-hero";
import { FounderPhoto } from "@/components/logo";
import { AuditButton } from "@/components/audit-modal";
import { RevealSection } from "@/components/reveal";
import { ProcessSteps } from "@/components/pages/inner";
import { ConstellationField } from "@/components/constellation-field";
import { NeuralScroll } from "@/components/neural-scroll";
import { BRAND } from "@/data/brand";
import {
  AGENT_CATEGORIES,
  CASE_STUDIES,
  COMPARISON,
  FAQS,
  INDUSTRIES,
  PILLARS,
  SOFTWARE_CATEGORIES,
  industryParam,
} from "@/data/site";

export function HomePage() {
  return (
    <>
      <Hero />
      <NeuralScroll />
      <Problem />
      <Layer />
      <Departments />
      <Industries />
      <Integrations />
      <Process />
      <PrivateAi />
      <Security />
      <Founder />
      <Proof />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <main className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <ConstellationField className="opacity-70" />
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <p className="animate-fade-up mb-6 text-[10px] font-bold tracking-[0.22em] text-gold uppercase">{BRAND.legal}</p>
        <h1 className="animate-fade-up delay-100 text-balance text-4xl leading-[1.06] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl">
          Custom AI systems built around{" "}
          <span className="text-gold">the way your business actually works.</span>
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-balance text-lg leading-relaxed font-light text-fg/60 md:text-xl">
          We connect AI agents to the software your team already uses so they can monitor work, follow up, build
          reports, catch problems, and handle repetitive tasks across your operation.
        </p>
        <div className="animate-fade-up delay-300 mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <AuditButton>Get Your Free AI Operations Audit</AuditButton>
          <GhostButton to="/how-we-work">See How It Works</GhostButton>
        </div>
        <p className="animate-fade-up delay-300 mt-5 text-sm text-fg/45">
          Keep your existing software. Cortex works across it.
        </p>
      </div>
    </main>
  );
}

function Problem() {
  return (
    <RevealSection className="pt-24 pb-24">
      <SectionHead
        kicker="The stall"
        title="You already have the software. Your team still does the work between it."
        body="Your CRM knows the customer. Your operations platform knows the job. Your phone system knows the calls. Your accounting software knows the money. Your ad platforms know the lead source. Your people are still the ones checking, copying, following up, reconciling, reporting, and making sure nothing falls through the cracks."
      />
      <div className="mx-auto max-w-3xl divide-y divide-fg/10 px-6">
        {[
          [
            "Information lives in different systems",
            "Someone still has to piece together the full picture.",
          ],
          [
            "Follow-up depends on someone remembering",
            "Leads, estimates, approvals, declined work, and customer updates wait when the team gets busy.",
          ],
          [
            "Reporting takes people away from operations",
            "Managers rebuild the same numbers every day or every week.",
          ],
          [
            "Problems are found after they become problems",
            "Nobody is continuously watching every system for stalled work, exceptions, or missed opportunities.",
          ],
        ].map(([t, b], i) => (
          <article
            key={t}
            className="group grid gap-3 py-8 transition-colors sm:grid-cols-[4rem_1fr] sm:gap-8"
          >
            <span className="text-sm font-medium tracking-[0.18em] text-gold">{String(i + 1).padStart(2, "0")}</span>
            <div className="relative pl-5">
              <span className="absolute top-1 left-0 h-[calc(100%-4px)] w-px bg-fg/10 transition-colors group-hover:bg-gold" />
              <h3 className="text-xl font-medium tracking-tight text-fg md:text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed font-light text-fg/60 md:text-base">{b}</p>
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function Layer() {
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="What we install"
        title="Give your operation an AI layer."
        body="Cortex connects specialized AI agents to the software your business already runs. Each agent is responsible for specific work — monitoring, following up, reporting, coordinating, or escalating when a person is needed. The same build includes a secure dashboard so operations, marketing, and finance sit in one place."
      />
      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-12 px-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          [
            "01",
            "Understand the operation",
            "We map how work moves through your company and where time, information, or opportunities get lost.",
          ],
          [
            "02",
            "Connect the systems",
            "We securely connect the relevant CRM, operations, communication, marketing, accounting, and industry-specific platforms.",
          ],
          [
            "03",
            "Build specialized agents",
            "Each agent gets a defined job, access level, rules, tools, and escalation path.",
          ],
          [
            "04",
            "Deploy and continuously improve",
            "We test the system with your team, measure performance, and improve it as your operation changes.",
          ],
        ].map(([n, t, b]) => (
          <article key={t}>
            <div className="flex size-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-sm font-medium tracking-widest text-gold">
              {n}
            </div>
            <h3 className="mt-5 text-xl font-medium tracking-tight text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function Proof() {
  const study = CASE_STUDIES[0];
  return (
    <RevealSection className="relative z-20 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-[radial-gradient(ellipse_at_top_left,rgb(var(--gold-rgb)/0.12),transparent_55%)] px-6 py-12 md:px-14 md:py-16">
          <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">
            See what this looks like inside a real business
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-fg md:text-5xl">
            A multi-business automotive operation
          </h2>
          <p className="mt-5 max-w-2xl font-light text-fg/60">
            Cortex connects AI agents across shop management, CRM, customer communication, advertising, review
            management, and internal reporting. The system runs on dedicated private AI infrastructure, with cloud
            models available when a task requires them. A secure operator dashboard is included in the same build.
          </p>
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              ["Systems connected", String(study.systems.length)],
              ["Shop types", "4 — repair, collision, detailing, glass"],
              ["Infrastructure", "Private + cloud hybrid"],
              ["Operator dashboard", "Included"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-fg/10 pt-4">
                <dt className="text-[10px] font-bold tracking-widest text-gold uppercase">{k}</dt>
                <dd className="mt-2 text-lg text-fg">{v}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/case-studies/$slug"
            params={{ slug: study.slug }}
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light"
          >
            View the deployment
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}

function Departments() {
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="Across the business"
        title="Put AI to work across the business."
        body="Agents can handle repetitive work across sales, operations, customer experience, marketing, and management — while your team keeps the decisions that require judgment."
      />
      <div className="mx-auto max-w-6xl overflow-hidden px-6">
        <div className="grid divide-y divide-fg/10 border-y border-fg/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-5 lg:divide-y-0">
          {AGENT_CATEGORIES.map((c) => (
            <article key={c.title} className="px-5 py-8 transition-colors hover:bg-gold/5 lg:py-10">
              <h3 className="font-medium text-fg">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-sm font-light text-fg/60">
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function Integrations() {
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="Systems"
        title="Your AI should not become another disconnected tool."
        body="Cortex connects your AI agents to the systems your team already relies on. We use official APIs and integrations wherever possible, then evaluate other secure connection methods when necessary. Every integration is confirmed during the audit."
      />
      <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {SOFTWARE_CATEGORIES.map((s) => (
          <article key={s.title} className="border-t border-gold/45 pt-5">
            <h3 className="font-medium text-fg">{s.title}</h3>
            <p className="mt-3 text-sm font-light text-fg/55">{s.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/integrations" className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light">
          Browse systems we evaluate
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </RevealSection>
  );
}

function Process() {
  return (
    <RevealSection className="relative pt-24 pb-24">
      <SectionHead
        title="Audit. Design. Build. Deploy. Manage."
        body="We understand the operation before we automate it. Every deployment starts by finding the highest-value work AI can realistically handle."
      />
      <ProcessSteps items={PILLARS} />
    </RevealSection>
  );
}

function Industries() {
  const featured = INDUSTRIES.filter((i) => ["automotive", "hvac", "plumbing", "electrical", "home-services"].includes(i.slug));
  const rest = INDUSTRIES.filter((i) => !featured.some((f) => f.slug === i.slug));
  return (
    <RevealSection className="relative pt-24 pb-24">
      <SectionHead
        title="Built for the software and workflows your industry actually uses."
        body="Automotive shops don't operate like HVAC companies. HVAC companies don't operate like roofers. We build around the systems, workflows, and bottlenecks specific to your industry."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12">
        {featured.slice(0, 1).map((ind) => (
          <Link
            key={ind.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(ind) }}
            className="group flex flex-col justify-between rounded-3xl border border-gold/30 bg-[radial-gradient(ellipse_at_top_left,rgb(var(--gold-rgb)/0.14),transparent_60%)] p-8 lg:col-span-5 lg:min-h-[300px]"
          >
            <div>
              <h3 className="text-2xl font-medium text-fg">{ind.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg/55">{ind.blurb}</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-light">
              See your industry
              <ArrowRight className="size-3.5" />
            </span>
          </Link>
        ))}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {featured.slice(1).map((ind) => (
            <Link
              key={ind.slug}
              to="/industries/$slug"
              params={{ slug: industryParam(ind) }}
              className="group border-t border-gold/40 pt-5"
            >
              <h3 className="text-lg font-medium text-fg">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg/50">{ind.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-light">
                See your industry
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2 px-6">
        {rest.map((i) => (
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

function PrivateAi() {
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="Infrastructure"
        title="Cloud, private, or hybrid."
        body="Cortex can run in the cloud, on dedicated hardware you control, or across both. Routine work can stay local while more demanding tasks use leading cloud models when needed. We design the architecture around privacy, performance, reliability, and cost — not around a specific model provider."
      />
      <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 px-6 md:grid-cols-3">
        {[
          ["Cloud", "Fast to start. Good for many workloads. You do not need a server room."],
          ["Private / local", "Hardware you own or control. More privacy, more predictability, and more stable costs for work that runs continuously."],
          ["Hybrid", "Usually the practical answer. Local for routine work. Cloud when the job needs it."],
        ].map(([t, b]) => (
          <article key={t} className="border-t border-gold/45 pt-5">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/private-ai" className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light">
          Private AI infrastructure
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </RevealSection>
  );
}

function Security() {
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="Trust"
        title="You decide what agents can do."
        body="Permissions, logs, and a person in the loop on anything that spends money or changes a customer promise."
      />
      <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 px-6 md:grid-cols-3">
        {[
          ["Least privilege", "Each agent and each dashboard view gets the systems and records it needs."],
          ["Human approval", "Drafts and flags first. Send, charge, or change a promise only when you say so."],
          ["Logged actions", "What ran, against which record, and who approved it."],
        ].map(([t, b]) => (
          <article key={t} className="border-t border-gold/45 pt-5">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/trust" className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light">
          Trust and security
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-fg/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-[10px] font-bold tracking-widest text-gold uppercase">
            <tr>
              <th className="px-6 py-4 font-bold">Off-the-shelf AI software</th>
              <th className="px-6 py-4 font-bold">Cortex</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row) => (
              <tr key={row.typical} className="border-t border-fg/10">
                <td className="px-6 py-4 font-light text-fg/50">{row.typical}</td>
                <td className="px-6 py-4 text-fg">{row.cortex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RevealSection>
  );
}

function Founder() {
  return (
    <RevealSection className="relative z-10 overflow-hidden pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <ConstellationField />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="mb-8 text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase">From the founder</p>
      <blockquote className="mx-auto max-w-4xl text-center">
        <p className="text-balance text-2xl leading-snug font-medium tracking-tight text-fg md:text-4xl">
          “Most companies do not have a software shortage.{" "}
          <span className="text-gold">They have a people-operating-the-software problem.</span> Cortex connects AI
          agents to those systems so the repetitive work between them no longer depends on someone remembering to do
          it.”
        </p>
        <footer className="mt-10 flex items-center justify-center gap-3">
          <FounderPhoto className="size-14 ring-1 ring-gold/40" />
          <div className="text-left">
            <div className="text-sm font-medium text-fg">{BRAND.founder}</div>
            <div className="text-xs text-fg/50">
              {BRAND.founderRole}, {BRAND.name}
            </div>
          </div>
        </footer>
      </blockquote>
      <div className="mt-8 text-center">
        <Link to="/about-us" className="text-sm font-medium text-gold hover:text-gold-light">
          About McGuire
        </Link>
      </div>
      </div>
    </RevealSection>
  );
}

function Faq() {
  return (
    <RevealSection className="pt-24 pb-24">
      <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl">Questions owners actually ask</h2>
      <div className="mx-auto max-w-3xl px-6">
        {FAQS.slice(0, 8).map((item) => (
          <details key={item.q} className="group border-b border-fg/10 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-fg marker:content-none [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed font-light text-fg/60">{item.a}</p>
          </details>
        ))}
      </div>
    </RevealSection>
  );
}

function FinalCta() {
  return (
    <RevealSection className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(var(--gold-rgb)/0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <ConstellationField />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">
          Find the highest-value work AI can take off your team.
        </h2>
        <p className="mt-6 text-lg font-light text-fg/60">
          Start with a Free AI Operations Audit. We'll show you what is worth automating, what isn't, and what a
          practical first deployment could look like.
        </p>
        <div className="mt-10">
          <AuditButton>Get Your Free AI Operations Audit</AuditButton>
        </div>
      </div>
    </RevealSection>
  );
}
