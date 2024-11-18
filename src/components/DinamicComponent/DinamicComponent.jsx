import React from "react";

import { Button, Input } from "AwesomeCL"; // Importa tus componentes
import Modal from "../../component_testing/Modal/Modal";
import Form from "../../component_testing/Form/Form";
import Accordion from "../../component_testing/Accordion/Accordion";
import AccordionItem from "../../component_testing/Accordion/AccordionItem";
import Search from "../../component_testing/Search/Search";
import Switch from "../../component_testing/Switch/Switch";
import Checkbox from "../../component_testing/Checkbox/Checkbox";
import Spinner from "../../component_testing/Spinner/Spinner";
import Image from "../../component_testing/Image/Image";

const components = {
  //Object with all components
  Button,
  Input,
  Modal,
  Form,
  Accordion,
  AccordionItem,
  Search,
  Spinner,
  Switch,
  Checkbox,
  Image,
};

export default function DynamicComponent({ type, props, children }) {
  const ComponentToRender = components[type];
  if (!ComponentToRender) {
    console.error(`Error: Component "${type}" not found.`);
    return <p>Error: Component "{type}" not found.</p>;
  }

  const childrenElements = Array.isArray(children)
    ? children.map((child, index) => {
        return DynamicComponent({
          type: child.type,
          props: child.props,
          children: child.children,
          key: index,
        });
      })
    : children;

  return React.createElement(ComponentToRender, props, childrenElements);
}
