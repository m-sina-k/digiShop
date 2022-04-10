import React from "react";

import { MdOutlineLocalShipping } from "react-icons/md";
import "./CartItems.scss";

const CartItems = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div className="cart-items">
      <div className="cart-items__heading">
        <span className="icon-container">
          <MdOutlineLocalShipping />
        </span>
        <h6 className="title">ارسال {cartItems.length} کالا</h6>
      </div>

      <div className="cart-items__list">
        {cartItems.map((item) => (
          <section className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.localName}
              className="item__image"
            />
            <span className="item__qty">{item.qty}</span>
            <section className="item__color-container">
            <span className="color-hex" style={{backgroundColor:item.selectedColor.hex}}></span>
            <span className="color-title">{item.selectedColor.title}</span>
            </section>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
