import React from "react";
import loadingGif from "../../assets/images/utilities/loading.gif";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container">
        <figure className="gif-container">
          <img src={loadingGif} alt="loading-animation" />
        </figure>
        <p className="text">لطفا صبر کنید...</p>
      </div>
    </div>
  );
};

export default Loading;
