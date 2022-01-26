import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const CategoryLinks = ({ link, isActive }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (e) => {
    const currentCategory = e.target.dataset.dropdown;
    
    if (activeDropdown === currentCategory) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(currentCategory);
    }
  };

  return (
    <div
      className={`category-links__container slide-down--deactive ${
        isActive ? "slide-down--active" : ""
      }`}
      
    >
      {link.content.map((item,index) => {
        const {title} = item;
        return (
          <React.Fragment key={index}>
            <h6
              className="category__title"
              data-dropdown={title}
              onClick={(e) => toggleDropdown(e)}
            >
              {title}
              <IoIosArrowDown
                className={`dropdown-icon ${
                  item.title === activeDropdown ? "dropdown-icon--rotated" : ""
                }`}
              />
            </h6>

            <ul
              className={`category__links slide-down--deactive ${
                title === activeDropdown ? "slide-down--active" : ""
              }`}
            >
              {item.links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="dropdown-item">
                    <Link to={url} className="dropdown-link">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CategoryLinks;
