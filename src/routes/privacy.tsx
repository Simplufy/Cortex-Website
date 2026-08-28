import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/data/brand";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description: `How ${BRAND.name} handles form submissions, contact information, and cookies. We do not sell personal information.`,
      path: "/privacy",
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-32">
      <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Legal</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-fg/50">Last updated: August 27, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed font-light text-fg/70">
        <p>
          How Cortex handles personal data on {BRAND.domain}: what we collect, why, who we share it with, and how to
          exercise your rights.
        </p>
        <RevealSection>
          <h2 className="text-xl font-medium text-fg">1. What we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Information you give us on the Free AI Operations Audit form: name, email, phone, company, industry,
              revenue, and, if you add it, website, headcount, locations, software, and the stall you describe.
            </li>
            <li>UTM parameters that arrived with the page (source, medium, campaign) so we know how you found us.</li>
            <li>Email you send to {BRAND.email}, and calls to {BRAND.phone}.</li>
            <li>Basic server logs: IP address, browser, pages, timestamps. Used for security and debugging.</li>
          </ul>
          <p className="mt-3">We do not collect health information, payment cards, or government IDs through this site.</p>
        </RevealSection>
        <RevealSection>
          <h2 className="text-xl font-medium text-fg">2. Why we collect it</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To respond to an audit request and run the walkthrough.</li>
            <li>To keep the site secure and detect abuse.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information. We do not use website form data to train AI models. We do not share
            it for cross-context behavioral advertising.
          </p>
        </RevealSection>
        <RevealSection>
          <h2 className="text-xl font-medium text-fg">3. Who we share it with</h2>
          <p className="mt-3">
            Audit submissions are sent to HighLevel (LeadConnector), which we use as our CRM, under their terms and our
            instruction. Hosting is on Vercel. We may also share data when required by law, or if the business is
            acquired under the same terms.
          </p>
          <p className="mt-3">
            The briefing video on the audit page is hosted on this site. We do not currently load Google Analytics,
            Google Tag Manager, Typeform, Calendly, or SproutVideo.
          </p>
        </RevealSection>
        <RevealSection>
          <h2 className="text-xl font-medium text-fg">4. How long we keep it</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Audit and contact records: up to 24 months after our last interaction, unless we are still working together.</li>
            <li>Server logs: typically 90 days.</li>
          </ul>
        </RevealSection>
        <RevealSection>
          <h2 className="text-xl font-medium text-fg">5. Cookies</h2>
          <p className="mt-3">
            The site needs a few cookies to run. The banner stores your choice in this browser so we do not ask every
            visit. We do not currently load optional analytics scripts. If that changes, we will only load them after
            you accept, and we will update this page.
          </p>
        </RevealSection>
        <RevealSection>
          <h2 className="text-xl font-medium text-fg">6. Your rights</h2>
          <p className="mt-3">
            Depending on where you live, you may have the right to access, correct, delete, or export your data. Email{" "}
            <a href={`mailto:${BRAND.email}`} className="text-gold">
              {BRAND.email}
            </a>{" "}
            and we will respond.
          </p>
        </RevealSection>
      </div>
    </article>
  );
}
