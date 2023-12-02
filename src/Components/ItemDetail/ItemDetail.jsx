import React, { useEffect, useState } from "react";
import { toCapital } from "../helpers/toCapital";
import "./index.css";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import SvgCart from "../SvgCart/SvgCart";
import { Text } from "../Text/Text.jsx";
import DescriptionViewer from "../helpers/DescriptionViewer.jsx";

const ItemDetail = ({ productos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [quantity, setQuantity] = useState(0);


  return (
    <main className="container">
      <section className="product-image_container">
        <h3 className="name">
          {productos.name}
          <Link to={toCapital(productos.brand)} />
        </h3>
        <div className="image-buttons">
          <img
            className="product-image"
            src={productos.thumbnail}
            alt={productos.name}
          />
          <p className="price">
            <b>${productos.price[0]}</b>
          </p>
          <form action="" className="quantity-container">
            <label htmlFor="quantity">Elegir cantidad:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              min={1}
              max={5}
              required
            />
          </form>
          <Button text="Comprar" />
          <Button text="Agregar al carrito" icon={<SvgCart />}></Button>
        </div>
      </section>
      <section className="product-detail">
        <article className="product-attributes">
          <Text className="text" texto="Características del producto:" />
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
          </div>
        </article>
        <article className="description-text">
          <DescriptionViewer jsonData={productos} />
        </article>
      </section>
    </main>
  );
};

export default ItemDetail;
