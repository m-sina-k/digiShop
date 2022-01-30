import React from "react";
import { BsFillCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillWarning, AiFillCloseCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import "./Alert.scss";

const Alert = ({ title, text, variant, canClose }) => {
  const removeAlert = (e) => {
    const alert = e.target.parentElement.parentElement;
    alert.remove();
  };

  return (
    <div className={`alert alert--${variant}`}>
      {canClose ? (
        <span className="alert__close-button">
          <GrFormClose className="close-icon" onClick={(e) => removeAlert(e)}/>
        </span>
      ) : null}
      <span className="alert__icon-container">
        {variant === "success" ? (
          <BsFillCheckCircleFill className="alert-icon alert-icon--success" />
        ) : variant === "warning" ? (
          <AiFillWarning className="alert-icon alert-icon--warning" />
        ) : variant === "info" ? (
          <BsFillInfoCircleFill className="alert-icon alert-icon--info" />
        ) : (
          <AiFillCloseCircle className="alert-icon alert-icon--error" />
        )}
      </span>
      <section className="alert__text-container">
        <h6 className="alert__title">{title}</h6>
        <p className="alert__message">{text}</p>
      </section>
    </div>
  );
};

export default Alert;
