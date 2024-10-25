import styles from "./Button.module.scss";

// define component and props, give default for props
const Button = ({
  children,
  aria,
  color = "primary",
  onClick,
  style,
  size = "md",
  radius = "none",
  border = "none",
  className,
}) => {
  // join all classnames together, trim extra white space
  const combinedClassNames = `${styles.button} ${styles[`border-${border}`]} ${
    styles[`radius-${radius}`]
  } ${styles[`color-${color}`]} ${styles[`size-${size}`]} ${
    className || ""
  }`.trim();

  // props that are not part of the predefined styling options need to be passed in the component
  return (
    <button
      onClick={onClick}
      style={style}
      className={combinedClassNames}
      aria-label={aria}
    >
      {children}
    </button>
  );
};

export default Button;
