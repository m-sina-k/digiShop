import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import { autoID } from "./../../helpers/autoID";
import "./Footer.scss";

const Footer = () => {
  const { exceptionRoutes } = useSelector((state) => state.uiState);
  const { pathname } = useLocation();
  const [userEmail, setUserEmail] = useState("");

  const footerPagesLinks = [
    {
      id: autoID(),
      url: "/shop",
      text: "فروشگاه",
    },
    {
      id: autoID(),
      url: "#",
      text: "مشاوره خرید",
    },
    {
      id: autoID(),
      url: "#",
      text: "خرید اقساطی",
    },
    {
      id: autoID(),
      url: "#",
      text: "همکاری با ما",
    },
  ];

  const customerServicesLinks = [
    {
      id: autoID(),
      url: "/contact-us",
      text: "تماس با ما",
    },
    {
      id: autoID(),
      url: "#",
      text: "شرایط گارانتی",
    },
    {
      id: autoID(),
      url: "#",
      text: "پشتیبانی",
    },
    {
      id: autoID(),
      url: "/faq",
      text: "سوالات متداول",
    },
  ];

  const socialMedia = [
    {
      id: autoID(),
      url: "https://www.instagram.com",
      Icon: <BsInstagram />,
    },
    {
      id: autoID(),
      url: "https://www.facebook.com",
      Icon: <BsFacebook />,
    },
    {
      id: autoID(),
      url: "https://www.twitter.com",
      Icon: <BsTwitter />,
    },
    {
      id: autoID(),
      url: "https://www.whatsapp.com",
      Icon: <BsWhatsapp />,
    },
  ];

  const renderFooter = () => {
    if (exceptionRoutes.indexOf(pathname) > -1) {
      return null;
    } else {
      return (
        <footer className="footer">
          <div className="container">
            <div className="row footer__row">
              {/* footer about-us start */}
              <div className="col-12 col-lg-4 footer__about-us mb-5">
                <Link to="/" className="footer__logo">
                  <img src={logo} alt="footer-logo" />
                </Link>
                <p className="footer__about-us__text mt-3">
                  فروشگاه اینترنتی دیجی شاپ، با تجربه‌‌ای چندین ساله در بازارهای
                  دیجیتال، همواره سعی دارد تا خریدی مطمئن با قیمت مناسب برای
                  همراهان عزیز خود فراهم نماید. انواع برندهای لپ‌تاپ،‌ محصولات
                  گیمینگ، گوشی موبایل،‌ هندزفری، ساعت هوشمند و دیگر کالاهای
                  دیجیتال که رضایت مشتریان را به همراه داشته‌اند، در دیجی شاپ
                  عرضه می‌شود. تضمین کیفیت کالا، ارسال به موقع سفارشات به تمام
                  نقاط ایران، ضمانت 7 روز تعویض کالا و پشتیبانی آنلاین از جمله
                  خدمات دیجی شاپ است.
                </p>
                <a href="#" id="back-to-top-button">
                  بازگشت به بالا
                  <span className="top-icon">
                    <HiOutlineArrowCircleUp />
                  </span>
                </a>
              </div>

              {/* footer links start */}
              <div className="col-12 col-lg-4 footer__links mb-5">
                <ul className="footer__link-list">
                  <li className="list__heading">صفحات</li>
                  {footerPagesLinks.map((link) => (
                    <li key={link.id} className="list__item">
                      <Link to={link.url} className="list__link">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="footer__link-list">
                  <li className="list__heading">امور مشتریان</li>
                  {customerServicesLinks.map((link) => (
                    <li key={link.id} className="list__item">
                      <Link to={link.url} className="list__link">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* footer social media start */}
              <div className="col-12 col-lg-4 footer__social mb-5">
                <section className="social-media">
                  <h6 className="social-media__heading">با ما همراه باشید!</h6>
                  <ul className="social-media__list">
                    {socialMedia.map((item) => (
                      <li key={item.id} className="social-media__item">
                        <a href={item.url} className="social-media__link">
                          {item.Icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="footer__newsletter">
                  <section className="newsletter__text">
                    <h6 className="newsletter__title">خبرنامه</h6>
                    <p className="newsletter__description">
                      با عضویت در خبرنامه ما از اخرین تخفیفات و اخبار سایت مطلع
                      شوید.
                    </p>
                  </section>
                  <form action="#" method="post" className="newsletter__form">
                    <input
                      type="text"
                      name="newsletter-input"
                      id="newsletter-input"
                      placeholder="ایمیل خود را وارد کنید..."
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      id="newsletter__submit-button"
                      className={
                        userEmail.trim() == "" ? "button--disabled" : ""
                      }
                      disabled={userEmail.trim() == "" ? true : false}
                    >
                      عضویت
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </div>

          {/* footer copy-right start */}
          <div className="footer__copy-right">
            <p className="copy-right-text">
              تمامی حقوق مادی و معنوی برای دیجی شاپ محفوظ است.
            </p>
          </div>
        </footer>
      );
    }
  };

  return <div>{renderFooter()}</div>;
};

export default Footer;
