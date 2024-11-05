// Sidebar links
export const sidebarLinks = {
  instructions: [{ path: "/frontend/components", title: "Instructions" }],
  frontend: [
    { path: "/frontend/components", title: "Components" },
    { path: "/frontend/hooks", title: "Hooks" },
    { path: "/frontend/Routes", title: "Routes" },
  ],
  backend: [
    { path: "/backend/configurations", title: "Configurations" },
    { path: "/backend/controllers", title: "Controllers" },
    { path: "/backend/middlewares", title: "Middleware" },
    { path: "/backend/models", title: "Models" },
    { path: "/backend/tests", title: "Tests" },
    { path: "/backend/utils", title: "Utils" },
    { path: "/backend/envFiles", title: "EnvFiles" },
  ],
};

// Navbar links
export const navbarLinks = [
  { to: "/instructions", label: "Instructions" },
  { to: "/frontend/components", label: "Frontend" },
  { to: "/backend/controllers", label: "Backend" },
];
