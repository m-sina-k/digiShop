import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/register/Login";
import SignUp from "./pages/register/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const { showBackdrop, showMegaDropdownBackdrop } = useSelector(
    (state) => state.uiState
  );

  return (
    <React.Fragment>
      <div
        className={`backdrop ${
          showMegaDropdownBackdrop ? "backdrop--mega-dropdown" : ""
        }`}
      ></div>
      <div
        className={`backdrop ${showBackdrop ? "backdrop--active" : ""}`}
      ></div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
