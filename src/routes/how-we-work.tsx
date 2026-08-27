import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock, InfoCard, CardGrid } from "@/components/pages/inner";
import { PILLARS, WHAT_WE_DO } from "@/data/site";

export const Route = createFileRoute("/how-we-work")({ component: HowWeWorkPage });

function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Audit first. Then we build the workforce."
        body="You see where AI would help, and where it should not, before anyone writes a connector. Nothing in the business changes until you have seen the plan."
        primary={{ to: "/audit", label: "Get a Free Audit" }}
      />
      <section className="border-t border-fg/5 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
          {[
            ["Start with an audit", "software, repetitive work, stalls"],
            ["Keep your systems", "agents sit on top of them"],
            ["People keep judgment", "agents take the repetitive path"],
          ].map(([t, b]) => (
            <div key={t} className="text-center">
              <div className="text-xl font-medium text-fg">{t}</div>
              <div className="mt-1 text-sm text-fg/50">{b}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-24 pb-24">
        <SectionHead
          kicker="The work"
          title="Audit. Build. Deploy. Manage."
          body="Same sequence every time. Skip the audit and you are buying theater."
        />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <InfoCard key={p.num} kicker={`${p.num} · ${p.kicker}`} title={p.title} body={p.body} />
          ))}
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What you walk away with after the first project" />
        <CardGrid cols="md:grid-cols-3">
          {WHAT_WE_DO.slice(0, 3).map((w) => (
            <InfoCard key={w.num} title={w.title} body={w.body} />
          ))}
        </CardGrid>
      </section>
      <FinalCtaBlock />
    </>
  );
}
