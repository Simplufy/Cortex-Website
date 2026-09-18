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
import { DETAIL_DRIVEN_PROOF, PRIVATE_PAGE } from "@/data/service-pages";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";
import { AgentTerminal, SERVICE_SESSIONS } from "@/components/fx/agent-terminal";

export const Route = createFileRoute("/private-ai")({
  head: () =>
    pageHead({
      title: "Private AI Infrastructure | Cloud, Local, or Hybrid",
      description:
        "Cloud, private, or hybrid AI — designed around the workload. Cortex routes routine work to private local models, uses traditional automation where AI isn't necessary, and calls cloud models when a task requires them.",
      path: "/private-ai",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Private AI Infrastructure"
        title="Cloud, private, or hybrid AI — designed around the workload."
        body="Not every task needs the same model or a rack in the shop. Cortex routes routine work to private local models, uses ordinary rules where AI is not necessary, and calls a capable cloud model when the job actually needs one. The goal is the right mix of privacy, reliability, performance, and cost — not a server-room personality."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Three ways to run it"
          body="We pick this after we have seen the leftover work. Hardware is a workload decision, not a line item we add so the proposal looks heavier."
        />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard
            title="Cloud"
            body="Fast to start. Fine for many first deployments — two follow-up paths, a morning summary, no collision files leaving the building. You do not need a server room on day one."
          />
          <InfoCard
            title="Private / local"
            body="Dedicated hardware you own or control. More privacy for customer and job files, more predictable cost for work that runs every night whether anyone is in the building."
          />
          <InfoCard
            title="Hybrid"
            body="Usually the practical answer. Local for the overnight watch and the briefing. Cloud when a job needs more. Rules when a model is not needed at all."
          />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="How we decide where a job runs"
          body="Classify the work. Put continuous jobs where cost is stable. Keep sensitive records closer to the shop when it matters. Connect the same way we always connect."
        />
        <NumberedBlocks items={PRIVATE_PAGE.how} />
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Why we do it this way" body="Sending every ticket to the largest cloud model is how you buy a surprising invoice and a privacy argument." />
        <NumberedBlocks items={PRIVATE_PAGE.why} />
      </RevealSection>
      <AgentTerminal session={SERVICE_SESSIONS["private-ai"]} />
      <RevealSection className="border-t border-fg/5 pt-24 pb-16">
        <SectionHead
          title="What this looks like when it is real"
          body="Detail Driven runs dedicated Linux on site. We also tell operators when a rack would be theatre."
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
          {PRIVATE_PAGE.examples.map((ex) => (
            <ExamplePanel key={ex.title} {...ex} />
          ))}
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="What private hardware is actually for"
          body="We design the architecture around privacy, performance, reliability, and cost — not around a specific model provider."
        />
        <CardGrid>
          <InfoCard title="Greater control" body="More of the stack sits on infrastructure you own. Routine inference does not have to leave the building." />
          <InfoCard title="Privacy options" body="Sensitive records can stay closer to the shop. Collision files and RO notes are not a public demo." />
          <InfoCard title="Predictable cost" body="Reduce variable inference costs for high-volume, every-night workloads. Burst jobs can still call the cloud." />
          <InfoCard title="Still hybrid when needed" body="A hard reasoning job can still go to a capable cloud model. Private does not mean nothing ever leaves." />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-8">
        <SectionHead title="Questions operators actually ask" />
        <FaqList items={PRIVATE_PAGE.faqs} />
      </RevealSection>
      <FinalCtaBlock
        title="The audit includes the infrastructure question."
        body="Cloud, private, or mixed. We'll say which fits your workloads, privacy needs, and cost."
      />
    </>
  );
}
