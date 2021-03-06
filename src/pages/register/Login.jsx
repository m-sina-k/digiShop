import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser, saveUserToken } from "../../features/slices/authSlice";

import logo from '../../assets/images/logo.png'
import "./registerForm.scss";

const Login = () => {
  document.title = "دیجی شاپ | ورود";

  const { userToken } = useSelector((state) => state.authState);

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);

  const [serverError, setServerError] = useState(null);

  if (userToken) {
    navigate("/");
  }

  const loginFormSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password);
  };

  // creating new account for user using firebase
  const signInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        if (location.state.from) {
          navigate(location.state.from.pathname);
        } else {
          navigate("/");
        }
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
      if (currentUser) {
        dispatch(setUser(currentUser.email));
        dispatch(saveUserToken(currentUser.accessToken));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <div className="login">
      {loading && <Loading />}

      <div className="contaier register-container">
        {
          <Alert
            variant="warning"
            text="برای اتصال به Firebase باید از vpn استفاده کنید."
            title="هشدار"
            canClose={true}
          />
        }

        {serverError ? (
          <Alert variant="error" text={serverError} title="خطا" />
        ) : null}
        <div className="form-container">
          <Link to='/' className="mb-3">
            <img src={logo} alt="لوگو" />
          </Link>
          <h4 className="form-title">ورود به حساب کاربری</h4>

          <form
            action="#"
            method="post"
            className="form"
            onSubmit={(e) => loginFormSubmit(e)}
          >
            <section className="form-group">
              <label htmlFor="login__email-input">ایمیل : </label>
              <input
                type="text"
                name="login__email-input"
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>

            <section className="form-group form-group--password">
              <label htmlFor="login__password-input">رمز عبور : </label>
              <input
                type={showPassword ? "text" : "password"}
                name="login__password-input"
                className="form-input"
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
            </section>

            <button
              id="login__submit-button"
              className="form-submit"
              type="submit"
            >
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
