import React, { useState } from "react";
import "./Playground.scss";
import Card from "../../component_testing/Card/Card";
import Image from "../../component_testing/Image/Image";

import sofa from "../../assets/images/sofa.jpg";

import snow from "../../assets/images/snow.jpg";
import glasses from "../../assets/images/high-tech-glasses.jpg";
import Button from "../../component_testing/Button/Button";
import Avatar from "../../component_testing/Avatar/Avatar";


const Playground = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  // Handle toggle of content visibility
  const handleContentToggle = (newCheckedState) => {
    setIsContentVisible(newCheckedState);
  };

  return (
    <div className="playground-wrapper">
      <ProductCard />
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

        {/* Card Default */}

        {/* Card Default*/}
        <Card
          variant="subtle"
          size="md"
          radius="md"
          image={<Image src={sofa} objectFit="cover" radius="md" size="sm" />}
          title="Card"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
          footer={
            <>
              {" "}
              <Button color="danger" size="sm" radius="full">
                Yes
              </Button>
              <Button color="default" size="sm" radius="full">
                No
              </Button>
            </>
          }
        ></Card>

        <Card
          variant="elevated"
          avatar={<Avatar avatarName="Brian" name="Brian" />}
          title="Medium Elevated Card with Avatar"
          color="primary"
          description="This is a medium card with elevated variant and an avatar"
          footer={
            <Button color="primary" size="sm" radius="md">
              Primary
            </Button>
          }
        >
          Variant Elevated
        </Card>
        <br />

        {/* Card Large Outlined */}
        <Card
          variant="outlined"
          size="lg"
          radius="md"
          color="default"
          imageTop={true}
          image={<Image src={snow} objectFit="cover" radius="none" />}
          title="Large Outlined Card"
          description="This is a large card with outlined variant and an image"
          footer={
            <>
              {" "}
              <Button color="danger" size="sm" radius="full">
                Yes
              </Button>
              <Button color="default" size="sm" radius="full">
                No
              </Button>
            </>
          }
        ></Card>
        <br />

        {/* Card Small Outlined */}
        <Card
          variant="outlined"
          size="sm"
          radius="md"
          color="default"
          image={<Image src={snow} objectFit="cover" radius="md" size="sm" />}
          title="Small Outlined Card"
          description="This is a large card with outlined variant and an image"
          footer={
            <>
              {" "}
              <Button color="danger" size="sm" radius="full">
                Yes
              </Button>
              <Button color="default" size="sm" radius="full">
                No
              </Button>
            </>
          }
        ></Card>
        <br />

        {/* Card Horizontal */}
        <Card
          horizontal="true"
          radius="sm"
          title="Card Horizontal"
          description="This is a horizontal card with an image"
          image={<Image src={glasses} size="lg" radius="none" />}
          variant="outlined"
          isInteractive={false}
          size="lg"
          footer={
            <>
              {" "}
              <Button color="default" radius="sm" size="sm">
                no
              </Button>
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                radius="sm"
                size="sm"
              >
                Yes!
              </Button>
            </>
          }
        ></Card>
      </div>
    </div>
  );
};

export default Playground;
