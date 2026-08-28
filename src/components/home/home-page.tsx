import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GhostButton } from "@/components/ui/beam-button";
import { SectionHead } from "@/components/ui/page-hero";
import { FounderPhoto } from "@/components/logo";
import { AuditButton } from "@/components/audit-modal";
import { RevealSection } from "@/components/reveal";
import { BRAND } from "@/data/brand";
import {
  AGENT_CATEGORIES,
  CASE_STUDIES,
  COMPARISON,
  CONNECT_TOOLS,
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
      <Problem />
      <Layer />
      <Proof />
      <Departments />
      <Industries />
      <Integrations />
      <Process />
      <PrivateAi />
      <Security />
      <Founder />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <main className="relative pt-20 pb-12 lg:pt-24 lg:pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <p className="animate-fade-up mb-6 text-[10px] font-bold tracking-[0.22em] text-gold uppercase">{BRAND.legal}</p>
        <h1 className="animate-fade-up delay-100 text-balance text-4xl leading-[1.08] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl">
          Custom AI systems built around the way your business actually works.
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
      <ToolMarquee />
    </main>
  );
}

function ToolMarquee() {
  const mid = Math.ceil(CONNECT_TOOLS.length / 2);
  const rowA = CONNECT_TOOLS.slice(0, mid);
  const rowB = CONNECT_TOOLS.slice(mid);
  return (
    <div className="animate-fade-up delay-300 mt-14">
      <p className="mb-5 text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase">Connect your tools</p>
      <div className="group/marquee flex flex-col gap-3">
        <LogoRow tools={rowA} direction="rtl" />
        <LogoRow tools={rowB} direction="ltr" />
      </div>
      <p className="mt-4 text-center text-[11px] text-fg/50">
        Examples of software we commonly evaluate. What we can connect is confirmed in the audit.
      </p>
    </div>
  );
}

function LogoRow({
  tools,
  direction,
}: {
  tools: readonly { name: string; file: string }[];
  direction: "rtl" | "ltr";
}) {
  const loop = [...tools, ...tools];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-bg to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-bg to-transparent sm:w-28" />
      <div className={direction === "rtl" ? "animate-marquee-rtl flex w-max gap-3 pr-3" : "animate-marquee-ltr flex w-max gap-3 pr-3"}>
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex h-12 shrink-0 items-center gap-2.5 rounded-xl border border-fg/10 bg-surface/80 px-3.5"
          >
            <img src={`/images/logos/${t.file}`} alt="" width={28} height={28} className="size-7 object-contain" />
            <span className="whitespace-nowrap text-sm font-medium text-fg/70">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
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
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2">
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
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
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
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          [
            "Understand the operation",
            "We map how work moves through your company and where time, information, or opportunities get lost.",
          ],
          [
            "Connect the systems",
            "We securely connect the relevant CRM, operations, communication, marketing, accounting, and industry-specific platforms.",
          ],
          [
            "Build specialized agents",
            "Each agent gets a defined job, access level, rules, tools, and escalation path.",
          ],
          [
            "Deploy and continuously improve",
            "We test the system with your team, measure performance, and improve it as your operation changes.",
          ],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
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
    <RevealSection className="relative z-20 border-y border-fg/5 bg-bg/40 py-16 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase">
          See what this looks like inside a real business
        </p>
        <h2 className="mt-3 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl">
          A multi-business automotive operation
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-light text-fg/60">
          Cortex connects AI agents across shop management, CRM, customer communication, advertising, review
          management, and internal reporting. The system runs on dedicated private AI infrastructure, with cloud
          models available when a task requires them. A secure operator dashboard is included in the same build.
        </p>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {[
            `Systems connected: ${study.systems.length}`,
            "Shop types: 4 — repair, collision, detailing, glass",
            "Infrastructure: private + cloud hybrid",
            "Operator dashboard: included",
          ].map((f) => (
            <li key={f} className="rounded-xl border border-fg/10 bg-surface px-4 py-3 text-sm text-fg/80">
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link
            to="/case-studies/$slug"
            params={{ slug: study.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light"
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
      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {AGENT_CATEGORIES.map((c) => (
          <article key={c.title} className="rounded-2xl border border-fg/10 bg-surface p-6">
            <h3 className="font-medium text-fg">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm font-light text-fg/60">
              {c.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
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
      <div className="mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {SOFTWARE_CATEGORIES.map((s) => (
          <article key={s.title} className="rounded-2xl border border-fg/10 bg-surface p-6">
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
      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {PILLARS.map((p) => (
          <article key={p.num} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <div className="mb-4 text-xs font-bold tracking-[0.2em] text-gold">
              {p.num} {p.kicker}
            </div>
            <h3 className="text-xl font-medium tracking-tight text-fg">{p.title}</h3>
            <p className="mt-4 text-sm leading-relaxed font-light text-fg/60">{p.body}</p>
          </article>
        ))}
      </div>
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
      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {featured.map((ind) => (
          <Link
            key={ind.slug}
            to="/industries/$slug"
            params={{ slug: industryParam(ind) }}
            className="group rounded-2xl border border-fg/10 bg-surface p-6 transition-colors hover:border-gold/30"
          >
            <h3 className="font-medium text-fg">{ind.name}</h3>
            <p className="mt-2 text-xs leading-relaxed text-fg/50">{ind.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-light">
              See your industry
              <ArrowRight className="size-3.5" />
            </span>
          </Link>
        ))}
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
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        {[
          ["Cloud", "Fast to start. Good for many workloads. You do not need a server room."],
          ["Private / local", "Hardware you own or control. More privacy, more predictability, and more stable costs for work that runs continuously."],
          ["Hybrid", "Usually the practical answer. Local for routine work. Cloud when the job needs it."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
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
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        {[
          ["Least privilege", "Each agent and each dashboard view gets the systems and records it needs."],
          ["Human approval", "Drafts and flags first. Send, charge, or change a promise only when you say so."],
          ["Logged actions", "What ran, against which record, and who approved it."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
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
    <RevealSection className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <p className="mb-8 text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase">From the founder</p>
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
      <div className="mt-8 text-center">
        <Link to="/about-us" className="text-sm font-medium text-gold hover:text-gold-light">
          About McGuire
        </Link>
      </div>
    </RevealSection>
  );
}

function Faq() {
  return (
    <RevealSection className="pt-24 pb-24">
      <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl">Questions owners actually ask</h2>
      <div className="mx-auto max-w-3xl space-y-3 px-6">
        {FAQS.slice(0, 8).map((item) => (
          <article key={item.q} className="rounded-2xl border border-fg/10 bg-surface p-6">
            <h3 className="font-medium text-fg">{item.q}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{item.a}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function FinalCta() {
  return (
    <RevealSection className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
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
