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

        <Checkbox border="sm">Hello</Checkbox>
        <br />
        <br />
        <Switch size="xl">default xl</Switch>
        <Switch color="primary" border="md" size="xl">
          Hello
        </Switch>
        <Switch color="secondary"  size="xl">
          Hello
        </Switch>
        <Switch style={{backgroundColor: "pink"}} sliderColor="red" size="xl">
          Hello
        </Switch>
        <Switch color="success" size="xl">
          Hello
        </Switch>
        <Switch color="warning" size="xl">
          Hello
        </Switch>
      </div>
    </div>
  );
};

export default Playground;
