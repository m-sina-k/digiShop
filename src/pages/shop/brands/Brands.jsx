import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Brands.scss";
import { client } from "./../../../server/contentful";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let image = item.fields.brandLogo.fields.file.url;

      let category = { ...item.fields, id, image };
      return category;
    });
    setBrands(tempItems);
  };

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "brands",
        });
        formatData(response.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  return (
    <div className="brands">
      <div className="container px-0 brands__container">
        <div className="brands__heading heading">
          <section className="heading-container">
            <span className="icon-container">
              <FaStar />
            </span>
            <h5 className="heading__title">برترین برند ها</h5>
          </section>
        </div>
        <div className="brands__row">
          {loading ? (
            <div className="brands-skeleton__container">
              {Array.from({ length: 8 }, (_, index) => (
                <div className="brand-skeleton skeleton" key={index}></div>
              ))}
            </div>
          ) : (
            <Swiper
              slidesPerView={8}
              spaceBetween={0}
              modules={[Navigation]}
              navigation
              loop
              className="swiper-container py-2"
              breakpoints={{
                120: {
                  slidesPerView: 3,
                },
                480: {
                  slidesPerView: 4,
                },
                570: {
                  slidesPerView: 5,
                },
                760: {
                  slidesPerView: 7,
                },
                1000: {
                  slidesPerView: 9,
                },
              }}
            >
              {brands.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="swiper-slide">
                    <BrandsCard item={item} key={brands.id} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

const BrandsCard = ({ item }) => {
  return (
    <Link to={item.url} className="brand-card">
      <img src={item.image} alt="brand-logo" className="brand-card__image" />
    </Link>
  );
};

export default Brands;
