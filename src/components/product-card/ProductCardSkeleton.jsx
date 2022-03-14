import React from "react";

const ProductCardSkeleton = () => {
  return (
    <article className="product-card-skeleton">
      <section className="skeleton-image"></section>
      <span className="skeleton-title"></span>
      <span className="skeleton-price"></span>
    </article>
  );
};

export default ProductCardSkeleton;
