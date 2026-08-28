import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { INDUSTRIES, industryParam } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/industries/")({
  head: () =>
    pageHead({
      title: "AI for Auto Repair, HVAC, Roofing & Home Services",
      description:
        "AI agents for service businesses. Automotive, HVAC, plumbing, electrical, roofing, pest, contracting, smart home, and windows. Built for the software and workflows your industry actually uses.",
      path: "/industries",
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the software and workflows your industry actually uses."
        body="Automotive shops don't operate like HVAC companies. HVAC companies don't operate like roofers. We build around the systems, workflows, and bottlenecks specific to your industry."
      />
      <RevealSection className="pt-8 pb-24">
        <SectionHead title="Where we work" />
        <div className="mx-auto max-w-5xl space-y-16 px-6">
          {INDUSTRIES.map((ind) => (
            <article key={ind.slug} className="border-t border-fg/5 pt-12">
              <h2 className="text-3xl font-medium tracking-tight text-fg">{ind.name}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed font-light text-fg/60">{ind.intro}</p>
              <Link to="/industries/$slug" params={{ slug: industryParam(ind) }} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light">
                See {ind.name} page
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
