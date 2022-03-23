import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lockBodyScroll } from "../../features/slices/uiSlice";
import { BeatLoader } from "react-spinners";
import logo from "../../assets/images/logo.png";
import "./PageLoading.scss";

const PageLoading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lockBodyScroll(true));
    return () => dispatch(lockBodyScroll(false));
  }, []);

  return (
    <div className="page-loading">
      <img src={logo} alt="logo" className="logo" />
      <BeatLoader color="#8395a7" size={8} margin={5} />
    </div>
  );
};

export default PageLoading;
