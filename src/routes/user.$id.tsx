import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$id")({
  component: RouteComponent,
  notFoundComponent: () => <h1>This is a not a user page</h1>,

  loader: async ({ params }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await res.json();
    if (!user) {
      throw notFound();
    }
    return { user };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  console.log(data);
  return (
    <div>
      Hello, this is a user:
      <h1>Name: {data.user.name}</h1>
      <h1>Email:{data.user.email}</h1>
    </div>
  );
}
