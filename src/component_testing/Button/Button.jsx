import styles from "./Button.module.scss";

const Button = ({
  children,
  aria,
  color = "primary",
  onClick,
  style,
  size = "md",
  radius = "none",
  border = "none",
  className="",
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

  return (
    <button 
    onClick={onClick} 
    style={style} 
    className={finalClassNames} 
    aria-label={aria}>
      {children}
    </button>
  );
};

export default Button;
