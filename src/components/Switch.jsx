import React from "react";

const Switch = ({isActive,callback}) => {
  return (
    <button
      className={`switch-button ${
        isActive ? "switch-button--active" : ""
      }`}
      onClick={callback}
    ></button>
  );
};

export default Switch;
