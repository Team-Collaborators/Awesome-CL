import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Components } from "../pages/frontend/Components";
import { Frontend } from "../pages/frontend";
import { Hooks } from "../pages/frontend/Hooks";
import { FrontRoutes } from "../pages/frontend/frontRoutes";
import { Backend } from "../pages/backend";
import { Configuration } from "../pages/backend/Configuration";
// import { Controllers } from "../pages/backend/Controllers";
import { Middleware } from "../pages/backend/Middlewares";
import { Models } from "../pages/backend/Models";
import { BackRoutes } from "../pages/backend/backRoutes";
import { Tests } from "../pages/backend/Test";
import { Utils } from "../pages/backend/Utils";
import { HomePage } from "../pages/HomePage";
import { EnvFile } from "../pages/backend/EnvFile";

export function MainRoutes() {
  return (
    <Router>
      <Routes>
      <Route index path="/" element={<HomePage/>} />
        <Route path="frontend" element={<Frontend />}>
          <Route path="components" element={<Components />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="frontRoutes" element={<FrontRoutes />} />
        </Route>

        <Route path="backend" element={<Backend />}>
          <Route path="configuration" element={<Configuration />} />
          {/* <Route path="controllers/*" element={<Controllers />} /> */}
          <Route path="middleware" element={<Middleware />} />
          <Route path="models" element={<Models />} />
          <Route path="backRoutes" element={<BackRoutes />} />
          <Route path="tests" element={<Tests />} />
          <Route path="utils" element={<Utils />} />
          <Route path="envFile" element={<EnvFile />} />
        </Route>
      </Routes>
    </Router>
  );
}
