import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../features/slices/cartSlice";

import CartItem from "./components/cart-item/CartItem";
import CheckoutBox from "./components/checkout-box/CheckoutBox";
import BlankPage from "../blank-page/BlankPage";

import emptyCartImg from "../../assets/images/utilities/emptyBox.png";
import "./Cart.scss";

const Cart = () => {
  document.title = "دیجی شاپ | سبد خرید";

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartState);

  const countCartItems = () => cartItems.reduce((a, c) => (a += c.qty), 0);

  return (
    <div className="cart">
      <div className="col-12 col-lg-10">
        {cartItems.length ? (
          <div className="row">
            <section className="cart__heading">
              <h3 className="cart__heading__title">سبد خرید</h3>
              <span className="cart__heading__count">{countCartItems()}</span>
            </section>
            <div className="cart__grid-container">
              {/* cart items section */}
              <div className="cart-items__container  cart__grid-block">
                <button
                  className="empty-cart-button"
                  onClick={() => dispatch(emptyCart())}
                >
                  خالی کردن سبد
                </button>
                <hr />
                {cartItems.map((item, index) => (
                  <CartItem product={item} key={index} />
                ))}
              </div>
              <CheckoutBox
                cartItems={cartItems}
                countCartItems={countCartItems}
              />
            </div>
          </div>
        ) : (
          <BlankPage
            alt="سبد خالی"
            image={emptyCartImg}
            text="سبد خرید شما خالی است!"
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
