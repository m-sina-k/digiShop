import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/Home";
import Login from "./pages/register/Login";
import SignUp from "./pages/register/SignUp";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
