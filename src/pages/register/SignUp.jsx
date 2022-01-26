import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./style.scss";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign-up">
      <div className="container register-container">
        <div className="form-container">
          <h4 className="form-title">ساخت حساب کاربری</h4>

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

            <section className="form-group form-group--password">
              <label htmlFor="register__password-repeat-input">تکرار رمز عبور  : </label>
              <input
                type={showPassword ? 'text' : "password"}
                name="register__password-repeat-input"
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
              <small className="error-container register__password-repeat-error"></small>
            </section>

            <button id="login__submit-button" type="submit">
              ساخت حساب
            </button>
          </form>

          <div className="form__links-container">
            <span>
              حساب کاربری دارید ؟
              <Link to="/login" className="form__link">
                وارد شوید
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
