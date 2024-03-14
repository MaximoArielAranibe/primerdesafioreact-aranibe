import React from "react";
import "./loader.css";
import logo from "./icon-loader.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} className="rotate" alt="loader" />
      <h4 className="loader-title">Cargando...</h4>
    </div>

    /*   <div className="spinner-overlay">
      <div className="spinner"></div>
    </div> */
  );
};

export default Loader;
