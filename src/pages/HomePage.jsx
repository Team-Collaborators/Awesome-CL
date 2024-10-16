import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import "./HomePage.scss";
import logo from "../assets/images/logo1.png";
import logo1 from "../assets/images/t-logo.png";

export function HomePage() {
  const [frontendDropdownVisible, setFrontendDropdownVisible] = useState(false);
  const [backendDropdownVisible, setBackendDropdownVisible] = useState(false);

  const toggleFrontendDropdown = () => {
    setFrontendDropdownVisible(!frontendDropdownVisible);
    setBackendDropdownVisible(false); // Close the other dropdown
  };

  const toggleBackendDropdown = () => {
    setBackendDropdownVisible(!backendDropdownVisible);
    setFrontendDropdownVisible(false); // Close the other dropdown
  };
  return (
    <div className="container">
      <nav className="sidebar">
        <img src={logo1} alt="Logo" className="sidebar-logo" />
        <ul>
          <li>
            <div onClick={toggleFrontendDropdown} className="dropdown-toggle">
              Frontend
              {frontendDropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="frontend/components">Components</Link>
                  </li>
                  <li>
                    <Link to="frontend/hooks">Hooks</Link>
                  </li>
                  <li>
                    <Link to="frontend/frontRoutes">Routes</Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div onClick={toggleBackendDropdown} className="dropdown-toggle">
              Backend
              {backendDropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="backend/configuration">Configuration</Link>
                  </li>
                  <li>
                    <Link to="backend/controllers">Controllers</Link>
                  </li>
                  <li>
                    <Link to="backend/middleware">Middleware</Link>
                  </li>
                  <li>
                    <Link to="backend/models">Models</Link>
                  </li>
                  <li>
                    <Link to="backend/backRoutes">BackRoutes</Link>
                  </li>
                  <li>
                    <Link to="backend/tests">Tests</Link>
                  </li>
                  <li>
                    <Link to="backend/utils">Utils</Link>
                  </li>
                  <li>
                    <Link to="backend/envFile">EnvFile</Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Create for Everyone</h1>
        <Outlet />
      </div>
    </div>
  );
}
