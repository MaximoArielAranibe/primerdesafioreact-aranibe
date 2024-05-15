import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { capitalize } from "@mui/material";
import { Button } from "../Button/Button";
import { useCart } from "../../context/CartProvider";
import toast from "react-hot-toast";

export const Item = ({ producto }) => {
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(producto);
    toast.success("Has agregado un producto al carrito", {
      position: "bottom-center",
    });
  };

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
          <Link
            className="product_link-category hover__underline__animation"
            to={`/marcas/${producto.brand}`}
          >
            {capitalize(producto.brand)}
          </Link>
          {` / `}
          <Link
            className="product_link-category hover__underline__animation"
            to={`/suplementos/${producto.category}`}
          >
            {capitalize(producto.category)}
          </Link>
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
        <Link className="link__item" to={`/item/${producto.id}`}>
          <Button text="Ver mas sobre este producto" />
        </Link>
        <div className="link__item">
          <Button onClick={() => handleBuy()} text="Comprar producto" />
        </div>
      </div>
    </article>
  );
};

export default Item;
