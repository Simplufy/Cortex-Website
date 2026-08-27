import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/book-a-call")({
  beforeLoad: () => {
    throw redirect({ to: "/audit" });
  },
});
