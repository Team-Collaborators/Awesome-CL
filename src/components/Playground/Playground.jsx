import React, { useState } from "react";
import "./Playground.scss";
// import Button from "../../component_testing/Button/Button";
// import TestTailwind from "../../component_testing/TestTailwind";
import Modal from "../../component_testing/Modal/Modal";
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
      <div className="playground-container" style={{ width: "100%" }}>
        {/* <Modal modalHeader={"Modal header"} modalBody={"Body"}>
          Hello
        </Modal> */}
      </div>
    </div>
  );
};

export default Playground;
