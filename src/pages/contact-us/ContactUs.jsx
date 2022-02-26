import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./ContactUs.scss";

const ContactUs = () => {

document.title='دیجی شاپ | تماس با ما'

  return (
    <div className="contact-us">
      <div className="contact-us__row">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactUs;
