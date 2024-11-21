import React from "react";
import Image from "../Image/Image";
import Button from "../Button/Button";
import styles from "./Card.module.scss";

const Card = ({
  children,
  variant = "subtle",
  size = "md",
  radius = "md",
  className = "",
  style,
  image,
  header,
  footer,
  actions,
  aria = "card",
}) => {
  const combinedClassNames = `
${styles.card} 
${styles[`variant-${variant}`]}
${styles[`size-${size}`]} 
${styles[`radius-${radius}`]}
`.trim();

  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  console.log("Styles object:", styles);
  console.log("Variant:", variant);
  console.log("Size:", size);
  console.log("Radius:", radius);
  console.log("Final class names:", finalClassNames);
  console.log("Combined class names:", combinedClassNames);

  return (
    <div className={finalClassNames} style={style} role={aria}>
      {image && <div className="card-image">{image}</div>}

      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children} </div>

      {footer && <div className="card-footer">{footer}</div>}
      {actions && <div className="card-actions">{actions}</div>}
    </div>
  );
};
export default Card;
