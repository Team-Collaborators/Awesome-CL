import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/awesome-logo.png";
import ContactPage from "../../pages/ContactPage/ContactPage";
import AboutUs from "../../pages/AboutUs/AboutUs";

const Footer = ({ isSidebarOpen }) => {
  return (
    <footer
      className={`${styles.footer} ${
        isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            {/* <a href="/privacy">Privacy Policy</a> */}
          </div>
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>Email: info@awesome-cl.info</p>
            {/* <p>Phone: +49 234 567 890</p> */}
            <p>Address: Vulkanstraße 1, 10367 Berlin, Germany</p>
          </div>
          <div className={styles.social}>
            <h4>Follow Us</h4>
            <a href="https://linkedin.com" target="blank">
              <FaLinkedin style={{ marginRight: "10px" }} /> LinkedIn
            </a>
            <a
              href="https://github.com/Team-Collaborators/Awesome-CL"
              target="blank"
            >
              <FaGithub style={{ marginRight: "10px" }} /> Github
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Awesome CL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
