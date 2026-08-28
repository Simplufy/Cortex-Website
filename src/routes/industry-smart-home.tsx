import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-smart-home")({
  beforeLoad: () => {
    throw redirect({ to: "/industries/$slug", params: { slug: "smart-home" } });
  },
});
