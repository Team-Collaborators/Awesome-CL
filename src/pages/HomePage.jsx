import React from "react";
import { Outlet, Link } from "react-router-dom";


export function HomePage() {
  return  (
  <div>
  <h1>HomePage</h1>
  <nav>
    <ul>
      <li><Link to="frontend">Frontend</Link></li>
      <li><Link to="backend">Backend</Link></li>
    </ul>
  </nav>
  <Outlet />
</div>)
}

