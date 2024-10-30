import "./PriceDisplay.scss";

const PriceDisplay = ({ price, originalPrice, discount }) => {
  return (
    <div className="price-display">
      <span className="product-price">${price}</span>
      {originalPrice && (
        <>
          <span className="product-original-price">${originalPrice}</span>
          <span className="product-discount">({discount}% off)</span>
        </>
      )}
    </div>
  );
};

export default PriceDisplay;
