import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";

export const Route = createFileRoute("/managed-ai")({ component: Page });

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Managed AI Operations"
        title="Someone has to watch the agents after they go live"
        body="Software vendors ship updates. Connectors break. Models change. This is closer to running infrastructure than an agency retainer. Monitoring, upkeep, evaluations, and small improvements."
        primary={{ to: "/audit", label: "Get a Free Audit" }}
      />
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What the monthly work is" />
        <CardGrid>
          <InfoCard title="Monitoring" body="Are the agents finishing their jobs. Where are they stuck. What needs a person." />
          <InfoCard title="Connector upkeep" body="Your CRM or shop system shipped a change. We keep the door open." />
          <InfoCard title="Model and prompt updates" body="The path gets tighter as we see real exceptions." />
          <InfoCard title="Evaluations" body="Did the follow-up actually send. Did the report tell the truth." />
          <InfoCard title="Troubleshooting" body="When something fails, it is our problem, not a ticket into the void." />
          <InfoCard title="Incremental improvements" body="The next path, once the first ones hold." />
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Why not staff this internally" body="Most service businesses need the care. They do not need a department of AI engineers." />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard title="You still own the operation" body="Your people keep judgment. We keep the workforce current." />
          <InfoCard title="Start after implementation" body="Managed operations follows a live deployment. We do not sell a retainer for a slide deck." />
          <InfoCard title="Scoped to what is running" body="You are not paying for a zoo of agents you do not use." />
        </CardGrid>
      </section>
      <FinalCtaBlock />
    </>
  );
}
