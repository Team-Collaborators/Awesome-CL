import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Components } from "../frontend/Components";
import { Frontend } from "../frontend";
import { Hooks } from "../frontend/Hooks";
import { FrontRoutes } from "../frontend/frontRoutes";
import { Backend } from "../backend";
import { Configuration } from "../backend/Configuration";
import { Middleware } from "../backend/Middlewares";
import { Models } from "../backend/Models";
import { Tests } from "../backend/Test";
import { Utils } from "../backend/Utils";
import { HomePage } from "../pages/HomePage/HomePage";
import { EnvFile } from "../backend/EnvFile";

import Navbar from "../pages/Navbar/Navbar";

import { Controller } from "../backend/Controller";

export default function MainRoutes() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="frontend">
            <Route path="components" element={<Components />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="frontRoutes" element={<FrontRoutes />} />
          </Route>

          <Route path="backend">
            <Route path="configuration" element={<Configuration />} />
            <Route path="controllers/*" element={<Controller />} />
            <Route path="middleware" element={<Middleware />} />
            <Route path="models" element={<Models />} />
            <Route path="tests" element={<Tests />} />
            <Route path="utils" element={<Utils />} />
            <Route path="envFile" element={<EnvFile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
