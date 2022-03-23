import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/images/utilities/error-404.png";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <figure className="error-image__container">
        <img src={errorImage} alt="error-image" className="error-image" />
      </figure>

      <section className="error-text__container">
          <p className="error-text">صفحه ای که دنبال آن می گردید وجود ندارد!</p>
          <section className="button-container">
              <Link to="/" className="ref-link">صفحه اصلی</Link>
              <Link to="/shop" className="ref-link">فروشگاه</Link>
          </section>
      </section>
    </div>
  );
};

export default NotFound;
