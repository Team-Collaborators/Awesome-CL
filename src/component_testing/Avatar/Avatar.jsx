import React, { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import styles from "./Avatar.module.scss";
import { comma } from "postcss/lib/list";

const Avatar = ({
  src,
  name,
  size = "md",
  color = "primary",
  shape = "circle",
  border = "none",
  borderColor = "transparent",
  radius = "none",
  className = "",
  style,
}) => {
  const initials = name ? name[0].toUpperCase() : "?";

  //Memoize the DiceBear avatar SVG generation based on the name
  const avatarSVG = useMemo(() => {
    if (name) {
      const avatar = createAvatar(adventurer, { seed: name });
      return avatar.toString();
    }
    return null;
  }, [name]);

  const combinedClassNames = `
    ${styles.avatar}
    ${styles[`size-${size}`]}
    ${styles[`color-${color}`]}
    ${styles[`shape-${shape}`]}
    ${styles[`border-${border}`]}
    ${styles[`radius-${radius}`]}
  `.trim();

  return (
    <div
      className={`${combinedClassNames} ${className}`}
      style={{ ...style, borderColor: borderColor }}
    >
      <div className={`${styles.border} ${combinedClassNames} `}>
        {src ? (
          <div className={` ${styles.avatarSvgContainer}`}>
            <img src={src} alt={name} />
          </div>
        ) : avatarSVG ? (
          <div
            className={` ${styles.avatarSvgContainer}`}
            dangerouslySetInnerHTML={{ __html: avatarSVG }}
            aria-label={name}
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>
    </div>
  );
};

export default Avatar;
