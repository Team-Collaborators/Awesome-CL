import React, { useState } from "react";
import Button from "../Button/Buton";
import hightechglasses from "../../../assets/images/high-tech-glasses.jpg";
import "./ProductCard.scss";

const ProductCard = ({ product = {}, theme }) => {
  const {
    name = "VR Vision Pro Glasses",
    description = "Experience stunning visuals and immersive VR with cutting-edge optics.",
    price = 1299.99,
    originalPrice = 1499.99,
    discount = 13,
  } = product;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={`product-card ${theme}`}>
      <div className="image-wrapper">
        {!isImageLoaded && <div className="image-placeholder">Loading...</div>}
        <img
          src={hightechglasses}
          alt={name}
          className={`product-image ${isImageLoaded ? "visible" : "hidden"}`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <h2 className="product-title">{name}</h2>
      <p className="product-description">{description}</p>
      <div className="product-pricing">
        <span className="product-price">${price}</span>
        <span className="product-original-price">${originalPrice}</span>
        <span className="product-discount">({discount}% off)</span>
      </div>
      <div className="product-buttons">
        <Button label="Buy Now" className="buy-button" />
        <Button label="Add to Bag" className="add-to-bag-button" />
      </div>
    </div>
  );
};

export default ProductCard;
