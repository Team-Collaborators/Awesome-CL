import React from "react";

import { Button, Input } from "AwesomeCL"; // Importa tus componentes
import Modal from "../../component_testing/Modal/Modal";
import Accordion from "../../component_testing/Accordion/Accordion";
import AccordionItem from "../../component_testing/Accordion/AccordionItem";
import Search from "../../component_testing/Search/Search";

const components = {
  //Object with all components
  Button,
  Input,
  Modal,
  Accordion,
  AccordionItem,
  Search,
};

export default function DynamicComponent({ type, props, children }) {
  const ComponentToRender = components[type];
  if (!ComponentToRender) {
    console.error(`Error: Component "${type}" not found.`);
    return <p>Error: Component "{type}" not found.</p>;
  }

  const childrenElements = Array.isArray(children)
    ? children.map((child) => {
        console.log(typeof child.type);
        return DynamicComponent({
          type: child.type,
          props: child.props,
          children: child.children,
        });
      })
    : children;

  return React.createElement(ComponentToRender, props, childrenElements);
}
