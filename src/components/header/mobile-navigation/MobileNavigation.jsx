import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { navigationLink } from "../../../assets/data/navigationLinks";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import MobileMegaDropdown from "./mobile-mega-dropdown/MobileMegaDropdown";
import MobileDropdown from "./mobile-dropdown/MobileDropdown";
import "./MobileNavigation.scss";

const MobileNavigation = ({
  showMobileNavigation,
  setShowMobileNavigation,
}) => {
  const [activeMegaDropdown, setActiveMegaDropdown] = useState(null);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMegaDropdown = (id) => {
    if (activeMegaDropdown === id) {
      setActiveMegaDropdown(null);
    } else {
      setActiveMegaDropdown(id);
    }
  };

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  /* ----------------- close mobile navigation on large screens ---------------- */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      setShowMobileNavigation(false);
    }
  });

  return (
    <div
      className={`mobile-navigation ${
        showMobileNavigation ? "mobile-navigation--active" : ""
      }`}
    >
      <section className="mobile-navigation__heading">
        <h4 className="title">دسته بندی ها</h4>
        <span
          className="close-button"
          onClick={() => setShowMobileNavigation(false)}
        >
          <MdClose className="close-icon" />
        </span>
      </section>

      <div className="mobile-navigation__links-container">
        {navigationLink.map((link) => {
          const { url, text, id, megaDropdownID, dropdownID } = link;
          return link.megaDropdown ? (
            <Fragment key={id}>
              <Link
                to={url}
                className="mobile-navigation__link mobile-navigation__link--mega"
                onClick={() => toggleMegaDropdown(megaDropdownID)}
              >
                {text}

                <IoIosArrowDown
                  className={`dropdown-icon ${
                    link.megaDropdown.id === activeMegaDropdown
                      ? "dropdown-icon--rotated"
                      : ""
                  }`}
                />
              </Link>

              <MobileMegaDropdown
                isActive={link.megaDropdown.id === activeMegaDropdown}
                link={link}
              />
            </Fragment>
          ) : link.dropdown ? (
            <Fragment key={id}>
              <Link
                to={url}
                className="mobile-navigation__link mobile-navigation__linkmobile-navigation__link--dropdown"
                onClick={() => toggleDropdown(dropdownID)}
              >
                {text}
                <IoIosArrowDown
                  className={`dropdown-icon ${
                    link.dropdown.id === activeDropdown
                      ? "dropdown-icon--rotated"
                      : ""
                  }`}
                />
              </Link>

              <MobileDropdown
                isActive={link.dropdown.id === activeDropdown}
                link={link}
              />
            </Fragment>
          ) : (
            <Link
              to={url}
              key={id}
              className="mobile-navigation__link"
              onClick={() => setShowMobileNavigation(false)}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
