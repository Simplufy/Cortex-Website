import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/pages/inner";
import { industryBySlug } from "@/data/site";

export const Route = createFileRoute("/industry-roofing")({
  component: () => <IndustryPage industry={industryBySlug("roofing")} />,
});
