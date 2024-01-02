import React from "react";

const DescriptionViewer = ({ jsonData }) => {
  return (
    <div>
      {jsonData.description.map((texto, index) => (
        <div key={index} className="description">
          <p>{texto}</p>
        </div>
      ))}
    </div>
  );
};

export default DescriptionViewer;
