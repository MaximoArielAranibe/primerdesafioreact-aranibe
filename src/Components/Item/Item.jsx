import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { capitalize } from "@mui/material";
import { Button } from "../../Button/Button";


const Item = ({ producto }) => {
  return (
    <article className="product_container">
      <div className="image_container">
        <img
          className="product_image"
          src={producto.thumbnail}
          alt={producto.title}
        />
      </div>
      <div className="info_container">
        <p className="product_brand">
          <Link className="product_link-category" to={`/marcas/${producto.brand}`}>{capitalize(producto.brand)}</Link>
          {` / `}
          <Link className="product_link-category" to={`/suplementos/${producto.category}`}>{capitalize(producto.category)}</Link>
        </p>
        <div className="product_name-container">
          <h3 className="product_name">{producto.name}</h3>
        </div>
        <div className="price_container">
          <span className="product_price">${producto.price[0]}</span>
          {producto.price[1] && (
            <span className="product_old_price">${producto.price[1]}</span>
          )}
        </div>
          <Link to={`/item/${producto.id}`}>
            <Button text='Ver mas sobre este producto'/>
          </Link>
      </div>
    </article>
  );
};

export default Item;
