import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/data/brand";

export const Route = createFileRoute("/terms")({ component: Terms });

function Terms() {
  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-32">
      <p className="text-[10px] font-bold tracking-widest text-gold uppercase">Legal</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl">Terms of Service</h1>
      <p className="mt-3 text-sm text-fg/40">Last updated: August 26, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed font-light text-fg/70">
        <p>
          These Terms of Service ("Terms") govern your use of {BRAND.domain} and related content (the "Site"), operated by{" "}
          {BRAND.name} {BRAND.legal} ("{BRAND.name}," "we," "our," or "us"). By using the Site, you agree to these Terms.
          If you don't, please don't use the Site. These Terms cover the website only. If we do work together, that
          engagement is governed by a separate signed agreement.
        </p>
        <section>
          <h2 className="text-xl font-medium text-fg">1. Use of the Site</h2>
          <p className="mt-3">You agree to use the Site only for lawful purposes. You won't:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Scrape, copy, or systematically extract content for redistribution.</li>
            <li>Reverse-engineer the Site beyond what's permitted by law.</li>
            <li>Probe, scan, or test the security of the Site.</li>
            <li>Send unsolicited commercial messages through forms or email addresses listed on the Site.</li>
            <li>Use the Site in any way that could damage, disable, overburden, or impair it.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">2. Intellectual property</h2>
          <p className="mt-3">
            The content on the Site, including the {BRAND.name} name, logo, written copy, case studies, field notes, and
            design, is owned by {BRAND.name} or licensed to us. You may view and share short excerpts with attribution
            and a link back. You may not republish, sell, or use our content for commercial purposes without written
            permission.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">3. No professional advice</h2>
          <p className="mt-3">
            The information on the Site is general information about how {BRAND.name} approaches operations and
            software, not specific business, legal, financial, or technical advice for your situation.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">4. Disclaimer of warranties</h2>
          <p className="mt-3">
            The Site is provided "as is" and "as available." To the fullest extent permitted by law, we disclaim all
            warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, and
            uninterrupted access.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">5. Limitation of liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by law, {BRAND.name} will not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits, revenue, data, business, or goodwill
            arising out of your use of the Site. Our total liability for any claim related to the Site is limited to one
            hundred U.S. dollars (US$100).
          </p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-fg">6. Contact</h2>
          <p className="mt-3">
            Questions:{" "}
            <a href={`mailto:${BRAND.email}`} className="text-gold">
              {BRAND.email}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
