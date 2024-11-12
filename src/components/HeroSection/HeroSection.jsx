import "./HeroSection.module.scss";
import logo from "../../assets/images/A-logo.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={logo} alt="Logo" className="hero-logo" />
      <h1 className="hero-title">Build and Share Components Effortlessly</h1>
      <p className="hero-description">
        {/* Join the community and start creating reusable components to speed up
        your development process. */}
      </p>
      <div className="hero-buttons">
        <button className="hero-btn sign-up">Get Started</button>
        <button className="hero-btn learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
