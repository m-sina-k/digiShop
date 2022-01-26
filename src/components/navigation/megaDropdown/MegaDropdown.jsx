import React, { useState } from "react";
import MegaDropdownList from "./MegaDropdownList";
import { IoIosArrowBack } from "react-icons/io";
import "./MegaDropdown.scss";

const MegaDropdown = ({ link }) => {
  const defaultCategory = link.megaDropdown.content[0].category;
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const changeActiveCategory = (e) => {
    const currentCategory = e.target.dataset.category;
    setActiveCategory(currentCategory);
  };

  return (
    <div className="mega-dropdown container ">
      <div className="mega-dropdown__row row">
        <aside className="col-3 p-0">
          <ul className="mega-dropdown__category-container">
            {link.megaDropdown.content.map((link) => {
              return (
                <li
                  onMouseEnter={(e) => changeActiveCategory(e)}
                  key={link.id}
                  data-category={link.category}
                  className="category-link"
                >
                  {link.category}
                  <IoIosArrowBack className="category-link__icon" />
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="col-9 p-0">
          <div className="mega-dropdown__content-container ">
            {link.megaDropdown.content.map((link) => {
              return (
                link.category === activeCategory &&
                link.content.map((list) => <MegaDropdownList list={list} />)
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
