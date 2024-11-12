import { Link } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Component Library</h1>
        <p className="subtitle">
          A collection of reusable components for building modern web
          applications
        </p>
      </header>
      <section className="top-components">
        <h2>Top Components</h2>
        <div className="components-gallery"></div>
      </section>
    </div>
  );
};

export default LandingPage;
