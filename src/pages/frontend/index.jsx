import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Frontend() {
  return (
    <div>
      <h1>Main Route 1</h1>
      <nav>
        <ul>
          <li><Link to="components">Components</Link></li>
          <li><Link to="hooks">Hooks</Link></li>
          <li><Link to="frontRoutes">FrontRoutes</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

