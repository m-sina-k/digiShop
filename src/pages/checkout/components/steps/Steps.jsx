import React from "react";
import { Link } from "react-router-dom";

import { BsCart2 } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import logo from "../../../../assets/images/logo.png";
import "./Steps.scss";

const Steps = ({ shippingStatus,paymentStatus }) => {
  return (
    <div className="shipping__header">
      <Link to="/" className="logo-container">
        <abbr title="صفحه اصلی">
          <img src={logo} alt="صفحه اصلی" className="logo" />
        </abbr>
      </Link>

      <div className="steps-container">
        <ul className="steps">
          <StepOption
            url="/cart"
            text="سبد خرید"
            icon={<BsCart2 />}
            name="cart"
            status="done"
          />
          <StepOption
            url="/checkout/shipping"
            text="مشخصات ارسال "
            icon={<MdOutlineLocalShipping />}
            name="shipping"
           status={shippingStatus}
          />
          <StepOption
            url="/cart/payment"
            text="پرداخت "
            icon={<BiWallet />}
            name="payment"
            status={paymentStatus}
          />
        </ul>
      </div>
    </div>
  );
};

const StepOption = ({ url, text, icon, name, status }) => {
  const setStatus = () => {
    switch (status) {
      case "done":
        return "step-option--done";
      case "active":
        return "step-option--active";
      case "disabled":
        return "step-option--disabled";
      default:
        return "step-option--done";
    }
  };
  return (
    <li className={`step-option ${setStatus()}`} data-name={name}>
      <Link to={url} className="step-option__link">
        <span className="step-option__icon-container">{icon}</span>
        <span className="step-option__text"> {text}</span>
      </Link>
    </li>
  );
};

export default Steps;
