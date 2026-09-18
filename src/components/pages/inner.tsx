import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { BeamButton } from "@/components/ui/beam-button";
import { RevealSection } from "@/components/reveal";
import { INDUSTRIES, type Industry, industryParam } from "@/data/site";
import { AgentTerminal, sessionFromIndustry } from "@/components/fx/agent-terminal";
import { auditPath } from "@/lib/audit-path";

export function FinalCtaBlock({
  title = "Find the highest-value work AI can take off your team.",
  body = "Start with a Free AI Operations Audit. We'll show you what is worth automating, what isn't, and what a practical first deployment could look like.",
  ctaTo = "/audit",
}: {
  title?: string;
  body?: string;
  ctaTo?: string;
}) {
  return (
    <RevealSection className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-5xl">{title}</h2>
        <p className="mt-5 text-sm font-light text-fg/60 sm:mt-6 sm:text-lg">{body}</p>
        <div className="mt-8 sm:mt-10">
          <BeamButton className="w-full sm:w-auto" to={ctaTo}>
            Get Your Free AI Operations Audit
          </BeamButton>
        </div>
      </div>
    </RevealSection>
  );
}

export function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <PageHero
        eyebrow={industry.name}
        titleNode={
          <h1 className="text-balance text-[1.65rem] leading-[1.12] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            {industry.hero[0]}
            <br />
            <span className="text-gold">{industry.hero[1]}</span>
          </h1>
        }
        body={industry.intro}
        primary={{
          to: auditPath(industry.slug),
          label: "Get Your Free AI Operations Audit",
        }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Does this sound familiar?" body="The stalls we hear in this trade every week." />
        <div className="mx-auto max-w-3xl divide-y divide-fg/10 px-6">
          {industry.symptoms.map((s, i) => (
            <article key={s.title} className="grid gap-3 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
              <span className="text-sm font-medium tracking-widest text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-medium text-fg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What agents can watch" body="Examples. Your list comes from the audit, not a template." />
        <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-12 px-6 md:grid-cols-2">
          {industry.systems.map((s) => (
            <article key={s.title} className="border-t border-gold/45 pt-5">
              <h3 className="text-xl font-medium text-fg">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-fg/70">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </RevealSection>
      <AgentTerminal key={industry.slug} session={sessionFromIndustry(industry)} />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Built to work with the software your industry already uses."
          body={`Examples of systems we commonly evaluate for integration. ${industry.software.intro}`}
        />
        <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-10 px-6 md:grid-cols-2">
          {industry.software.groups.map((g) => (
            <article key={g.title} className="border-t border-gold/45 pt-5">
              <h3 className="text-lg font-medium text-fg">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.tools.map((t) => (
                  <span key={t} className="rounded-full border border-fg/10 px-3 py-1 text-xs text-fg/70">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-sm text-fg/40">
          Named tools are examples we see in this trade, not a certified integration list. What we can connect depends
          on APIs, vendor access, and the audit. We do not replace these systems.
        </p>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="How we install it" body="Audit. Design. Build. Deploy. Manage. Your existing software stays in place." />
        <ProcessSteps
          items={[
            { num: "01", kicker: "Audit", title: "Understand the operation", body: "Software stack, repetitive paths, follow-up that depends on memory." },
            { num: "02", kicker: "Design", title: "Design the system", body: "Which agents, which systems, what they may do, and what requires a person." },
            { num: "03", kicker: "Build", title: "Connect and build", body: "Agents around those paths, connected to the tools you already use." },
            { num: "04", kicker: "Deploy", title: "Test with your team", body: "Permissions, approvals, testing." },
            { num: "05", kicker: "Manage", title: "Keep it reliable", body: "Monitoring, connectors, improvements." },
          ]}
        />
      </RevealSection>
      <OtherIndustries current={industry.slug} />
      <FinalCtaBlock ctaTo={auditPath(industry.slug)} />
    </>
  );
}

function OtherIndustries({ current }: { current: string }) {
  return (
    <RevealSection className="border-t border-fg/5 pt-24 pb-16">
      <SectionHead title="Other industries we serve" />
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-6">
        {INDUSTRIES.filter((i) => i.slug !== current).map((i) => (
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

export function ArticleBody({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-2xl space-y-6 px-6 pb-24 text-lg leading-relaxed font-light text-fg/70">{children}</div>;
}

export function CardGrid({
  children,
  cols = "md:grid-cols-2",
}: {
  children: React.ReactNode;
  cols?: string;
}) {
  return <div className={`mx-auto grid max-w-6xl gap-x-10 gap-y-12 px-6 ${cols}`}>{children}</div>;
}

export function InfoCard({ kicker, title, body, to, extra }: { kicker?: string; title: string; body: string; to?: string; extra?: string }) {
  const inner = (
    <>
      {kicker && <div className="text-[10px] font-bold tracking-widest text-gold uppercase">{kicker}</div>}
      <h3 className={`${kicker ? "mt-2" : ""} text-xl font-medium tracking-tight text-fg`}>{title}</h3>
      <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{body}</p>
      {extra && <p className="mt-4 text-xs text-fg/40">{extra}</p>}
      {to && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
          Read more <ArrowRight className="size-4" />
        </span>
      )}
    </>
  );
  const cls = "block border-t border-gold/45 pt-5 transition-colors hover:border-gold";
  if (to) {
    return (
      <Link to={to} className={`group ${cls}`}>
        {inner}
      </Link>
    );
  }
  return <article className={cls}>{inner}</article>;
}

export function NumberedBlocks({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ol className="mx-auto max-w-3xl divide-y divide-fg/10 px-6">
      {items.map((item, i) => (
        <li key={item.title} className="grid gap-3 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
          <span className="text-sm font-medium tracking-widest text-gold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl font-medium text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ExamplePanel({
  kicker,
  title,
  leftover,
  install,
  why,
}: {
  kicker: string;
  title: string;
  leftover: string;
  install: string;
  why: string;
}) {
  return (
    <article className="rounded-2xl border border-fg/10 bg-surface p-6 sm:p-8">
      <p className="text-[10px] font-bold tracking-widest text-gold uppercase">{kicker}</p>
      <h3 className="mt-3 text-xl font-medium tracking-tight text-fg">{title}</h3>
      <dl className="mt-6 space-y-5">
        {[
          ["The leftover", leftover],
          ["What we install", install],
          ["Why this way", why],
        ].map(([dt, dd]) => (
          <div key={dt}>
            <dt className="text-[10px] font-bold tracking-widest text-fg/40 uppercase">{dt}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed font-light text-fg/70">{dd}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function ProofCallout({
  kicker,
  title,
  body,
  facts,
  slug,
}: {
  kicker: string;
  title: string;
  body: string;
  facts: readonly string[];
  slug: string;
}) {
  return (
    <aside className="mx-auto max-w-3xl px-6">
      <div className="rounded-2xl border border-fg/10 bg-surface p-6 sm:p-8">
        <p className="text-[10px] font-bold tracking-widest text-gold uppercase">{kicker}</p>
        <h3 className="mt-3 text-2xl font-medium tracking-tight text-fg">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed font-light text-fg/70">{body}</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {facts.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-fg/80">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {f}
            </li>
          ))}
        </ul>
        <Link
          to="/case-studies/$slug"
          params={{ slug }}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light"
        >
          Read the deployment <ArrowRight className="size-4" />
        </Link>
      </div>
    </aside>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-fg/10 px-6">
      {items.map((item) => (
        <article key={item.q} className="py-6">
          <h3 className="text-lg font-medium text-fg">{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed font-light text-fg/60">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({
  items,
}: {
  items: readonly { num: string; kicker?: string; title: string; body: string }[];
}) {
  return (
    <ol className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((p, i) => (
        <li key={p.num} className="relative">
          {i < items.length - 1 ? (
            <span className="pointer-events-none absolute top-6 left-[3.25rem] hidden h-px w-[calc(100%+1.5rem)] bg-linear-to-r from-gold/50 to-gold/0 lg:block" />
          ) : null}
          <div className="flex size-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-sm font-medium tracking-widest text-gold">
            {p.num}
          </div>
          {p.kicker ? (
            <div className="mt-4 text-[10px] font-bold tracking-widest text-fg/40 uppercase">{p.kicker}</div>
          ) : null}
          <h3 className="mt-2 text-lg font-medium tracking-tight text-fg">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed font-light text-fg/55">{p.body}</p>
        </li>
      ))}
    </ol>
  );
}
