import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { localName, price, images,discount,priceBeforeDiscount } = product;
  return (
    <article className="product-card">
      <figure className="product__image-container">
        <img src={images[0]} alt="product-image" className="product__image" />
        {discount ? <span className="product__discount-badge">{discount}%</span> : null}
      </figure>
      <section className="product__details">
          <h6 className="product__name">{localName}</h6>
          <section className="product__price-container">
              {priceBeforeDiscount ? (<h6 className="product__old-price">{priceBeforeDiscount.toLocaleString()} تومان </h6>) : null}
              <h6 className="product__price">{price.toLocaleString()} تومان </h6>
          </section>
      </section>
    </article>
  );
};

export default ProductCard;
