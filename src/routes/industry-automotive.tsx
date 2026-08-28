import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-automotive")({
  beforeLoad: () => {
    throw redirect({ to: "/industries/$slug", params: { slug: "automotive-service" } });
  },
});
