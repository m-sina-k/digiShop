import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useSelector } from "react-redux";
import "./registerForm.scss";

const SignUp = () => {
  const { userToken } = useSelector((state) => state.authState);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [passwordRepeat, setPasswordRepeat] = useState(null);
  const [passwordRepeatError, setPasswordRepeatError] = useState(null);

  const [serverError, setServerError] = useState(null);

  const signUpFormSubmit = (e) => {
    e.preventDefault();

    if (
      validateEmail(email) &&
      validatePassword(password) &&
      checkPasswordRepeat()
    ) {
      signUpUser(email, password);
    }
  };

  // creating new account for user using firebase
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        setLoading(false);
        switch (error.message) {
          case "Firebase: Error (auth/email-already-in-use).":
            setServerError("ایمیل وارد شده قبلا ثبت شده است.");
            break;
          case "Firebase: Error (auth/network-request-failed).":
            setServerError("شکست در ارتباط با سرور ، لطفا بعدا تلاش کنید.");
            break;
          default:
            setServerError(
              "در ارتباط با سرور مشکلی پیش آمد.لطفا بعدا تلاش کنید یا با پشتیبانی تماس بگیرید."
            );
        }
      });
  };

  // validations
  const validateEmail = (email) => {
    setEmailError(null);
    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    )
      return true;
    setEmailError("ایمیل وارد شده معتبر نیست.");
    return false;
  };

  const validatePassword = (password) => {
    setPasswordError(null);
    if (password.length < 8) {
      setPasswordError("گذرواژه باید حداقل ۸ کاراکتر باشد.");
      return false;
    }

    if (!password.match(/(?=.*[0-9])(?=.*[a-z])/)) {
      setPasswordError("گذرواژه باید حاوی اعداد و حروف باشد.");
      return false;
    }
    return true;
  };

  const checkPasswordRepeat = () => {
    setPasswordRepeatError(null);
    if (password === passwordRepeat) {
      return true;
    } else {
      setPasswordRepeatError("گذرواژه های وارد شده مطابقت ندارند.");
      return false;
    }
  };

  return (
    <div className="sign-up">
      {loading && <Loading />}
      {userToken ? (
        navigate("/dashboard")
      ) : (
        <div className="container register-container">
          <Alert
            variant="warning"
            text="برای اتصال به Firebase باید از vpn استفاده کنید."
            title="هشدار"
            canClose={true}
          />
          {serverError ? (
            <Alert
              variant="error"
              text={serverError}
              title="خطا"
              canClose={true}
            />
          ) : null}

          <div className="form-container">
            <h4 className="form-title">ساخت حساب کاربری</h4>

            <form
              action="#"
              method="post"
              className="register-form"
              onSubmit={(e) => signUpFormSubmit(e)}
            >
              <section className="form-group">
                <label htmlFor="register__email-input">ایمیل : </label>
                <input
                  type="text"
                  name="register__email-input"
                  id="register__email-input"
                  className="register__input"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small className="error-container register__email-error">
                  {emailError ? emailError : ""}
                </small>
              </section>

              <section className="form-group form-group--password">
                <label htmlFor="register__password-input">رمز عبور : </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="register__password-input"
                  id="register__password-input"
                  className="register__input"
                  onChange={(e) => setPassword(e.target.value)}
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
                <small className="error-container register__password-error">
                  {passwordError ? passwordError : ""}
                </small>
              </section>

              <section className="form-group form-group--password">
                <label htmlFor="register__password-repeat-input">
                  تکرار رمز عبور :
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="register__password-repeat-input"
                  id="register__password-input"
                  className="register__input"
                  onChange={(e) => setPasswordRepeat(e.target.value)}
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
                <small className="error-container register__password-repeat-error">
                  {passwordRepeatError ? passwordRepeatError : ""}
                </small>
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
      )}
    </div>
  );
};

export default SignUp;
