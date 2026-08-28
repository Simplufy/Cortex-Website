import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { BRAND } from "@/data/brand";
import { FounderPhoto } from "@/components/logo";

export const Route = createFileRoute("/confirmed")({
  head: () =>
    pageHead({
      title: "You're booked",
      description: "Your AI Operations Audit walkthrough is on the calendar.",
      path: "/confirmed",
      noindex: true,
    }),
  component: Page,
});

function Page() {
  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-28 text-center">
      <p className="text-[10px] font-bold tracking-[0.22em] text-gold uppercase">Confirmed</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-fg md:text-5xl">You're on the calendar.</h1>
      <p className="mt-5 text-lg font-light text-fg/60">
        Check your email for the invite. Thirty minutes with {BRAND.founder}. We look at how work actually moves through
        your software.
      </p>

      <div className="mt-10 rounded-2xl border border-fg/10 bg-surface p-8 text-left">
        <h2 className="text-sm font-bold tracking-widest text-gold uppercase">Have this ready</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed font-light text-fg/70">
          <li>The logins you already use. CRM, shop or field software, ads, accounting. We do not need passwords on the call.</li>
          <li>One or two places the week stalls. Follow-up, reporting, jobs that sit too long.</li>
          <li>Whoever actually runs the board, if that is not you.</li>
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-fg/10 bg-surface p-8 text-left">
        <h2 className="text-sm font-bold tracking-widest text-gold uppercase">What you leave with</h2>
        <p className="mt-4 text-sm leading-relaxed font-light text-fg/70">
          An AI Opportunity Map: highest-value agent paths, what we can actually connect, what should stay human, and a
          recommended first deployment. No generic presentation. No obligation to build.
        </p>
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
          Need to move it?{" "}
          <a href={`mailto:${BRAND.email}`} className="text-gold hover:text-gold-light">
            {BRAND.email}
          </a>
          {" · "}
          <a href={BRAND.phoneHref} className="text-gold hover:text-gold-light">
            {BRAND.phone}
          </a>
        </p>
      </footer>
    </article>
  );
}
