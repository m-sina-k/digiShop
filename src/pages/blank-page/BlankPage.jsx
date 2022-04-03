import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from '../../assets/images/utilities/error-404.png'
import "./BlankPage.scss";

const NotFound = ({image,alt,text}) => {
  return (
    <div className="blank-page">
      <figure className="image__container">
        <img src={image || notFoundImg} alt={alt} className="image" />
      </figure>

      <section className="text__container">
          <p className="text">{text}</p>
          <section className="button-container">
              <Link to="/" className="ref-link">صفحه اصلی</Link>
              <Link to="/shop" className="ref-link">فروشگاه</Link>
          </section>
      </section>
    </div>
  );
};

export default NotFound;
