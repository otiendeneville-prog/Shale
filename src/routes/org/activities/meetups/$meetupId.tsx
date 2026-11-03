import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/org/activities/meetups/$meetupId")({
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:3001/meetups/${params.meetupId}`);
    if (!res.ok) throw new Error("Meetup not found");
    return res.json();
  },
  component: MeetupComponent,
});

function MeetupComponent() {
  const meetups = Route.useLoaderData();
  return <div>Hello "/org/activities/meetups/$meetupId"!</div>;
}
