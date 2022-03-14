import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleFeatured,
  toggleSale,
  setCompany,
  setRate,
  setSearchQuery,
  clearFilters,
} from "../../../features/slices/shopFilterSlice";

import { BiFilter } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";

import { rates } from "../../../assets/data/filters";

import FilterBlockExpandable from "./filter-block/FilterBlockExpandable";
import FilterBlock from "./filter-block/FilterBlock";
import PriceFilter from "./filter-block/PriceFilter";
import "./Filters.scss";

const Filters = ({ companies, minMax, filterDeactive }) => {
  const dispatch = useDispatch();
  const { featured, sale } = useSelector((state) => state.filterState);

  return (
    <aside className="filters desktop-filters">
      <section className="filters__heading">
        <span className="icon">
          <BiFilter />
        </span>
        <h5 className="title">فیلتر ها </h5>
        {!filterDeactive && (
          <button
            className="clear-filters-button"
            onClick={() => dispatch(clearFilters())}
          >
            <FaRegTimesCircle />
            <small> حذف فیلترها</small>
          </button>
        )}
      </section>

      {/* search filter */}
      <section className="filter__block">
        <section className="filter__block__heading">
          <p className="filter-text">جستجو</p>
        </section>
        <input
          type="text"
          placeholder="نام کالا را وارد کنید..."
          className="filters-search-input"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </section>

      {/* discount filter */}
      <FilterBlock
        filterText="فقط کالا های فروش ویژه"
        isActive={sale}
        callback={() => dispatch(toggleSale())}
      />

      {/* featured filter */}
      <FilterBlock
        filterText="فقط کالا های پرفروش "
        isActive={featured}
        callback={() => dispatch(toggleFeatured())}
      />

      {/* rate filter */}
      <FilterBlockExpandable
        filterText="امتیاز کالا"
        array={rates}
        callback={setRate}
        type="rate"
      />

      {/* companies filter */}
      {companies && (
        <FilterBlockExpandable
          filterText="شرکت سازنده"
          array={companies}
          callback={setCompany}
          type="company"
        />
      )}

      {/* price filter */}
      <PriceFilter minMax={minMax} />
    </aside>
  );
};

export default Filters;
