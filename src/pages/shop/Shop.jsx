import React, { useState } from "react";
import { setSort } from "../../features/slices/shopFilterSlice";
import { useSelector, useDispatch } from "react-redux";
import { sort as sortOptions } from "../../assets/data/filters";

// icons
import { HiSortDescending } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";

// components
import Filters from "./filters/Filters";
import MobileFilters from "./filters/mobile-filters/MobileFilters";
import ShopSkeleton from "./shop-category/ShopSkeleton";
import Alert from "../../components/alert/Alert";
import ProductCard from "../../components/product-card/ProductCard";
import "./Shop.scss";
const Shop = ({
  fetchError,
  loading,
  productsList,
  companies,
  filtered,
  minMax,
}) => {
  const dispatch = useDispatch();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { sort } = useSelector((state) => state.filterState);
  return (
    <div className="shop">
      {fetchError ? (
        <Alert
          variant="error"
          title="خطا"
          text="خطا در برقراری ارتباط با سرور ، لطفا دوباره تلاش کنید."
          callBack={() => window.location.reload()}
          additionalClass="col-12 col-md-6 my-0 mx-auto"
          callBackText="تلاش مجدد"
        />
      ) : (
        <div>
          <MobileFilters
            show={showMobileFilters}
            setShow={setShowMobileFilters}
            companies={companies}
            minMax={minMax}
            filterDeactive={filtered}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 px-1">
                <Filters
                  companies={companies}
                  minMax={minMax}
                  filterDeactive={filtered}
                />
              </div>
              <div className="col-12 col-lg-9 px-1">
                {loading ? (
                  <ShopSkeleton />
                ) : (
                  <>
                    <button
                      className="filter-menu__button"
                      onClick={() => setShowMobileFilters(true)}
                    >
                      <BiFilter />
                      فیلتر ها
                    </button>

                    <div className="products-container">
                      <div className="sort-filter__container sort-filter__container--desktop">
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
                                sort === item.value
                                  ? "filter-options__item--active"
                                  : ""
                              }`}
                              onClick={() => dispatch(setSort(item.value))}
                            >
                              {item.label}
                            </button>
                          ))}
                        </section>
                        <span className="products-count">
                          {productsList.length} کالا
                        </span>
                      </div>
                      <div className="products-grid-container">
                        {productsList.length ? (
                          productsList.map((item) => (
                            <ProductCard product={item} key={item.id} />
                          ))
                        ) : (
                          <Alert
                            variant="info"
                            title="توجه"
                            text="کالایی با مشخصات مورد نظر یافت نشد!"
                            additionalClass="not-found-alert"
                          />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
