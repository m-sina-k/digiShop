import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ label, name, checked, callback }) => {
  return (
    <label
      className={`checkbox-container ${
        checked ? "checkbox-container--checked" : ""
      }`}
    >
      <input
        type="radio"
        className="custom-checkbox"
        name={name}
        checked={checked}
        onChange={callback}
      />
      <span className="label-text">{label}</span>
    </label>
  );
};

export default Checkbox;
