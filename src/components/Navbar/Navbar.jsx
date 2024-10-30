import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo1 from "../../assets/images/cl-awesome-logo.png";

import Button from "../../component_testing/Button/Button";

import { FaSun, FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ toggleTheme }) => {
  const [frontendDropdownVisible, setFrontendDropdownVisible] = useState(false);
  const [backendDropdownVisible, setBackendDropdownVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sidebar Toggle
  const toggleSidebar = () => {
    //setSidebarOpen(!isSidebarOpen); // toggle open state of sidebar
    setSidebarOpen((prev) => !prev);
  };

  // Dropdowns
  const toggleFrontendDropdown = () => {
    setFrontendDropdownVisible(!frontendDropdownVisible);
    setBackendDropdownVisible(false); // Close the other dropdown
  };

  const toggleBackendDropdown = () => {
    setBackendDropdownVisible(!backendDropdownVisible);
    setFrontendDropdownVisible(false); // Close the other dropdown
  };

  // Detect mobile view based on window width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576); // Customize breakpoint as needed
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Burger Menu Button for Mobile*/}
      {isMobile && (
        <button className="burger-menu" onClick={toggleSidebar}>
          {" "}
          <RxHamburgerMenu className="burger-icon" />
        </button>
      )}

      {/* Sidebar */}
      <nav className={`sidebar ${isSidebarOpen || !isMobile ? "open" : ""}`}>
        <img src={logo1} alt="Logo" className="sidebar-logo" />
        <ul>
          <li>
            <div className="nav-link">
              <Link to="/">Home</Link>
              <button onClick={toggleTheme} className="theme-toggle-button">
                {/* Show sun icon for dark mode, moon icon for light mode */}
                {document.body.classList.contains("dark-theme") ? (
                  <FaSun />
                ) : (
                  <FaMoon />
                )}
              </button>
            </div>
          </li>
          {isMobile ? (
            <>
              {/* Mobile-Specific Links */}
              <li>
                <Link to="/mobile-specific-link1">Mobile Link 1</Link>
              </li>
              <li>
                <Link to="/mobile-specific-link2">Mobile Link 2</Link>
              </li>
            </>
          ) : (
            <>
              {/* Desktop and iPad Links */}
              <li>
                <div
                  onClick={toggleFrontendDropdown}
                  className="dropdown-toggle"
                >
                  Frontend
                  <span className="arrow">
                    {frontendDropdownVisible ? "▲" : "▼"}
                  </span>
                </div>
                {frontendDropdownVisible && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="frontend/components">Components</Link>
                    </li>
                    <li>
                      <Link to="frontend/hooks">Hooks</Link>
                    </li>
                    <li>
                      <Link to="frontend/routes">Routes</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div
                  onClick={toggleBackendDropdown}
                  className="dropdown-toggle"
                >
                  Backend
                  <span className="arrow">
                    {backendDropdownVisible ? "▲" : "▼"}
                  </span>
                </div>
                {backendDropdownVisible && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="backend/configurations">Configuration</Link>
                    </li>
                    <li>
                      <Link to="backend/controllers">Controllers</Link>
                    </li>
                    <li>
                      <Link to="backend/middlewares">Middleware</Link>
                    </li>
                    <li>
                      <Link to="backend/models">Models</Link>
                    </li>
                    <li>
                      <Link to="backend/tests">Tests</Link>
                    </li>
                    <li>
                      <Link to="backend/utils">Utils</Link>
                    </li>
                    <li>
                      <Link to="backend/envFiles">EnvFile</Link>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
        </ul>
        <Button
          radius="md"
          color="secondary"
          className="playground-btn hover:bg-pink-100"
        >
          <Link to="/playground" style={{ color: "white" }}>
            Playground
          </Link>
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
