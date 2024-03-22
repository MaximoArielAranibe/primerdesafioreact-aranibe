import React, { useEffect } from "react";
import { toCapital } from "../helpers/toCapital";
import { Button } from "../Button/Button.jsx";
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

  const handleBuy = () => {
    addToCart(productos);
    toast.success("Has agregado un producto al carrito", {
      position: "bottom-center",
    });
  };

  return (
    <main className="itemdetail__container">
      <section className="itemdetail__card">
        <h1 className="itemdetail__name">{productos.name}</h1>
        <Link className="itemdetail__brand" to={`/marcas/${productos.brand}`}>
          <span className="itemdetail__brand--link">{productos.category}</span>{" "}
          / <span className="itemdetail__brand--link">{productos.brand}</span>
        </Link>
        <img
          className="itemdetail__img"
          src={productos.thumbnail}
          alt={productos.name}
        />
        <h2 className="itemdetail__price">
          <b>${productos.price[0]}</b>
        </h2>
        <p className="itemdetail__stock" style={{ textAlign: "center" }}>
          Stock disponible: {productos.stock}
        </p>
        <Button onClick={() => handleBuy()} text="Agregar al carrito" />
      </section>
      <section className="itemdetail__caracteristicas">
        <h4 className="itemdetail__caracteristicas__title">
          Características del producto
        </h4>
        <div className="itemdetail__info">
          <p>Producto: {productos.name}</p>
          <hr />
          <p>Marca: {toCapital(productos.brand)}</p>
          <hr />

          <p>Categoria: {toCapital(productos.category)}</p>
          <hr />

          <p>Peso: {productos.weigth}</p>
          <hr />
          <h4 className="itemdetail__description">DESCRIPCIÓN:</h4>
          <DescriptionViewer jsonData={productos} />
        </div>
      </section>
    </main>
  );
};

export default ItemDetail;
