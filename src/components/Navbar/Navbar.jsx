import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo1 from "../../assets/images/cl-awesome-logo.png";

import { FaSun, FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ toggleTheme, links, style }) => {
  return (
    <>
      <nav className="navbar" style={style}>
        {/* Logo */}
        <Link to="/">
          {" "}
          <img src={logo1} alt="Logo" className="nav-logo" />
        </Link>

        {/* Navbar Links */}
        <ul className="navbar--inner">
          {links.map((link, index) => (
            <li key={index} className="navbar--inner-item">
              <Link to={link.to} className="navbar__link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className="navbar--search">
          <input
            type="text"
            placeholder="Search..."
            className="navbar--search-input"
          />
        </div>

        {/* Toggle dark / light mode */}
        <button onClick={toggleTheme} className="theme-toggle-button">
          {/* Show sun icon for dark mode, moon icon for light mode */}
          {document.body.classList.contains("dark-theme") ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
