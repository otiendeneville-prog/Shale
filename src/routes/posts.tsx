import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
  loader: () => {
    return [
      {
        id: 1,
        title: "Getting Started with TanStack Router",
        body: "Learn how to build type-safe React applications with excellent developer experience.",
      },
      {
        id: 2,
        title: "Understanding React Scope and State",
        body: "A deep dive into why reference errors happen and how to safely pass data between components.",
      },
      {
        id: 3,
        title: "Mastering TypeScript with Prisma",
        body: "How to connect an auto-generated type-safe client to your database seamlessly.",
      },
    ];
  },
});

function RouteComponent() {}
