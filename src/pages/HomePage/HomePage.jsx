import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "./HomePage.scss";
import logo from "../../assets/images/A-logo.png";

import ProductCard from "../../components/ProductDisplay/ProductCard/ProductCard";
import CodeDisplay from "../../components/ProductDisplay/CodeDisPlay/CodeDisPlay";

export default function HomePage() {
  const [theme, setTheme] = useState("default");

  const productCardCode = `
    import React, { useState } from "react";
    import "./ProductCard.scss";

    const ProductCard = ({ product = {}, theme }) => {
      const { name, description, price, originalPrice, discount } = product;
      const [isImageLoaded, setIsImageLoaded] = useState(false);

      return (
        <div className={\`product-card \${theme}\`}>
          <div className="image-wrapper">
            {!isImageLoaded && <div className="image-placeholder">Loading...</div>}
            <img
              src="path to your image"
              alt={name}
              className={\`product-image \${isImageLoaded ? "visible" : "hidden"}\`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
          <h2 className="product-title">{name}</h2>
          <p className="product-description">{description}</p>
          <div className="product-pricing">
            <span className="product-price">\${price}</span>
            {originalPrice && (
              <>
                <span className="product-original-price">\${originalPrice}</span>
                <span className="product-discount">(\${discount}% off)</span>
              </>
            )}
          </div>
          <div className="product-buttons">
            <button className="buy-button">Buy Now</button>
            <button className="add-to-bag-button">Add to Bag</button>
          </div>
        </div>
      );
    };

    export default ProductCard;
  `;

  return (
    <main className="container">
      <header className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Create for Everyone</h1>
        {/* <Outlet /> */}
      </header>
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
            <nav className="theme-switcher">
              <button className="default" onClick={() => setTheme("default")}>
                Default
              </button>
              <button
                className="dark-theme"
                onClick={() => setTheme("dark-theme")}
              >
                Dark
              </button>
              <button
                className="neon-theme"
                onClick={() => setTheme("neon-theme")}
              >
                Neon
              </button>
            </nav>
            <ProductCard theme={theme} />
          </div>
          <aside className="code-display-section">
            <CodeDisplay code={productCardCode} />
          </aside>
        </div>
      </section>
    </main>
  );
}
