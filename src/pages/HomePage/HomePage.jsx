import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "./HomePage.scss";
import logo from "../../assets/images/logo1.png";

export function HomePage() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Create for Everyone</h1>
        <Outlet />
      </div>
    </div>
  );
}
