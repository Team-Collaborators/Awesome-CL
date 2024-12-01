import React from "react";
import Image from "../Image/Image";
import Button from "../Button/Button";
import styles from "./Card.module.scss";

const Card = ({
  variant = "subtle",
  size = "md",
  radius = "md",
  isInteractive = true,
  horizontal = false,
  avatar = null,
  className = "",
  style,
  image = null,
  title = "",
  description = "",
  footer = null,

  aria = "card",
}) => {
  const combinedClassNames = `
${styles.card} 
${styles[`variant-${variant}`]}
${styles[`size-${size}`]} 
${styles[`radius-${radius}`]}
${isInteractive ? styles.interactive : ""}
${horizontal ? styles.horizontal : ""}
${avatar ? styles.withAvatar : ""}
`.trim();

  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  return (
    <div className={finalClassNames} style={style} role={aria}>
      {/* Avatar */}
      {avatar && <div className={styles.cardAvatar}>{avatar}</div>}
      {/* Image */}
      {image && <div className={styles.cardImage}>{image}</div>}

      <div className={styles.contentContainer}>
        {" "}
        {/* Title */}
        {title && <div className={styles.cardTitle}>{title}</div>}
        {/* Description */}
        {description && (
          <div className={styles.cardDescription}>{description}</div>
        )}
        {/* Footer */}
        {footer && <div className={styles.cardFooter}>{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
