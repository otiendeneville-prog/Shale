import {
  createFileRoute,
  Link,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { z } from "zod";

const searchSchema = z.object({
  city: z.string().catch("all"),
  tech: z.string().catch("all"),
});

export const Route = createFileRoute("/org/activities/meetups/")({
  validateSearch: searchSchema,
  loaderDeps: ({ search: { city, tech } }) => ({ city, tech }),
  loader: async ({ deps }) => {
    const res = await fetch("http://localhost:3001/meetups");
    const events = await res.json();

    if (deps.tech && deps.tech !== "all") {
      event = events.filter((event: any) =>
        event.tech.toLowerCase().includes(deps.tech.toLowerCase()),
      );
    }
    return events;
    if (deps.city && deps.city !== "all") {
      event = events.filter((event: any) =>
        event.city.toLoverCase().includes(deps.city.toLocaleLowerCase()),
      );
      return events;
    }
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
  const { city, tech } = Route.useSearch();
  const navigate = Route.useNavigate();

  const handleFilter = () => {
    navigate({ search: { city: "Bengaluru", tech: "FullStack" } });
  };
  return (
    <>
      <div className="space-y-3">
        <div className="text-center rounded-lg flex bg-neutral-900 p-4 ">
          <p className="text-emerald-400 ">
            Current Filter: City:{city || "All"}| Tech : {tech}
          </p>
          <button>Register</button>
        </div>
      </div>
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
    </>
  );
}
