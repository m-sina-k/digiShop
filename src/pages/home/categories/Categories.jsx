import React from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { autoID } from "./../../../helpers/autoID";
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
  const categories = [
    {
      id: autoID(),
      name: "گوشی موبایل",
      image: phoneImage,
      url: "#",
    },
    {
      id: autoID(),
      name: "تبلت",
      image: ipadImage,
      url: "#",
    },
    {
      id: autoID(),
      name: "لپتاپ",
      image: laptopImage,
      url: "#",
    },
    {
      id: autoID(),
      name: "تجهیزات گیمینگ",
      image: gameImage,
      url: "#",
    },
    {
      id: autoID(),
      name: "دوربین عکاسی",
      image: cameraImage,
      url: "#",
    },
    {
      id: autoID(),
      name: "هدست و هدفون",
      image: headphoneImage,
      url: "#",
    },
    {
      id: autoID(),
      name: "مانیتور",
      image: monitorImage,
      url: "#",
    },
    {
      id: autoID(),
      name: "ساعت هوشمند",
      image: watchImage,
      url: "#",
    },
  ];

  return (
    <div className="categories">
      <div className="container px-2 px-md-0">
        <div className="heading categories__heading">
          <span className="icon-container">
            <BiCategory className="heading-icon heading-icon--blue" />
          </span>
          <h5 className="heading__title">دسته بندی ها</h5>
        </div>
        <div className="categories__row">
          {categories.map((item) => (
            <Link to={item.url} key={item.id} className="category-item">
              <figure className="category__image-container mb-2">
                <img
                  src={item.image}
                  alt="category-image"
                  className="category__image"
                />
              </figure>
              <h6 className="category__title">{item.name}</h6>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
