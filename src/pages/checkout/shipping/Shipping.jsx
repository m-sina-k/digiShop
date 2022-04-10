import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Steps from "../components/steps/Steps";
import Address from "../components/address/Address";
import CheckoutBox from "../../cart/components/checkout-box/CheckoutBox";
import CartItems from "../components/cart-items/CartItems";
import DayPicker from "../components/day-picker/DayPicker";

import "./Shipping.scss";

const Shipping = () => {
  document.title = "دیجی شاپ | مشخصات ارسال";
  const dayPickerRef = useRef();
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const navigate = useNavigate();

  if(!cartItems) navigate('/cart')


  const [deliveryInfo, setDeleveryInfo] = useState({
    selectedDay: null,
    selectedTime: null,
    deliveryPrice: null,
  });

  const scrollToDayPicker = () => {
    window.scrollTo({
      top: dayPickerRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="shipping">
      <div className="col-12 col-lg-10">
        <div className="row">
          <Steps shippingStatus="active" paymentStatus="disabled" />
          <div className="shipping__grid-container">
            <div className="shipping__grid-block">
              <Address />
              <hr />
              <div className="shipping-info">
                <CartItems />
                <hr />
                <DayPicker
                  dayPickerRef={dayPickerRef}
                  deliveryInfo={deliveryInfo}
                  setDeleveryInfo={setDeleveryInfo}
                />
              </div>
            </div>
            <CheckoutBox
              type="shipping"
              scrollToDayPicker={() => scrollToDayPicker()}
              cartItems={cartItems}
              deliveryInfo={deliveryInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
