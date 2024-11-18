import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.scss";
import logo1 from "../../assets/images/logo-mountain.png";

import { FaSun, FaMoon } from "react-icons/fa";
//import { RxHamburgerMenu } from "react-icons/rx"; // Hamburger Menu for Mobile view
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ links }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
      <nav className="navbar">
        <div className="navbarLeft">
          {/* Logo */}
          <Link to="/">
            {" "}
            <img src={logo1} alt="Logo" className="navLogo" />
          </Link>
        </div>
        {/* Navbar Links */}
        <ul className="navbarInner">
          {links.map((link, index) => (
            <li key={index} className="navbarInnerItem">
              <Link to={link.path} className="navbarLink">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className="navbarRight">
          <SearchBar />
          {/* Toggle dark / light mode */}
          <button onClick={toggleTheme} className="themeToggleButton">
            {/* Show sun icon for dark mode, moon icon for light mode */}
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
