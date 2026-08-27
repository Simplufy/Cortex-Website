import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { FounderPhoto } from "@/components/logo";
import { BRAND } from "@/data/brand";

export const Route = createFileRoute("/about-us")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${BRAND.name}. ${BRAND.tagline.replace(/\.$/, "")}`}
        body="McGuire Flanigan started Cortex to install AI agents inside the software service businesses already run. Not another chatbot. Not a rip-and-replace of the shop system."
      />
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Too small for a lab. Too real for a chatbot agency."
          body="Established service companies have three bad options when the leftover admin will not quit."
        />
        <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
          {[
            ["Chatbots and receptionist widgets", "One narrow tool. Another login. The board still needs a person staring at it."],
            ["Zapier plus ChatGPT", "Glue can move a field. It will not watch a shop, respect permissions, or stay current."],
            ["Hire an internal AI team", "Most operators need the implementation and the upkeep, not a department."],
          ].map(([t, b]) => (
            <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
              <h3 className="text-lg font-medium text-fg">{t}</h3>
              <p className="mt-3 text-sm font-light text-fg/60">{b}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl px-6 text-center text-lg font-light text-fg/70">
          Cortex is the fourth option. Audit the work. Connect agents to the software you already pay for. Manage them
          after they go live. Field service and the trades first.
        </p>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="Founder" body="One person who sits with the operation and stays on the build." />
        <div className="mx-auto max-w-3xl px-6">
          <article className="rounded-2xl border border-fg/10 bg-surface p-8 md:p-10">
            <FounderPhoto className="size-24 ring-gold/40" />
            <h3 className="mt-5 text-2xl font-medium text-fg">{BRAND.founder}</h3>
            <p className="text-sm text-gold">{BRAND.founderRole}</p>
            <p className="mt-4 text-sm leading-relaxed font-light text-fg/60">
              Most companies do not have a software shortage. They have a people-operating-the-software problem. McGuire
              started Cortex to install agents inside the tools those operators already pay for. Based in the Midwest.
              Works with auto shops, HVAC, pest, roofing, and home services first.
            </p>
            <a href={`mailto:${BRAND.email}`} className="mt-5 inline-flex text-fg/40 hover:text-gold" aria-label="Email">
              <Mail className="size-4" />
            </a>
          </article>
        </div>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          kicker="How we work"
          title="AI operations, without the theater."
          body="Audit first. Keep their software. Agents for the repetitive path. People keep the judgment."
        />
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            ["Audit", "Before we build"],
            ["Connect", "Existing software"],
            ["Deploy", "Approvals included"],
            ["Manage", "After it is live"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-medium text-gold">{n}</div>
              <div className="mt-2 text-xs tracking-wide text-fg/50 uppercase">{l}</div>
            </div>
          ))}
        </div>
      </section>
      <FinalCtaBlock />
    </>
  );
}
