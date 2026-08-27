import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { CardGrid, FinalCtaBlock, InfoCard } from "@/components/pages/inner";

export const Route = createFileRoute("/cyber-security")({ component: Page });

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Cybersecurity"
        title="Identity, email, compliance. Actually implemented."
        body="We secure the systems modern companies actually run on. Identity, email, DNS, devices, compliance. Not a binder. Not a pitch deck. The work."
        primary={{ to: "/audit", label: "Get a Free Audit" }}
      />
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What we lock down" />
        <CardGrid>
          <InfoCard title="Identity & access" body="SSO, MFA, least privilege, offboarding that actually revokes access the same day someone leaves." />
          <InfoCard title="Email & domain" body="SPF, DKIM, DMARC, mailbox rules, and the phishing paths that still get through." />
          <InfoCard title="Devices" body="The laptops and phones that hold the business. Inventory, encryption, remote wipe." />
          <InfoCard title="Compliance that isn’t theater" body="Evidence generated as work happens. Reviews on a calendar. An audit trail you can hand over." />
        </CardGrid>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="How we work it" body="Security is part of the same work that maps and builds the operation, not a vendor bolted on at the end." />
        <CardGrid cols="md:grid-cols-3">
          <InfoCard kicker="01" title="Assess" body="Where identity, email, and devices actually stand. Highest-risk gaps first." />
          <InfoCard kicker="02" title="Harden" body="The controls that matter for a service business. Implemented, not recommended." />
          <InfoCard kicker="03" title="Operate" body="Reviews, offboarding, and evidence that keep pace with the business." />
        </CardGrid>
      </section>
      <FinalCtaBlock />
    </>
  );
}
