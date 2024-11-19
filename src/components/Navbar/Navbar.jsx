import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.scss";
import logo1 from "../../assets/images/logo-mountain.png";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";
import { sidebarLinks } from "../../../public/data/links.js";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      const allSectionsOpen = Object.keys(sidebarLinks).reduce(
        (acc, section) => {
          acc[section] = true;
          return acc;
        },
        {}
      );
      setSubmenuOpen(allSectionsOpen);
    }
  };

  const navigateToSection = (section) => {
    if (section === "frontend") {
      const firstFrontendComponentPath =
        sidebarLinks.frontend[0].subcategories[0]?.path ||
        "/frontend/components";
      navigate(firstFrontendComponentPath);
    } else if (section === "backend") {
      const firstBackendConfigPath =
        sidebarLinks.backend[0]?.path || "/backend/configurations";
      navigate(firstBackendConfigPath);
    } else {
      navigate(`/${section}`);
    }
    setMenuOpen(false);
  };

  const toggleSubmenu = (section) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <Link to="/" className="navbarLogo">
          <img src={logo1} alt="Logo" />
        </Link>
        {/* Main navigation links for large screens */}
        {!isMobile && (
          <ul className="navbarLinks">
            {Object.keys(sidebarLinks).map((section, index) => (
              <li key={index} className="navbarLinkItem">
                <button
                  onClick={() => navigateToSection(section)}
                  className="navbarLink"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="navbarRight">
        <SearchBar className="navbarSearch" />

        <button onClick={toggleTheme} className="themeToggle">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        {isMobile && (
          <button className="menuToggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          {/* Close button positioned in the top-right corner */}
          <button className="closeMenuButton" onClick={toggleMenu}>
            <FaTimes />
          </button>
          {Object.keys(sidebarLinks).map((section, index) => (
            <div key={index} className="mobileMenuSection">
              <div
                className="mobileMenuTitle"
                onClick={() => toggleSubmenu(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="submenuToggleIcon">
                  {submenuOpen[section] ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
              </div>
              {submenuOpen[section] && (
                <ul className="mobileMenuLinks">
                  {sidebarLinks[section].map((link, subIndex) => (
                    <li key={subIndex} className="mobileMenuLinkItem">
                      <Link
                        to={link.path}
                        className="mobileMenuLink"
                        onClick={toggleMenu}
                      >
                        {link.title}
                      </Link>
                      {link.subcategories && (
                        <ul className="mobileMenuSubLinks">
                          {link.subcategories.map((sublink, subSubIndex) => (
                            <li
                              key={subSubIndex}
                              className="mobileMenuSubLinkItem"
                            >
                              <Link
                                to={sublink.path}
                                className="mobileMenuSubLink"
                                onClick={toggleMenu}
                              >
                                {sublink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
