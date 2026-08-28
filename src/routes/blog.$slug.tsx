import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { articleBySlug } from "@/data/articles";
import { BeamButton } from "@/components/ui/beam-button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = articleBySlug(params.slug);
    return pageHead({
      title: post?.title || "Field note",
      description: post?.excerpt || "Notes from Cortex.",
      path: `/blog/${params.slug}`,
    });
  },
  component: Post,
});

function Post() {
  const { slug } = Route.useParams();
  const post = articleBySlug(slug);
  if (!post) throw notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-32">
      <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold">
        <ArrowLeft className="size-4" /> All articles
      </Link>
      <p className="mt-10 text-[10px] font-bold tracking-widest text-gold uppercase">{post.category}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-fg/50">
        {post.author} · {post.date} · {post.minutes} min read
      </p>
      <p className="mt-10 text-xl leading-relaxed font-light text-fg/70">{post.excerpt}</p>
      <div className="mt-10 space-y-6 text-lg leading-relaxed font-light text-fg/70">
        {post.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
      <div className="mt-14">
        <BeamButton to="/audit">Get Your Free AI Operations Audit</BeamButton>
      </div>
    </article>
  );
}
