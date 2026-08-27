import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/ui/page-hero";
import { FinalCtaBlock } from "@/components/pages/inner";
import { BLOG_POSTS } from "@/data/site";

export const Route = createFileRoute("/resources")({ component: Page });

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="Notes from the field"
        body="How work actually moves in shops and trades, and what agents can watch without replacing the software you already run."
      />
      <section id="blog" className="border-t border-fg/5 pt-24 pb-24">
        <SectionHead
          kicker="Writing"
          title="Tactical breakdowns from the field."
          body="Stalls we’ve mapped. How the work really moves. What we’d install first."
        />
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-2xl border border-fg/10 bg-surface p-8 transition-colors hover:border-gold/30"
            >
              <div className="text-[10px] font-bold tracking-widest text-gold uppercase">{p.category}</div>
              <h3 className="mt-2 text-xl font-medium text-fg">{p.title}</h3>
              <p className="mt-3 text-sm font-light text-fg/60">{p.excerpt}</p>
              <p className="mt-5 text-xs text-fg/40">
                {p.author} · {p.date} · {p.minutes} min read
              </p>
            </Link>
          ))}
        </div>
      </section>
      <FinalCtaBlock />
    </>
  );
}
