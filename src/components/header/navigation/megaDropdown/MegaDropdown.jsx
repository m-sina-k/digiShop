import React, { useState } from "react";
import MegaDropdownList from "./MegaDropdownList";
import { IoIosArrowBack } from "react-icons/io";
import "./MegaDropdown.scss";
import { Link } from 'react-router-dom';

const MegaDropdown = ({ link }) => {
  const defaultCategory = link.megaDropdown.content[0].category;
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const changeActiveCategory = (e) => {
    const currentCategory = e.target.dataset.category;
    setActiveCategory(currentCategory);
  };

  const addActiveClass = (e) => {
    const hoveredLink = e.currentTarget;
    [...hoveredLink.parentElement.children].forEach((sib) =>
      sib.classList.remove("category-link--active")
    );
    hoveredLink.classList.add("category-link--active");
  };

  return (
    <div className="mega-dropdown container ">
      <div className="mega-dropdown__row row">
        <aside className="col-2 p-0">
          <ul className="mega-dropdown__category-container">
            {link.megaDropdown.content.map((link, index) => {
              return (
                <Link
                to={link.url}
                  onMouseEnter={(e) => changeActiveCategory(e)}
                  key={link.id}
                  data-category={link.category}
                  className={`category-link ${
                    index == 0 ? "category-link--active" : ""
                  }`}
                  onMouseOver={(e) => addActiveClass(e)}
                >
                  {link.category}
                  <IoIosArrowBack className="category-link__icon" />
                </Link>
              );
            })}
          </ul>
        </aside>
        <div className="col-10 p-0">
          <div className="mega-dropdown__content-container ">
            {link.megaDropdown.content.map((link) => {
              return (
                link.category === activeCategory &&
                link.content.map((list, index) => (
                  <MegaDropdownList key={index} list={list} />
                ))
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
