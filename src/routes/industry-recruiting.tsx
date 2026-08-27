import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/industry-recruiting")({
  component: () => <Navigate to="/industries" />,
});
