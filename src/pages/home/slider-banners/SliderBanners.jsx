import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "./../../../server/contentful";
import { formatImages } from "../../../helpers/formatImages";

import "./SliderBanners.scss";

import { Lazy, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";

const SliderBanners = () => {
const [sliderImages,setSliderImages] = useState([])
const [bannerImages,setBannerImages] = useState([])
const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchBanners = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "images",
          order: 'sys.createdAt'
        });
        const data = formatImages(response.items);
        setSliderImages(data.filter(images=>images.type === 'hero-slider'));
        setBannerImages(data.filter(images=>images.type === 'hero-single'));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  return (
    <div className="slider-banners">
      <div className="container px-2 px-md-0">
        <div className="slider-banners__row">
            {loading ? (
              <div className="slider-skeleton"></div>
            ) : (
              <div className="banner banner--big">
              <Swiper
              slidesPerView={1}
              modules={[Lazy, Autoplay, EffectFade, Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-100"
              loop
              lazy
              effect="fade"
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: true,
              // }}
            >
              {sliderImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={item.url} className="banner__image-contaier">
                    <img
                      src={item.image}
                      alt="banner-slide"
                      className="banner__image banner__image"
                      loading="lazy"
                      onLoad={()=>console.log('image fully loaded')}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
              </div>
            )}
          <div className="small-banners__container">
            {loading ? (
             <React.Fragment>
             <div className="slider-banner-skeleton"></div>
             <div className="slider-banner-skeleton"></div>
             </React.Fragment>
            ) : (
              bannerImages.map((item) => (
                <div className="banner banner--small" key={item.id}>
                  <Link to={item.url} className="banner__image-contaier">
                    <img
                      src={item.image}
                      alt="banner-slide"
                      className="banner__image banner__image--small"
                    />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBanners;
