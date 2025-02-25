import { Outlet } from "@tanstack/react-router";
import React from "react";

import "../../index.css";
import AppProvider from "../provider/app-provider";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

const RootLayout = () => {
  return (
    <>
      <AppProvider>
        <main className="w-full min-h-screen flex flex-col bg-background">
          <Outlet />
        </main>
      </AppProvider>
      <TanStackRouterDevtools />
    </>
  );
};

export default RootLayout;
