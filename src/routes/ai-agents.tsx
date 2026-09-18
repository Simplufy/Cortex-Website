import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import {
  CardGrid,
  ExamplePanel,
  FaqList,
  FinalCtaBlock,
  InfoCard,
  NumberedBlocks,
  ProofCallout,
} from "@/components/pages/inner";
import { AGENT_CATEGORIES } from "@/data/site";
import { AGENTS_PAGE, DETAIL_DRIVEN_PROOF } from "@/data/service-pages";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal, SERVICE_SESSIONS } from "@/components/fx/agent-terminal";

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
        body="Each agent is hired for a specific leftover path — monitoring, follow-up, reporting, coordination, or escalation. They do not wait for a prompt. They work the process they are responsible for, on the software you already run, with a person on anything that needs judgment."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="What an agent is"
          body="A software worker with a defined responsibility, access to specific systems, and rules for what it can do automatically versus what requires approval. Not a chatbot. Not a pack of forty toys."
        />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard
            title="Reads your systems"
            body="CRM, shop or field software, ads, inbox, calendar. Only the records you approve. Named tools are examples we evaluate — not a certified list we pretend already works."
          />
          <InfoCard
            title="Does approved work"
            body="Draft a message. Log a note. Assemble a report. Alert a person. What it can send without you is a permission you set, not a surprise on Friday."
          />
          <InfoCard
            title="Hands off when it should"
            body="Money, promises, and messy judgment stay with people. If you would not hand it to a new hire on day one, the agent drafts and a person decides."
          />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="How we build one"
          body="The job is written before a model is chosen. Permissions are a design choice. The off switch ships with the path."
        />
        <NumberedBlocks items={AGENTS_PAGE.how} />
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Why we build them this way"
          body="Most of what gets sold as AI to service businesses is a chat window or a zap with a sparkle on it. The leftover work does not live there."
        />
        <NumberedBlocks items={AGENTS_PAGE.why} />
      </RevealSection>
      <AgentTerminal session={SERVICE_SESSIONS.agents} />
      <RevealSection className="border-t border-fg/5 pt-24 pb-16">
        <SectionHead
          title="What this looks like in the operation"
          body="Detail Driven is the named deployment. The other three are leftover paths we map in audits — not invented case studies, not recovered-revenue slides."
        />
        <ProofCallout
          kicker={DETAIL_DRIVEN_PROOF.kicker}
          title={DETAIL_DRIVEN_PROOF.title}
          body={DETAIL_DRIVEN_PROOF.body}
          facts={DETAIL_DRIVEN_PROOF.facts}
          slug="detail-driven"
        />
      </RevealSection>
      <RevealSection className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          {AGENTS_PAGE.examples.map((ex) => (
            <ExamplePanel key={ex.title} {...ex} />
          ))}
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Put AI to work across the business."
          body="Agents can handle repetitive work across sales, operations, customer experience, marketing, and management — while your team keeps the decisions that require judgment. Yours will differ. That is the point."
        />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-5">
          {AGENT_CATEGORIES.map((c) => (
            <InfoCard key={c.title} title={c.title} body={c.items.join(". ") + "."} />
          ))}
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-8">
        <SectionHead title="Questions operators actually ask" />
        <FaqList items={AGENTS_PAGE.faqs} />
      </RevealSection>
      <FinalCtaBlock
        title="See which agents would actually help."
        body="The goal isn't more agents. It's fewer manual bottlenecks."
      />
    </>
  );
}
