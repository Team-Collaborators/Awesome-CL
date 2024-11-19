import React, { useState } from "react";
import "./Playground.scss";
// import Button from "../../component_testing/Button/Button";
// import TestTailwind from "../../component_testing/TestTailwind";
import Modal from "../../component_testing/Modal/Modal";
import Checkbox from "../../component_testing/Checkbox/Checkbox";
import Switch from "../../component_testing/Switch/Switch";

import { DiReact } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";

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
      <div
        className="playground-container"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Modal modalHeader={"Modal header"} modalBody={"Body"}>
          Hello
        </Modal> */}
        <Checkbox variant="solid" color="default"></Checkbox>
        <Checkbox variant="solid" color="primary" size="sm">
          {" "}
        </Checkbox>

        <Checkbox variant="solid" color="secondary" labelPosition="left">
          Click me
        </Checkbox>

        <Checkbox color="warning" variant="solid" size="md">
          medium
        </Checkbox>
        <Checkbox color="success" variant="solid" size="lg">
          large
        </Checkbox>
        <Checkbox color="danger" variant="solid" size="lg">
          large
        </Checkbox>
        <br />
        <Checkbox color="default"></Checkbox>
        <Checkbox color="primary" size="sm">
          <br />
          <br />
          <br />
        </Checkbox>
        <Checkbox color="secondary">Click me</Checkbox>
        <Checkbox color="warning" size="md">
          medium
        </Checkbox>
        <Checkbox color="success" size="lg">
          large
        </Checkbox>
        <Checkbox color="danger" size="lg">
          large
        </Checkbox>
        <Checkbox
          style={{ border: "dotted 2px yellow", color: "pink" }}
        ></Checkbox>
      </div>
    </div>
  );
};

export default Playground;
