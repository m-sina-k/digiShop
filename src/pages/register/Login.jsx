import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./style.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <div className="container register-container">
        <div className="form-container">
          <h4 className="form-title">ورود به حساب کاربری</h4>

          <form action="#" method="post" className="register-form">
            <section className="form-group">
              <label htmlFor="register__email-input">ایمیل : </label>
              <input
                type="text"
                name="register__email-input"
                id="register__email-input"
                className="register__input"
              />
              <small className="error-container register__email-error"></small>
            </section>

            <section className="form-group form-group--password">
              <label htmlFor="register__password-input">رمز عبور : </label>
              <input
                type={showPassword ? 'text' : "password"}
                name="register__password-input"
                id="register__password-input"
                className="register__input"
              />
              <span
                className="show-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="eye-icon" />
                ) : (
                  <AiOutlineEye className="eye-icon" />
                )}
              </span>
              <small className="error-container register__password-error"></small>
            </section>

            <button id="login__submit-button" type="submit">
              ورود
            </button>
          </form>

          <div className="form__links-container">
            <span>
              حساب کاربری ندارید ؟
              <Link to="/sign-up" className="form__link">
                ساخت حساب کاربری
              </Link>
            </span>
            <span>
              رمز عبور خود را فراموش کرده اید؟
              <Link to="#" className="form__link">
                بازیابی رمز عبور
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
