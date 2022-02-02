import React, { useState } from "react";
import TopHeader from "../header/topHeader/TopHeader";
import Navigation from "../header/navigation/Navigation";
import MobileNavigation from "../header/mobile-navigation/MobileNavigation";
import MobileSearchbar from "../header/mobile-searchbar/MobileSearchbar";
import "./index.scss";

const Index = () => {
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

export default Index;
