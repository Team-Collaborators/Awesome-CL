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

        {/* Card Default */}

        {/* Card Default*/}
        <Card
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
          image={<Image src={snow} objectFit="cover" radius="md" size="sm" />}
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
          image={<Image src={snow} radius="none" />}
          variant="outlined"
          isInteractive={true}
          titleAlignment="left"
          size="lg"
          footer={
            <>
              {" "}
              <Button color="default" radius="sm" size="sm">
                no
              </Button>
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                radius="none"
                size="sm"
              >
                No!
              </Button>
            </>
          }
        ></Card>
      </div>
    </div>
  );
};

export default Playground;
