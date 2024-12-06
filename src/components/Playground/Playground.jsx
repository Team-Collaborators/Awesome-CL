import React, { useState } from "react";
import "./Playground.scss";
import Card from "../../component_testing/Card/Card";
import Image from "../../component_testing/Image/Image";
import snow from "../../assets/images/snow.jpg";
import Button from "../../component_testing/Button/Button";
import Avatar from "../../component_testing/Avatar/Avatar";
import Search from "../../component_testing/Search/Search";

const Playground = () => {
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
        <br />
      </div>
    </div>
  );
};

export default Playground;
