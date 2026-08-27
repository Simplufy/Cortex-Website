import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/data/brand";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-32">
      <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Legal</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-fg/40">Last updated: April 30, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed font-light text-fg/70">
        <p>How Cortex handles personal data: what we collect, why, who we share it with, and how to exercise your rights.</p>
        <section>
          <h2 className="text-xl font-medium text-fg">1. What we collect</h2>
          <p className="mt-3">We collect only what we need to run the Site and respond to inquiries:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Information you give us when you book a call, fill out a form, or email us. Name, email, company, and whatever else you choose to include.</li>
            <li>Cookies and similar technologies. Small files placed by embedded third-party tools to make those features work and measure usage.</li>
            <li>Server and analytics logs: IP address, browser type, pages visited, and timestamps. Used for security, debugging, and aggregate traffic analysis.</li>
          </ul>
          <p className="mt-3">We don’t collect health information, payment card details, or government identification numbers through this Site.</p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">2. Why we collect it</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To respond to your message or schedule a call.</li>
            <li>To improve the Site (which content people read, where they get stuck).</li>
            <li>To keep the Site secure and detect abuse.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p className="mt-3">We don’t sell your personal information. We don’t use it to train AI models. We don’t share it for cross-context behavioral advertising.</p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">3. Who we share it with</h2>
          <p className="mt-3">We share data only with service providers who help us run the business, under contracts that limit their use of it: Typeform, Calendly, SproutVideo, Vercel, and (only after you accept) Google Tag Manager & Google Analytics 4.</p>
          <p className="mt-3">We may also share data when required by law, or if we’re acquired. Your data would transfer with the business under the same terms.</p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">4. How long we keep it</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Contact form submissions: up to 24 months after our last interaction.</li>
            <li>Server logs: typically 90 days.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">5. Cookies</h2>
          <p className="mt-3">
            The first time you visit, you’ll see a banner asking whether to allow analytics cookies (Accept) or restrict them (Decline). You can change your choice any time using the Manage cookies link in the footer. Strictly necessary cookies cannot be disabled.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">6. Your rights</h2>
          <p className="mt-3">
            Depending on where you live, you may have the right to access, correct, delete, or export your data, or to object to certain processing. Email{" "}
            <a href={`mailto:${BRAND.email}`} className="text-gold">
              {BRAND.email}
            </a>{" "}
            and we'll respond.
          </p>
        </section>
      </div>
    </article>
  );
}
