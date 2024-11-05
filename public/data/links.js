// Sidebar links
export const sidebarLinks = {
  instructions: [{ path: "/frontend/instructions", title: "Instructions" }],
  frontend: [
    {
      path: "/frontend/components",
      title: "Components",
      subcategories: [
        { path: "/frontend/components/button", title: "Button" },
        { path: "/frontend/components/modal", title: "Modal" },
      ],
    },
    { path: "/frontend/hooks", title: "Hooks" },
    { path: "/frontend/Routes", title: "Routes" },
  ],
  backend: [
    { path: "/backend/configurations", title: "Configurations" },
    {
      path: "/backend/controllers",
      title: "Controllers",
      subcategories: [
        {
          path: "/backend/controllers/work-schedule",
          title: "TESTSUBCAT",
        },
      ],
    },
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
