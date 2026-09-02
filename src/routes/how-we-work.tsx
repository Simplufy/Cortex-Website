import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock, ProcessSteps } from "@/components/pages/inner";
import { DashboardShowcase } from "@/components/pages/operator-board";
import { PILLARS, WHAT_WE_DO } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/how-we-work")({
  head: () =>
    pageHead({
      title: "How We Work",
      description:
        "Understand the operation first. Then automate it. Audit, design, build, deploy, and manage custom AI systems on the software you already use.",
      path: "/how-we-work",
    }),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Understand the operation first. Then automate it."
        body="We start by mapping how work actually moves through your business. From there, we identify the highest-value opportunities, design the system, connect the software, deploy the agents, and measure how they perform. A secure dashboard is included in the same build."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
          {[
            ["Start with an audit", "software, repetitive work, stalls"],
            ["Keep your systems", "agents work across them. The dashboard is included"],
            ["Your team keeps judgment", "agents take the repetitive path"],
          ].map(([t, b]) => (
            <div key={t} className="text-center">
              <div className="text-xl font-medium text-fg">{t}</div>
              <div className="mt-1 text-sm text-fg/50">{b}</div>
            </div>
          ))}
        </div>
      </RevealSection>
      <RevealSection className="pt-24 pb-24">
        <SectionHead
          kicker="The work"
          title="Audit. Design. Build. Deploy. Manage."
          body="We understand the operation before we automate it. Every deployment starts by finding the highest-value work AI can realistically handle."
        />
        <ProcessSteps items={PILLARS} />
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          kicker="Included"
          title="A secure dashboard for the numbers that used to hide in five logins."
          body="When we install the agents, you get one private board. Operations, marketing, finance, the shops. Pulled from the software you already run."
        />
        <DashboardShowcase />
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What you walk away with after the first project" />
        <ProcessSteps items={WHAT_WE_DO} />
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
