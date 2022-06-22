import React from "react";
import { Link } from "react-router-dom";
import { Lazy, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Slider.scss";

const Slider = ({ images, loading }) => {
  return (
    <div className="slider">
      <div className="container slider__container">
        {loading ? (
          <div className="slider-skeleton skeleton"></div>
        ) : (
          <Swiper
            slidesPerView={1}
            modules={[Lazy, Autoplay, EffectFade, Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="h-100"
            loop
            lazy
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
          >
            {images.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={item.url}
                  className="slider__image-contaier w-100 h-100"
                >
                  <img
                    src={item.image}
                    alt="banner-slide"
                    className="slider__image w-100 h-100"
                    loading="lazy"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Slider;
