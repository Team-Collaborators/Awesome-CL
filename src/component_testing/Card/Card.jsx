import React from "react";
import Image from "../Image/Image";
import Button from "../Button/Button";
import styles from "./Card.module.scss";

const Card = ({
  children,
  variant = "subtle",
  size = "md",
  radius = "md",
  isInteractive = true,
  horizontal = false,
  avatar = null,
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
${isInteractive ? styles.interactive : ""}
`.trim();

  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  return (
    <div className={finalClassNames} style={style} role={aria}>
      {/* Avatar */}
      {avatar && <div className={styles.cardAvatar}>{avatar}</div>}
      {/* Image */}
      {image && <div className={styles.cardImage}>{image}</div>}
      {/* Header */}
      {header && <div className={styles.cardHeader}>{header}</div>}
      {/* Body */}
      <div className={styles.cardBody}>{children} </div>
      {/* Footer */}
      {footer && <div className={styles.cardFooter}>{footer}</div>}
      {/* Actions */}
      {actions && <div className={styles.cardActions}>{actions}</div>}
    </div>
  );
};
export default Card;
