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
import { PILLARS } from "@/data/site";
import { DETAIL_DRIVEN_PROOF, IMPLEMENTATION_PAGE } from "@/data/service-pages";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal, SERVICE_SESSIONS } from "@/components/fx/agent-terminal";

export const Route = createFileRoute("/ai-implementation")({
  head: () =>
    pageHead({
      title: "AI Implementation for Service Businesses",
      description:
        "Custom AI implementation, built around your existing operation. From workflow discovery and systems integration to agent development, permissions, testing, and deployment.",
      path: "/ai-implementation",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Implementation"
        title="You don't need an AI team. You need it implemented."
        body="From mapping leftover work and connecting the software you already run, to agents, permissions, testing, and a dashboard in the same build. You do not have to understand models. You do not replace ServiceTitan, Tekmetric, Jobber, or the books."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
        secondary={{ to: "/how-we-work", label: "See How It Works" }}
      />
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="What the project includes"
          body="A defined implementation. Then Managed AI Operations if you want us to keep the system reliable after it is live."
        />
        <CardGrid cols="md:grid-cols-2">
          {IMPLEMENTATION_PAGE.includes.map((item) => (
            <InfoCard key={item.title} kicker={item.kicker} title={item.title} body={item.body} />
          ))}
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead
          title="How we actually do the work"
          body="Audit first. Keep the systems of record. Ship one or two paths. Include the board. Leave a person on the work that needs a person."
        />
        <NumberedBlocks items={IMPLEMENTATION_PAGE.how} />
      </RevealSection>
      <AgentTerminal session={SERVICE_SESSIONS.implementation} />
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead title="The sequence" body="Audit. Design. Build. Deploy. Manage." />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <InfoCard key={p.num} kicker={`${p.num} · ${p.kicker}`} title={p.title} body={p.body} />
          ))}
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-14">
        <SectionHead
          title="What this looks like when we install it"
          body="Detail Driven is the named deployment. The HVAC and roofing paths are how we typically start in those trades, leftover work we map in audits, not invented ROI."
        />
        <ProofCallout
          kicker={DETAIL_DRIVEN_PROOF.kicker}
          title={DETAIL_DRIVEN_PROOF.title}
          body={DETAIL_DRIVEN_PROOF.body}
          facts={DETAIL_DRIVEN_PROOF.facts}
          slug="detail-driven"
        />
      </RevealSection>
      <RevealSection className="pb-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          {IMPLEMENTATION_PAGE.examples.map((ex) => (
            <ExamplePanel key={ex.title} {...ex} />
          ))}
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <SectionHead title="How we scope the work" />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard
            title="Keep your systems of record"
            body="We connect to the software you already run. Availability is confirmed in the audit. If a vendor will not give us a usable interface, we say so instead of putting their logo on a slide."
          />
          <InfoCard
            title="Start with one or two paths"
            body="Estimate follow-up and the daily operating summary beat a forty-agent fantasy. The first path has to be trusted by the people who still own the customer."
          />
          <InfoCard
            title="Priced around the actual implementation"
            body="Every deployment is different. Pricing is based on the systems involved, number and complexity of workflows, infrastructure, and level of ongoing management. Most clients begin with a defined implementation project followed by optional Managed AI Operations."
          />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-14">
        <SectionHead title="Questions operators actually ask" />
        <FaqList items={IMPLEMENTATION_PAGE.faqs} />
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
