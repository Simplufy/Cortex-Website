import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-roofing")({
  beforeLoad: () => {
    throw redirect({ to: "/industries/$slug", params: { slug: "roofing" } });
  },
});
