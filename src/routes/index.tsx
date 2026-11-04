import { createFileRoute } from "@tanstack/react-router";
import About from "#/componet/About.tsx";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("count");
    if (count >= 3) {
      navigate({ to: "/org/activities/meetups" });
    }
  }, [count]);
  return (
    <>
      <div className="flex min-h-screen w-full items-start pt-26 justify-center p-4">
        <div className="flex max-w-3xl flex-col p-8 font-light text-white">
          <h1 className="flex flex-wrap items-center font-mono text-4xl font-bold md:text-5xl">
            <span className="animate-bounce">Welcome To The Website&nbsp;</span>
            <span className="ml-30 text-3xl text-purple-300">
              Neuville's Portfolio
            </span>
          </h1>

          <p className="mt-4 text-sm font-medium leading-relaxed text-gray-300">
            This is a tracker App built using TanStack Router. Here we learn
            about static routing, Dynamic routing, nested routing, and data
            loading. Apart from this, we will also look at advanced concepts
            like search queries, route context, protected routes, and code
            splitting. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto natus nemo, quo, doloribus pariatur eius fugiat ea recusandae
            molestias quas ipsam, quaerat perferendis optio sapiente tenetur
            nisi ratione nesciunt! Eius.
          </p>
          <div className="justify-center flex mr-30">
            <button className="py-2 px-4 bg-emerald-700 text-white mr-5 rounded font-bold">
              view my work
            </button>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="bg-emerald-700 text-white px-3 py-3 rounded font-bold cursor-pointer"
            >
              {count == 0
                ? "Go to Hackathon Programatically"
                : `${3 - count} clicks left...`}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-900 py-20 px-4">
        <About />
      </div>
    </>
  );
}
