import React from "react";
import "./ShowcaseSection.scss";
import Switch from "../../component_testing/Switch/Switch";
import Checkbox from "../../component_testing/Checkbox/Checkbox";
import Input from "../../component_testing/Input/Input";

const ShowcaseSection = () => {
  return (
    <div className="showcase-container">
      <div className="component-box">
        <Switch>Hello</Switch>
      </div>{" "}
      <div className="component-box">
        {" "}
        <Checkbox>Yes</Checkbox>
      </div>
      <div className="component-box">
        <Input />
      </div>
    </div>
  );
};

export default ShowcaseSection;