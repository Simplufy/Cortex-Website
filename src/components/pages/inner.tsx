import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHead, Eyebrow } from "@/components/ui/page-hero";
import { BeamButton } from "@/components/ui/beam-button";
import { RevealSection } from "@/components/reveal";
import { INDUSTRIES, type Industry, industryParam } from "@/data/site";

export function FinalCtaBlock({
  title = "Find the highest-value work AI can take off your team.",
  body = "Start with a Free AI Operations Audit. We'll show you what is worth automating, what isn't, and what a practical first deployment could look like.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <RevealSection className="relative py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-medium tracking-tight text-fg md:text-5xl">{title}</h2>
        <p className="mt-6 text-lg font-light text-fg/60">{body}</p>
        <div className="mt-10">
          <BeamButton to="/audit">Get Your Free AI Operations Audit</BeamButton>
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
          <h1 className="text-balance text-4xl leading-[1.1] font-medium tracking-tighter text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            {industry.hero[0]}
            <br />
            <span className="text-gold">{industry.hero[1]}</span>
          </h1>
        }
        body={industry.intro}
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow>The operating reality</Eyebrow>
          <p className="text-2xl font-medium tracking-tight text-fg md:text-3xl">{industry.quote}</p>
        </div>
      </RevealSection>
      <RevealSection className="pt-24 pb-24">
        <SectionHead title="Does this sound familiar?" body="The stalls we hear in this trade every week." />
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2">
          {industry.symptoms.map((s) => (
            <article key={s.title} className="rounded-2xl border border-fg/10 bg-surface p-8">
              <h3 className="text-xl font-medium text-fg">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{s.body}</p>
            </article>
          ))}
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What agents can watch" body="Examples. Your list comes from the audit, not a template." />
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2">
          {industry.systems.map((s) => (
            <article key={s.title} className="rounded-2xl border border-fg/10 bg-surface p-8">
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
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Built to work with the software your industry already uses."
          body={`Examples of systems we commonly evaluate for integration. ${industry.software.intro}`}
        />
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2">
          {industry.software.groups.map((g) => (
            <article key={g.title} className="rounded-2xl border border-fg/10 bg-surface p-8">
              <h3 className="text-lg font-medium text-fg">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.tools.map((t) => (
                  <span key={t} className="rounded-full border border-fg/10 bg-bg px-3 py-1 text-xs text-fg/70">
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
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            ["01 / AUDIT", "Understand the operation", "Software stack, repetitive paths, follow-up that depends on memory."],
            ["02 / DESIGN", "Design the system", "Which agents, which systems, what they may do, and what requires a person."],
            ["03 / BUILD", "Connect and build", "Agents around those paths, connected to the tools you already use."],
            ["04 / DEPLOY", "Test with your team", "Permissions, approvals, testing."],
            ["05 / MANAGE", "Keep it reliable", "Monitoring, connectors, improvements."],
          ].map(([k, t, b]) => (
            <article key={k} className="rounded-2xl border border-fg/10 bg-surface p-6">
              <div className="mb-3 text-[10px] font-bold tracking-widest text-gold">{k}</div>
              <h3 className="font-medium text-fg">{t}</h3>
              <p className="mt-2 text-sm font-light text-fg/55">{b}</p>
            </article>
          ))}
        </div>
      </RevealSection>
      <OtherIndustries current={industry.slug} />
      <FinalCtaBlock />
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
  return <div className={`mx-auto grid max-w-6xl gap-4 px-6 ${cols}`}>{children}</div>;
}

export function InfoCard({ kicker, title, body, to, extra }: { kicker?: string; title: string; body: string; to?: string; extra?: string }) {
  const inner = (
    <>
      {kicker && <div className="text-[10px] font-bold tracking-widest text-gold uppercase">{kicker}</div>}
      <h3 className="mt-2 text-xl font-medium tracking-tight text-fg">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{body}</p>
      {extra && <p className="mt-4 text-xs text-fg/40">{extra}</p>}
      {to && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
          Read more <ArrowRight className="size-4" />
        </span>
      )}
    </>
  );
  const cls = "rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30";
  if (to) {
    return (
      <Link to={to} className={`group block ${cls}`}>
        {inner}
      </Link>
    );
  }
  return <article className={cls}>{inner}</article>;
}
