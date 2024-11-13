import React from "react";
import "./Accordion.scss";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const AccordionItem = ({
  title,
  subtitle,
  children,
  isOpen,
  onToggle,
  iconClose = <SlArrowDown />,
  iconOpen = <SlArrowLeft />,
}) => (
  <div className="accordion-item">
    <button className="accordion-toggle" onClick={onToggle}>
      <div className="title-wrapper">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
      {isOpen ? iconClose : iconOpen}
    </button>
    <div className={`accordion-content ${isOpen ? "open" : ""}`}>
      {isOpen && children}
    </div>
  </div>
);

export default AccordionItem;
