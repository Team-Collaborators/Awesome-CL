import React from "react";
import "./ShowcaseSection.scss";
import glasses from "../../assets/images/high-tech-glasses.jpg";
// import Accordion from "../../component_testing/Accordion/Accordion";
// // import Avatar from "../../component_testing/Avatar/Avatar";
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

const ShowcaseSection = () => {
  return (
    <div className="showcase-container">
      {/* <div className="component-box">
        <Accordion></Accordion>
      </div>{" "}*/}
      <div className="component-box">
        {" "}
        <Button color="secondary" radius="lg">Button</Button>
      </div>
      <div className="component-box">
        <Checkbox color="secondary" checked="true"></Checkbox>
      </div>
      <div className="component-box">
        <Form/>
      </div>
      <div className="component-box">
        <Image src={glasses} alt="High-tech glasses" />
      </div>
      <div className="component-box">
        <Input color="secondary">Input</Input>
      </div>
      <div className="component-box">
        <Modal size="sm" placement="top">Modal</Modal>
      </div>
      <div className="component-box">
        <Search size="xs" />
      </div>
      <div className="component-box">
        <Spinner color="secondary" />
      </div>
      <div className="component-box">
        <Switch color="secondary" checked="true">Switch</Switch>
      </div>
    </div>
  );
};

export default ShowcaseSection;
