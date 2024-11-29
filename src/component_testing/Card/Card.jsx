import React from "react";
import Image from "../Image/Image";
import Button from "../Button/Button";
import styles from "./Card.module.scss";

const Card = ({
  variant = "subtle",
  size = "md",
  radius = "md",
  children,
  isInteractive = false,
  horizontal = false,
  imageTop = false,
  avatar = null,
  className = "",
  style,
  image = null,
  title = "",
  description = "",
  footer = null,
  titleAlignment = "center",
  footerAlignment = "center",
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
${imageTop ? styles.withImageTop : ""}
${styles[`title-align-${titleAlignment}`]} // Dynamic title alignment
${styles[`footer-align-${footerAlignment}`]} // Dynamic footer alignment
`.trim();

  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  return (
    <div className={finalClassNames} style={style} role={aria}>
      {/* Avatar */}
      {avatar && <div className={styles.cardAvatar}>{avatar}</div>}

     
        {/* Image */}
        {image && <div className={styles.cardImageWrapper}>{image}</div>}
     {/* {children} */}


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
