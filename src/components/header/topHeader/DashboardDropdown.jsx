import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { auth } from "../../../auth/firebase";
import { signOut } from "firebase/auth";
import { logout } from "../../../features/slices/authSlice";

import { toast } from "react-toastify";

const DashboardDropdown = ({
  setShowDashboardDropdown,
  showDashboardDropdown,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const accSignOut = () => {
    setShowDashboardDropdown(false);
    dispatch(logout());
    // return to home page when sign out from dashboard page
    if (location.pathname === "/dashboard") {
      navigate("/");
    }
    toast.error("از حساب کاربری خود خارج شدید");
    return signOut(auth);
  };

  return (
    <React.Fragment>
      <div
        className={`dashboard-dropdown__container ${
          showDashboardDropdown ? "slide-up--active" : "slide-up--deactive"
        }`}
      >
        <Link
          to="/dashboard"
          className="dashboard-dropdown__item"
          onClick={() => setShowDashboardDropdown(false)}
        >
          <BiUser className="dashboard-icon icon" />
          صفحه داشبورد
        </Link>
        <span
          className="dashboard-dropdown__item logout-button"
          onClick={accSignOut}
        >
          <MdOutlinePowerSettingsNew className="logout-icon icon" />
          خروج از حساب
        </span>
      </div>
    </React.Fragment>
  );
};

export default DashboardDropdown;
