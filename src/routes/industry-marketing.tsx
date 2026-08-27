import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-marketing")({
  component: () => <Navigate to="/industries" />,
});
