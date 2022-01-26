import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CategoryLinks from "./CategoryLinks";
import "./MobileMegaDropdown.scss";

const MobileMegaDropdown = ({ link, isActive }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const changeCagtegory = (e) => {
    const currentCategory = e.target.dataset.category;

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
        const { id, category } = link;

        return (
          <React.Fragment key={id}>
            <section
              className="mobile-navigation__mega-dropdown__item"
              data-category={category}
              onClick={(e) => changeCagtegory(e)}
            >
              {category}
              <IoIosArrowDown
                className={`dropdown-icon ${
                  category === activeCategory ? "dropdown-icon--rotated" : ""
                }`}
              />
            </section>

            <CategoryLinks
              isActive={category === activeCategory}
              link={link}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MobileMegaDropdown;
