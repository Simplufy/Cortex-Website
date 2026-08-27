import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GhostButton } from "@/components/ui/beam-button";
import { SectionHead } from "@/components/ui/page-hero";
import { FounderPhoto } from "@/components/logo";
import { AuditButton } from "@/components/audit-modal";
import { BRAND } from "@/data/brand";
import {
  AGENT_CATEGORIES,
  COMPARISON,
  CONNECT_TOOLS,
  FAQS,
  INDUSTRIES,
  PILLARS,
  SOFTWARE_CATEGORIES,
  WHAT_WE_DO,
} from "@/data/site";

export function HomePage() {
  return (
    <>
      <Hero />
      <Proof />
      <Problem />
      <WhatWeBuild />
      <Tailored />
      <Departments />
      <HowWeWork />
      <Industries />
      <Integrations />
      <PrivateAi />
      <WhyUs />
      <Founder />
      <AuditBand />
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
          AI agents built around your business. Connected to your software.
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-balance text-lg leading-relaxed font-light text-fg/60 md:text-xl">
          Every company has a different stack and a different way the work actually moves. We design the workforce around
          yours. Your systems of record stay. The leftover admin does not have to sit on your people.
        </p>
        <div className="animate-fade-up delay-300 mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <AuditButton>Get a Free AI Operations Audit</AuditButton>
          <GhostButton to="/how-we-work">See how it works</GhostButton>
        </div>
        <p className="animate-fade-up delay-300 mt-4 text-xs text-fg/40">
          You keep the software you already run. We install agents on top of it.
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
      <p className="mt-4 text-center text-[11px] text-fg/35">
        Examples of software we connect in the field. What we can reach is confirmed in the audit.
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
            <img
              src={`/images/logos/${t.file}`}
              alt=""
              width={28}
              height={28}
              className="size-7 object-contain"
            />
            <span className="whitespace-nowrap text-sm font-medium text-fg/70">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Proof() {
  return (
    <section className="relative z-20 border-y border-fg/5 bg-bg/40 py-12 backdrop-blur-sm">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 text-center md:grid-cols-3">
        {[
          ["Your software stays", "We connect to the stack you already pay for. Nothing gets ripped out."],
          ["Built around this company", "Your processes. Your tools. Your permissions. Not a template workforce."],
          ["Start with an audit", "See where AI helps, and where it should not, before you buy a build."],
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
    <section className="pt-24 pb-24">
      <SectionHead
        kicker="The stall"
        title="You already pay for the software. People still operate it by hand."
        body="CRM, scheduling, ads, accounting, the phone. The data is already there. Someone still copies it, checks it, follows up, and builds the report."
      />
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2">
        {[
          ["A person is still the integration", "The job is in one tool. The customer is in another. Ads in a third. Someone copies between them."],
          ["Follow-up depends on memory", "The queue is whoever remembered. When they are busy, it waits."],
          ["Reporting is still assembled by hand", "The week gets rebuilt from five logins. Exceptions show up late."],
          ["Off-the-shelf AI is one more login", "A chatbot waits for a prompt. It does not watch the software you already run."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="What we install"
        title="A private AI workforce designed around this company."
        body="Not a chatbot. Not another SaaS seat. Specialized agents connected to your stack, built around how your people actually work."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2">
        {WHAT_WE_DO.map((item) => (
          <article key={item.num} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <div className="mb-4 text-xs font-bold tracking-[0.2em] text-gold">{item.num}</div>
            <h3 className="text-2xl font-medium tracking-tight text-fg">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed font-light text-fg/60">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Tailored() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="Custom to this company"
        title="We do not install a generic bot on a generic stack."
        body="The audit is how we learn your software, your handoffs, and your permissions. The workforce is designed from that, not from a template."
      />
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        {[
          ["Your software stack", "CRM, operations, ads, accounting, inbox, phone. We connect to what you already run. If a door is closed, we say so in the audit."],
          ["Your way of working", "Every company names the same jobs differently. Agents are built around how this team actually moves work, including what still needs a person."],
          ["Your rules", "What an agent may draft, send, or only flag is a permission you set. Money and customer promises stay with people until you say otherwise."],
        ].map(([t, b]) => (
          <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
            <h3 className="text-xl font-medium text-fg">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="What agents can do"
        title="Capacity by department. Built around this company."
        body="Examples, not a menu. Every deployment starts with the audit, not a template."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {AGENT_CATEGORIES.map((c) => (
          <article key={c.title} className="rounded-2xl border border-fg/10 bg-surface p-6">
            <h3 className="font-medium text-fg">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm font-light text-fg/55">
              {c.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="relative pt-24 pb-24">
      <SectionHead title="Audit. Build. Deploy. Manage." body="Same sequence every time. Skip the audit and you are buying theater." />
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}

function Industries() {
  return (
    <section className="relative pt-24 pb-24">
      <SectionHead
        title="Same idea. Different software in every trade."
        body="The industry pages name the stacks we see on the ground. The homepage stays about your company, not a template."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {INDUSTRIES.map((ind) => (
          <Link
            key={ind.slug}
            to={ind.href}
            className="group rounded-2xl border border-fg/10 bg-surface p-6 transition-colors hover:border-gold/30"
          >
            <h3 className="font-medium text-fg">{ind.name}</h3>
            <p className="mt-2 text-xs leading-relaxed text-fg/45">See the stack and the agents</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-light">
              {ind.name}
              <ArrowRight className="size-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="Integrations"
        title="Your AI should not become another disconnected tool."
        body="We connect the workforce to the software this company already depends on. APIs and approved integrations first. What we can connect is confirmed in the audit, not promised in a logo wall."
      />
      <div className="mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {SOFTWARE_CATEGORIES.map((s) => (
          <article key={s.title} className="rounded-2xl border border-fg/10 bg-surface p-6">
            <h3 className="font-medium text-fg">{s.title}</h3>
            <p className="mt-3 text-sm font-light text-fg/55">{s.body}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-sm text-fg/40">
        Named products on industry pages are examples of tools we see in that trade. They are not a certified list.
      </p>
    </section>
  );
}

function PrivateAi() {
  return (
    <section className="border-t border-fg/5 pt-24 pb-24">
      <SectionHead
        kicker="Infrastructure"
        title="Your AI. Your infrastructure. Your choice."
        body="Cloud, dedicated hardware you control, or a mix. We route each job to ordinary software rules, a smaller local model, or a capable cloud model. The outcome matters more than where the model sits."
      />
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        {[
          ["Cloud", "Fast to start. Good for many workloads. You do not need a server room."],
          ["Private / local", "Hardware you own or control. More privacy, more predictability, less rent on every token."],
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
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative border-t border-fg/10 pt-24 pb-24">
      <SectionHead title="Why not an off-the-shelf AI tool?" body="Most of those products are a narrow widget. This is a workforce built around the operation." />
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-fg/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-[10px] font-bold tracking-widest text-gold uppercase">
            <tr>
              <th className="px-6 py-4 font-bold">Typical AI tool</th>
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
      <p className="mx-auto mt-10 max-w-2xl px-6 text-center text-sm font-light text-fg/50">
        You also do not need an internal AI engineering team. Most service businesses need the implementation and the
        upkeep, not a department.
      </p>
    </section>
  );
}

function Founder() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
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

function AuditBand() {
  return (
    <section className="border-y border-fg/5 bg-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-widest text-gold uppercase">Free AI Operations Audit</p>
        <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">
          Find out what AI could actually do inside your business.
        </h2>
        <p className="mt-5 text-lg font-light text-fg/60">
          We look at your software, repetitive work, and stalls. You get a practical list of where agents could help,
          what is hard, and what we would not touch. No generic presentation. No obligation to build.
        </p>
        <div className="mx-auto mt-8 max-w-lg overflow-hidden rounded-2xl border border-fg/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg text-[10px] font-bold tracking-widest text-gold uppercase">
              <tr>
                <th className="px-4 py-3">Opportunity</th>
                <th className="px-4 py-3">Potential</th>
                <th className="px-4 py-3">Complexity</th>
              </tr>
            </thead>
            <tbody className="font-light text-fg/70">
              {[
                ["Estimate follow-up", "High", "Low"],
                ["Daily operations reporting", "High", "Low"],
                ["Scheduling exceptions", "Medium", "Medium"],
                ["Customer reactivation", "High", "Low"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-fg/10">
                  {r.map((c) => (
                    <td key={c} className="px-4 py-3">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-fg/40">Illustrative. Your list comes from your operation.</p>
        <div className="mt-10">
          <AuditButton>Get a Free AI Operations Audit</AuditButton>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="pt-24 pb-24">
      <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-fg md:text-4xl">Questions owners actually ask</h2>
      <div className="mx-auto max-w-3xl space-y-3 px-6">
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

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">
          See where AI makes sense. And where it does not.
        </h2>
        <p className="mt-6 text-lg font-light text-fg/60">
          Thirty minutes on how work moves through your software. You leave with a practical read, not a pitch deck.
        </p>
        <div className="mt-10">
          <AuditButton>Get a Free AI Operations Audit</AuditButton>
        </div>
      </div>
    </section>
  );
}
