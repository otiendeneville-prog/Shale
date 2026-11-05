import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { auth } from "#/utils/auth";

import "../styles.css";
import Header from "#/componet/Header";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <h1></h1>,
});

function RootComponent() {
  return (
    <>
      <div className="min-h-screen bg-neutral-950 text-white p-6 bg-slate-950">
        <Header />
        <Outlet />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </div>
    </>
  );
}
