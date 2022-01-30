import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/Home";
import Login from "./pages/register/Login";
import SignUp from "./pages/register/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <React.Fragment>
      <div
        className={`backdrop ${showBackdrop ? "backdrop--active" : ""}`}
      ></div>
      <Header setShowBackdrop={setShowBackdrop} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
