import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo1 from "../../assets/images/t-logo.png";
import { Button } from "../Button";

const Navbar = () => {
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
    <nav className="sidebar">
      <img src={logo1} alt="Logo" className="sidebar-logo" />
      <ul>
        <li>
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div onClick={toggleFrontendDropdown} className="dropdown-toggle">
            Frontend
            <Button label={frontendDropdownVisible ? "▲" : "▼"} onClick={toggleBackendDropdown} className={"arrow"} />
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
          <div onClick={toggleBackendDropdown} className="dropdown-toggle">
            Backend
            <span className="arrow">{backendDropdownVisible ? "▲" : "▼"}</span>
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
      </ul>
    </nav>
  );
};

export default Navbar;
