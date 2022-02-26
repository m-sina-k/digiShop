import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Select from "react-select";

import { toast } from "react-toastify";

const ContactForm = () => {
  const contactSubjectOptions = [
    { value: "پیشنهاد", label: "پیشنهاد" },
    { value: "انتقاد", label: "انتقاد" },
    { value: "پیگیری سفارش", label: "پیگیری سفارش" },
    { value: "خدمات پس از فروش", label: "خدمات پس از فروش" },
    { value: "سایر موضوعات", label: "سایر موضوعات" },
  ];

  const clearInputs = () => {
    setFormValues({
      contactSubject: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // if user is already logged in, get information from local storage
  const localStorageData = JSON.parse(localStorage.getItem("userInfo"));

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [formValues, setFormValues] = useState({
    contactSubject: "",
    name: localStorageData?.name || "",
    email: localStorage.getItem("userEmail") || "",
    phone: localStorageData?.phone || "",
    message: "",
  });

  // disable submit button until every field has atleast 1 character
  useEffect(() => {
    const { contactSubject, name, email, phone, message } = formValues;
    if (
      contactSubject.trim() === "" ||
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      setSubmitDisabled(true);
      return;
    } else {
      setSubmitDisabled(false);
    }
  }, [formValues]);

  // submit the form
  const contactFormSubmit = (e) => {
    e.preventDefault();
    clearInputs();
    toast.success("پیام شما برای تیم پشتیبانی ارسال شد");
  };

  return (
    <div className="contact-us__block contact-form-container">
      <section className="contact-us__block__heading text-center">
        <h4 className="heading__title heading-after">با ما در تماس باشید.</h4>
        <p className="heading__text">
          لطفا قبل از اقدام به برقراری تماس از صفحه
          <Link to="/faq" className="ref-link">
            سوالات متداول
          </Link>
          بازدید کنید.
        </p>
      </section>
      <form
        action="#"
        method="post"
        className="form contact-form"
        onSubmit={(e) => contactFormSubmit(e)}
      >
        <section className="form-group">
          <label htmlFor="contact-form--subject">موضوع* </label>
          <Select
            value={formValues.contactSubject?.value}
            onChange={(option) =>
              setFormValues({ ...formValues, contactSubject: option.value })
            }
            options={contactSubjectOptions}
            name="contact-form--subject"
            placeholder="لطفا یک موضوع را  انتخاب کنید"
          />
        </section>

        <section className="form-group">
          <label htmlFor="contact-form--name">نام و نام خانوادگی *</label>
          <input
            type="text"
            name="contact-form--name"
            id="contact-form--name"
            className="form-input"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
        </section>

        <section className="form-group">
          <label htmlFor="contact-form--email">ایمیل * </label>
          <input
            type="text"
            name="contact-form--email"
            id="contact-form--email"
            className="form-input"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
        </section>

        <section className="form-group">
          <label htmlFor="contact-form--phone">تلفن تماس * </label>
          <input
            type="text"
            name="contact-form--phone"
            id="contact-form--phone"
            className="form-input"
            value={formValues.phone}
            onChange={(e) =>
              setFormValues({ ...formValues, phone: e.target.value })
            }
          />
        </section>

        <section className="form-group message-container">
          <label htmlFor="contact-form--message">پیغام * </label>
          <textarea
            name="contact-form--message"
            id="contact-form--message"
            cols="30"
            rows="5"
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
          ></textarea>
        </section>

        <button
          id="login__submit-button"
          className="form-submit"
          disabled={submitDisabled}
          type="submit"
        >
          ارسال پیغام
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
