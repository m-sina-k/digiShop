import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../../features/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Steps from "../components/steps/Steps";
import Address from "../components/address/Address";
import CheckoutBox from "../../cart/components/checkout-box/CheckoutBox";
import CartItems from "../components/cart-items/CartItems";
import DayPicker from "../components/day-picker/DayPicker";

import "./Shipping.scss";

const Shipping = () => {
  document.title = "دیجی شاپ | مشخصات ارسال";
  const dayPickerRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const [addressList, setAddressList] = useState(
    JSON.parse(localStorage.getItem("addressList")) || []
  );

  const [currentAddress, setCurrentAddress] = useState(
    addressList ? addressList[0] : null
  );

  const state = useSelector((state) => state.orderState);

  const goToCart = () => {
    dispatch(updateCart());
    navigate("/cart");
  };

  const scrollToDayPicker = () => {
    window.scrollTo({
      top: dayPickerRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const validateShipping = () => {
    if (currentAddress && state.deliveryTime?.timeStart) return true;
    return false;
  };

  return (
    <div className="shipping">
      {!cartItems.length ? (
        goToCart()
      ) : (
        <div className="col-12 col-lg-10">
          <div className="row">
            <Steps shippingStatus="active" paymentStatus="disabled" />
            <div className="shipping__grid-container">
              <div className="shipping__grid-block">
                <Address
                  currentAddress={currentAddress}
                  addressList={addressList}
                  setAddressList={setAddressList}
                  setCurrentAddress={setCurrentAddress}
                />
                <hr />
                <div className="shipping-info">
                  <CartItems />
                  <hr />
                  <DayPicker dayPickerRef={dayPickerRef} state={state} />
                </div>
              </div>
              <CheckoutBox
                type="shipping"
                scrollToDayPicker={() => scrollToDayPicker()}
                cartItems={cartItems}
                state={state}
                validated={validateShipping()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shipping;
