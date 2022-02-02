import React, { useState } from "react";
import TopHeader from "./topHeader/TopHeader";
import Navigation from "./navigation/Navigation";
import MobileNavigation from "./mobile-navigation/MobileNavigation";
import MobileSearchbar from "./mobile-searchbar/MobileSearchbar";
import "./Header.scss";

const Header = () => {
  const [showMobileSearchbar, setShowMobileSearchbar] = useState(false);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  return (
    <>
      <header className="header">
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
