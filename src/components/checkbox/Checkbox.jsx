import React from "react";
import "./Checkbox.scss";

const Checkbox = ({
  label,
  name,
  icon,
  checked,
  callback,
  additionalClass,
  additionalContent,
}) => {
  return (
    <label
      className={`checkbox-container ${
        checked && !additionalClass && "checkbox-container--checked"
      } ${
        additionalClass && checked
          ? `${additionalClass} ${additionalClass}--checked`
          : additionalClass
      }`}
    >
      
      <input
        type="radio"
        className="custom-checkbox d-inline-block"
        name={name}
        checked={checked}
        onChange={callback}
      />
      <p className="label-text">
        <span>
          <span className="icon-container">{icon}</span>
          {label}
        </span>
      </p>
      {additionalContent && <small className="additional-content">{additionalContent}</small>}
    </label>
  );
};

export default Checkbox;
