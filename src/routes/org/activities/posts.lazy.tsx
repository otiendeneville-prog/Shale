import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/org/activities/posts")({
  component: RouteComponent,
});

function RouteComponent({}) {
  const posts = Route.useLoaderData();
  return (
    <>
      <div>
        <h1 className="text-4xl font-extrbold mb-4">Posts</h1>
      </div>
      <ul className="mt-3">
        {posts.map((post) =>
        <li className="text-2xl p-2 key={postId}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
