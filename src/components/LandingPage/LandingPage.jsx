import { Link } from "react-router-dom";
import "./LandingPage.scss";
import logo from "../../assets/images/A-logo.png";

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
        <Link to="/components" className="cta-button">
          Explore Components
        </Link>
      </header>
      <section className="top-components">
        <h2>Top Components</h2>
        <div className="components-gallery">
          {/* Add top components here */}
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 Component Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
