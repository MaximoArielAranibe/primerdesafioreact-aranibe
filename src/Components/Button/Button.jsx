import React from "react";
import "./index.css";

export const Button = ({ text, icon, className ,...props}) => {
  const buttonClassName = `button__product ${className || ""}`;

  return (
    <div className="button__container">
      <button {...props} className={buttonClassName} >
        {text}
        {icon}
      </button>
    </div>
  );
};
