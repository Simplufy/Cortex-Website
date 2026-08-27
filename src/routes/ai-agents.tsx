import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";
import { AGENT_CATEGORIES, WORKFLOWS } from "@/data/site";

export const Route = createFileRoute("/ai-agents")({ component: Page });

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Agents"
        title="Specialists that watch the work, not a chatbot that waits for a prompt"
        body="An agent is connected to the software you already use. It monitors a queue, drafts follow-up, flags exceptions, and takes approved actions. ChatGPT answers when you ask. This works whether you asked or not."
        primary={{ to: "/audit", label: "Get a Free Audit" }}
      />
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What an agent is" body="A named specialist around a workflow. Sales follow-up. RO watch. Membership cadence. Daily briefing. Built for this company." />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="Reads your systems" body="CRM, shop or field software, ads, inbox, calendar. Only the records you approve." />
          <InfoCard title="Does approved work" body="Draft a message. Log a note. Assemble a report. Alert a person. What it can send without you is a permission." />
          <InfoCard title="Hands off when it should" body="Money, promises, messy judgment. Those stay with people." />
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Example paths" body="Yours will differ. That is the point." />
        <CardGrid>
          {WORKFLOWS.map((w) => (
            <InfoCard key={w.title} title={w.title} body={w.steps.join(" → ")} />
          ))}
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="By department" body="Examples, not a catalog you pick from a shopping cart." />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-5">
          {AGENT_CATEGORIES.map((c) => (
            <InfoCard key={c.title} title={c.title} body={c.items.join(". ") + "."} />
          ))}
        </CardGrid>
      </section>
      <FinalCtaBlock title="See which agents would actually help." body="The audit names the paths. We do not install a zoo of agents for sport." />
    </>
  );
}
