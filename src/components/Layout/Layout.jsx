import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar2 from "../Sidebar2/Sidebar2";
import Footer from "../Footer/Footer";

export const sidebarLinks = {
  instructions: [{ to: "/frontend/components", label: "Components" }],
  frontend: [
    { to: "/frontend/components", label: "Components" },
    { to: "/frontend/hooks", label: "Hooks" },
    { to: "/frontend/Routes", label: "Routes" },
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

// Main layout that wraps the entire app, containing the header, sidebar, main content, and footer.
const Layout = ({ data, isDarkMode, toggleTheme }) => {
  // Navbar links
  const navbarLinks = [
    { to: "/instructions", label: "Instructions" },
    { to: "/frontend/components", label: "Frontend" },
    { to: "/backend/controllers", label: "Backend" },
  ];

  const location = useLocation();

  let links = [];
  let showSidebar = false;
  if (location.pathname.startsWith("/instructions")) {
    links = sidebarLinks.instructions;
    showSidebar = true;
  }
  if (location.pathname.startsWith("/frontend")) {
    links = sidebarLinks.frontend;
    showSidebar = true;
    console.log("show frontend links ");
  }
  if (location.pathname.startsWith("/backend")) {
    links = sidebarLinks.backend;
    showSidebar = true;
    console.log("show backend links ");
  } else {
    showSidebar = false;
  }

  return (
    // <div className={`main-layout ${isDarkMode ? "dark": ""}`}>
    <div className="app-container">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        links={navbarLinks}
      />
      <div className="layout-content">
        {showSidebar && <Sidebar2 links={links} />}{" "}
        <main className="content-wrapper">
          {" "}
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
