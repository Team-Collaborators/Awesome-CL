import React, { useState } from "react";
import styles from "./FAQSection.module.scss";
import { FaChevronDown } from "react-icons/fa";

const questionsAnswers = [
  {
    question: "What Services Does You Offer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique pharetra lacinia. Cras commodo quam non vehicula porta, magna velit tempus leo non.",
  },
  {
    question: "How Can A Component Library Help My Websites",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique pharetra lacinia. Cras commodo quam non vehicula porta, magna velit tempus leo non.",
  },
  {
    question: "What Sets Awesome-CL Components Library Apart From Others?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique pharetra lacinia. Cras commodo quam non vehicula porta, magna velit tempus leo non.",
  },
  {
    question: "How Do You Approach Website Development?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique pharetra lacinia. Cras commodo quam non vehicula porta, magna velit tempus leo non.",
  },
  {
    question: "How Can I Implement The Components In My Project?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique pharetra lacinia. Cras commodo quam non vehicula porta, magna velit tempus leo non.",
  },
  {
    question: "How Do I Choose Components For Needs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique pharetra lacinia. Cras commodo quam non vehicula porta, magna velit tempus leo non.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {questionsAnswers.map((qa, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {qa.question}
              <FaChevronDown
                className={
                  activeIndex === index ? styles.rotateIcon : styles.icon
                }
              />
            </button>
            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              <p>{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
