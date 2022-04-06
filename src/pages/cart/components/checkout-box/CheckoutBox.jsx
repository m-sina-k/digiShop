import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../../../features/slices/cartSlice";

import { FiArrowLeftCircle } from "react-icons/fi";
import "./CheckoutBox.scss";

const CheckoutBox = ({ cartItems, countCartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemsPriceBeforeDiscount = cartItems.reduce((a, c) => {
    const itemPrice = c.priceBeforeDiscount ? c.priceBeforeDiscount : c.price;
    return (a += c.qty * itemPrice);
  }, 0);

  const itemsPrice = cartItems.reduce((a, c) => (a += c.qty * c.price), 0);

  const totalDiscount = (
    ((itemsPriceBeforeDiscount - itemsPrice) * 100) /
    itemsPriceBeforeDiscount
  ).toFixed(1);

  const goToShipping = () => {
    dispatch(updateCart());
    navigate("/checkout/shipping");
  };

  return (
    <div className="checkout-box cart__grid-block">
      <section className="items-total">
        <p className="items-total__text">جمع کل ({countCartItems()} کالا) : </p>
        <span className="items-total__price">
          {itemsPriceBeforeDiscount.toLocaleString()} تومان
        </span>
      </section>

      <section className="checkout-section">
        <section className="cart-total">
          <p className="cart-total__text">جمع سبد خرید : </p>
          <span className="cart-total__price">
            {itemsPrice.toLocaleString()} تومان
          </span>
        </section>

        {itemsPriceBeforeDiscount > itemsPrice && (
          <section className="cart-total">
            <p className="cart-total__text"> سود شما : </p>
            <span className="cart-total__price">
              {`(${totalDiscount}%) ${(
                itemsPriceBeforeDiscount - itemsPrice
              ).toLocaleString()}`}{" "}
              تومان
            </span>
          </section>
        )}

        <p className="shipping-text">
          هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌
          محاسبه و به این مبلغ اضافه خواهد شد.
        </p>
        <button id="checkout-button" onClick={goToShipping}>
          مرحله بعدی
          <FiArrowLeftCircle className="arrow-icon" />
        </button>
        <p className="reserv-warning-text">
          کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند.
        </p>
      </section>
    </div>
  );
};

export default CheckoutBox;
