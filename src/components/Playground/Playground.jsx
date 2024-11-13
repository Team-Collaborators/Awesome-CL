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

        <div style={{ display: "flex", justifyContent: "space-around" }}>
<Checkbox color="default-dark" border="xs"/>
<Checkbox color="primary" border="sm"/>
<Checkbox color="secondary" border="md"/>
<Checkbox color="danger" border="lg"/>
<Checkbox style={{backgroundColor: "pink", border: "yellow 3px dotted", color: "yellow"}} />
<Checkbox color="warning"/>
<Checkbox/>
<Checkbox/>


        </div>
      </div>
    </div>
  );
};

export default Playground;
