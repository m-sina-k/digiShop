import React from "react";
import ProductCard from "../product-card/ProductCard";
import "./ProductSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProductSlider = ({ products, title, titleIcon, fullWidth }) => {
  return (
    <div className="product-slider">
      <div className={fullWidth ? "container-fluid" : "container"}>
        <div className="product-slider__heading">
          <h5 className="product-slider__title">
            <span className="icon-container">{titleIcon}</span>
            {title}
          </h5>
        </div>
        <div className="product-slider__row">
          {
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              modules={[Navigation]}
              navigation
              loop
              className="swiper-container pb-3"
              breakpoints={{
                120: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 2,
                },
                570: {
                  slidesPerView: 3,
                },
                760: {
                  slidesPerView: 3,
                },
                990: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              {products.map((product, index) => {
                return (
                  <SwiperSlide key={index + 1} className="swiper-slide">
                    <ProductCard key={index} product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
