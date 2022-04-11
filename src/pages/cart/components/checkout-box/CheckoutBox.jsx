import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../../../features/slices/cartSlice";

import { FiArrowLeftCircle } from "react-icons/fi";
import "./CheckoutBox.scss";

const CheckoutBox = ({
  cartItems,
  countCartItems,
  type,
  state,
  scrollToDayPicker,
  payment,
  validated,
}) => {
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

  const goToCart = () => {
    dispatch(updateCart());
    navigate("/cart");
  };

  const goToShipping = () => {
    dispatch(updateCart());
    navigate("/checkout/shipping");
  };

  const goToPayment = () => {
    dispatch(updateCart());
    if (cartItems.length) {
      navigate("/checkout/payment");
    } else {
      goToCart();
    }
  };

  const renderCheckoutBox = () => {
    switch (type) {
      case "cart":
        return (
          <div className="checkout-box cart__grid-block">
            <section className="items-total">
              <p className="items-total__text">
                جمع کل ({countCartItems()} کالا) :{" "}
              </p>
              <span className="items-total__price">
                {itemsPriceBeforeDiscount.toLocaleString()} تومان
              </span>
            </section>

            <section className="checkout-section">
              <section className="cart-info">
                <p className="cart-info__text">جمع سبد خرید : </p>
                <span className="cart-info__price">
                  {itemsPrice.toLocaleString()} تومان
                </span>
              </section>

              {itemsPriceBeforeDiscount > itemsPrice && (
                <section className="cart-info">
                  <p className="cart-info__text"> سود شما : </p>
                  <span className="cart-info__price">
                    {`(${totalDiscount}%) ${(
                      itemsPriceBeforeDiscount - itemsPrice
                    ).toLocaleString()}`}{" "}
                    تومان
                  </span>
                </section>
              )}

              <p className="shipping-text">
                هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی
                شما‌ محاسبه و به این مبلغ اضافه خواهد شد.
              </p>
              <button
                className="checkout-button checkout-button--primary"
                onClick={goToShipping}
              >
                مرحله بعدی
                <FiArrowLeftCircle className="arrow-icon" />
              </button>
              <p className="reserv-warning-text">
                کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند.
              </p>
            </section>
          </div>
        );
      case "shipping":
        return (
          <div className="checkout-box shipping__grid-block">
            <section className="items-total">
              <p className="items-total__text">
                جمع کل ({cartItems.length} کالا) :{" "}
              </p>
              <span className="items-total__price">
                {itemsPrice.toLocaleString()} تومان
              </span>
            </section>

            <section className="checkout-section">
              <section className="cart-info">
                <p className="cart-info__text">هزینه ارسال : </p>
                <span className="cart-info__price">
                  {state.deliveryPrice
                    ? state.deliveryPrice.toLocaleString() + " تومان "
                    : "تعیین نشده"}{" "}
                </span>
              </section>
              <section className="cart-info">
                <p className="cart-info__text">قابل پرداخت : </p>
                <span className="cart-info__price">
                  {(itemsPrice + state.deliveryPrice).toLocaleString()} تومان
                </span>
              </section>

              <p className="shipping-text">
                هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
                شده است.
              </p>
              {payment ? (
                <button className="checkout-button checkout-button--primary">
                  ثبت سفارش
                </button>
              ) : (
                <button
                  onClick={goToPayment}
                  className="checkout-button checkout-button--primary"
                  disabled={!validated}
                >
                  مرحله بعدی
                  <FiArrowLeftCircle className="arrow-icon" />
                </button>
              )}
            </section>
          </div>
        );
    }
  };

  return <React.Fragment>{renderCheckoutBox()}</React.Fragment>;
};

export default CheckoutBox;
