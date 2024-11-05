// // Sidebar links
// export const sidebarLinks = {
//   instructions: [{ to: "/frontend/components", label: "Instructions" }],
//   frontend: [
//     { to: "/frontend/components", label: "Components" },
//     { to: "/frontend/hooks", label: "Hooks" },
//     { to: "/frontend/Routes", label: "Routes" },
//   ],
//   backend: [
//     { to: "/backend/configurations", label: "Configurations" },
//     { to: "/backend/controllers", label: "Controllers" },
//     { to: "/backend/middlewares", label: "Middleware" },
//     { to: "/backend/models", label: "Models" },
//     { to: "/backend/tests", label: "Tests" },
//     { to: "/backend/utils", label: "Utils" },
//     { to: "/backend/envFiles", label: "EnvFiles" },
//   ],
// };

export const sidebarLinks = {
  instructions: [{ to: "/frontend/components", label: "Instructions" }],
  frontend: [
    {
      to: "/frontend/components",
      label: "Components",
      sublinks: [
        { to: "/frontend/components/button", label: "Button" },
        { to: "/frontend/components/product-card", label: "Product Card" },
        // Add more sublinks as needed
      ],
    },
    { to: "/frontend/hooks", label: "Hooks" },
    { to: "/frontend/routes", label: "Routes" },
  ],
  backend: [
    { to: "/backend/configurations", label: "Configurations" },
    { to: "/backend/controllers", label: "Controllers" },
    { to: "/backend/middlewares", label: "Middleware" },
    { to: "/backend/models", label: "Models" },
    { to: "/backend/tests", label: "Tests" },
    { to: "/backend/utils", label: "Utils" },
    { to: "/backend/envFiles", label: "EnvFiles" },
  ],
};


// Navbar links
export const navbarLinks = [
  { to: "/instructions", label: "Instructions" },
  { to: "/frontend/components", label: "Frontend" },
  { to: "/backend/controllers", label: "Backend" },
];
