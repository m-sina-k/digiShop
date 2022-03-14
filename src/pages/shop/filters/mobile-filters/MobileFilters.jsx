import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  toggleSale,
  toggleFeatured,
  setSearchQuery,
  setRate,
  setCompany,
  setSort
} from "../../../../features/slices/shopFilterSlice";

import { MdClose } from "react-icons/md";
import { FaRegTimesCircle } from "react-icons/fa";
import { HiSortDescending } from "react-icons/hi";

import { rates , sort as sortOptions } from "../../../../assets/data/filters";

import FilterBlockExpandable from "../filter-block/FilterBlockExpandable";
import PriceFilter from "../filter-block/PriceFilter";
import FilterBlock from "../filter-block/FilterBlock";
import PriceFilterSkeleton from "../filter-block/PriceFilterSkeleton";
import "../Filters.scss";

const MobileFilters = ({
  show,
  setShow,
  companies,
  minMax,
  filterDeactive,
}) => {
  const dispatch = useDispatch();
  const { featured, sale, maxPrice,sort } = useSelector(
    (state) => state.filterState
  );
  return (
    <div
      className={`mobile-filters__container ${
        show ? "mobile-filters__container--active" : ""
      }`}
    >
      <section className="mobile-searchbar__heading">
        <h4 className="title">فیلتر ها</h4>
        <span className="close-button" onClick={() => setShow(false)}>
          <MdClose className="close-icon" />
        </span>
      </section>

      <div className="sort-filter__container sort-filter__container--mobile">
        <section className="heading">
          <span className="heading__icon">
            <HiSortDescending />
          </span>
          <h6 className="heading__title">ترتیب: </h6>
        </section>
        <section className="sort-options__container">
          {sortOptions.map((item) => (
            <button
              key={item.id}
              className={`filter-options__item ${
                sort === item.value ? "filter-options__item--active" : ""
              }`}
              onClick={() => dispatch(setSort(item.value))}
            >
              {item.label}
            </button>
          ))}
        </section>
      </div>

      {!filterDeactive && (
        <button
          className="clear-filters-button clear-filters-button--mobile"
          onClick={() => dispatch(clearFilters())}
        >
          <FaRegTimesCircle />
          <small> حذف فیلترها</small>
        </button>
      )}

      <div className="filters mobile-filters">
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
          type="rate"
          callback={setRate}
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
        <section className="filter__block">
          <section className="filter__block__heading">
            <p className="filter-text">محدوده قیمت</p>
          </section>
          {maxPrice ? <PriceFilter minMax={minMax} /> : <PriceFilterSkeleton />}
        </section>
      </div>
    </div>
  );
};

export default MobileFilters;
