import ContactForm from "../../components/ContactPage/ContactForm/ContactForm.jsx";
import ContactDetails from "../../components/ContactPage/ContactDetails/ContactDetails.jsx";
import FAQSection from "../../components/ContactPage/FAQ/FAQSection.jsx";

const ContactPage = () => {
  return (
    <div>
      <ContactForm />
      <ContactDetails />
      <FAQSection />
    </div>
  );
};

export default ContactPage;
