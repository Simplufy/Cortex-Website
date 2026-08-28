import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-pest-control")({
  beforeLoad: () => {
    throw redirect({ to: "/industries/$slug", params: { slug: "pest-control" } });
  },
});
