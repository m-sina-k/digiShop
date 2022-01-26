import React from "react";
import { Link } from "react-router-dom";
import "./MobileDropdown.scss";

const MobileDropdown = ({ link, isActive }) => {
  return (
    <div
      className={`mobile-navigation__dropdown slide-down--deactive ${
        isActive ? "slide-down--active" : ""
      }`}
    >
      <ul className="links__container">
        {link.dropdown.content.map((link) => {
          const { url, text, id } = link;
          return (
            <li key={id} className="mobile-navigation__dropdown__item">
              <Link
                to={url}
                className="mobile-navigation__dropdown__item__link"
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileDropdown;
