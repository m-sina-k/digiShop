import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import Loading from "./components/loading/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = lazy(() => import("./pages/register/Login"));
const SignUp = lazy(() => import("./pages/register/SignUp"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));
const Faq = lazy(()=>import("./pages/faq/Faq"))

function App() {
  const { showBackdrop, showMegaDropdownBackdrop } = useSelector(
    (state) => state.uiState
  );

  return (
    <React.Fragment>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Backdrop
        additionalClass={
          showMegaDropdownBackdrop
            ? "backdrop--mega-dropdown"
            : showBackdrop
            ? "backdrop--active"
            : ""
        }
      />

      <Header />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Suspense>

      <Footer />
    </React.Fragment>
  );
}

export default App;
