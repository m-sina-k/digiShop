import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../../../server/contentful";
import { formatImages } from "../../../helpers/formatImages";
import "./Banners.scss";

const Bannners = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBanners = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "images",
          "fields.type": "home-banner",
        });
        const data = formatImages(response.items);
        setBannerImages(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);
  
  return (
    <div className="banners">
      <div className="container px-2 px-md-0">
        <div className="banners__row">
          {loading ? (
            <React.Fragment>
              <div className="banner-skeleton"></div>
              <div className="banner-skeleton"></div>
            </React.Fragment>
          ) : (
            bannerImages.map((item) => (
              <Link to={item.url} className="banner" key={item.id}>
                <img
                  src={item.image}
                  alt="banner-image"
                  className="banner__image"
                  loading="lazy"
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Bannners;
