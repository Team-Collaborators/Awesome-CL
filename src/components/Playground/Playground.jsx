import React, { useState } from "react";
import "./Playground.scss";
import Card from "../../component_testing/Card/Card";

import Image from "../../component_testing/Image/Image";
import Switch from "../../component_testing/Switch/Switch";


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
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          padding: "20px",
        }}
      >
<Switch color="primary">Primary</Switch>
<Switch color="secondary">Secondary</Switch>
      </div>

     
    </div>
  );
};

export default Playground;
