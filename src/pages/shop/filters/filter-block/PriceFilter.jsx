import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePrice } from "../../../../features/slices/shopFilterSlice";
import PriceFilterSkeleton from "./PriceFilterSkeleton";

import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const PriceFilter = ({ minMax }) => {
  const { minPrice, maxPrice } = useSelector((state) => state.filterState);
  const dispatch = useDispatch();
  const SLIDER_STEP = 1_000_000;
  const [sliderValue, setSliderValue] = useState(null);
  // update slider default value with products min/max price
  React.useEffect(() => {
    if (minMax) {
      setSliderValue({ min: minMax[0], max: minMax[1] });
    }
  }, [minMax]);

  return (
    minPrice &&
    maxPrice &&
    sliderValue && (
      <section className="filter__block">
      <section className="filter__block__heading">
      <p className="filter-text">محدوده قیمت</p>
    </section>
      <section className="filter__block__body">
        <section className="price-range__container">
          <Range
            min={sliderValue.min}
            max={sliderValue.max}
            defaultValue={[sliderValue.min, sliderValue.max]}
            value={[minPrice, maxPrice]}
            step={SLIDER_STEP}
            trackStyle={[{ backgroundColor: "#0984e3" }]}
            handleStyle={[
              { border: "3px solid #0984e3" },
              { border: "3px solid #0984e3" },
            ]}
            railStyle={{ backgroundColor: "silver" }}
            onChange={(value) =>
              dispatch(updatePrice([value[0], value[1] + SLIDER_STEP]))
            }
          />
        </section>

        <section className="price-inputs__container">
          <strong className="price-inputs__container__text">
            از
            <span className="price-box">{minPrice.toLocaleString()}</span>
            تومان
          </strong>

          <strong className="price-inputs__container__text">
            تا
            <span className="price-box">{maxPrice.toLocaleString()}</span>
            تومان
          </strong>
        </section>
      </section>
      </section>
    )
  );
};

export default PriceFilter;
