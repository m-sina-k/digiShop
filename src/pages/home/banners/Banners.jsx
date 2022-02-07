import React from "react";
import { Link } from "react-router-dom";

import bannerBig1 from "../../../assets/images/banner-images/banner-big-01.jpg";
import bannerBig2 from "../../../assets/images/banner-images/banner-big-02.jpg";
import bannerSmall1 from "../../../assets/images/banner-images/banner-small-01.jpg";
import bannerSmall2 from "../../../assets/images/banner-images/banner-small-02.jpg";

import "./Banners.scss";

import {Lazy, Autoplay,EffectFade,Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";

const Banners = () => {

const sliderImages = [bannerBig1,bannerBig2];

  return (
    <div className="banners">
      <div className="container">
        <div className="banners__row">
          <div className="banner banner--big">
            <Swiper
              slidesPerView={1}
              modules={[Lazy,Autoplay,EffectFade,Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-100"
              loop
              lazy
              effect={"fade"}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: true,
              // }}
            >
              {sliderImages.map((image,index)=>(
                <SwiperSlide key={index}>
                <Link to="/" className="banner__image-contaier">
                  <img
                    src={image}
                    alt="banner-slide"
                    className="banner__image banner__image"
                  />
                </Link>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="small-banners__container">
            <div className=" banner banner--small">
              <Link to="/" className="banner__image-contaier">
                <img
                  src={bannerSmall1}
                  alt="banner-slide"
                  className="banner__image banner__image--small"
                />
              </Link>
            </div>
            <div className=" banner banner--small">
              <Link to="/" className="banner__image-contaier">
                <img
                  src={bannerSmall2}
                  alt="banner-slide"
                  className="banner__image banner__image--small"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
