import React from "react";
import {BeatLoader} from 'react-spinners'
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container">
        <figure className="loading-container mb-0">
        <BeatLoader color="#f53b57" size={12} margin={5}/>
        </figure>
        <p className="text">لطفا صبر کنید...</p>
      </div>
    </div>
  );
};

export default Loading;
