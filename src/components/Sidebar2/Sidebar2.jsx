import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../component_testing/Button/Button";
import styles from "./Sidebar2.module.scss";

const Sidebar = ({ links }) => {
  // Initialize all subcategories to be open by default
  const [openSubcategories, setOpenSubcategories] = useState(
    links.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );

  const toggleSubcategory = (index) => {
    setOpenSubcategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderLinks = (items) => {
    return (
      <ul className={styles.sidebarInner}>
        {links.map((link, index) => {
          const isOpen = openSubcategories[index]; // Check if this subcategory is open

          return (
            <li key={index} className={styles.sidebarInnerItem}>
              <Link
                to={link.path}
                className={styles.sidebarMainLink}
                onClick={() => toggleSubcategory(index)}
              >
                {link.title}
                {link.subcategories && link.subcategories.length > 0 && (
                  <span className={isOpen ? styles.arrowOpen : styles.arrow}>
                    &#9660; {/* Down arrow icon */}
                  </span>
                )}
              </Link>

              {/* Check if there are subcategories */}
              {/* {link.subcategories && link.subcategories.length > 0 && (
                
                <ul className={styles.sidebarSubCat}>
                  {link.subcategories.map((subLink, subIndex) => (
                    <li key={subIndex} className={styles.sidebarSubCatItem}>
                      <Link
                        to={subLink.path}
                        className={styles.sidebarSubCatLink}
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )} */}

              {/* Render subcategories only if open */}
              {isOpen && link.subcategories && (
                <ul className={styles.sidebarSubCat}>
                  {link.subcategories.map((subLink, subIndex) => (
                    <li key={subIndex} className={styles.sidebarSubCatItem}>
                      <Link
                        to={subLink.path}
                        className={styles.sidebarSubCatLink}
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={styles.sidebar}>
      {renderLinks(links)}

      {/* Playground */}
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
