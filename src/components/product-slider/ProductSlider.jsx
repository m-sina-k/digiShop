import React from "react";
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./ProductSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { BeatLoader } from "react-spinners";

const ProductSlider = ({
  products,
  title,
  titleIcon,
  loading,
  additionalClass,
  filterOptions,
  activeFilter,
  setActiveFilter,
  seeMore,
  fullWidth,
}) => {
  const changeFilter = (e) => {
    setActiveFilter(e.target.dataset.filter);
  };

  return (
    <div className="product-slider">
      <div
        className={`${
          fullWidth ? "container-fluid" : "container"
        } py-2 px-2 px-md-0 ${additionalClass} ? ${additionalClass} : ''`}
      >
        <div className="heading">
          <section className="heading-container">
            {titleIcon && <span className="icon-container">{titleIcon}</span>}
            <h5 className="heading__title">{title}</h5>
          </section>
          {filterOptions ? (
            <section className="filter-options">
              {filterOptions.map((option, index) => (
                <button
                  key={index}
                  className={`filter-options__item ${
                    activeFilter === option
                      ? "filter-options__item--active"
                      : ""
                  }`}
                  data-filter={option}
                  onClick={(e) => changeFilter(e)}
                >
                  {option}
                </button>
              ))}
            </section>
          ) : null}
          {seeMore ? (
            <Link to={seeMore} className="seeMore-link">
              محصولات بیشتر
              <IoIosArrowBack className="icon" />
            </Link>
          ) : null}
        </div>
        <div className="product-slider__row">
          {loading ? (
            <div className="loading-container">
              <BeatLoader color="#f53b57" size={10} margin={5} />
            </div>
          ) : (
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              modules={[Navigation]}
              navigation
              className="swiper-container py-2"
              breakpoints={{
                120: {
                  slidesPerView: 1.5,
                },
                480: {
                  slidesPerView: 2,
                },
                570: {
                  slidesPerView: 2.5,
                },
                760: {
                  slidesPerView: 3,
                },
                990: {
                  slidesPerView: 4,
                },
                1150: {
                  slidesPerView: 4.5,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              {products.map((product) => {
                return (
                  <SwiperSlide key={product.id} className="swiper-slide">
                    <ProductCard
                      product={product}
                      activeFilter={activeFilter}
                    />
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

export default ProductSlider;
