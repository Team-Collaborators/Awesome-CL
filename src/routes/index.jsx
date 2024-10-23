import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

import Navbar from "../components/Navbar/Navbar";
import Playground from "../components/Playground/Playground"
import NotFound from "../components/NotFound/NotFound"

import { RenderPages } from "../renderers/RenderPages";

export default function MainRoutes({ isDarkMode, toggleTheme }) {
  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="content-wrapper">
        <Routes>
            {/* Home page route */}
          <Route index path="/" element={<HomePage />} />
           {/* Frontend routes */}
          <Route path="frontend">
            <Route
              path="components/*"
              element={<RenderPages file={"frontend/components"} />}
            />
            <Route
              path="hooks/*"
              element={<RenderPages file={"frontend/hooks"} />}
            />
            <Route
              path="routes/*"
              element={<RenderPages file={"frontend/routes"} />}
            />
          </Route>
            {/* Backend routes */}
          <Route path="backend">
            <Route
              path="configurations/*"
              element={<RenderPages file={"backend/configurations"} />}
            />
            <Route
              path="controllers/*"
              element={<RenderPages file={"backend/controllers"} />}
            />
            <Route
              path="middlewares/*"
              element={<RenderPages file={"backend/middlewares"} />}
            />
            <Route
              path="models/*"
              element={<RenderPages file={"backend/models"} />}
            />
            <Route
              path="tests/*"
              element={<RenderPages file={"backend/tests"} />}
            />
            <Route
              path="utils/*"
              element={<RenderPages file={"backend/utils"} />}
            />
            <Route
              path="envFiles/*"
              element={<RenderPages file={"backend/envFiles"} />}
            />
          </Route>
           {/* Playground route */}
           <Route path="playground" element={<Playground />} />
             {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
