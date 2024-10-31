import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar2 from "../Sidebar2/Sidebar2";
import Footer from "../Footer/Footer";

const Layout = ({ children, isDarkMode, toggleTheme }) => {
  const navbarLinks = [
    { to: "/instructions", label: "Instructions" },
    { to: "/frontend/components", label: "Frontend" },
    { to: "/backend/controllers", label: "Backend" },
  ];

  const sidebarLinks = [
    { to: "/frontend/components", label: "Components" },
    { to: "/frontend/hooks", label: "Hooks" },
    { to: "/frontend/Routes", label: "Routes" },
  ];

  return (
    <div className="app-container">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        links={navbarLinks}
      />
      <Sidebar2 links={sidebarLinks} />
      <main className="content-wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
