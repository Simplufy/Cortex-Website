import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock, ProcessSteps } from "@/components/pages/inner";
import { DashboardShowcase } from "@/components/pages/operator-board";
import { PILLARS, WHAT_WE_DO } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal, SERVICE_SESSIONS } from "@/components/fx/agent-terminal";

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
        title="You don't learn AI. We implement it in how the work already moves."
        body="We start by mapping leftover work in the software you already run. Then we design the agents, connect the stack, deploy, and measure. You stay the operator. A dashboard is included in the same build."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-3">
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
      <RevealSection className="py-12 sm:py-16">
        <SectionHead
          kicker="The work"
          title="Audit. Design. Build. Deploy. Manage."
          body="We understand the operation before we automate it. Every deployment starts by finding the highest-value work AI can realistically handle."
        />
        <ProcessSteps items={PILLARS} />
      </RevealSection>
      <AgentTerminal session={SERVICE_SESSIONS["how-we-work"]} />
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          kicker="Included"
          title="A secure dashboard for the numbers that used to hide in five logins."
          body="When we install the agents, you get one private board. Operations, marketing, finance, the shops. Pulled from the software you already run."
        />
        <DashboardShowcase />
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead title="What you walk away with after the first project" />
        <ProcessSteps items={WHAT_WE_DO} />
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
