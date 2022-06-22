import React, { useState, useRef,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import TopHeader from "./topHeader/TopHeader";
import Navigation from "./navigation/Navigation";
import MobileNavigation from "./mobile-navigation/MobileNavigation";
import MobileSearchbar from "./mobile-searchbar/MobileSearchbar";
import "./Header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const {exceptionRoutes} = useSelector(state=>state.uiState)
  const [showMobileSearchbar, setShowMobileSearchbar] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const headerRef = useRef();

  // fixing header if user scroll's
  useEffect(()=>{
    window.addEventListener("scroll", () => {

      if (window.scrollY > 0 && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.body.style.paddingTop = headerHeight + "px";
        headerRef.current.classList.add("header--sticky");
      } else {
        document.body.style.paddingTop = 0;
        headerRef.current.classList.remove("header--sticky");
      }
    });
  },[])

  

  const renderHeader = () => {
    if (exceptionRoutes.indexOf(pathname) > -1) {
      return null;
    } else {
      return (
        <div>
          <header className="header" ref={headerRef}>
            <TopHeader
              setShowMobileSearchbar={setShowMobileSearchbar}
              setShowMobileNavigation={setShowMobileNavigation}
            />
            <Navigation />
          </header>

          <MobileNavigation
            showMobileNavigation={showMobileNavigation}
            setShowMobileNavigation={setShowMobileNavigation}
          />

          <MobileSearchbar
            showMobileSearchbar={showMobileSearchbar}
            setShowMobileSearchbar={setShowMobileSearchbar}
          />
        </div>
      );
    }
  };

  renderHeader();

  return <div>{renderHeader()}</div>;
};

export default Header;
