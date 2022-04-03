import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../../../features/slices/cartSlice";

import { BsBoxSeam, BsShieldCheck, BsTrash } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import './CartItem.scss'

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <Link
        to={`/product/${product.id}/${product.localName}/`}
        className="product__image-container"
      >
        <img
          src={product.image}
          alt="product-image"
          className="product__image"
        />
      </Link>

      <div className="product__info">
        <h6 className="product__name">{product.localName}</h6>
        {product.selectedColor.title && (
          <section className="product__property">
            <span
              className="product__property--icon"
              style={{
                backgroundColor: product.selectedColor.hex,
                border: "1.5px solid black",
              }}
            ></span>
            <p className="product__property--title">
              {product.selectedColor.title}
            </p>
          </section>
        )}

        <section className="product__property">
          <span className="product__property--icon">
            <BsBoxSeam />
          </span>
          <p className="product__property--title">موجود در انبار فروشگاه</p>
        </section>

        <section className="product__property">
          <span className="product__property--icon">
            <BsShieldCheck />
          </span>
          <p className="product__property--title">
            {product.selectedGuarantee
              ? product.selectedGuarantee
              : "ضمانت اصالت و سلامت ۷ روزه"}
          </p>
        </section>

        {product.priceBeforeDiscount && (
          <section className="product__property product__property--discount">
            <span className="product__property--icon">
              <ImPriceTags />
            </span>
            <p className="product__property--title">
              {(product.priceBeforeDiscount - product.price).toLocaleString() } {" "}
                 تومان تخفیف    
            </p>
          </section>
        )}

        <div className="product__options">
          <div className="product__quantity-container">
            <section className="product__quantity">
              <button
                className="qty-button qty-button--increase"
                onClick={() => dispatch(increaseQty(product.id))}
                disabled={product.qty === product.limit}
              >
                <FaPlus className="inc-icon" />
              </button>
              <section className="qty-count-container">
                <span className="qty-count">{product.qty}</span>
                {product.qty === product.limit && (
                  <span className="limit-text">حداکثر</span>
                )}
              </section>

              {product.qty > 1 ? (
                <button
                  className="qty-button qty-button--decrease"
                  onClick={() => dispatch(decreaseQty(product.id))}
                >
                  <FaMinus className="dec-icon" />
                </button>
              ) : (
                <button
                  className="qty-button qty-button--remove"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <BsTrash className="remove-icon" />
                </button>
              )}
            </section>
          </div>

          <span className="product__price">
            {product.price.toLocaleString()} تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
