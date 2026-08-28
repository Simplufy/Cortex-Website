import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-hvac")({
  beforeLoad: () => {
    throw redirect({ to: "/industries/$slug", params: { slug: "hvac" } });
  },
});
