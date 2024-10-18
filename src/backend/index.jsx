import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../common/SideBar";

export function Backend() {
  const data = [
    { title: "Configuration", path: "Configuration" },
    { title: "Controllers", path: "Controllers" },
    { title: "Middleware", path: "Middleware" },
    { title: "Models", path: "Models" },
    { title: "Tests", path: "Tests" },
    { title: "Utils", path: "Utils" },
    { title: "Env File", path: "EnvFile" },
    { title: "Backend Routes", path: "BackendRoutes" },
  ];

  return (
    <section>
      <h1>Backend</h1>
      <SideBar data={data} />
      <Outlet />
    </section>
  );
}
