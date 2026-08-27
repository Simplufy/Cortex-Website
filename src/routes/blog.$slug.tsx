import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/site";
import { BeamButton } from "@/components/ui/beam-button";

export const Route = createFileRoute("/blog/$slug")({ component: Post });

function Post() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) throw notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-32">
      <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold">
        <ArrowLeft className="size-4" /> All articles
      </Link>
      <p className="mt-10 text-[10px] font-bold tracking-widest text-gold uppercase">{post.category}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-fg/40">
        {post.author} · {post.date} · {post.minutes} min read
      </p>
      <p className="mt-10 text-xl leading-relaxed font-light text-fg/70">{post.excerpt}</p>
      <div className="mt-10 space-y-6 text-lg leading-relaxed font-light text-fg/70">
        <p>
          This is the version we actually use with operators, not a think-piece. The problem shows up the same
          way in almost every service business that’s outgrown the whiteboard: the work is real, the system around the
          work is not.
        </p>
        <p>
          We start by mapping. Not because mapping is fashionable, but because you cannot fix (or automate) a process you
          cannot see. The Cortex is that map: every handoff, every tool, every place a job stalls.
        </p>
        <p>
          Then we unify. One login, one source of truth, role-based views so each person sees what they need. Only after
          that foundation holds do we layer automation and AI. Skip the order and you automate the mess.
        </p>
        <p>
          {post.excerpt} If you want the sprint, or a second set of eyes on the operation, book a call. We'll tell you if we're the right fit.
        </p>
      </div>
      <div className="mt-14">
        <BeamButton to="/audit">Get a Free Audit</BeamButton>
      </div>
    </article>
  );
}
