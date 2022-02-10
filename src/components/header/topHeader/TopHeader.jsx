import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import logo from "../../../assets/images/logo.png";
import { useSelector } from "react-redux";
import DashboardDropdown from "./DashboardDropdown";
import "./TopHeader.scss";

const TopHeader = ({ setShowMobileSearchbar, setShowMobileNavigation }) => {
  const { userToken } = useSelector((state) => state.authState);
  const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);

  return (
    <div className="top-header">
      <div className="container">
        <div className="top-header__row">
          <Link to="/" className="logo-container">
            <img src={logo} alt="main-logo" className="logo" />
          </Link>

          <div className="searchbar-container">
            <form action="#" method="get" className="searchbar-form">
              <input
                type="search"
                name="header-search-input"
                id="search-input"
                placeholder="جستجو کنید..."
              />
              <button type="submit" className="searchbar-button">
                <BiSearch className="search-icon" />
              </button>
            </form>
          </div>

          <div className="widgets-container">
            <section className="contact-info">
              <a href="tel:02178943216" className="phone-link">
                <small className="contact-info__text">با ما تماس بگیرید</small>
                <strong className="phone-link__text">021-78943216</strong>
              </a>
            </section>
            <Link to="/cart" className="widget-button cart-button">
              <BsCart2 className="cart-icon widget-button__icon" />
              <span className="cart-button__amount">0</span>
            </Link>

            {userToken ? (
              <section
                className="widget-button login-button login-button--dashboard"
              >
                <span onClick={() => setShowDashboardDropdown(!showDashboardDropdown)}>
                <BiUser className="login-icon widget-button__icon" />
                </span>
                {showDashboardDropdown && (
                  <DashboardDropdown
                    setShowDashboardDropdown={setShowDashboardDropdown}
                  />
                )}
              </section>
            ) : (
              <Link to="/login" className="widget-button login-button">
                <HiOutlineLogin className="login-icon widget-button__icon" />
              </Link>
            )}

            <button
              className="search-button--r"
              onClick={() => setShowMobileSearchbar(true)}
            >
              <BiSearch className="search-icon" />
            </button>
            <button
              className="menu-button--r"
              onClick={() => setShowMobileNavigation(true)}
            >
              <MdMenu className="menu-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
