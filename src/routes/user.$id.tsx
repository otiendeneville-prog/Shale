import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$id")({
  component: RouteComponent,
  notFoundComponent: () => <h1>This is a not a user page</h1>,

  loader: ({ params }) => {
    if (Number(params.id) > 10) {
      throw notFound();
    }
    const resp = { userName: "Neuville" };
    return resp;
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const data = Route.useLoaderData();
  return (
    <div>
      Hello user with id {id} and with username{data.userName}
    </div>
  );
}
