import React from "react";
import "./index.css";

export const Button = ({text,icon, ...props}) => {
  return (
    <div className="product_button_container">
      <button className="product_button" {...props}>
        {text}
        {icon}
      </button>
    </div>
  );
};