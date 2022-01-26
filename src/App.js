import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/Home";
import MobileSearchbar from './components/mobile-searchbar/MobileSearchbar'
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
