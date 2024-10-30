import React from "react";
import { useState } from "react";

export default function Sidebar(props) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sidebar Toggle
  const toggleSidebar = () => {
    //setSidebarOpen(!isSidebarOpen); // toggle open state of sidebar
    setSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="sidebar" style={props.style}>
      <ul className="sidebar--inner">
        {props.links.map((link, index) => {
          return (
            <li key={index} className="sidebar--inner-item">
              <a href="#/" className="sidebar--inner-item__link">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
