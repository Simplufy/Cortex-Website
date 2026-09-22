import { createFileRoute, notFound } from "@tanstack/react-router";
import { HelpTopicPage } from "@/components/pages/help-page";
import { helpBySlug } from "@/data/help";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/help/$slug")({
  loader: ({ params }) => {
    const topic = helpBySlug(params.slug);
    if (!topic) throw notFound();
    return topic;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return pageHead({ title: "What we help with", description: "Cortex help.", path: "/help" });
    return pageHead({
      title: `${loaderData.name} | AI Agents for ${loaderData.group}`,
      description: loaderData.lede[0],
      path: loaderData.href,
    });
  },
  component: Page,
});

function Page() {
  const topic = Route.useLoaderData();
  return <HelpTopicPage topic={topic} />;
}
