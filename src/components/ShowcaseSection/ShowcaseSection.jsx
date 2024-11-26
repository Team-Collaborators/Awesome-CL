import React from "react";
import "./ShowcaseSection.scss";
import { Link } from "react-router-dom";
import snow from "../../assets/images/snow.jpg";
import Avatar from "../../component_testing/Avatar/Avatar";
import Button from "../../component_testing/Button/Button";
// //import Card from "../../component_testing/Card/Card";
// // import Carousel from "../../component_testing/Carousel/Carousel";
import Checkbox from "../../component_testing/Checkbox/Checkbox";
import Form from "../../component_testing/Form/Form";
import Image from "../../component_testing/Image/Image";
import Input from "../../component_testing/Input/Input";
import Modal from "../../component_testing/Modal/Modal";
// import Popover from "../../component_testing/Popover/Popover";
import Search from "../../component_testing/Search/Search";
import Spinner from "../../component_testing/Spinner/Spinner";
import Switch from "../../component_testing/Switch/Switch";

const showcaseItems = [
  {
    component: <Avatar avatarName="Brian" />,
    title: "Avatar",
    link: "/frontend/components/avatar",
  },
  {
    component: (
      <Button color="secondary" radius="lg" size="sm">
        Button
      </Button>
    ),
    title: "Button",
    link: "/frontend/components/button",
  },
  {
    component: <Checkbox color="secondary" checked="true" size="lg"></Checkbox>,
    title: "Checkbox",
    link: "/frontend/components/checkbox",
  },
  {
    component: <Form variant="feedback" />,
    title: "Form",
    link: "/frontend/components/form",
  },
  {
    component: (
      <Image
        src={snow}
        alt="High-tech glasses"
        size="sm"
        objectFit="cover"
        isZoomed="true"
      />
    ),
    title: "Image",
    link: "/frontend/components/image",
  },
  {
    component: (
      <Input color="secondary" size="sm" border="bottom">
        Input
      </Input>
    ),
    title: "Input",
    link: "/frontend/components/input",
  },
  {
    component: (
      <Modal size="sm" placement="top">
        Modal
      </Modal>
    ),
    title: "Modal",
    link: "/frontend/components/modal",
  },
  {
    component: <Search size="sm" radius="full" border="bottom" />,
    title: "Search",
    link: "/frontend/components/searchbar",
  },
  {
    component: <Spinner color="secondary" />,
    title: "Spinner",
    link: "/frontend/components/spinner",
  },
  {
    component: <Switch color="secondary" checked="true" size="xl" />,
    title: "Switch",
    link: "/frontend/components/switch",
  },
];

const ShowcaseSection = () => {
  return (
    <div className="showcase-section">
      <div className="showcase-container">
        {showcaseItems.map((item, index) => (
          <div key={index} className="component-box">
            {" "}
            <div className="component-content"> {item.component}</div>
            <Link to={item.link} className="component-link">
              {" "}
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseSection;
