import React from "react";
import "./loader.css";
import logo from "../../assets/icon-loader.png";

const Loader = () => {
  return (
    <div className="loader__container">
      <img src={logo} className="rotate" alt="loader" />
      <h4 className="loader__title">Cargando...</h4>
    </div>
  );
};

export default Loader;
