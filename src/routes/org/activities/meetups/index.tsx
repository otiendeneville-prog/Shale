import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";

const searchSchema = z.object({
  city: z.string().catch("all"),
  tech: z.string().catch("all"),
});

export const Route = createFileRoute("/org/activities/meetups/")({
  loader: async () => {
    const res = await fetch("http://localhost:3001/meetups");
    const events = await res.json();
    return events;
    pendingComponent: () => (
      <div className="animate-pulse">loading meetup data...</div>
    );
    errorComponent: ({ error }) => (
      <div className="text-red-500">{error.message}</div>
    );
  },
  component: MeetupComponent,
});

function MeetupComponent() {
  const meetups = Route.useLoaderData();
  return (
    <div>
      {meetups.map((meetup) => (
        <Link
          key={meetup.id}
          to="/org/activities/meetups/$meetupId"
          params={{ meetupId: meetup.id }}
        >
          <h3
            className="text-xl font-bold text-white  py-10 border hover:border-emerald-500 transition-colors
           rounded "
          >
            {meetup.title}
          </h3>
          <p className="text-neutral-400 text-lg leading-relaxed">
            {meetup.location}
          </p>
        </Link>
      ))}
    </div>
  );
}
