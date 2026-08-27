import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BeamButton } from "@/components/ui/beam-button";
import { LetterMark } from "@/components/logo";
import { CASE_STUDIES } from "@/data/site";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useParams();
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) throw notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pt-16 pb-32">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-fg/50 hover:text-gold">
        <ArrowLeft className="size-4" /> All case studies
      </Link>
      <p className="mt-10 text-[10px] font-bold tracking-widest text-gold uppercase">{study.industry}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg md:text-6xl">{study.name}</h1>
      <p className="mt-6 text-xl font-light text-fg/60">{study.result}</p>
      <div className="mt-10 overflow-hidden rounded-2xl border border-fg/10 bg-surface p-12">
        <LetterMark letters={study.mark} className="mx-auto size-24 text-2xl" />
      </div>
      <blockquote className="mt-12 border-l-2 border-gold pl-6">
        <p className="text-2xl leading-snug font-medium tracking-tight text-fg">“{study.quote}”</p>
        <footer className="mt-4 text-sm text-fg/50">
          {study.person} · {study.role}
        </footer>
      </blockquote>
      <div className="mt-12 space-y-6 text-lg leading-relaxed font-light text-fg/70">
        <p>
          {study.name} came to Cortex the way most operators do: the work was going out the door. The operation was not.
          Jobs lived in texts, whiteboards, and a few people’s heads.
        </p>
        <p>
          We ran a Cortex sprint (3 to 5 calls over two weeks) and mapped how the business actually ran. Then we designed
          a custom portal around that map. One login. One source of truth. Automations layered on once the foundation
          held. The Cortex stays connected to the work, so it keeps getting sharper.
        </p>
        <p>
          The result: {study.result} People stopped coordinating across six tools. Leadership could trust the numbers.
          And the operation no longer needed the owner standing in the middle of every decision.
        </p>
      </div>
      <div className="mt-16">
        <BeamButton to="/audit">Get a Free Audit</BeamButton>
      </div>
    </article>
  );
}
