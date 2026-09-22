import { Link } from "@tanstack/react-router";
import { AuditButton } from "@/components/audit-modal";
import { GhostButton } from "@/components/ui/beam-button";
import { FinalCtaBlock } from "@/components/pages/inner";
import { RevealSection } from "@/components/reveal";
import { HelpScene } from "@/components/home/help-scenes";
import { HELP_GROUPS, HELP_TOPICS, type HelpTopic, helpParam } from "@/data/help";

export function HelpIndexPage() {
  return (
    <>
      <main className="px-4 pt-8 pb-6 sm:px-6 sm:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">What we help with</p>
          <h1 className="mt-3 text-[clamp(1.8rem,4.2vw,3.1rem)] leading-[1.08] font-medium tracking-tight text-fg">
            Leftover work in the software you already run.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-fg/55">
            You don't have to learn AI. These are the jobs we implement as agents in your CRM, field software, ads, and books. Each one is a real path, not a chatbot prompt.
          </p>
        </div>
      </main>
      {HELP_GROUPS.map((group) => {
        const items = HELP_TOPICS.filter((t) => t.group === group);
        return (
          <RevealSection key={group} id={group.toLowerCase().replace(/\s+/g, "-")} className="border-t border-fg/5 py-12 sm:py-16">
            <div className="mx-auto mb-8 max-w-6xl px-4 sm:px-6">
              <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">{group}</h2>
              <p className="mt-2 text-[15px] text-fg/50">{groupBlurb(group)}</p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
              {items.map((topic) => (
                <Link
                  key={topic.slug}
                  to="/help/$slug"
                  params={{ slug: helpParam(topic) }}
                  className="group overflow-hidden rounded-2xl border border-fg/8 bg-elevated transition-shadow hover:shadow-[0_16px_50px_rgba(17,17,17,0.08)]"
                >
                  <div className="pointer-events-none h-36 overflow-hidden bg-[#f3efe8]">
                    <div className="origin-top scale-[0.55]">
                      <HelpScene topic={topic} />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      {topic.logos.slice(0, 3).map((l) => (
                        <img key={l.file} src={`/images/logos/${l.file}`} alt="" className="size-5 object-contain" />
                      ))}
                    </div>
                    <h3 className="font-medium text-fg group-hover:text-gold">{topic.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-fg/50">{topic.blurb}</p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealSection>
        );
      })}
      <FinalCtaBlock ctaTo="/audit" />
    </>
  );
}

export function HelpTopicPage({ topic }: { topic: HelpTopic }) {
  const related = HELP_TOPICS.filter((x) => x.group === topic.group && x.slug !== topic.slug);
  return (
    <>
      <main className="px-4 pt-8 pb-10 sm:px-6 lg:flex lg:min-h-[calc(100svh-5.0625rem)] lg:items-center lg:pt-6 lg:pb-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-[12px] font-medium tracking-[0.18em] text-gold uppercase">{topic.group}</p>
            <h1 className="mt-3 text-[clamp(1.7rem,3.6vw,2.85rem)] leading-[1.12] font-medium tracking-tight text-fg">
              {topic.headline}
            </h1>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-fg/60">
              {topic.lede.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {topic.logos.map((l) => (
                <span key={l.file} className="inline-flex items-center gap-2 rounded-full border border-fg/8 bg-elevated px-3 py-1.5">
                  <img src={`/images/logos/${l.file}`} alt="" className="size-4 object-contain" />
                  <span className="text-[12px] text-fg/70">{l.name}</span>
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-row items-center gap-2 sm:gap-3">
              <AuditButton variant="solid" className="min-w-0 flex-1 sm:flex-none">
                Get your free audit
              </AuditButton>
              <GhostButton className="w-auto min-w-0 flex-1 sm:flex-none" to="/help">
                All leftover jobs
              </GhostButton>
            </div>
          </div>
          <HelpScene topic={topic} />
        </div>
      </main>
      <RevealSection className="border-t border-fg/5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3 sm:px-6">
          {topic.beats.map((b) => (
            <article key={b.title} className="border-t border-gold/45 pt-5">
              <h2 className="text-xl font-medium tracking-tight text-fg">{b.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-fg/60">{b.body}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl px-4 text-center text-sm text-fg/40 sm:px-6">{topic.aside}</p>
      </RevealSection>
      {related.length > 0 && (
        <RevealSection className="border-t border-fg/5 py-12">
          <p className="mb-5 text-center text-[12px] font-medium tracking-[0.18em] text-gold uppercase">More in {topic.group.toLowerCase()}</p>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 px-4">
            {related.map((x) => (
              <Link
                key={x.slug}
                to="/help/$slug"
                params={{ slug: helpParam(x) }}
                className="rounded-full border border-fg/8 bg-surface px-4 py-2 text-sm text-fg/70 hover:border-gold/40 hover:text-fg"
              >
                {x.name}
              </Link>
            ))}
          </div>
        </RevealSection>
      )}
      <FinalCtaBlock ctaTo="/audit" />
    </>
  );
}

function groupBlurb(group: string) {
  switch (group) {
    case "Get work":
      return "Show up, stay active, and turn finished jobs into the next one.";
    case "Win work":
      return "Answer leftover demand before it goes cold.";
    case "Run the shop":
      return "Watch the queue in field software, not in a chat tab.";
    case "Get paid":
      return "Work that happened should show up in the books.";
    default:
      return "The customer and the owner shouldn't be the last to know.";
  }
}
