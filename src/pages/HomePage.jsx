import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { SideBar } from "../common/SideBar";

import "./HomePage.scss";
import logo from "../assets/images/logo1.png";
import logo1 from "../assets/images/t-logo.png";

export function HomePage() {
  const data = {
    frontend: [
      { title: "Components", path: "Frontend/Components" },
      { title: "Hooks", path: "Frontend/Hooks" },
      { title: "Frontend Routes", path: "Frontend/FrontRoutes" },
    ],
    backend: [
      { title: "Configuration", path: "Backend/Configuration" },
      { title: "Controllers", path: "Backend/Controllers" },
      { title: "Middleware", path: "Backend/Middleware" },
      { title: "Models", path: "Backend/Models" },
      { title: "Tests", path: "Backend/Tests" },
      { title: "Utils", path: "Backend/Utils" },
      { title: "Env File", path: "Backend/EnvFile" },
      { title: "Backend Routes", path: "Backend/BackendRoutes" },
    ],
  };
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
                <SideBar className={"dropdown-menu"} data={data.frontend} />
              )}
            </div>
          </li>
          <li>
            <div onClick={toggleBackendDropdown} className="dropdown-toggle">
              Backend
              {backendDropdownVisible && (
                <SideBar className={"dropdown-menu"} data={data.backend} />
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