import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { pageHead } from "@/lib/seo";
import { BRAND } from "@/data/brand";

export const Route = createFileRoute("/schedule")({
  head: () =>
    pageHead({
      title: "Schedule your walkthrough",
      description: "Pick a time for the 30-minute AI Operations Audit walkthrough.",
      path: "/schedule",
      noindex: true,
    }),
  component: Page,
});

const BOOKING_ID = "VU6HcuUgEdk40iMtwxIt";
const IFRAME_ID = "VU6HcuUgEdk40iMtwxIt_1787845452469";

function Page() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <article className="mx-auto max-w-4xl px-6 pt-14 pb-24">
      <p className="text-center text-[10px] font-bold tracking-[0.22em] text-gold uppercase">{BRAND.legal}</p>
      <h1 className="mt-4 text-center text-4xl font-medium tracking-tight text-fg md:text-5xl">
        Pick a time for the walkthrough
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg font-light text-fg/60">
        Thirty minutes on how work moves through your software. You leave with an AI Opportunity Map.
      </p>
      <div className="mt-10 overflow-hidden rounded-2xl border border-fg/10 bg-surface">
        <iframe
          src={`https://api.leadconnectorhq.com/widget/booking/${BOOKING_ID}`}
          id={IFRAME_ID}
          title="Schedule the AI Operations Audit walkthrough"
          allow="payment"
          scrolling="no"
          className="w-full border-0"
          style={{ minHeight: 1100, overflow: "hidden" }}
        />
      </div>
    </article>
  );
}
