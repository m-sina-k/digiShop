import React from "react";
import { useNavigate } from "react-router-dom";
import Steps from "../components/steps/Steps";
import Address from "../components/address/Address";


import "./Shipping.scss";

const Shipping = () => {
  document.title = "دیجی شاپ | مشخصات ارسال";
  const navigate = useNavigate();

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  // redirect if cart is empty
  return (
    <div className="shipping">
      <div className="col-12 col-lg-10">
        <div className="row">
          <Steps shippingStatus="active" paymentStatus="disabled" />
          <div className="shipping__grid-container">
            <div className="shipping__grid-block">
              <Address />
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
