import React, { useState } from "react";
import "./Playground.scss";
// import Button from "../../component_testing/Button/Button";
// import TestTailwind from "../../component_testing/TestTailwind";
import Modal from "../../component_testing/Modal/Modal";
import Checkbox from "../../component_testing/Checkbox/Checkbox";
import { DiReact } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";
//import Checkbox from "../../component_testing/Checkbox/Checkbox";
import Avatar from "../../component_testing/Avatar/Avatar";

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

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Avatar with image, medium size, primary color, small border, and large radius */}
        <Avatar name="Jude" size="md" color="default" shape="circle" />
        <Avatar name="Jude" size="lg" color="secondary" border="md" />
        <Avatar name="Jude" size="lg" color="warning" border="sm" />
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Avatar with image, medium size, primary color, small border, and large radius */}
        <Avatar name="Brian" size="md" color="primary" shape="circle" />
        <Avatar
          name="Brian"
          size="lg"
          color="default"
          border="sm"
          borderColor="primary"
        />
        <Avatar
          name="Brian"
          size="lg"
          color="default"
          shape="square"
          radius="sm"
          border="sm"
          borderColor="primary"
        />
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Avatar with image, medium size, primary color, small border, and large radius */}
        <Avatar
          name="Jude"
          size="md"
          color="default"
          radius="sm"
          shape="square"
        />
        <Avatar
          name="Brian"
          size="md"
          color="secondary"
          radius="md"
          shape="square"
        />
        <Avatar
          name="Andrea"
          size="md"
          color="warning"
          radius="lg"
          shape="square"
        />
        <Avatar
          name="Luis"
          size="md"
          color="primary"
          radius="full"
          shape="square"
        />
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Avatar with image, medium size, primary color, small border, and large radius */}
        <Avatar name="Jude" size="sm" border="sm" />
        <Avatar name="Brian" size="md" border="sm" />
        <Avatar name="Andrea" size="lg" border="md" borderColor="warning" />
      </div>

      <div className="playground-container" style={{ width: "100%" }}>
        {/* <Modal modalHeader={"Modal header"} modalBody={"Body"}>
          Hello
        </Modal> */}
      </div>
    </div>
  );
};

export default Playground;
