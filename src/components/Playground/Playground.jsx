import React, { useState } from "react";
import "./Playground.scss";
import Card from "../../component_testing/Card/Card";
import Button from "../../component_testing/Button/Button";
import Image from "../../component_testing/Image/Image";
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
      <br />
      <h2>Card Component</h2>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Card
          image={<Image src="https://via.placeholder.com/300" alt="Example" />}
          header={<h3>Card default Title</h3>}
          footer={<button>Action</button>}
          style={{ maxWidth: "300px" }}
          actions={
            <>
              <Button
                color="green"
                radius="full"
                style={{ backgroundColor: "yellow", color: "tomato" }}
              >
                Action 1
              </Button>
              <Button color="secondary">Action 2</Button>
            </>
          }
        >
          <p>
            This is the body content of the card. It is flexible and reusable!
          </p>
        </Card>
        <br />
        <Card
          variant="outlined"
          size="md"
          header={<h3>Card outlined Title</h3>}
          footer={<button>Action</button>}
          actions={
            <>
              <Button variant="primary">Action 1</Button>
              <Button variant="secondary">Action 2</Button>
            </>
          }
        >
          {" "}
          <p>
            This is the body content of the card. It is flexible and reusable!
          </p>
        </Card>
        <Card
          variant="elevated"
          size="md"
          header={<h3>Card Elevated Title</h3>}
          footer={<button>Action</button>}
          actions={
            <>
              <Button variant="primary">Action 1</Button>
              <Button variant="secondary">Action 2</Button>
            </>
          }
        >
          {" "}
          <p>
            This is the body content of the card. It is flexible and reusable!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Playground;
