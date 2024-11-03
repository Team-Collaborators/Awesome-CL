import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../component_testing/Button/Button";
import styles from "./Sidebar2.module.scss";

const Sidebar = ({ links, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Automatically open sidebar on larger screens
      } else {
        setIsOpen(false); // Automatically close on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <ul className={styles["sidebar--inner"]}>
        {links.map((link, index) => {
          return (
            <li key={index} className={styles["sidebar--inner-item"]}>
              <Link to={link.to} className={styles["sidebar__link"]}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Button
        radius="md"
        color="secondary"
        className={`${styles["playground-btn"]} hover:bg-pink-100`}
      >
        <Link to="/playground" style={{ color: "white" }}>
          Playground
        </Link>
      </Button>
    </nav>
  );
};

export default Sidebar;

// <ul>
// {isMobile ? (
// <>
// {/* Mobile-Specific Links */}
// <li>s
// <Link to="/mobile-specific-link1">Mobile Link 1</Link>
// </li>
// <li>
// <Link to="/mobile-specific-link2">Mobile Link 2</Link>
// </li>
// </>
// ) : (
// <>
// {/* Desktop and iPad Links */}
// <li>
// <div
// onClick={toggleFrontendDropdown}
// className="dropdown-toggle"
// >
// Frontend
// <span className="arrow">
// {frontendDropdownVisible ? "▲" : "▼"}
// </span>
// </div>
// {frontendDropdownVisible && (
// <ul className="dropdown-menu">
// <li>
//   <Link to="frontend/components">Components</Link>
// </li>
// <li>
//   <Link to="frontend/hooks">Hooks</Link>
// </li>
// <li>
//   <Link to="frontend/routes">Routes</Link>
// </li>
// </ul>
// )}
// </li>
// <li>
// <div
// onClick={toggleBackendDropdown}
// className="dropdown-toggle"
// >
// Backend
// <span className="arrow">
// {backendDropdownVisible ? "▲" : "▼"}
// </span>
// </div>
// {backendDropdownVisible && (
// <ul className="dropdown-menu">
// <li>
//   <Link to="backend/configurations">Configuration</Link>
// </li>
// <li>
//   <Link to="backend/controllers">Controllers</Link>
// </li>
// <li>
//   <Link to="backend/middlewares">Middleware</Link>
// </li>
// <li>
//   <Link to="backend/models">Models</Link>
// </li>
// <li>
//   <Link to="backend/tests">Tests</Link>
// </li>
// <li>
//   <Link to="backend/utils">Utils</Link>
// </li>
// <li>
//   <Link to="backend/envFiles">EnvFile</Link>
// </li>
// </ul>
// )}
// </li>
// </>
// )}
// </ul>
