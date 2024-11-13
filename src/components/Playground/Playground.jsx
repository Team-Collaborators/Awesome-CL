import React, { useState } from "react";
import "./Playground.scss";
// import Button from "../../component_testing/Button/Button";
// import TestTailwind from "../../component_testing/TestTailwind";
import Modal from "../../component_testing/Modal/Modal";
import Switch from "../../component_testing/Switch/Switch";
import { DiReact } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";
//import Checkbox from "../../component_testing/Checkbox/Checkbox";

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
        {/* <Modal modalHeader={"Modal header"} modalBody={"Body"}>
          Hello
        </Modal> */}
      </div>
      <h4>Switch</h4>
      <div
        className="switch-container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Switch />
        <Switch color="default-dark" />
        <Switch color="primary" sliderColor="yellow" />
        <Switch color="secondary" />
        <Switch color="danger" />
        <Switch color="success" />
        <Switch color="warning" />
      </div>
      <br />
      <div
        className="switch-container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Switch size="xs" border="none" />
        <Switch size="sm" border="none" />
        <Switch size="md" border="none" />
        <Switch size="lg" border="none" />
        <Switch size="xl" border="none" />
      </div>
      <br />
      <br />
      <Switch color="primary" size="xl" />
      <br />
      <br />
      <br />
      <Switch
        size="xl"
        sliderColor="tomato"
        style={{ border: "green solid 2px", backgroundColor: "pink" }}
      />
    </div>
  );
};

export default Playground;
