import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { CONNECT_TOOLS, INTEGRATION_GROUPS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { RevealSection } from "@/components/reveal";

export const Route = createFileRoute("/integrations")({
  head: () =>
    pageHead({
      title: "Integrations",
      description:
        "Connect AI to the software your business already runs. Official APIs, approved integrations, webhooks, and controlled browser automation where needed. Evaluated per deployment.",
      path: "/integrations",
    }),
  component: Page,
});

function logoFor(name: string) {
  return CONNECT_TOOLS.find((t) => t.name === name)?.file;
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Connect AI to the software your business already runs."
        body="Cortex agents work across the systems your team already relies on. What we can reach is confirmed in the audit — not promised by a logo."
      />
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="How we connect"
          body="Official APIs first. Then approved integrations, webhooks, and MCP where a vendor supports them. Controlled browser automation only when there is no usable API and the work still needs to happen."
        />
        <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Official APIs", "The preferred path. Scoped credentials. Least privilege."],
            ["Approved integrations", "Vendor-supported connectors when they exist and they are enough."],
            ["Webhooks", "Event-driven updates from systems that can push a change when work moves."],
            ["MCP where available", "When a vendor ships a usable model-context path, we evaluate it the same way we evaluate an API."],
            ["Controlled browser automation", "Last resort. Dedicated login you authorize. Same logging. Same off switch."],
          ].map(([t, b]) => (
            <article key={t} className="rounded-2xl border border-fg/10 bg-surface p-8">
              <h2 className="text-lg font-medium text-fg">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed font-light text-fg/60">{b}</p>
            </article>
          ))}
        </div>
      </RevealSection>
      <RevealSection className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          title="Systems we commonly evaluate"
          body="Every integration is evaluated individually. A product appearing here means it is relevant to businesses we serve, not that Cortex has a certified or unrestricted integration with that vendor."
        />
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          {INTEGRATION_GROUPS.map((group) => (
            <section key={group.title}>
              <h2 className="text-xl font-medium text-fg">{group.title}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((name) => {
                  const file = logoFor(name);
                  return (
                    <li
                      key={name}
                      className="flex items-center gap-3 rounded-xl border border-fg/10 bg-surface px-4 py-3"
                    >
                      {file ? (
                        <img
                          src={`/images/logos/${file}`}
                          alt=""
                          width={28}
                          height={28}
                          className="size-7 object-contain"
                        />
                      ) : (
                        <span className="size-7 rounded bg-fg/10" />
                      )}
                      <span className="text-sm font-medium text-fg/80">{name}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl px-6 text-center text-sm text-fg/45">
          Named tools are examples. Access depends on APIs, vendor policy, and what you authorize. We do not replace
          these systems.
        </p>
        <p className="mt-8 text-center">
          <Link to="/case-studies" className="text-sm font-medium text-gold hover:text-gold-light">
            See a real stack in production
          </Link>
        </p>
      </RevealSection>
      <FinalCtaBlock />
    </>
  );
}
