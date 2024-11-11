import React, { useState } from "react";
import styles from "../Switch/Switch.module.scss";

const Switch = ({
  aria = "switch",
  color = "primary",
  onChange,
  style,
  size = "md",
  radius = "none",
  border = "none",
  checked = false,
  className = "",
}) => {
  // Combine CSS module class names with any global Tailwind classes passed as props
  const combinedClassNames = `
 ${styles.button} 
 ${styles[`border-${border}`]} 
 ${styles[`radius-${radius}`]} 
 ${styles[`color-${color}`]} 
 ${styles[`size-${size}`]} 
 `.trim();

  // Final class names with Tailwind/global classes appended last for easy overriding
  const finalClassNames = `${combinedClassNames} ${className}`.trim();

  const [isChecked, setIsChecked] = useState(checked);

  // Handle toggle change
  const handleToggle = () => {
    setIsChecked((prevState) => {
      const newCheckedState = !prevState;
      if (onChange) onChange(newCheckedState);
      return newCheckedState;
    });
  };

  return (
    <div
      role="switch"
      aria-checked={isChecked}
      aria-label={aria}
      onClick={handleToggle}
      style={style}
      className={finalClassNames}
    >
      <div className={`${styles.slider} ${isChecked ? styles.checked : ""}`} />
    </div>
  );
};

export default Switch;
