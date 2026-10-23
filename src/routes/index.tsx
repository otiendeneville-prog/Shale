import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl text-purple-400">
        Welcome to Tanstack React Router
      </h1>
      <p className="text-sm mt-2 mb-2 text-gray-300 font-medium">
        This is a tracker App built using Tanstck router.Here we learn about
        static routing, Dynamic routing, nested routing and data loading. Apart
        from this we will also look on advanced concept like search query,route
        context,protected route,code spliting
      </p>
    </div>
  );
}
