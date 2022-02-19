import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import Loading from "./components/loading/Loading";
const Login = React.lazy(() => import("./pages/register/Login"));
const SignUp = React.lazy(() => import("./pages/register/SignUp"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));

function App() {
  const { showBackdrop, showMegaDropdownBackdrop } = useSelector(
    (state) => state.uiState
  );

  return (
    <React.Fragment>
      <Backdrop
        additionalClass={
          showMegaDropdownBackdrop ? "backdrop--mega-dropdown" : showBackdrop ? "backdrop--active" : ""
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
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
