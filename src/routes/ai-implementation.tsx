import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";
import { PILLARS } from "@/data/site";

export const Route = createFileRoute("/ai-implementation")({ component: Page });

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Implementation"
        title="Install an AI workforce around the software you already run"
        body="We audit how the company operates, connect agents to the tools you already pay for, deploy with approvals, and train your team. You do not need an internal AI engineering department."
        primary={{ to: "/audit", label: "Get a Free Audit" }}
        secondary={{ to: "/how-we-work", label: "See how it works" }}
      />
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What the project includes" body="A one-time implementation. Then managed operations if you want us to keep watching it." />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-4">
          <InfoCard kicker="01" title="Audit workflows" body="Software stack, repetitive work, follow-up, reporting, stalls. Highest-value paths first." />
          <InfoCard kicker="02" title="Design the architecture" body="Which agents, which systems, what they may do without a person, what needs approval." />
          <InfoCard kicker="03" title="Connect and build" body="CRM, shop or field software, ads, inbox, phone, documents. Agents around those paths." />
          <InfoCard kicker="04" title="Test, deploy, train" body="Permissions, evaluations, and the people who will work next to the agents." />
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="The sequence" />
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <InfoCard key={p.num} kicker={`${p.num} · ${p.kicker}`} title={p.title} body={p.body} />
          ))}
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What you do not need" body="A six-person AI team, a rip-and-replace of the shop system, or a chatbot on the website." />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="Keep your systems of record" body="We sit on top of the software you already run. Availability is confirmed in the audit." />
          <InfoCard title="Start with one or two paths" body="Estimate follow-up and the daily owner report beat a 40-agent fantasy." />
          <InfoCard title="Pricing after we have seen the work" body="Project fees typically land in a wide range depending on systems and agents. We do not publish a fake number." />
        </CardGrid>
      </section>
      <FinalCtaBlock />
    </>
  );
}
