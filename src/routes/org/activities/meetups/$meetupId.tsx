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
  console.log(meetups);
  return (
    <div className="max-w-2xl max-auto bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl">
      <h3 className="text-4xl font-extrabold text-white  mb-4 tracking-tight">
        {meetups.title}
      </h3>
      <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
        {meetups.description}
      </p>
    </div>
  );
}
