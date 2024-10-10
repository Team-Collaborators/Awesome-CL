import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Backend() {
  return (
    <div>
      <h1>Backend</h1>
      <nav>
        <ul>
          <li>
            <Link to="configuration">Configuration</Link>
          </li>
          <li>
            <Link to="controllers">Controllers</Link>
          </li>
          <li>
            <Link to="middleware">Middleware</Link>
          </li>
          <li>
            <Link to="models">Models</Link>
          </li>
          <li>
            <Link to="backRoutes">BackRoutes</Link>
          </li>
          <li>
            <Link to="tests">Tests</Link>
          </li>
          <li>
            <Link to="utils">Utils</Link>
          </li>
          <li>
            <Link to="envFile">File .env</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
