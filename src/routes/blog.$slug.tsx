import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import {
  articleBySlug,
  articleWordCount,
  relatedArticles,
  type Article,
  type ArticleBlock,
} from "@/data/articles";
import { BRAND } from "@/data/brand";
import { BeamButton } from "@/components/ui/beam-button";
import { RevealSection } from "@/components/reveal";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScript,
  pageHead,
} from "@/lib/seo";
import { auditPath } from "@/lib/audit-path";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = articleBySlug(params.slug);
    if (!post) {
      return pageHead({
        title: "Field note",
        description: "Notes from Cortex.",
        path: `/blog/${params.slug}`,
      });
    }
    const base = pageHead({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.dateIso,
      modifiedTime: post.updatedIso,
      author: post.author === "McGuire" ? BRAND.founder : post.author,
    });
    const scripts = [
      jsonLdScript(
        articleJsonLd({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          date: post.dateIso,
          modified: post.updatedIso,
          author: post.author,
          section: post.category,
          wordCount: articleWordCount(post),
        }),
      ),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
      ),
    ];
    if (post.faqs.length) scripts.push(jsonLdScript(faqJsonLd(post.faqs)));
    return { ...base, scripts };
  },
  component: Post,
});

function ctaForPost(post: Article) {
  return auditPath(post.industry === "general" ? undefined : post.industry);
}

function Post() {
  const { slug } = Route.useParams();
  const post = articleBySlug(slug);
  if (!post) throw notFound();
  const related = relatedArticles(post);
  const ctaTo = ctaForPost(post);

  return (
    <article className="mx-auto max-w-3xl px-4 pt-12 pb-28 sm:px-6 sm:pt-16 sm:pb-32">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-fg/45">
        <Link to="/" className="hover:text-gold">
          Home
        </Link>
        <span aria-hidden>/</span>
        <Link to="/resources" className="hover:text-gold">
          Resources
        </Link>
        <span aria-hidden>/</span>
        <span className="text-fg/60">{post.category}</span>
      </nav>

      <Link to="/resources" className="mt-6 inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold">
        <ArrowLeft className="size-4" /> All field notes
      </Link>

      <header>
        <p className="mt-8 text-[10px] font-bold tracking-widest text-gold uppercase sm:mt-10">{post.category}</p>
        <h1 className="mt-3 text-balance text-[1.75rem] leading-[1.12] font-medium tracking-tight text-fg sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-fg/50">
          {post.author === "McGuire" ? BRAND.founder : post.author} · {post.date} · {post.minutes} min read
        </p>
        <p className="mt-8 text-lg leading-relaxed font-light text-fg/70 sm:mt-10 sm:text-xl">{post.excerpt}</p>
      </header>

      <div className="mt-8 sm:mt-10">
        {post.blocks.map((block, i) => (
          <Block key={`${block.type}-${i}`} block={block} />
        ))}
      </div>

      {post.industry === "automotive" && (
        <p className="mt-10 text-sm leading-relaxed text-fg/55">
          Related on this site:{" "}
          <Link to="/case-studies/$slug" params={{ slug: "detail-driven" }} className="text-gold hover:underline">
            Detail Driven case study
          </Link>
          {" · "}
          <Link to="/industries/$slug" params={{ slug: "automotive-service" }} className="text-gold hover:underline">
            Automotive service
          </Link>
          {" · "}
          <Link to="/audit/$slug" params={{ slug: "automotive" }} className="text-gold hover:underline">
            Automotive audit
          </Link>
          .
        </p>
      )}

      {post.industry && post.industry !== "automotive" && post.industry !== "general" && (
        <p className="mt-10 text-sm leading-relaxed text-fg/55">
          Related on this site:{" "}
          <Link to="/industries/$slug" params={{ slug: post.industry }} className="text-gold hover:underline">
            {post.industry === "hvac" ? "HVAC" : "Your trade"}
          </Link>
          {" · "}
          <Link to="/audit/$slug" params={{ slug: post.industry }} className="text-gold hover:underline">
            {post.industry === "hvac" ? "HVAC" : "Industry"} audit
          </Link>
          .
        </p>
      )}

      {post.faqs.length > 0 && (
        <RevealSection className="mt-16 border-t border-fg/10 pt-12 sm:mt-20">
          <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">Questions operators ask</h2>
          <dl className="mt-8 space-y-8">
            {post.faqs.map((f) => (
              <div key={f.q}>
                <dt>
                  <h3 className="text-lg font-medium text-fg">{f.q}</h3>
                </dt>
                <dd className="mt-2 text-base leading-relaxed font-light text-fg/70">{f.a}</dd>
              </div>
            ))}
          </dl>
        </RevealSection>
      )}

      <RevealSection className="mt-14 rounded-2xl border border-gold/25 bg-gold/5 p-6 sm:mt-16 sm:p-10">
        <h2 className="text-2xl font-medium tracking-tight text-fg">See the leftover work in your operation</h2>
        <p className="mt-3 text-sm leading-relaxed font-light text-fg/65 sm:text-base">
          Thirty minutes on how the work actually moves. No pack of agents. No obligation to build. If we can help, we
          will show you the first paths. If we cannot, we will say so.
        </p>
        <div className="mt-6">
          <BeamButton className="w-full sm:w-auto" to={ctaTo}>
            Get Your Free AI Operations Audit
          </BeamButton>
        </div>
      </RevealSection>

      {related.length > 0 && (
        <RevealSection className="mt-16 sm:mt-20">
          <h2 className="text-2xl font-medium tracking-tight text-fg">Keep reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-1">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="rounded-2xl border border-fg/10 bg-surface p-6 transition-colors hover:border-gold/30"
              >
                <div className="text-[10px] font-bold tracking-widest text-gold uppercase">{p.category}</div>
                <h3 className="mt-2 text-lg font-medium text-fg">{p.title}</h3>
                <p className="mt-2 text-sm font-light text-fg/60">{p.excerpt}</p>
                <p className="mt-4 text-xs text-fg/40">
                  {p.date} · {p.minutes} min read
                </p>
              </Link>
            ))}
          </div>
        </RevealSection>
      )}
    </article>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="mt-12 text-2xl font-medium tracking-tight text-fg sm:mt-14 sm:text-3xl">{block.text}</h2>
    );
  }
  if (block.type === "h3") {
    return <h3 className="mt-8 text-xl font-medium text-fg sm:mt-10">{block.text}</h3>;
  }
  if (block.type === "quote") {
    return (
      <blockquote className="mt-8 border-l-2 border-gold pl-5 text-lg leading-relaxed font-medium text-fg/85 sm:mt-10 sm:text-xl">
        {block.text}
      </blockquote>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-6 list-none space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed font-light text-fg/70 sm:text-lg">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-5 text-base leading-relaxed font-light text-fg/70 sm:text-lg">{block.text}</p>;
}
