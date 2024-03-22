import React from "react";
import "./index.css";

export const Button = ({ text, icon, ...props }) => {
  return (
    <div className="button__container">
      <button className="button__product" {...props}>
        {text}
        {icon}
      </button>
    </div>
  );
};
