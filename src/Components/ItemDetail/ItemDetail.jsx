import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DescriptionViewer from "../helpers/DescriptionViewer.jsx";
import { useCart } from "../../context/CartProvider.jsx";
import toast from "react-hot-toast";
import "./itemdetail.css";

const ItemDetail = ({ productos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productos]);

  const { addToCart } = useCart();
  const { id, name, category, brand, weigth, description, price, stock, thumbnail } = productos;

  const Description = () => {
    return (
      <>
        {description.slice(0, 2).map((descriptionItem, index) => (
          <li key={index} className="description__item">
            {descriptionItem}
          </li>
        ))}
      </>
    );
  };


  const handleBuy = () => {
    addToCart(productos);
    toast.success("Has agregado un producto al carrito", {
      position: "bottom-center",
    });
  };

  return (
    <main className="itemdetail__container">
      <article className="itemdetail">
        <header className="itemdetail__img__container">
          <img className="itemdetail__img" src={thumbnail} alt={name} />
        </header>
        <section className="itemdetail__info">
          <Link className="itemdetail__wrapper" to={`/marcas/${brand}`}>
            <div>
              <span>{category}</span> {" / "}
              <span>{brand}</span>
            </div>
            <span>{weigth}</span>
          </Link>
          <h1 className="itemdetail__name">{name}</h1>
          <div>
            <ul className="description__container">
              <Description />
              <span className="viewmore">Ver mas</span>
            </ul>
          </div>
          <div className="price__button__wrapper">
            <p className="itemdetail__price">{price[0]}</p>
            <button onClick={handleBuy} className="itemdetail__button" key={id}>
              Comprar ahora
            </button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ItemDetail;
