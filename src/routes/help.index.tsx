import { createFileRoute } from "@tanstack/react-router";
import { HelpIndexPage } from "@/components/pages/help-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/help/")({
  head: () =>
    pageHead({
      title: "What We Help With | AI Agents for Leftover Work in Your Software",
      description:
        "Missed calls, stalled jobs, unbilled work, review asks, estimate follow-up. Cortex implements agents for leftover work in the CRM, field software, ads, and books you already run.",
      path: "/help",
    }),
  component: HelpIndexPage,
});
