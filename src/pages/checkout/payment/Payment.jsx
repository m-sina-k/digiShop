import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Steps from "../components/steps/Steps";
import Checkbox from "../../../components/checkbox/Checkbox";
import CartItems from "../components/cart-items/CartItems";
import CheckoutBox from "../../cart/components/checkout-box/CheckoutBox";

import { GiReceiveMoney } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import "./Payment.scss";
import OrderSubmited from "./../components/order-submited/OrderSubmited";

const Payment = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.orderState);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [orderSubmited, setOrderSubmited] = useState(false);

  return (
    <div className="payment">
      {!state.deliveryTime ? (
        navigate("/checkout/shipping")
      ) : orderSubmited ? (
        <OrderSubmited />
      ) : (
        <div className="col-12 col-lg-10">
          <div className="row">
            <Steps shippingStatus="done" paymentStatus="active" />
            <div className="payment__grid-container">
              <div className="payment__grid-block">
                <PaymentMethods />
                <hr />
                <DiscountCode />
                <hr />
                <OrderDetails state={state} />
              </div>
              <CheckoutBox
                type="shipping"
                cartItems={cartItems}
                state={state}
                payment={true}
                setOrderSubmited={setOrderSubmited}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PaymentMethods = () => {
  const PAYMENT_METHODS = [
    {
      id: 1,
      name: "پرداخت در محل",
      icon: <GiReceiveMoney />,
    },
  ];
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    PAYMENT_METHODS[0]
  );
  return (
    <div className="payment-methods">
      <section className="block-heading">
        <span className="icon-container">
          <FaCoins />
        </span>
        <h6 className="title">نحوه پرداخت</h6>
      </section>
      {PAYMENT_METHODS.map((item) => (
        <Checkbox
          key={item.id}
          checked={selectedPaymentMethod.id === item.id}
          icon={item.icon}
          label={item.name}
          callback={() => setSelectedPaymentMethod(item)}
          additionalClass="checkbox-container--full-width"
        />
      ))}
    </div>
  );
};

const DiscountCode = () => {
  return (
    <div className="discount-code">
      <section className="block-heading">
        <span className="icon-container">
          <ImPriceTags />
        </span>
        <h6 className="title">کد تخفیف</h6>
      </section>
      <form action="#" method="post" className="discount-code__form">
        <input
          type="text"
          placeholder="کد تخفیف را وارد نمایید"
          className="discount-input"
        />
        <button type="submit" className="discount-submit">
          اعمال
        </button>
      </form>
    </div>
  );
};

const OrderDetails = ({ state }) => {
  return (
    <div className="discount-code">
      <section className="block-heading mb-3">
        <h6 className="title">جزئیات سفارش</h6>
      </section>
      <section className="order-summary">
        <h6>تاریخ ارسال : </h6>
        <p className="mb-3 mt-2">
          {state.deliveryDay.name} {state.deliveryDay.date} {state.month} - از
          ساعت {state.deliveryTime.timeStart} تا {state.deliveryTime.timeEnd}
        </p>
        <CartItems />
      </section>
    </div>
  );
};

export default Payment;
