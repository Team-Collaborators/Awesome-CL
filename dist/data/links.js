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
        { path: "/frontend/components/searchbar", title: "Search Bar" },
        { path: "/frontend/components/card", title: "Card" },
        { path: "/frontend/components/popover", title: "Popover" },
        { path: "/frontend/components/form", title: "Form" },
        { path: "/frontend/components/carousel", title: "Carousel" },
        { path: "/frontend/components/divider", title: "Divider" },
        { path: "/frontend/components/switch", title: "Switch" },
      ],
    },
    {
      path: "/frontend/hooks",
      title: "Hooks",
      subcategories: [
        { path: "/frontend/hooks/hook1", title: "Hook1" },
        { path: "/frontend/hooks/hook2", title: "Hook2" },
      ],
    },
    { path: "/frontend/routes", title: "Routes" },
  ],

  backend: [
    { path: "/backend/configurations", title: "Configurations" },
    {
      path: "/backend/controllers",
      title: "Controllers",
      subcategories: [
        {
          path: "/Backend/Controllers/WorkScheduleManagement",
          title: "WorkScheduleManagement",
        },
        {
          path: "/Backend/Controllers/ServiceRequestManagement",
          title: "ServiceRequestManagement",
        },
        {
          path: "/Backend/Controllers/UserManagement",
          title: "UserManagement",
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
  { path: "/instructions", title: "Instructions" },
  { path: "/frontend/components/button", title: "Frontend" },
  { path: "/backend/configurations", title: "Backend" },
];