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
<<<<<<< HEAD
import { Controllers } from "../backend/Controllers";
import Navbar from "../pages/Navbar/Navbar";
=======
import { Controller } from "../backend/Controller"; 
>>>>>>> c5d2c9d81977c8eb12583290914dc3c9e1f627c5

export default function MainRoutes() {
  return (
    <Router>
<<<<<<< HEAD
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
            <Route path="controllers/*" element={<Controllers />} />
            <Route path="middleware" element={<Middleware />} />
            <Route path="models" element={<Models />} />
            <Route path="backRoutes" element={<BackRoutes />} />
            <Route path="tests" element={<Tests />} />
            <Route path="utils" element={<Utils />} />
            <Route path="envFile" element={<EnvFile />} />
          </Route>
        </Routes>
      </div>
=======
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
          <Route path="Tests" element={<Tests />} />
          <Route path="Utils" element={<Utils />} />
          <Route path="EnvFile" element={<EnvFile />} />
        </Route>
      </Routes>
>>>>>>> c5d2c9d81977c8eb12583290914dc3c9e1f627c5
    </Router>
  );
}
