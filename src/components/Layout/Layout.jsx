import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar2 from "../Sidebar2/Sidebar2";
import Footer from "../Footer/Footer";
import { sidebarLinks, navbarLinks } from "../../../public/data/links";
import styles from "./Layout.module.scss";

// Main layout that wraps the entire app, containing the header, sidebar, main content, and footer.
const Layout = ({ isDarkMode, toggleTheme }) => {
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


  return (
    // Add dark-theme class conditionally based on isDarkMode
    <div className={`app-container ${isDarkMode ? "dark-theme" : ""}`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        links={navbarLinks}
      />
      <div className={styles["layout-content"]}>
        {showSidebar && (
          <Sidebar2 links={links}/>
        )}{" "}
        <main
          className={`${styles["content-wrapper"]} ${
            showSidebar ? styles.open : styles.closed
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
