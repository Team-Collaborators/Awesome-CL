import { useState } from "react";
import hightechglasses from "../../assets/images/high-tech-glasses.jpg";
import styles from "./ProductCard.module.scss";

const THEMES = {
  default: {
    name: "VR Vision Pro Glasses",
    description:
      "Experience stunning visuals and immersive VR with cutting-edge optics.",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    theme: "default",
    image: hightechglasses,
  },
  "dark-theme": {
    name: "VR Vision Pro Glasses",
    description:
      "Experience stunning visuals and immersive VR with cutting-edge optics.",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    theme: "dark-theme",
    image: hightechglasses,
  },
  "neon-theme": {
    name: "VR Vision Pro Glasses",
    description:
      "Experience stunning visuals and immersive VR with cutting-edge optics.",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    theme: "neon-theme",
    image: hightechglasses,
  },
};

const ProductCard = ({ theme: propTheme, onThemeChange }) => {
  const [theme, setTheme] = useState(propTheme || "default");
  const product = THEMES[theme];

  if (!product) {
    return <div>Invalid theme</div>;
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (onThemeChange) {
      onThemeChange(newTheme);
    }
  };

  return (
    <>
      {!propTheme && (
        <div className={styles.themeSwitcher}>
          <button
            className={`${styles.default}`}
            onClick={() => handleThemeChange("default")}
          >
            Default
          </button>
          <button
            className={`${styles.darkTheme}`}
            onClick={() => handleThemeChange("dark-theme")}
          >
            Dark
          </button>
          <button
            className={`${styles.neonTheme}`}
            onClick={() => handleThemeChange("neon-theme")}
          >
            Neon
          </button>
        </div>
      )}

      <div className={`${styles.productCard} ${styles[product.theme]}`}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />
        </div>
        <h2 className={styles.productTitle}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productPricing}>
          <span className={styles.productPrice}>${product.price}</span>
          <span className={styles.productOriginalPrice}>
            ${product.originalPrice}
          </span>
          <span className={styles.productDiscount}>
            ({product.discount}% off)
          </span>
        </div>
        <div className={styles.productButtons}>
          <button className={`${styles.button} ${styles.buyButton}`}>
            Buy Now
          </button>
          <button className={`${styles.button} ${styles.addToBagButton}`}>
            Add to Bag
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
