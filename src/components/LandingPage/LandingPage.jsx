import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/A-logo.png";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.background}></div>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={`${styles.title} ${styles.animateFadeIn}`}>
          Build and Ship Components with Ease
        </h1>
        <p className={`${styles.subtitle} ${styles.animateSlideUp}`}>
          Join the most innovative platform for creating and deploying reusable
          components for modern web applications.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/frontend/components/button" className={styles.btn}>
            Try Now
          </Link>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
