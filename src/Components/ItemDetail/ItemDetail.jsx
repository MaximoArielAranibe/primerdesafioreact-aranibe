import React, { useEffect } from "react";
import { toCapital } from "../helpers/toCapital";
import "./itemdetail.css";
import { Button } from "../Button/Button.jsx";
import { Link } from "react-router-dom";
import DescriptionViewer from "../helpers/DescriptionViewer.jsx";
import { useCart } from "../../context/CartProvider.jsx";
import toast from "react-hot-toast";

const ItemDetail = ({ productos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productos]);

  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(productos);
    toast.success("Has agregado un producto al carrito", {
      position: "bottom-center",
    });
    console.log(productos);
  };

  return (
    <main className="container">
      <section className="item__container">
        <h1 className="item__name">{productos.name}</h1>
        <Link className="item__brand--link" to={`/marcas/${productos.brand}`}>
          {productos.brand}
        </Link>
        <div className="item__wrapper">
          <img
            className="item__img"
            src={productos.thumbnail}
            alt={productos.name}
          />
          <h2 className="item__price">
            <b>${productos.price[0]}</b>
          </h2>
          <p style={{ textAlign: "center" }}>
            Stock disponible: {productos.stock}
          </p>
          <Button onClick={() => handleBuy()} text="Comprar" />
        </div>
      </section>
      <section className="itemdetail__container">
          <h4 className="item__attributes_title">
          Características del producto
          </h4>
          <div className="item__info">
            <p>Producto: {productos.name}</p>
            <hr />
            <p>Marca: {toCapital(productos.brand)}</p>
            <hr />

            <p>Categoria: {toCapital(productos.category)}</p>
            <hr />

            <p>Peso: {productos.weigth}</p>
            <hr />

            <p>Stock: {productos.stock}</p>
            <hr />
          </div>
        <article className="description-container">
          <h4 className="description-text">DESCRIPCIÓN:</h4>
          <DescriptionViewer jsonData={productos} />
        </article>
      </section>
    </main>
  );
};

export default ItemDetail;
