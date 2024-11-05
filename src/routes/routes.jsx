import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import Playground from "../components/Playground/Playground";
import NotFound from "../components/NotFound/NotFound";
import { RenderPages } from "../components/renderers/RenderPages/RenderPages";

export default function MainRoutes({ isDarkMode, toggleTheme }) {
  return (
    <Router>
      <Routes>
        <Route
          element={<Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        >
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

          {/* ADD ADD ADD: Instruction routes */}
          <Route path="instructions">
            <Route
              path="1/*"
              element={<RenderPages file={"backend/configurations"} />}
            />
            <Route
              path="2/*"
              element={<RenderPages file={"backend/controllers"} />}
            />
          </Route>

          {/* Playground route */}
          <Route path="playground" element={<Playground />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
