import styles from "./ContactForm.module.scss";
import contactImage from "../../../assets/images/digital-connection.jpg";

const ContactForm = () => {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactImage}>
        <img src={contactImage} alt="Contact Us" />
      </div>
      <div className={styles.formContainer}>
        <h2>Get In Touch With Us</h2>
        <p>
          We'd love to hear from you. Please fill out the form below and we'll
          get in touch as soon as possible.
        </p>
        <form action="https://formspree.io/f/myzydvka" method="POST">
          <div className={styles.formGroup}>
            <label>
              Full Name*
              <input type="text" placeholder="Full Name" name="name" required />
            </label>
            <label>
              Phone*
              <input type="text" placeholder="Phone" name="phone" required />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Email
              <input type="email" placeholder="Email" name="email" />
            </label>
            <label>
              Subject
              <input type="text" placeholder="Subject" name="subject" />
            </label>
          </div>
          <label>
            Message
            <textarea
              placeholder="Your message here..."
              name="message"
              required
            ></textarea>
          </label>
          <button type="submit">Enquire Now</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
