import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustryLander } from "@/components/industry-lander";
import { landerBySlug } from "@/data/landers";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/audit/$slug")({
  loader: ({ params }) => {
    const lander = landerBySlug(params.slug);
    if (!lander) throw notFound();
    return lander;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageHead({
        title: "AI Operations Audit",
        description: "Find out what AI could actually take off your team.",
        path: "/audit",
      });
    }
    return pageHead({
      title: loaderData.seoTitle,
      description: loaderData.seoDescription,
      path: `/audit/${loaderData.slug}`,
    });
  },
  component: Page,
});

function Page() {
  const lander = Route.useLoaderData();
  return <IndustryLander lander={lander} />;
}
