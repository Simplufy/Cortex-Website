import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { INDUSTRIES } from "@/data/site";

export const Route = createFileRoute("/industries")({ component: IndustriesPage });

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Field service and the trades"
        body="High lead values, field crews, too many logins. Agents sit on top of the software you already run. Auto shops, HVAC, plumbing, electrical, roofing, pest, contracting, smart home, windows, and home services."
      />
      <section className="pt-8 pb-24">
        <SectionHead title="Where we work" />
        <div className="mx-auto max-w-5xl space-y-16 px-6">
          {INDUSTRIES.map((ind) => (
            <article key={ind.slug} className="border-t border-fg/5 pt-12">
              <h2 className="text-3xl font-medium tracking-tight text-fg">{ind.name}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed font-light text-fg/60">{ind.intro}</p>
              <Link to={ind.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light">
                See {ind.name} page
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <FinalCtaBlock />
    </>
  );
}
