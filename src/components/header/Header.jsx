import React, { useState, useRef,useEffect } from "react";
import TopHeader from "./topHeader/TopHeader";
import Navigation from "./navigation/Navigation";
import MobileNavigation from "./mobile-navigation/MobileNavigation";
import MobileSearchbar from "./mobile-searchbar/MobileSearchbar";
import "./Header.scss";

const Header = () => {
  const [showMobileSearchbar, setShowMobileSearchbar] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const headerRef = useRef();
 
// fixing header if user scroll's
  // useEffect(()=>{
  //   window.addEventListener("scroll", () => {
   
  //     if (window.scrollY > 0 && headerRef.current) {
  //       const headerHeight = headerRef.current.offsetHeight;
  //       document.body.style.paddingTop = headerHeight + "px";
  //       headerRef.current.classList.add("header--sticky");
  //     } else {
  //       document.body.style.paddingTop = 0;
  //       headerRef.current.classList.remove("header--sticky");
  //     }
  //   });
  // },[])

  return (
    <>
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
    </>
  );
};

export default Header;
