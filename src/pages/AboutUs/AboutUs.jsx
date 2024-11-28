import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const teamData = [
  {
    name: "Anna",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Heriberto",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Iryna",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kristin",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Nancy",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
    github: "https://github.com/NancyJK",
  },
  {
    name: "Nathalie",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
    linkedin: "https://www.linkedin.com/",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.title}>About Us</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Built for Students, by Students</h2>
        <p className={styles.description}>
          Our component library is designed for junior developers, recent
          graduates, and anyone ready to level up in web development. We get it:
          you want to build fast, learn faster, and make it look awesome. Every
          component is crafted with your needs in mind—easy to implement, highly
          customizable, and packed with cool styles.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Why We Create</h2>
        <ul className={styles.list}>
          <li>
            <span className={styles.highlight}>Ready-to-Use Components:</span>{" "}
            Quickly add essential UI elements without setup.
          </li>
          <li>
            <span className={styles.highlight}>Full-Stack Compatibility:</span>{" "}
            Components that play well with both frontend and backend systems.
          </li>
          <li>
            <span className={styles.highlight}>Style Variety:</span> Neon, dark,
            or professional themes, whatever you need.
          </li>
          <li>
            <span className={styles.highlight}>
              Beginner-Friendly Documentation:
            </span>{" "}
            Learn with detailed explanations and examples.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>What You Can Expect</h2>
        <ul className={styles.list}>
          <li>
            <span className={styles.highlight}>Reusable Code:</span> Scales with
            your career growth.
          </li>
          <li>
            <span className={styles.highlight}>Responsive Design:</span> Looks
            great on all screen sizes.
          </li>
          <li>
            <span className={styles.highlight}>Continuous Updates:</span> New
            styles, animations, and components based on industry trends.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Join the Community!</h2>
        <p className={styles.description}>
          This library is a community of learners and creators. Connect with us,
          share feedback, and help make this library even better. Whether it’s
          your first project or a portfolio masterpiece, we’re here to support
          you!
        </p>
      </section>

      <h2 className={styles.subtitle}>Our Team</h2>
      <div className={styles.team}>
        {teamData.map((member, index) => (
          <div className={styles.teamMember} key={index}>
            <div className={styles.teamImageContainer}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamDescription}>{member.description}</p>
            </div>
            <div className={styles.socialLinks}>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinLink}
                >
                  <FaLinkedin className={styles.linkedinIcon} />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <FaGithub className={styles.githubIcon} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
