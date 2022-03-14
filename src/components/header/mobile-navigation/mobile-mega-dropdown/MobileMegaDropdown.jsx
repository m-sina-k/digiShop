import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import CategoryLinks from "./CategoryLinks";
import "./MobileMegaDropdown.scss";

const MobileMegaDropdown = ({ link, isActive,setShowMobileNavigation }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const changeCagtegory = (e) => {
    e.stopPropagation()
    e.preventDefault()
    const currentCategory =
    e.currentTarget.parentElement.parentElement.dataset.category;
    if (activeCategory === currentCategory) {
      setActiveCategory(null);
    } else {
      setActiveCategory(currentCategory);
    }
  };

  return (
    <div
      className={`mobile-navigation__mega-dropdown slide-down--deactive ${
        isActive ? "slide-down--active" : ""
      }`}
    >
      {link.megaDropdown.content.map((link) => {
        const { id, category,url } = link;

        return (
          <React.Fragment key={id}>
            <Link
              className="mobile-navigation__mega-dropdown__item"
              data-category={category}
              to={url}
              onClick={()=>setShowMobileNavigation(false)}
            >
              {category}
              <span className="dropdown-icon__container">
                <IoIosArrowDown
                  onClick={(e) => changeCagtegory(e)}
                  className={`dropdown-icon ${
                    category === activeCategory ? "dropdown-icon--rotated" : ""
                  }`}
                />
              </span>
            </Link>

            <CategoryLinks isActive={category === activeCategory} link={link} setShowMobileNavigation={setShowMobileNavigation} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MobileMegaDropdown;
