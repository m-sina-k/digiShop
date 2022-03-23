import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoading from "./components/page-loading/PageLoading";
import NotFound from "./pages/not-found/NotFound.jsx";
const Login = lazy(() => import("./pages/register/Login"));
const SignUp = lazy(() => import("./pages/register/SignUp"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));
const Faq = lazy(() => import("./pages/faq/Faq"));
const ShopLanding = lazy(() => import("./pages/shop/ShopLanding.jsx"));
const ShopCategory = lazy(() =>
  import("./pages/shop/shop-category/ShopCategory")
);
const CategoryBrand = lazy(() =>
  import("./pages/shop/brands/brand-single/CategoryBrand")
);
const BrandSingle = lazy(() =>
  import("./pages/shop/brands/brand-single/BrandSingle")
);
const SingleProduct = lazy(() =>
  import("./pages/single-product/SingleProduct.jsx")
);

function App() {
  const { showBackdrop, showMegaDropdownBackdrop, lockBodyScroll } =
    useSelector((state) => state.uiState);

  document.body.style.overflow = lockBodyScroll ? "hidden" : "visible";

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

      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shop" element={<ShopLanding />} />
          <Route path="/shop/:category" element={<ShopCategory />} />
          <Route path="/shop/:category/:brand" element={<CategoryBrand />} />
          <Route path="/shop/brands/:brand" element={<BrandSingle />} />
            <Route
              path="/product/:productId/:productName/"
              element={<SingleProduct />}
            />
        </Routes>
      </Suspense>

      <Footer />
    </React.Fragment>
  );
}

export default App;
