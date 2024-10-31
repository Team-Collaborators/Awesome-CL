import React from "react";
import Navbar from "../Navbar/Navbar";
// import Sidebar2 from "../Sidebar2/Sidebar2";
import Footer from "../Footer/Footer";

const Layout = ({ children, isDarkMode, toggleTheme }) => {
  const navbarLinks = [
    { to: "/instructions", label: "Instructions" },
    { to: "/frontend/components", label: "FrONNtend" },
    { to: "/backend/controllers", label: "Backend" },
  ];
  return (
    <div className="app-container">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        links={navbarLinks}
      />
      {/* <Sidebar2 /> */}
      <main className="content-wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
