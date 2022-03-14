import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from "../../../../components/checkbox/Checkbox";

const FilterBlockExpandable = ({ filterText, array, callback,type }) => {
const {company,rate} = useSelector(state=>state.filterState)
  const dispatch = useDispatch()

  const toggleExpandableFilter = (e) => {
    const filterOptionsContainer = e.currentTarget.nextElementSibling;

    if (filterOptionsContainer.style.maxHeight) {
      filterOptionsContainer.style.maxHeight = null;
    } else {
      filterOptionsContainer.style.maxHeight =
        filterOptionsContainer.scrollHeight + "px";
    }
  };

  return (
    <section className="filter__block">
      <section
        className="filter__block__heading filter__block__heading--expandable"
        onClick={(e) => toggleExpandableFilter(e)}
      >
        <p className="filter-text">{filterText}</p>
        <span className="dropdown-icon">
          <IoIosArrowDown />
        </span>
      </section>
      <section className="filter__block__body filter__block__body--expandable">
        {array.map((item) => (
          <Checkbox
            key={item.id}
            label={item.label}
            name={item.name}
            checked={(type === 'rate' ? rate : company)  === item.value}
            callback={() => dispatch(callback(item.value))}
          />
        ))}
      </section>
    </section>
  );
};

export default FilterBlockExpandable;
