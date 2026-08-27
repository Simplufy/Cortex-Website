import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { LetterMark } from "@/components/logo";
import { CASE_STUDIES } from "@/data/site";

export const Route = createFileRoute("/case-studies/")({ component: Listing });

function Listing() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Example deployments"
        body="Architecture examples across field service. Verified results go here when we have them. Named quotes are not published customer testimonials."
        primary={{ to: "/audit", label: "Get a Free Audit" }}
      />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="case-card group relative flex flex-col overflow-hidden rounded-xl border border-fg/10 bg-surface transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="flex aspect-16/10 items-center justify-center bg-bg p-8">
                <LetterMark letters={c.mark} className="size-20 text-xl" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[10px] font-bold tracking-widest text-gold uppercase">{c.industry}</div>
                <h2 className="mt-2 text-lg font-medium text-fg">{c.name}</h2>
                <p className="mt-2 text-sm font-light text-fg/55">{c.result}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead title="What owners say once the board is the system" />
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((c) => (
            <blockquote key={c.slug} className="rounded-2xl border border-fg/10 bg-surface p-8">
              <p className="text-lg font-light text-fg/80">“{c.quote}”</p>
              <footer className="mt-6 text-sm text-fg/50">
                {c.person}, {c.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      <FinalCtaBlock title="Want this for your operation?" />
    </>
  );
}
