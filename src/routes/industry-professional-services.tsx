import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-professional-services")({
  component: () => <Navigate to="/industries" />,
});
