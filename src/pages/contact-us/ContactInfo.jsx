import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-us__block">
      <section className="contact-us__block__heading">
        <h4 className="heading__title heading-after">راه های ارتباطی</h4>
      </section>
      <div className="contact-detail">
        <article className="contact-detail__block company-location">
          <section className="contact-detail__block__heading">
            <div className="title-block">
              <span className="icon-container">
                <TiLocation className="icon" />
              </span>
              <h5 className="title">نشانی دفتر مرکزی</h5>
            </div>
            <p className="text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،
            </p>
          </section>
          <section className="location-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12952.970381393174!2d51.3753212!3d35.7448416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2s!4v1645365726716!5m2!1sen!2s"
              className="location-iframe"
              loading="lazy"
            ></iframe>
          </section>
        </article>

        <div className="contact-grid-row">
          <article className="contact-detail__block company-phone">
            <section className="contact-detail__block__heading">
              <div className="title-block">
                <span className="icon-container">
                  <AiFillPhone className="icon" />
                </span>
                <h5 className="title">تلفن های تماس</h5>
              </div>
              <p className="text details-container">
                <a href="tel:02178943216" className="detail-item">
                  021_78943216
                </a>
                <a href="tel:02178943217" className="detail-item">
                  021_78943217
                </a>
                <a href="tel:02178943218" className="detail-item">
                  021_78943218
                </a>
              </p>
            </section>
          </article>
          <article className="contact-detail__block company-email">
            <section className="contact-detail__block__heading">
              <div className="title-block">
                <span className="icon-container">
                  <FaEnvelope className="icon" />
                </span>
                <h5 className="title">ایمیل</h5>
              </div>
              <p className="text details-container">
                <a
                  href="mailto:info.digishop@gmail.com"
                  className="detail-item"
                >
                  info.digishop@gmail.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
