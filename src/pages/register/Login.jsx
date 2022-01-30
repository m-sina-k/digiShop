import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser, saveUserToken } from "../../features/slices/authSlice";
import "./registerForm.scss";

const Login = () => {
  const { userToken } = useSelector((state) => state.authState);

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [serverError, setServerError] = useState(null);

  const loginFormSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password);
  };

  // creating new account for user using firebase
  const signInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        switch (error.message) {
          case "Firebase: Error (auth/wrong-password).":
            setServerError("گذرواژه و ایمیل وارد شده تطابق ندارند.");
            break;
          case "Firebase: Error (auth/user-not-found).":
            setServerError("حساب مورد نظر یافت نشد.");
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

  // update auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser.email));
      dispatch(saveUserToken(currentUser.accessToken));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="login">
      {loading && <Loading />}
      {userToken ? navigate('/dashboard') : (
      <div className="contaier register-container">
        {location.state ? (
          <Alert
            variant="success"
            text="حساب شما ساخته شد.لطفا وارد شوید."
            title="انجام شد"
            canClose={true}
          />
        ) : (
          <Alert
            variant="warning"
            text="برای اتصال به Firebase باید از vpn استفاده کنید."
            title="هشدار"
            canClose={true}
          />
        )}

        {serverError ? (
          <Alert variant="error" text={serverError} title="خطا" />
        ) : null}
        <div className="form-container">
          <h4 className="form-title">ورود به حساب کاربری</h4>

          <form
            action="#"
            method="post"
            className="register-form"
            onSubmit={(e) => loginFormSubmit(e)}
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
      )}
    </div>
  );
};

export default Login;
