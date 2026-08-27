import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ops-consulting")({
  beforeLoad: () => {
    throw redirect({ to: "/ai-implementation" });
  },
});
