import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="product_container">
      <h2 className="product_name">{producto.name}</h2>
      <img
        className="product_image"
        src={producto.thumbnail}
        alt={producto.title}
      />
      <p className="product_price">${producto.price}</p>
      <div className="product_button_container">
        <button className="product_button">
          <Link to={`/item/${producto.id}`}>Ver mas</Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
