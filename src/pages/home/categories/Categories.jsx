import React from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import "./Categories.scss";

// images
import phoneImage from "../../../assets/images/categories/iphone.png";
import ipadImage from "../../../assets/images/categories/ipad.png";
import laptopImage from "../../../assets/images/categories/laptop-screen.png";
import gameImage from "../../../assets/images/categories/game-controller.png";
import cameraImage from "../../../assets/images/categories/camera.png";
import headphoneImage from "../../../assets/images/categories/headphone.png";
import monitorImage from "../../../assets/images/categories/monitor.png";
import watchImage from "../../../assets/images/categories/smartwatch.png";

const Categories = () => {
  return (
    <div className="categories">
      <div className="caontainer-fluid">
        <div className="heading categories__heading">
          <span className="icon-container">
            <BiCategory className="heading-icon heading-icon--blue" />
          </span>
          <h5 className="heading__title">دسته بندی ها</h5>
        </div>
        <div className="categories__row">
          <CategoryItem image={phoneImage} title="گوشی موبایل" />
          <CategoryItem image={ipadImage} title="تبلت" />
          <CategoryItem image={laptopImage} title="لپتاپ" />
          <CategoryItem image={gameImage} title="تجهیزات گیمینگ" />
          <CategoryItem image={cameraImage} title="دوربین عکاسی" />
          <CategoryItem image={headphoneImage} title="هدست و هدفون" />
          <CategoryItem image={monitorImage} title="مانیتور" />
          <CategoryItem image={watchImage} title="ساعت هوشمند" />
        </div>
      </div>
    </div>
  );
};

const CategoryItem = ({ image, title }) => {
  return (
    <Link to="#">
      <div className="category-item">
        <figure className="category__image-container">
          <img src={image} alt="category-image" className="category__image" />
        </figure>
        <h6 className="category__title">{title}</h6>
      </div>
    </Link>
  );
};

export default Categories;
