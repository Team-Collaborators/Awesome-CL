import React, { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({
  aria = "checkbox",
  color = "default-light",
  onChange,
  style,
  size = "md",
  radius = "lg",
  border = "sm",
  checked = false,
  className = "",
}) => {
  // Combine CSS module class names with any global Tailwind classes passed as props
  const combinedClassNames = `
 ${styles.checkbox} 
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
      console.log("Checkbox checked:", newCheckedState);
      if (onChange) onChange(newCheckedState);

      return newCheckedState;
    });
  };

  return (
    <div
      role="checkbox"
      aria-checked={isChecked}
      aria-label={aria}
      onClick={handleToggle}
      style={style}
      className={finalClassNames}
    >
      {isChecked && (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.checkmark}
        >
          <path
            d="M20.285 6.71a1 1 0 0 0-1.414-1.414l-9.9 9.9-3.958-3.958a1 1 0 0 0-1.414 1.414l4.672 4.672a1 1 0 0 0 1.414 0l10.6-10.6z"
            fill="currentColor" // Use currentColor to make the icon inherit the color
          />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
