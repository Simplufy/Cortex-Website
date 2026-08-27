import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-logistics")({
  component: () => <Navigate to="/industries" />,
});
