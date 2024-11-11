import React from "react";
import "./Playground.scss";
// import Button from "../../component_testing/Button/Button";
// import TestTailwind from "../../component_testing/TestTailwind";
import Modal from "../../component_testing/Modal/Modal";
import Switch from "../../component_testing/Switch/Switch";
<<<<<<< HEAD
import { DiReact } from "react-icons/di";
=======
import { TbBackground } from "react-icons/tb";
>>>>>>> 429e0a99c0fc277867624099f3b689be337c767d

const Playground = () => {
  return (
    <section className="playground-wrapper">
      <h1>Playground</h1>
      <p>This is the space to test new components</p>
      <div className="playground-container">
        {/* Default button */}
        {/* <Button>Default Button</Button> */}

        {/* Primary button */}
        {/* <Button color="primary">Primary Button</Button> */}

        {/* Secondary button */}
        {/* <Button color="secondary" radius="rounded">
          Secondary Button
        </Button> */}

        {/* Button with custom style */}
        {/* <Button
          style={{
            backgroundColor: "lightblue",
            color: "white",
            borderRadius: "50px",
          }}
        >
          Custom Styled Button
        </Button> */}
        {/* Test div component styled with Tailwind only */}
        {/* <TestTailwind /> */}
        {/* Test button styled with Tailwind and props*/}
        {/* <Button
          border="xl"
          radius="full"
          className="hover:bg-pink-800 hover:text-gray-900"
        >
          Button component Button props and Tailwind style
        </Button> */}

        {/* <Modal modalHeader={"Modal header"} modalBody={"Body"}>
          Hello
<<<<<<< HEAD
        </Modal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Switch test</h4>
         <br /> <p>Switch default: default</p>
          <Switch/>
          <br /> <p>Switch 1: color: default-dark</p>
          <Switch color="default-dark"/>
         <br /> <p>Switch 2: size sm, primary color, radius xs</p>
          <Switch size="sm" color="primary" radius="xs" />
        <br />  <p>Switch 3: size lg, secondary color, radius lg</p>
          <Switch color="secondary" radius="lg" />
         <br /> <p>Switch 4: size xl, border md, radius lg, inline styling</p>
          <Switch
            border="md"
            size="xl"
            radius="lg"
            style={{ backgroundColor: "yellow" }}
          />
          <br />
          <p>Switch 4: default size, color: secondary, radius full</p>
          <Switch color="secondary" radius="full" />
=======
        </Modal> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          Switch test
          <Switch size="xl" color="default" />
          <Switch size="xl" color="default" />
          <Switch size="xl" color="default" />
          <Switch size="xl" color="default" />
          <Switch size="xl" color="default" />
>>>>>>> 429e0a99c0fc277867624099f3b689be337c767d
        </div>
      </div>
    </section>
  );
};

export default Playground;
