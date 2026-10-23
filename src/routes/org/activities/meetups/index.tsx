import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/org/activities/meetups/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/org/activities/meetups/"!</div>;
}
