import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../Navbar/Navbar";
import Sidebar2 from "../Sidebar2/Sidebar2";
import Footer from "../Footer/Footer";
import { sidebarLinks, navbarLinks } from "../../../public/data/links";
import "../../styles/main.scss";

// Main layout that wraps the entire app, containing the header, sidebar, main content, and footer.
const Layout = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  let links = [];
  let showSidebar = false;

  if (location.pathname.startsWith("/instructions")) {
    links = sidebarLinks.instructions;
    showSidebar = true;
  } else if (location.pathname.startsWith("/frontend")) {
    links = sidebarLinks.frontend;
    showSidebar = true;
  } else if (location.pathname.startsWith("/backend")) {
    links = sidebarLinks.backend;
    showSidebar = true;
  }
  console.log("showSidebar: ", showSidebar);

  return (
    // Add dark-theme class conditionally based on isDarkMode
    <div className={`app-container ${isDarkMode ? "dark-theme" : ""}`}>
      <Navbar links={navbarLinks} />
      <div className="layout-content">
        {showSidebar && <Sidebar2 links={links} />}{" "}
        <main
          className={`content-wrapper ${
            showSidebar ? "sidebarOpen" : "sidebarClosed"
          }`}
        >
          {" "}
          <Outlet />
        </main>
      </div>
      <Footer isSidebarOpen={showSidebar} />
    </div>
  );
};

export default Layout;
