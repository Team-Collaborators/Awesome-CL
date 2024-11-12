import React, { useState } from "react";
import "./Playground.scss";
// import Button from "../../component_testing/Button/Button";
// import TestTailwind from "../../component_testing/TestTailwind";
import Modal from "../../component_testing/Modal/Modal";
import Switch from "../../component_testing/Switch/Switch";
import { DiReact } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";
import Checkbox from "../../component_testing/Checkbox/Checkbox";

const Playground = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Handle toggle of content visibility
  const handleContentToggle = (newCheckedState) => {
    setIsContentVisible(newCheckedState);
  };

  return (
    <div className="playground-wrapper">
      <h1>Playground</h1>
      <p>This is the space to test new components</p>
      <div className="playground-container" style={{ width: "100%" }}>
        {/* Default button */}
        {/* <Button>Default Button</Button> */}

        {/* Primary button */}
        {/* <Button color="primary">Primary Button</Button> */}

        {/* Secondary button */}
        {/* <Button color="secondary" radius="rounded">
          Secondary Button
        </Button> */}

        {/* Button with custom style */}
        {/* <Button
          style={{
            backgroundColor: "lightblue",
            color: "white",
            borderRadius: "50px",
          }}
        >
          Custom Styled Button
        </Button> */}
        {/* Test div component styled with Tailwind only */}
        {/* <TestTailwind /> */}
        {/* Test button styled with Tailwind and props*/}
        {/* <Button
          border="xl"
          radius="full"
          className="hover:bg-pink-800 hover:text-gray-900"
        >
          Button component Button props and Tailwind style
        </Button> */}
        {/* <Modal modalHeader={"Modal header"} modalBody={"Body"}>
          Hello
        </Modal> */}
        <br />

        <div>
          <h4>Checkbox Test</h4>
<p>Default Checkbox</p>
          <Checkbox/>
          <br />
          <p>Default Dark Checkbox</p>
          <Checkbox color="primary"/>
        </div>
       
       
       
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Check visibility of content using switch */}
          <br />
          <p>{isContentVisible ? "Content is visible" : "Content is hidden"}</p>
          {/* <Switch
            size="md"
            color={isContentVisible ? "primary" : "secondary"}
            radius="lg"
            checked={isContentVisible}
            onChange={handleContentToggle}
          /> */}
          <br />
          {/* Content Section toggled by switch */}
          {/* {isContentVisible && (
            <div style={{ border: "1px solid black", padding: "10px" }}>
              <h4>Hidden Content</h4>
              <p>Now visible because of switch toggle</p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Playground;
