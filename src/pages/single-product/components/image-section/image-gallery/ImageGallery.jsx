import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { MdClose } from "react-icons/md";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";
import "./ImageGallery.scss";

const ImageGallery = ({ images, close, currentIndex }) => {
  const [activeIndex, setActiveindex] = useState(currentIndex);
  const ref = useDetectClickOutside({ onTriggered: close });

  const nextImage = () => {
    if (activeIndex >= images.length - 1) {
      setActiveindex(0);
    } else {
      setActiveindex(activeIndex + 1);
    }
  };

  const prevImage = ()=>{
    if(activeIndex === 0){
      setActiveindex(images.length -1)
    }else{
      setActiveindex(activeIndex - 1);
    }
  }
  return (
    <div className="image-gallery" ref={ref}>
      <section className="image-gallery__heading">
        <h5 className="title heading-after">تصاویر کالا</h5>
        <span className="close-icon" onClick={close}>
          <MdClose />
        </span>
      </section>

      <section className="images__container">
        <div className="current-image__container">
          <img
            src={images[activeIndex]}
            alt="product-image"
            className="current-image"
          />
          <button onClick={nextImage} className="gallery-control__btn gallery-control__btn--next">
            <GrFormNext/>
          </button>
          <button onClick={prevImage} className="gallery-control__btn gallery-control__btn--prev">
            <GrFormPrevious/>
          </button>
        </div>

        <div className="gallery__other-images__container">
          {images.map((item, index) => (
            <img
              onClick={() => setActiveindex(index)}
              src={item}
              key={index}
              alt="product-image"
              className={` thumb-image ${
                activeIndex === index ? "thumb-image--active" : ""
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
