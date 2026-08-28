import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { BRAND } from "@/data/brand";
import { FounderPhoto } from "@/components/logo";

export const Route = createFileRoute("/thanks")({
  head: () =>
    pageHead({
      title: "We got your audit request",
      description: "Cortex will review your information and send a scheduling link if it looks like a fit.",
      path: "/thanks",
      noindex: true,
    }),
  component: Page,
});

function Page() {
  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-28 text-center">
      <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">Request received</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-fg md:text-5xl">We got it.</h1>
      <p className="mt-5 text-lg font-light text-fg/60">
        {BRAND.founder} will review what you sent. If it looks like a fit, you will get an email with a link to schedule
        the 30-minute walkthrough. Nothing else for you to do right now.
      </p>

      <div className="mt-10 rounded-2xl border border-fg/10 bg-surface p-8 text-left">
        <h2 className="text-sm font-bold tracking-widest text-gold uppercase">What happens next</h2>
        <ol className="mt-4 space-y-4 text-sm leading-relaxed font-light text-fg/70">
          <li>
            <span className="font-medium text-fg">1. We read the request.</span> Company, stack, revenue, and where the
            week stalls. That is how we decide if the audit is worth both of our time.
          </li>
          <li>
            <span className="font-medium text-fg">2. You get a scheduling link.</span> If we can help, the email has a
            calendar. Pick a time. If we cannot, we will say so instead of wasting a call.
          </li>
          <li>
            <span className="font-medium text-fg">3. The walkthrough.</span> Thirty minutes on how work moves through
            your software. You leave with an AI Opportunity Map.
          </li>
        </ol>
      </div>

      <footer className="mt-12 flex flex-col items-center gap-3">
        <FounderPhoto className="size-14" />
        <div>
          <div className="text-sm font-medium text-fg">{BRAND.founder}</div>
          <div className="text-xs text-fg/50">
            {BRAND.founderRole}, {BRAND.name}
          </div>
        </div>
        <p className="mt-4 text-sm text-fg/55">
          Questions in the meantime?{" "}
          <a href={`mailto:${BRAND.email}`} className="text-gold hover:text-gold-light">
            {BRAND.email}
          </a>
        </p>
      </footer>
    </article>
  );
}
