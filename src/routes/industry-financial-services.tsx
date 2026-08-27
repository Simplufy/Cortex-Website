import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-financial-services")({
  component: () => <Navigate to="/industries" />,
});
