import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-manufacturing")({
  component: () => <Navigate to="/industries" />,
});
