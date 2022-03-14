import React from "react";
import ProductCardSkeleton from "../../../components/product-card/ProductCardSkeleton";

const ShopSkeleton = () => {
  return (
    <div className="shop-skeleton">
      <div className="sort-filter-skeleton"></div>
      <div className="product-grid-skeleton">
        {Array.from({ length: 8 }, (_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopSkeleton;
