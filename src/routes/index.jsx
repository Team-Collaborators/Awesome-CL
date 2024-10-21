import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

import Navbar from "../common/Navbar/Navbar";

import { RenderPages } from "../common/RenderPages";

export default function MainRoutes() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="frontend">
            <Route path="components/*" element={<RenderPages file={"frontend/components"} />} />
            <Route path="hooks/*" element={<RenderPages file={"frontend/hooks"} />} />
            <Route path="routes/*" element={<RenderPages file={"frontend/routes"} />} />
          </Route>
          <Route path="backend">
            <Route path="configurations/*" element={<RenderPages file={"backend/configurations"} />} />
            <Route path="controllers/*" element={<RenderPages file={"backend/controllers"} />} />
            <Route path="middlewares/*" element={<RenderPages file={"backend/middlewares"} />} />
            <Route path="models/*" element={<RenderPages file={"backend/models"} />} />
            <Route path="tests/*" element={<RenderPages file={"backend/tests"} />} />
            <Route path="utils/*" element={<RenderPages file={"backend/utils"} />} />
            <Route path="envFiles/*" element={<RenderPages file={"backend/envFiles"} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
