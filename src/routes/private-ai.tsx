import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";

export const Route = createFileRoute("/private-ai")({ component: Page });

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Private AI Infrastructure"
        title="Cloud, local, or hybrid. Right tool for the job."
        body="Some work belongs in ordinary software rules. Some belongs on a smaller model you control. Some needs a capable cloud model. We are not ideological about where it runs. We are picky about the outcome."
        primary={{ to: "/audit", label: "Get a Free Audit" }}
      />
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Three ways to run it" />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="Cloud" body="Fast to start. Fine for many workloads. You do not need a server room on day one." />
          <InfoCard title="Private / local" body="Dedicated hardware you own or control. More privacy, more predictability, less rent on every token. For companies that want it." />
          <InfoCard title="Hybrid" body="Usually the practical answer. Local for routine jobs. Cloud when the work needs more. Rules when AI is not needed at all." />
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What private hardware is for" body="Control, privacy, and cost on steady workloads. Not a religion." />
        <CardGrid>
          <InfoCard title="Greater control" body="More of the stack sits on infrastructure you own." />
          <InfoCard title="Privacy options" body="Sensitive records can stay closer to the shop." />
          <InfoCard title="Predictable cost" body="Heavy routine work does not have to be a meter that never sleeps." />
          <InfoCard title="Still hybrid when needed" body="A hard reasoning job can still go to a capable cloud model." />
        </CardGrid>
      </section>
      <FinalCtaBlock title="The audit includes the infrastructure question." body="Cloud, private, or mixed. We will say which fits, and which is overkill." />
    </>
  );
}
