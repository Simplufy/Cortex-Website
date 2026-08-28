import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-plumbing")({
  beforeLoad: () => {
    throw redirect({ to: "/industries/$slug", params: { slug: "plumbing" } });
  },
});
