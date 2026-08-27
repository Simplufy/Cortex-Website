import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/podcast/$slug")({
  component: () => <Navigate to="/resources" />,
});
