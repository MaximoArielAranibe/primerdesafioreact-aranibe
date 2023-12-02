import React from "react";

const DescriptionViewer = ({ jsonData }) => {
  return (
    <div>
      {jsonData.description.map((texto, index) => (
        <p key={index} className="description">
          {texto}
        </p>
      ))}
    </div>
  );
};

export default DescriptionViewer;
