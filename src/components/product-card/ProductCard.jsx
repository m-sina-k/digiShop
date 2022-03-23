import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductCard.scss";

const ProductCard = ({ product, activeFilter }) => {
  const { localName, price, images, discount, priceBeforeDiscount,id } = product;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.article
        key={activeFilter}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1, delay: 0.05 }}
        className="product-card"
      >
        <Link to={`/product/${id}/${localName}/`}>
        <figure className="product__image-container">
          <img src={images[0]} alt="product-image" className="product__image" />
          {discount ? (
            <span className="product__discount-badge">{discount}%</span>
          ) : null}
        </figure>
        <section className="product__details">
          <h6 className="product__name">{localName}</h6>
          <section className="product__price-container">
            {priceBeforeDiscount ? (
              <h6 className="product__old-price">
                {priceBeforeDiscount.toLocaleString()} تومان
              </h6>
            ) : null}
            <h6 className="product__price">{price.toLocaleString()} تومان </h6>
          </section>
        </section>
        </Link>
      </motion.article>
    </AnimatePresence>
  );
};

export default ProductCard;
