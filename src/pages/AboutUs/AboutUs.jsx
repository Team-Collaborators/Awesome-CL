import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.scss";

const teamData = [
  {
    name: "Anna",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
  },
  {
    name: "Heriberto",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
  },
  {
    name: "Iryna",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
  },
  {
    name: "Kristin",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
  },
  {
    name: "Nancy",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
  },
  {
    name: "Nathalie",
    role: "Frontend & Backend Developer",
    description:
      "Passionate about creating seamless user experiences and building reusable components.",
    image: "",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.title}>About Us</h1>

      <h2 className={styles.subtitle}>Built by a Student, for Students</h2>
      <p className={styles.description}>
        Our component library is designed for junior developers, recent
        graduates, and anyone ready to level up in web development. We get it:
        you want to build fast, learn faster, and make it look awesome. Every
        component is crafted with your needs in mind—easy to implement, highly
        customizable, and packed with cool styles.
      </p>

      <h2 className={styles.subtitle}>Why We Create</h2>
      <ul className={styles.list}>
        <li>
          <strong>Ready-to-Use Components:</strong> Quickly add essential UI
          elements without setup.
        </li>
        <li>
          Full-Stack Compatibility: Components that play well with both frontend
          and backend systems.
        </li>
        <li>
          <strong>Style Variety:</strong> Neon, dark, or professional themes,
          whatever you need.
        </li>
        <li>
          <strong>Beginner-Friendly Documentation:</strong> Learn with detailed
          explanations and examples.
        </li>
      </ul>

      <h2 className={styles.subtitle}>What You Can Expect</h2>
      <ul className={styles.list}>
        <li>
          <strong>Reusable Code:</strong> Scales with your career growth.
        </li>
        <li>
          <strong>Responsive Design:</strong> Looks great on all screen sizes.
        </li>
        <li>
          <strong>Continuous Updates:</strong> New styles, animations, and
          components based on industry trends.
        </li>
      </ul>

      <h2 className={styles.subtitle}>Join the Community!</h2>
      <p className={styles.description}>
        This library is a <strong>community of learners and creators</strong>.
        Connect with us, share feedback, and help make this library even better.
        Whether it’s your first project or a portfolio masterpiece, we’re here
        to support you!
      </p>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
