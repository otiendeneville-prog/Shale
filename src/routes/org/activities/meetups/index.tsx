import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/org/activities/meetups/")({
  component: MeetupComponent,
});
const meetups = [
  {
    id: 1,
    title: "React 19 & The Future of Web Dev",
    description:
      "Deep dive into Server Actions, the new React Compiler, and hands-on architecture patterns for modern frontends.",
    date: "Thursday, November 12, 2026",
    city: "San Francisco",
    location: "TechHub Downtown, Room 404",
    attendance: 142,
    tech: "React",
  },
  {
    id: 2,
    title: "Building Real-time Apps with WebSockets",
    description:
      "Learn how to scale concurrent connections and manage state efficiently in high-traffic dashboard environments.",
    date: "Tuesday, November 17, 2026",
    city: "New York",
    location: "Grid Innovation Labs, Floor 12",
    attendance: 89,
    tech: "Node.js",
  },
  {
    id: 3,
    title: "CSS Architecture in Large Scale Apps",
    description:
      "An open discussion comparing Tailwind, CSS Modules, and Vanilla Extract for multi-repo design systems.",
    date: "Saturday, December 5, 2026",
    city: "Austin",
    location: "Capital Factory, Anthem Room",
    attendance: 215,
    tech: "CSS",
  },
];

function MeetupComponent() {
  return (
    <div>
      {meetups.map((meetup) => (
        <Link
          key={meetup.id}
          to="meetup/$meetupId"
          params={{ $meetupId: meetup.id.toString() }}
        >
          <h3
            className="text-xl font-bold text-white  py-10 border
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
