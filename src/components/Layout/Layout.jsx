import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Footer/Footer";
import { sidebarLinks, navbarLinks } from "../../../public/data/links";
import "./Layout.module.scss";
import { useEffect, useState } from "react";

// Main layout that wraps the entire app, containing the header, sidebar, main content, and footer.
const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    showSidebar = !isMobile;
  }

  return (
    <div className="app-container">
      <Navbar links={navbarLinks} />
      <div className="layout-content">
        {showSidebar && !isMobile && <Sidebar links={links} />}
        <main
          className={`content-wrapper ${
            showSidebar ? "sidebarOpen" : "sidebarClosed"
          }`}
        >
          <Outlet />
        </main>
      </div>
      <Footer isSidebarOpen={showSidebar && !isMobile} />
    </div>
  );
};

export default Layout;
