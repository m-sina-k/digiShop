import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ link,isActive }) => {
  return (
    <div className={`dropdown-container slide-up--deactive ${isActive ? 'slide-up--active' : ''}`}>
      <ul className="dropdown-list">
        {link.dropdown.content.map((link) => {
          const { id, url, text } = link;

          return (
            <li key={id} className="dropdown-item">
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
