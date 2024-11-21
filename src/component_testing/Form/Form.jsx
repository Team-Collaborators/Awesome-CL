import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.scss";

//  variants
const VARIANTS = {
  CONTACT: "contact",
  APPOINTMENT: "appointment",
  FEEDBACK: "feedback",
  INQUIRY: "inquiry",
  NEWSLETTER: "newsletter",
};

//options for various fields
const INTEREST_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "DevOps",
  "UI/UX Design",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Cloud Computing",
];

//Input field component for text inputs
const InputField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
}) => (
  <label className={styles.label}>
    {label}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={styles.inputField}
    />
  </label>
);

// Text area field component
const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <label className={styles.label}>
    {label}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={styles.inputField}
    ></textarea>
  </label>
);

// Multi-select dropdown for multiple options
const MultipleSelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => (
  <label className={styles.label}>
    {label}
    <select
      name={name}
      multiple
      value={value}
      onChange={onChange}
      required={required}
      className={styles.multipleSelectField}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

// Date picker field component
const DatePickerField = ({ label, selected, onChange }) => (
  <div className={styles.datePickerContainer}>
    <label className={styles.label}>{label}</label>
    <DatePicker
      selected={selected}
      onChange={onChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className={styles.datePicker}
    />
  </div>
);

// Main Form Component
const Form = ({ variant = VARIANTS.CONTACT }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    organization: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => {
    setSubmitted(false);
    setIsVisible(false);
  };

  const handleChange = (event) => {
    const { name, value, type, selectedOptions } = event.target;

    const updatedValue =
      type === "select-multiple" && selectedOptions
        ? Array.from(selectedOptions, (option) => option.value)
        : value;

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, appointmentDate: date }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const renderVariantFields = () => {
    switch (variant) {
      case VARIANTS.CONTACT:
        return (
          <>
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              required
            />
            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <InputField
              label="Organization / Company"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
            <TextAreaField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here"
              required
            />
          </>
        );
      case VARIANTS.APPOINTMENT:
        return (
          <DatePickerField
            label="Appointment Date and Time"
            selected={formData.appointmentDate}
            onChange={handleDateChange}
          />
        );
      case VARIANTS.FEEDBACK:
        return (
          <TextAreaField
            label="Your Feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Share your feedback"
          />
        );
      case VARIANTS.INQUIRY:
        return (
          <TextAreaField
            label="Your Inquiry"
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            placeholder="What would you like to inquire about?"
          />
        );
      case VARIANTS.NEWSLETTER:
        return (
          <>
            <p className={styles.helperText}>
              Select the topics you're interested in to customize your
              newsletter content.
            </p>
            <MultipleSelectField
              label="Areas of Interest"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              options={INTEREST_OPTIONS}
              required
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <button className={styles.openButton} onClick={handleOpen}>
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </button>
      {isVisible && (
        <div className={styles.formBackdrop} onClick={handleClose}>
          <div
            className={`${styles.formContainer} ${styles[`${variant}Form`]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleClose}>
              &times;
            </button>
            <h1 className={styles.submitHeader}>{`${
              variant.charAt(0).toUpperCase() + variant.slice(1)
            } Form`}</h1>
            {submitted ? (
              <p className={styles.successMessage}>
                Thank you! Your form has been submitted.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {variant === VARIANTS.CONTACT ? (
                  <>
                    <div className={styles.inputRow}>
                      <InputField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <InputField
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.inputRow}>
                      <InputField
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                      />
                      <InputField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        required
                      />
                    </div>
                    <div className={styles.inputRow}>
                      <InputField
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <InputField
                        label="Organization / Company"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                      />
                    </div>
                    <TextAreaField
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message here"
                      required
                    />
                  </>
                ) : (
                  <>
                    <InputField
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                    />
                    {renderVariantFields()}
                  </>
                )}
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
