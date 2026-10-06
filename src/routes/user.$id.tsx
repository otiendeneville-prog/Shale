import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$id")({
  component: RouteComponent,
  notFoundComponent: () => <h1>This is a not a user page</h1>,

  loader: async ({ params }) => {
    if (Number(params.id) > 10) {
      throw notFound();
    }
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await res.json();
    return { user };
    console.log(`https://jsonplaceholder.typicode.com/users ${params.id}`);
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  console.log(data);
  return <div>Hello, this is a user:</div>;
}
