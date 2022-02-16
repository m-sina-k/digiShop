import React from "react";
import { Link } from "react-router-dom";
import "./Banners.scss";

const Bannners = ({ image1, url1, image2, url2 }) => {
  return (
    <div className="banners">
      <div className="container px-2 px-md-0">
        <div className="banners__row">
          <Link to={url1} className="banner">
            <img src={image1} alt="banner-image" className="banner__image" />
          </Link>
          <Link to={url2} className="banner">
            <img src={image2} alt="banner-image" className="banner__image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bannners;
