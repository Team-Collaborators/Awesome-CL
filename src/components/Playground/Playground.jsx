import React from "react";
import "./Playground.scss";
import Button from "../../component_testing/Button/Button";
import TestTailwind from "../../component_testing/TestTailwind";
import Navbar from "../Navbar/Navbar";


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
        <Button
          style={{
            backgroundColor: "lightblue",
            color: "white",
            borderRadius: "50px",
          }}
        >
          Custom Styled Button
        </Button>
        {/* Test div component styled with Tailwind only */}
        <TestTailwind />
        {/* Test button styled with Tailwind and props*/}
        <Button
          border="xl"
          radius="full"
          className="hover:bg-pink-800 hover:text-gray-900"
        >
          Button component Button props and Tailwind style
        </Button>

      </div>
    </section>
  );
};

export default Playground;
