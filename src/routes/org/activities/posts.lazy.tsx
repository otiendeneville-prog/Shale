import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/org/activities/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/org/activities/posts"!</div>;
}
