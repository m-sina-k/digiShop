import React from "react";
import {FaRegQuestionCircle} from 'react-icons/fa'
// images
import deliveryImage from "../../assets/images/services/package.png";
import coinImage from "../../assets/images/services/coin.png";
import qualityImage from "../../assets/images/services/quality.png";
import supportImage from "../../assets/images/services/support.png";

import "./Services.scss";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: "تحویل اکسپرس",
      image: deliveryImage,
    },
    {
      id: 2,
      name: "تضمین بهترین قیمت",
      image: coinImage,
    },
    {
      id: 3,
      name: "ضمانت اصالت کالا",
      image: qualityImage,
    },
    {
      id: 4,
      name: "پشتیبانی ۷/۲۴",
      image: supportImage,
    },
  ];

  return (
    <div className="services">
      <div className="container px-2">
      <div className="heading services__heading">
          <span className="icon-container">
            <FaRegQuestionCircle className="heading-icon heading-icon--primary" />
          </span>
          <h5 className="heading__title">چرا دیجی شاپ؟</h5>
        </div>
        <div className="services__row">
          {servicesList.map((service) => (
            <section className="services__item" key={service.id}>
              <img
                src={service.image}
                alt="service-image"
                className="service__image"
              />
              <h6 className="service__name">{service.name}</h6>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
