import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLink } from "../../assets/data/navigationLinks";
import { IoIosArrowDown } from "react-icons/io";
import MegaDropdown from "./megaDropdown/MegaDropdown";
import Dropdown from './dropdown/Dropdown'
import "./Navigation.scss";


const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMegaDropdown, setActiveMegaDropdown] = useState(null);
  
  return (
    <>
      {activeMegaDropdown && <div className="backdrop"></div>}
      <div className="navigation">
        <div className="container">
          <div className="navigation__row">
            {navigationLink.map((link) => {
              const { url, text, id, megaDropdownID,dropdownID } = link;
              return link.megaDropdown ? (
                <Link
                  to={url}
                  key={id}
                  className="navigation__link navigation__link--mega"
                  onMouseEnter={() => setActiveMegaDropdown(megaDropdownID)}
                  onMouseLeave={() => setActiveMegaDropdown(null)}
                >
                  {text}
                  {link.megaDropdown.id === activeMegaDropdown && (
                    <MegaDropdown link={link} />
                  )}
                  <IoIosArrowDown className="dropdown-icon" />
                </Link>
              ) : link.dropdown ? (
                <Link
                  to={url}
                  key={id}
                  className="navigation__link navigation__link--dropdown"
                  onMouseEnter={() => setActiveDropdown(dropdownID)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {text}
                  <IoIosArrowDown className="dropdown-icon" />
                  {link.dropdown.id === activeDropdown && (
                    <Dropdown link={link}/>
                  )}
                </Link>
              ) : (
                <Link to={url} key={id} className="navigation__link">
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
