import React from "react";

const PriceFilterSkeleton = () => {
  return (
    <div className="price-filter-skeleton">
      <section className="range-skeleton"></section>
      <section className="min-price-skeleton"></section>
      <section className="max-price-skeleton"></section>
    </div>
  );
};

export default PriceFilterSkeleton;
