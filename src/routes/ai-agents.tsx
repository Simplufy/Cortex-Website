import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";
import { AGENT_CATEGORIES, WORKFLOWS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/ai-agents")({
  head: () =>
    pageHead({
      title: "AI Agents for Follow-up, Monitoring, and Reporting",
      description:
        "AI agents with actual jobs inside your business. Each one monitors information, follows up, prepares reports, coordinates across systems, or escalates exceptions to your team.",
      path: "/ai-agents",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Agents"
        title="AI agents with actual jobs inside your business."
        body="Each agent is responsible for a specific workflow — monitoring information, following up, preparing reports, coordinating across systems, or escalating exceptions to your team. They don't just answer questions. They continuously work the processes they're responsible for."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="What an agent is"
          body="An AI agent is a software worker with a defined responsibility, access to specific systems, and rules governing what it can do automatically versus what requires approval."
        />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="Reads your systems" body="CRM, shop or field software, ads, inbox, calendar. Only the records you approve." />
          <InfoCard title="Does approved work" body="Draft a message. Log a note. Assemble a report. Alert a person. What it can send without you is a permission." />
          <InfoCard title="Hands off when it should" body="Money, promises, and messy judgment stay with people." />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Example paths" body="Yours will differ. That is the point." />
        <CardGrid>
          {WORKFLOWS.map((w) => (
            <InfoCard key={w.title} title={w.title} body={w.steps.join(" → ")} />
          ))}
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Put AI to work across the business."
          body="Agents can handle repetitive work across sales, operations, customer experience, marketing, and management — while your team keeps the decisions that require judgment."
        />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-5">
          {AGENT_CATEGORIES.map((c) => (
            <InfoCard key={c.title} title={c.title} body={c.items.join(". ") + "."} />
          ))}
        </CardGrid>
      </RevealSection>
      <FinalCtaBlock
        title="See which agents would actually help."
        body="The goal isn't more agents. It's fewer manual bottlenecks."
      />
    </>
  );
}
