import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <div className="app-container">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="content-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
