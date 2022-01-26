import React from "react";
import { Link } from "react-router-dom";

const MegaDropdownList = ({ list }) => {
  return (
    <ul className="mega-dropdown__list">
      <h6 className="list__title">{list.title}</h6>

      {list.links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <Link to={url} className="list__link">
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MegaDropdownList;
