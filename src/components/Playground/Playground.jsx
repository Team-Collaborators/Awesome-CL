import React, { useState } from "react";
import "./Playground.scss";
import Card from "../../component_testing/Card/Card";
import Image from "../../component_testing/Image/Image";
import snow from "../../assets/images/snow.jpg";
import glasses from "../../assets/images/high-tech-glasses.jpg";
import Modal from "../../component_testing/Modal/Modal";
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
        <Modal
          size="sm"
          placement="bottom-center"
          modalBody={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi
              commodi vero, esse fugiat atque repellat! Eius magni illo
              accusantium nihil officia quod, doloribus excepturi obcaecati,
              odio molestiae minima labore!
            </p>
          }
        >
          Click me
        </Modal>
        {/* Card Small */}
        <Card
          size="sm"
          title="Some Title"
          description="This is a small card with default variant"
          footer={
            <Button color="primary" size="sm">
              Primary
            </Button>
          }
        ></Card>
        <br />

        {/* Card Medium Elevated with Avatar */}
        <Card
          variant="elevated"
          avatar={<Avatar avatarName="Brian" name="Brian" />}
          title="Medium Elevated Card with Avatar"
          description="This is a medium card with elevated variant and an avatar"
          footer={
            <Button color="secondary" size="sm" border="xs" radius="md">
              Secondary
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
          radius="lg"
          image={
            <Image
              src={glasses}
              height="200px"
              width="200px"
              objectFit="cover"
            />
          }
          title="Large Outlined Card"
          footer={
            <>
              {" "}
              <Button color="secondary" radius="full">
                Yes
              </Button>
              <Button color="default" radius="full">
                No
              </Button>
            </>
          }
        ></Card>
        <br />

        {/* Card Horizontal */}
        <Card
          horizontal="true"
          title={
            <>
              <h2>Card Horizontal</h2> <p>With Image</p>
            </>
          }
          image={<Image src={snow} />}
          variant="outlined"
          isInteractive={false}
          radius="none"
          size="lg"
          footer={
            <>
              {" "}
              <Button color="secondary" radius="full">
                Yes
              </Button>
              <Button color="default" radius="full">
                No
              </Button>
            </>
          }
        >
          This is a horizontal card with two buttons and no radius
        </Card>
      </div>
    </div>
  );
};

export default Playground;
