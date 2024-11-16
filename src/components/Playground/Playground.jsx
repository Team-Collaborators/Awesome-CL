import React, { useState } from "react";
import "./Playground.scss";
// import Button from "../../component_testing/Button/Button";
// import TestTailwind from "../../component_testing/TestTailwind";
import Modal from "../../component_testing/Modal/Modal";
//import Checkbox from "../../component_testing/Checkbox/Checkbox";
import { DiReact } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";
//import Slider from "../../component_testing/Slider/Slider";
import Spinner from "../../component_testing/Spinner/Spinner";

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

<div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Spinning Circle Example</h1>
      <Spinner style={{borderColor: "green", borderBottomColor: "transparent"}}/>
      <Spinner color="default-light" />
      <Spinner/>
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
      <Spinner size="md" thickness="lg" color="secondary" speed="2s" />
      <Spinner size="lg" thickness="md" color="danger" speed="1s" />
       
      
    </div>
      </div>
    </div>
  );
};

export default Playground;
