import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

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
        body="Not every task needs the same model or infrastructure. Cortex can route routine work to private local models, use traditional automation where AI isn't necessary, and call powerful cloud models when a task requires them. The goal is the best balance of privacy, reliability, performance, and cost."
        primary={{ to: "/audit", label: "Get Your Free AI Operations Audit" }}
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Three ways to run it" />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="Cloud" body="Fast to start. Fine for many workloads. You do not need a server room on day one." />
          <InfoCard title="Private / local" body="Dedicated hardware you own or control. More privacy, more predictability, and more stable costs for work that runs continuously." />
          <InfoCard title="Hybrid" body="Usually the practical answer. Local for routine jobs. Cloud when the work needs more. Rules when AI is not needed at all." />
        </CardGrid>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="What private hardware is for"
          body="We design the architecture around privacy, performance, reliability, and cost — not around a specific model provider."
        />
        <CardGrid>
          <InfoCard title="Greater control" body="More of the stack sits on infrastructure you own." />
          <InfoCard title="Privacy options" body="Sensitive records can stay closer to the shop." />
          <InfoCard title="Predictable cost" body="Reduce variable inference costs for high-volume workloads." />
          <InfoCard title="Still hybrid when needed" body="A hard reasoning job can still go to a capable cloud model." />
        </CardGrid>
      </RevealSection>
      <FinalCtaBlock
        title="The audit includes the infrastructure question."
        body="Cloud, private, or mixed. We'll say which fits your workloads, privacy needs, and cost."
      />
    </>
  );
}
