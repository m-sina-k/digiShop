import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { auth } from "../../../auth/firebase";
import { signOut } from "firebase/auth";
import { logout } from "../../../features/slices/authSlice";
const DashboardDropdown = ({ setShowDashboardDropdown }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // close the dropdown on click outside
  const closeDropdown = () => {
    setShowDashboardDropdown(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const accSignOut = () => {
    setShowDashboardDropdown(false);
    dispatch(logout());
    // return to home page when sign out from dashboard page
    if (location.pathname === "/dashboard") {
      navigate("/");
    }
    return signOut(auth);
  };


  return (
    <div className="dashboard-dropdown__container" ref={ref}>
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
  );
};

export default DashboardDropdown;
