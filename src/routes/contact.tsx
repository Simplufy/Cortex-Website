import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { AuditButton } from "@/components/audit-modal";
import { BRAND } from "@/data/brand";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact",
      description: `Talk to ${BRAND.founder} at Cortex. ${BRAND.phone}. ${BRAND.email}. Based in Ohio. Work with service businesses nationally.`,
      path: "/contact",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the person who does the work."
        body="The Free AI Operations Audit is the front door. If you just need an email or a phone number, here they are."
      />
      <RevealSection className="pb-32">
        <div className="mx-auto grid max-w-4xl gap-4 px-6 md:grid-cols-3">
          <article className="rounded-2xl border border-fg/10 bg-surface p-8">
            <Phone className="size-5 text-gold" />
            <h2 className="mt-4 text-lg font-medium text-fg">Phone</h2>
            <a href={BRAND.phoneHref} className="mt-2 block text-sm text-fg/70 hover:text-gold">
              {BRAND.phone}
            </a>
          </article>
          <article className="rounded-2xl border border-fg/10 bg-surface p-8">
            <Mail className="size-5 text-gold" />
            <h2 className="mt-4 text-lg font-medium text-fg">Email</h2>
            <a href={`mailto:${BRAND.email}`} className="mt-2 block text-sm text-fg/70 hover:text-gold">
              {BRAND.email}
            </a>
          </article>
          <article className="rounded-2xl border border-fg/10 bg-surface p-8">
            <MapPin className="size-5 text-gold" />
            <h2 className="mt-4 text-lg font-medium text-fg">Where</h2>
            <p className="mt-2 text-sm text-fg/70">
              {BRAND.city}, United States
              <br />
              Work with operators nationally.
            </p>
          </article>
        </div>
        <div className="mt-12 text-center">
          <AuditButton>Get Your Free AI Operations Audit</AuditButton>
        </div>
      </RevealSection>
    </>
  );
}
