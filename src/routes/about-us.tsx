import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { FounderPhoto } from "@/components/logo";
import { BRAND } from "@/data/brand";
import { CASE_STUDIES } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/about-us")({
  head: () =>
    pageHead({
      title: `About ${BRAND.name}`,
      description: BRAND.description,
      path: "/about-us",
    }),
  component: AboutPage,
});

function AboutPage() {
  const study = CASE_STUDIES[0];
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We believe the next major productivity leap won't come from adding more software."
        body="It will come from giving the software businesses already use the ability to monitor, reason, coordinate, and act."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-lg leading-relaxed font-light text-fg/70">
            Service businesses have spent the last decade digitizing their operations. They have CRMs, field-service
            platforms, accounting systems, ad platforms, communication tools, and industry-specific software.
          </p>
          <p className="mt-5 text-lg leading-relaxed font-light text-fg/70">
            Yet people still perform much of the work between those systems manually.
          </p>
          <p className="mt-5 text-lg leading-relaxed font-medium text-fg">Cortex was built to solve that layer.</p>
          <p className="mt-5 text-lg leading-relaxed font-light text-fg/70">
            We design custom AI systems that work across a company's existing operation — helping teams follow up
            faster, catch problems earlier, reduce repetitive administrative work, and make better use of the software
            they already own.
          </p>
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title={`${BRAND.founder}`}
          body={`${BRAND.founderRole}, ${BRAND.name}`}
        />
        <div className="mx-auto max-w-3xl px-6">
          <article className="rounded-2xl border border-fg/10 bg-surface p-8 md:p-10">
            <FounderPhoto className="size-24 ring-gold/40" />
            <div className="mt-5 space-y-4 text-sm leading-relaxed font-light text-fg/60">
              <p>
                McGuire's background spans digital marketing, CRM architecture, automation, software integration, and
                applied AI systems for service businesses.
              </p>
              <p>
                Cortex grew out of working directly inside operational businesses and seeing the same problem
                repeatedly: companies had plenty of software, but their people were still manually coordinating
                everything between it.
              </p>
              <p>
                Today the focus is building practical AI infrastructure around real business workflows — including
                private local AI systems, cloud models, specialized agents, and integrations with the software
                companies already depend on.
              </p>
              <p>
                One of Cortex's earliest deployments connects AI agents across multiple automotive service businesses,
                including shop-management, CRM, advertising, reputation, and internal operating systems.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-sm text-fg/70 hover:text-gold">
                <Mail className="size-4" />
                {BRAND.email}
              </a>
              <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="text-sm font-medium text-gold hover:text-gold-light">
                View the deployment
              </Link>
            </div>
          </article>
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          kicker="How we work"
          title="Audit. Design. Build. Deploy. Manage."
          body="Understand the operation first. Then automate it."
        />
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-5">
          {[
            ["Audit", "Before we build"],
            ["Design", "The system"],
            ["Build", "Existing software"],
            ["Deploy", "Approvals included"],
            ["Manage", "After it is live"],
          ].map(([n, l]) => (
            <div key={n} className="text-center">
              <div className="text-3xl font-medium text-gold">{n}</div>
              <div className="mt-2 text-xs tracking-wide text-fg/50 uppercase">{l}</div>
            </div>
          ))}
        </div>
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
