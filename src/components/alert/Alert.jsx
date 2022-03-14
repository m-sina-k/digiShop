import React from "react";
import { BsFillCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillWarning, AiFillCloseCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import "./Alert.scss";

const Alert = ({
  title,
  text,
  variant,
  canClose,
  additionalClass,
  callBack,
  callBackText,
}) => {
  const removeAlert = (e) => {
    const alert = e.target.parentElement.parentElement;
    alert.remove();
  };

  return (
    <div
      className={`alert alert--${variant} ${
        additionalClass ? additionalClass : ""
      }`}
    >
      {canClose ? (
        <span className="alert__close-button">
          <GrFormClose className="close-icon" onClick={(e) => removeAlert(e)} />
        </span>
      ) : null}
      <section className="alert__heading">
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
      <h4 className="alert__title">{title}</h4>
      </section>
     
        
        <p className="alert__message">{text}</p>
     
      {callBack ? (
        <button className="alert__button" onClick={callBack}>
          {callBackText}
        </button>
      ) : null}
    </div>
  );
};

export default Alert;
