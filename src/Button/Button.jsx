import React from "react";
import "./index.css";

export const Button = (props) => {
  return (
    <div className="product_button_container">
      <button className="product_button">
        {props.text}
        {props.icon}
      </button>
    </div>
  );
};