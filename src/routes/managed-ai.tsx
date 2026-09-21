import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import {
  CardGrid,
  ExamplePanel,
  FaqList,
  FinalCtaBlock,
  InfoCard,
  NumberedBlocks,
} from "@/components/pages/inner";
import { MANAGED_PAGE } from "@/data/service-pages";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal, SERVICE_SESSIONS } from "@/components/fx/agent-terminal";

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
        title="You shouldn't have to become the AI person after install day."
        body="Models change. APIs change. Your business changes. We keep the agents, integrations, and workflows working, so implementing AI isn't a project you have to learn how to maintain."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="What the monthly work actually is"
          body="Not a status meeting. Not a recap deck. The paths that are in production, watched and kept current."
        />
        <CardGrid>
          <InfoCard
            title="System monitoring"
            body="Successful runs, failures, latency, escalations. We care whether the estimate agent drafted and whether a connector 401’d at 2am, not whether a vanity dashboard is green."
          />
          <InfoCard
            title="Integration maintenance"
            body="Vendors ship API changes. ServiceTitan, Tekmetric, Google Ads, QuickBooks. A Friday update should not silently kill Monday’s follow-up."
          />
          <InfoCard
            title="Model optimization"
            body="Pin, evaluate, and route. A prompt that worked in March drifts. We treat that as ours to catch, not yours to QA."
          />
          <InfoCard
            title="Quality evaluations"
            body="Does the draft still sound like the company. Did it invent a promise. Did it skip a file it should have flagged. Drift shows up here before a customer does."
          />
          <InfoCard
            title="Incident response"
            body="Diagnose, restore, tighten the path. An error is a design problem: add a check, shrink the permission, or take that action back to a human."
          />
          <InfoCard
            title="Continuous improvement"
            body="New membership product, second location, a reporting hole the owner just found. Scoped to what is running, not a forty-agent roadmap on retainer."
          />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="How a week of this looks"
          body="Watch the runs. Keep the connectors. Evaluate the output. Fix incidents. Add the next job when the last one is trusted."
        />
        <NumberedBlocks items={MANAGED_PAGE.week} />
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="Why not staff this internally"
          body="Most service businesses need the care. They do not need a department of AI engineers babysitting a follow-up agent."
        />
        <NumberedBlocks items={MANAGED_PAGE.why} />
      </RevealSection>
      <AgentTerminal session={SERVICE_SESSIONS["managed-ai"]} />
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="What this looks like after install day"
          body="Connectors break. Models drift. The company grows. These are examples of the leftover we own after the build, not a promise that nothing will ever fail."
        />
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          {MANAGED_PAGE.examples.map((ex) => (
            <ExamplePanel key={ex.title} {...ex} />
          ))}
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead title="What is in, and what is not" />
        <CardGrid cols="md:grid-cols-2">
          <InfoCard
            title="In"
            body="Monitoring, connector upkeep, evaluations, incident response, small improvements, and the next scoped path when you ask for it. Starts after a live deployment. Priced to what is actually in production."
          />
          <InfoCard
            title="Not in"
            body="We are not your general manager, your CSR team, or your ads agency. We do not book jobs, discount work, or own the angry-customer call. Your people keep the operation. We keep the system."
          />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-14">
        <SectionHead title="Questions operators actually ask" />
        <FaqList items={MANAGED_PAGE.faqs} />
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
