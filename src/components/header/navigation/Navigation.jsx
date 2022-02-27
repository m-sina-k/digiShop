import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigationLink } from "../../../assets/data/navigationLinks";
import { IoIosArrowDown } from "react-icons/io";
import MegaDropdown from "./megaDropdown/MegaDropdown";
import Dropdown from "./dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { setShowMegaDropdownBackdrop } from "../../../features/slices/uiSlice";
import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMegaDropdown, setActiveMegaDropdown] = useState(null);

  const navigationRef = useRef();
  const indicatorRef = useRef();

  // navigation link's hover indicator
  const moveIndicator = (e) => {
    if (indicatorRef.current && e.classList.contains("navigation__link")) {
      indicatorRef.current.style.opacity = 1;
      indicatorRef.current.style.left = e.offsetLeft + "px";
      indicatorRef.current.style.width = e.offsetWidth + "px";
    }
  };

  const hideIndicator = () => {
    indicatorRef.current.style.opacity = 0;
  };

  const [hideNav, setHideNav] = useState(false);

  // storing last offsetTop value to detect scroll direction
  let lastScrollTop;

  // slide-up navigation while scrolling down
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     let currentScrollTop = window.pageYOffset;
  //     if (window.scrollY > 150) {
  //       const nav = navigationRef.current;

  //       if (currentScrollTop > lastScrollTop && nav) {
  //         // scrolling down
  //         setHideNav(true);
  //       } else {
  //         // scrollin up
  //         setHideNav(false);
  //       }
  //     }
  //     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  //   });
  // }, []);

  return (
    <div
      className={`navigation ${hideNav ? "navigation--hidden" : ''}`} 
      ref={navigationRef}
    >
      <div className="container">
        <div className="navigation__row">
          {navigationLink.map((link) => {
            const { url, text, id, megaDropdownID, dropdownID } = link;
            return link.megaDropdown ? (
              <span
                key={id}
                className="navigation__link navigation__link--mega"
                onMouseEnter={(e) => {
                  moveIndicator(e.target);
                  setActiveMegaDropdown(megaDropdownID);
                  dispatch(setShowMegaDropdownBackdrop(true));
                }}
                onMouseLeave={() => {
                  setActiveMegaDropdown(null);
                  dispatch(setShowMegaDropdownBackdrop(false));
                  hideIndicator();
                }}
              >
                {text}

                {link.megaDropdown.id === activeMegaDropdown && (
                  <MegaDropdown link={link} />
                )}

                <IoIosArrowDown className="dropdown-icon" />
              </span>
            ) : link.dropdown ? (
              <span
                key={id}
                className="navigation__link navigation__link--dropdown"
                onMouseEnter={(e) => {
                  setActiveDropdown(dropdownID);
                  moveIndicator(e.target);
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  hideIndicator();
                }}
              >
                {text}
                <IoIosArrowDown className="dropdown-icon" />
                <Dropdown
                  link={link}
                  isActive={link.dropdown.id === activeDropdown}
                />
              </span>
            ) : (
              <Link
                to={url}
                key={id}
                onMouseEnter={(e) => moveIndicator(e.target)}
                onMouseLeave={hideIndicator}
                className="navigation__link"
              >
                {text}
              </Link>
            );
          })}
          <span id="indicator" ref={indicatorRef}></span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
