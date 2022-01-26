import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ link }) => {
  return (
    <div className="dropdown-container">
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
