import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/awesome-logo.png";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.sections}>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: info@awesomeCl.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 1234 Street Name, City, State</p>
        </div>
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <a href="https://twitter.com">
            <FaTwitter /> Twitter
          </a>
          <a href="https://facebook.com">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://instagram.com">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      <div className={styles.brand}>
        <img src={logo} alt="Brand Logo" className={styles.logo} />
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Awesome CL. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
