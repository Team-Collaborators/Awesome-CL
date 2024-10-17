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
import { BackendRoutes } from "../backend/BackendRoutes";
import { Tests } from "../backend/Test";
import { Utils } from "../backend/Utils";
import { HomePage } from "../pages/HomePage";
import { EnvFile } from "../backend/EnvFile";
import { Controller } from "../backend/Controller"; 

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="Frontend" element={<Frontend />}>
          <Route path="Components" element={<Components />} />
          <Route path="Hooks" element={<Hooks />} />
          <Route path="FrontRoutes" element={<FrontRoutes />} />
        </Route>

        <Route path="Backend" element={<Backend />}>
          <Route path="Configuration" element={<Configuration />} />
          <Route path="Controllers/*" element={<Controller />} />
          <Route path="Middleware" element={<Middleware />} />
          <Route path="Models" element={<Models />} />
          <Route path="BackendRoutes" element={<BackendRoutes />} />
          <Route path="Tests" element={<Tests />} />
          <Route path="Utils" element={<Utils />} />
          <Route path="EnvFile" element={<EnvFile />} />
        </Route>
      </Routes>
    </Router>
  );
}
