import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/org/activities/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  const posts = Route.useLoaderData();
  return (
    <div>
      <h1 className="text-white  text-4xl font-extrbold mb-4">Posts</h1>
    </div>
  );
}
