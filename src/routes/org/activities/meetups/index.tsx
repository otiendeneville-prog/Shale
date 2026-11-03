import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/org/activities/meetups/")({
  component: MeetupComponent,
  loader: async () => {
    const res = await fetch("http://locatlhost:3000/events");
    const events = await res.json();
    return events;
  },
});

function MeetupComponent() {
  return (
    <div>
      {meetups.map((meetup) => (
        <Link
          key={meetup.id}
          to="meetup/$meetupId"
          params={{ meetupId: meetup.id.toString() }}
        >
          <h3
            className="text-xl font-bold text-white  py-10 border hover:border-emerald-500 transition-colors
           rounded "
          >
            {meetup.title}
          </h3>
          <p> {meetup.location}</p>
        </Link>
      ))}
    </div>
  );
}
