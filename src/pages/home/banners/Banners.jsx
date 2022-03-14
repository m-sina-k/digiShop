import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banners.scss";

const Bannners = ({images,loading}) => {
  const [bannerImages,setBannerImages] = useState([])

  useEffect(()=>{
    setBannerImages(images)
  },[images])

  return (
    <div className="banners">
      <div className="container px-2 px-md-0">
        <div className="banners__row">
          {!loading ? (
            bannerImages.map((item) => (
              // console.log(item)
              <Link to={item.url} className="banner" key={item.id}>
                <img
                  src={item.image}
                  alt="banner-image"
                  className="banner__image"
                  loading="lazy"
                />
              </Link>
            ))
          ) : (
            <React.Fragment>
            <div className="banner-skeleton skeleton"></div>
            <div className="banner-skeleton skeleton"></div>
          </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bannners;
