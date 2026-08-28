import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/managed-ai")({
  head: () =>
    pageHead({
      title: "Managed AI Operations",
      description:
        "AI systems are operational infrastructure. Managed AI Operations keeps your agents, integrations, permissions, evaluations, and workflows working as intended after deployment.",
      path: "/managed-ai",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Managed AI Operations"
        title="AI systems are operational infrastructure. We keep yours reliable."
        body="Models change. APIs change. Your business changes. Managed AI Operations keeps your agents, integrations, permissions, evaluations, and workflows working as intended after deployment."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What the monthly work is" />
        <CardGrid>
          <InfoCard title="System monitoring" body="Track successful runs, failures, latency, escalations, and agent performance." />
          <InfoCard title="Integration maintenance" body="Maintain connections as vendors update APIs and underlying software." />
          <InfoCard title="Model optimization" body="Continuously evaluate the right models, prompts, tools, and routing strategies." />
          <InfoCard title="Quality evaluations" body="Verify outputs and agent actions against defined standards." />
          <InfoCard title="Incident response" body="Diagnose failures and restore affected workflows." />
          <InfoCard title="Continuous improvement" body="Expand or improve the system as new high-value opportunities emerge." />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Why not staff this internally" body="Most service businesses need the care. They do not need a department of AI engineers." />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="You still own the operation" body="Your team keeps the decisions that require judgment. We keep the system current." />
          <InfoCard title="Starts after implementation" body="Managed operations follows a live deployment." />
          <InfoCard title="Scoped to what is running" body="You pay for the agents and workflows that are actually in production." />
        </CardGrid>
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
