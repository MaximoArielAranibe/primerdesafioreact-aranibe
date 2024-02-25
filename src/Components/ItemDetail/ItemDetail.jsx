import React, { useEffect, useState } from "react";
import { toCapital } from "../helpers/toCapital";
import "./index.css";
import { Button } from "../Button/Button.jsx";
import { Link } from "react-router-dom";
import DescriptionViewer from "../helpers/DescriptionViewer.jsx";
import { useCart } from "../../context/CartProvider.jsx";

const ItemDetail = ({ productos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productos]);

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(productos);
    console.log(productos);
  };

  if (quantity > productos.stock) {
    alert(`Solo hay ${productos.stock} unidades disponibles`);
    setQuantity(1);
  }

  return (
    <main className="container">
      <section className="product-image_container">
        <h1 className="name">{productos.name}</h1>
        <Link to={`/marcas/${productos.brand}`} className="brand-link">
          {productos.brand}
        </Link>
        <div className="image-buttons">
          <img
            className="product-image"
            src={productos.thumbnail}
            alt={productos.name}
          />
          <h2 className="price">
            <b>${productos.price[0] * quantity}</b>
          </h2>

          <p style={{ textAlign: "center" }}>
            Stock disponible: {productos.stock}
          </p>
          <Button onClick={() => handleBuy()} text="Comprar" />
        </div>
      </section>
      <section className="product-detail">
        <article className="product-attributes">
          <div className="product-attributes_title">
            Caracteristicas del producto
          </div>
          <div className="product-info">
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
        </article>
        <article className="description-container">
          <h4 className="description-text">DESCRIPCIÓN:</h4>
          <DescriptionViewer jsonData={productos} />
        </article>
      </section>
      {/*       {goToCart ? <Link to="/carrito">Terminar compra</Link> : false}
       */}{" "}
    </main>
  );
};

export default ItemDetail;
