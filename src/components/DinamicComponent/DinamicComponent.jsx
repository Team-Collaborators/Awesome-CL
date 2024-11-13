import React from "react";

import { Button, Input } from "AwesomeCL"; // Importa tus componentes
import Modal from "../../component_testing/Modal/Modal";

const components = {
  //Object with all components
  Button,
  Input,
  Modal,
};

export default function DynamicComponent({ type, props, children }) {
  const ComponentToRender = components[type]; // Find the component on the object

  try {
    if (!ComponentToRender) {
      throw new Error(`Component "${type}" not found.`);
    }

    return React.createElement(ComponentToRender, props, children); //Create the component
  } catch (error) {
    console.error("Error rendering example:", error);
    return <p>Error rendering component</p>;
  }
}
