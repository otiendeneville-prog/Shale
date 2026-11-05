import { createLazyFileRoute } from "@tanstack/react-router";
import { preload } from "react-dom";

export const Route = createLazyFileRoute("/org/activities/posts")({
  component: RouteComponent,
  defaultPreload: "intent",
});

function RouteComponent() {
  const posts = Route.useLoaderData();
  return (
    <>
      <div>
        <h1 className="text-4xl font-extrbold mb-4">Posts</h1>
      </div>
      <ul className="mt-3">
        {posts.map((post) => (
          <li className="text-2xl p-2" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}
