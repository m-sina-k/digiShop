import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowBackdrop } from "../../../../features/slices/uiSlice";
import { MdMoreHoriz } from "react-icons/md";
import './ImageSection.scss'

import ImageGallery from "./image-gallery/ImageGallery";

import ReactImageZoom from "react-image-zoom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const ImageContainer = ({ images }) => {
  const dispatch = useDispatch();

  const [isMagnifierActive, setIsMagnifierActive] = useState(true);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const MAGNIFIER_CONFIG = {
    zoomWidth: 550,
    img: images[0],
    zoomPosition: "left",
  };

  // disable product image magnifier on small screens
  const toggleMagnifierActivity = () => {
    if (window.innerWidth < 992) {
      if (isMagnifierActive) setIsMagnifierActive(false);
      if(showImageGallery) closeImageGallery()
    } else {
      if (!isMagnifierActive) setIsMagnifierActive(true);
    }
  };


  useEffect(() => {
    window.addEventListener("resize", toggleMagnifierActivity);
    return () => window.removeEventListener("resize", toggleMagnifierActivity);
  }, [window.innerWidth]);



  const openImageGallery = (index) => {
    dispatch(setShowBackdrop(true));
    setShowImageGallery(true);
    setCurrentIndex(index);
  };

  const closeImageGallery = () => {
    dispatch(setShowBackdrop(false));
    setShowImageGallery(false);
  };

  return (
    <section className="image-section">

      {showImageGallery && (
        <ImageGallery
          images={images}
          close={closeImageGallery}
          currentIndex={currentIndex}
        />
      )}

      {isMagnifierActive ? (
        <ReactImageZoom {...MAGNIFIER_CONFIG} />
      ) : (
        <Swiper
          slidesPerView={1}
          modules={[Navigation,Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
        >
         
          {images.map((item,index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="product-image" className="product__image h-100 w-100" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <section className="other-images__container">
        {images.slice(0, 3).map((item, index) => (
          <span className="image-thumb__conatiner" key={index}>
            <img
              src={item}
              alt="product-tumb-image"
              className="product__thumb__image"
              onClick={() => openImageGallery(index)}
            />
          </span>
        ))}
        {images.length > 3 && (
          <span
            className="image-thumb__conatiner more-images"
            onClick={() => openImageGallery(0)}
          >
            <MdMoreHoriz className="more-icon" />
            <small>عکس های بیشتر</small>
          </span>
        )}
      </section>
    </section>
  );
};

export default ImageContainer;
