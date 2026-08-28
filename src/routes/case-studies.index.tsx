import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { CASE_STUDIES } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/case-studies/")({
  head: () =>
    pageHead({
      title: "Case Study: Detail Driven Automotive AI Workforce",
      description:
        "Detail Driven Enterprises in Jackson Hole. Repair, collision, detailing, and glass. Agents on the leftover work. The build included a secure dashboard for operations, marketing, finance, and the shops.",
      path: "/case-studies",
    }),
  component: Listing,
});

function Listing() {
  const study = CASE_STUDIES[0];
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="One real deployment. Not a gallery of examples."
        body="Detail Driven Enterprises in Jackson Hole. Repair, collision, detailing, and glass. Agents on the leftover work. The build included a secure dashboard for operations, marketing, finance, and the shops — on the software they already ran."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/case-studies/$slug"
            params={{ slug: study.slug }}
            className="block rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/40 md:p-10"
          >
            <div className="text-[10px] font-bold tracking-widest text-gold uppercase">{study.industry}</div>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-fg">{study.name}</h2>
            <p className="mt-3 text-fg/60">{study.result}</p>
            <ul className="mt-6 grid gap-2 text-sm text-fg/70 sm:grid-cols-2">
              {study.facts.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </Link>
        </div>
      </RevealSection>
      <FinalCtaBlock title="Want this shape inside your operation?" />
    </>
  );
}
