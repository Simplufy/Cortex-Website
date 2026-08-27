import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/business-systems-development")({
  beforeLoad: () => {
    throw redirect({ to: "/ai-implementation" });
  },
});
