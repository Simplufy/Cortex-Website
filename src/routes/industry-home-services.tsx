import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-home-services")({
  beforeLoad: () => {
    throw redirect({ to: "/industries/$slug", params: { slug: "home-services" } });
  },
});
