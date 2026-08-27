import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-enablement")({
  beforeLoad: () => {
    throw redirect({ to: "/ai-agents" });
  },
});
