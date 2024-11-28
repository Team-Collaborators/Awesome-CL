import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "./HomePage.scss";

import ProductCard from "../../component_testing/ProductCard/ProductCard";
import CodeDisplay from "../../components/ProductDisplay/CodeDisPlay/CodeDisPlay";

import FeatureCards from "../../components/FeatureCards/FeatureCards";
import LandingSection from "../../components/LandingSection/LandingSection";

import Table from "../../component_testing/Table/Table";

export default function HomePage() {
  const [theme, setTheme] = useState("default");
  return (
    <>
      <main className="container">
        <LandingSection />
        <FeatureCards />
        <section className="main-wrapper">
          <div className="section-heading-wrapper">
            <h2 className="section-heading">Product Card Example</h2>
            <p className="section-description">
              This is an example usage of the <strong>ProductCard</strong>{" "}
              component. Switch between themes below to see the component’s
              flexibility and style adaptability.
            </p>
          </div>
          <div className="example-container">
            <div className="product-demo">
              <ProductCard onThemeChange={setTheme} />
            </div>
            <aside className="code-display-section">
              <CodeDisplay theme={theme} />
            </aside>
          </div>
        </section>
      </main>
      <section>
        <Table />
      </section>
    </>
  );
}
