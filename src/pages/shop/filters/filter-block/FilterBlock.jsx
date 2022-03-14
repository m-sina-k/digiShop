import React from "react";
import Switch from "../../../../components/Switch";

const FilterBlock = ({ filterText, callback, isActive }) => {
  return (
    <section className="filter__block">
      <section className="filter__block__heading">
        <p className="filter-text">{filterText}</p>
        <Switch isActive={isActive} callback={callback} />
      </section>
    </section>
  );
};

export default FilterBlock;
