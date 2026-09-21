import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { INDUSTRIES, industryParam } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/industries/")({
  head: () =>
    pageHead({
      title: "AI for Auto Repair, HVAC, Roofing & Home Services",
      description:
        "AI agents for service businesses across auto, HVAC, plumbing, electrical, roofing, cleaning, landscaping, and more. Built for the software your industry already uses.",
      path: "/industries",
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const list = [...INDUSTRIES].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Cortex is here to service your industry."
        body="You don't have to learn AI for your trade. We implement agents in the software you already run, then you see it on a 30-minute audit."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="pt-4 pb-16">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-3 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((ind) => (
            <li key={ind.slug}>
              <Link
                to="/industries/$slug"
                params={{ slug: industryParam(ind) }}
                className="group flex items-center gap-2.5 text-[15px] font-medium text-fg hover:text-gold"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
                  <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
                    <path d="M2 6.2 L4.5 8.6 L10 3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="underline decoration-fg/20 underline-offset-4 group-hover:decoration-gold">{ind.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </RevealSection>
      <FinalCtaBlock ctaTo="/audit" />
    </>
  );
}
