import styles from "./Button.module.scss";

const Button = ({
  children,
  aria = "button",
  color = "primary",
  onClick,
  style,
  size = "md",
  radius = "none",
  border = "none",
  className,
}) => {
  const combinedClassNames = `${styles.button} ${styles[`border-${border}`]} ${
    styles[`radius-${radius}`]
  } ${styles[`color-${color}`]} ${styles[`size-${size}`]} ${
    className || ""
  }`.trim();

  return (
    <button onClick={onClick} style={style} className={combinedClassNames} aria-label={aria}>
      {children}
    </button>
  );
};

export default Button;
