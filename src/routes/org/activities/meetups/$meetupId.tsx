import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/org/activities/meetups/$meetupId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/org/activities/meetups/$meetupId"!</div>;
}
