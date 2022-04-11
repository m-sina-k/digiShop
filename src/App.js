import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import PageLoading from "./components/page-loading/PageLoading";
import BlankPage from "./pages/blank-page/BlankPage";
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
const Cart = lazy(() => import("./pages/cart/Cart.jsx"));
const Shipping = lazy(() => import("./pages/checkout/shipping/Shipping"));
const Payment = lazy(() => import("./pages/checkout/payment/Payment"));

function App() {
  const { showBackdrop, showMegaDropdownBackdrop, lockBodyScroll } =
    useSelector((state) => state.uiState);

  document.body.style.overflow = lockBodyScroll ? "hidden" : "visible";

  return (
    <React.Fragment>
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
          <Route
            path="*"
            element={
              <BlankPage
                alt="404 - not found"
                text="صفحه ای که به دنبال آن هستید وجود ندارد!"
              />
            }
          />
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
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout/shipping"
            element={<ProtectedRoute component={Shipping} />}
          />
          <Route
            path="/checkout/payment"
            element={<ProtectedRoute component={Payment} />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </React.Fragment>
  );
}

export default App;
