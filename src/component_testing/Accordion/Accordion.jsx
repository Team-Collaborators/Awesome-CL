import React, { useState, cloneElement } from "react";
import "./Accordion.scss";

const Accordion = ({
  children,
  allowMultipleOpen = false,
  variant = "light",
  className = "",
  style,
}) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const combinedClassNames = `accordion-wrapper ${className} variant-${variant}`;

  return (
    <div className={combinedClassNames} style={style}>
      {React.Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: openIndexes.includes(index),
          onToggle: () => toggleItem(index),
        })
      )}
    </div>
  );
};

export default Accordion;
