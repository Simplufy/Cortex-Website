import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";
import { PILLARS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

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
        title="Custom AI implementation, built around your existing operation."
        body="From workflow discovery and systems integration to agent development, permissions, testing, and deployment — Cortex handles the complete implementation. You don't need to hire an internal AI engineering team or replace the software your business already depends on."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
        secondary={{ to: "/how-we-work", label: "See How It Works" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What the project includes" body="A defined implementation. Then Managed AI Operations if you want us to keep the system reliable." />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-4">
          <InfoCard kicker="01" title="Audit workflows" body="Software stack, repetitive work, follow-up, reporting, stalls. Highest-value paths first." />
          <InfoCard kicker="02" title="Design the architecture" body="Which agents, which systems, what they may do without a person, what needs approval." />
          <InfoCard kicker="03" title="Connect and build" body="CRM, shop or field software, ads, inbox, phone, documents. Agents around those paths." />
          <InfoCard kicker="04" title="Test, deploy, train" body="Permissions, evaluations, and the people who will work next to the agents." />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="The sequence" body="Audit. Design. Build. Deploy. Manage." />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <InfoCard key={p.num} kicker={`${p.num} · ${p.kicker}`} title={p.title} body={p.body} />
          ))}
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="How we scope the work" />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="Keep your systems of record" body="We connect to the software you already run. Availability is confirmed in the audit." />
          <InfoCard title="Start with one or two paths" body="Estimate follow-up and the daily operating summary beat a 40-agent fantasy." />
          <InfoCard
            title="Scoped around the actual implementation"
            body="Every deployment is different. Pricing is based on the systems involved, number and complexity of workflows, infrastructure requirements, and level of ongoing management. Most clients begin with a defined implementation project followed by optional Managed AI Operations."
          />
        </CardGrid>
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
