import React, { useEffect, useState, useContext } from "react";
import { toCapital } from "../helpers/toCapital";
import "./index.css";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import DescriptionViewer from "../helpers/DescriptionViewer.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx"
import { CartContext } from "../../context/CartProvider.jsx";

const ItemDetail = ({ productos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productos]);

  const [cart, setCart] = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  if (quantity > productos.stock || quantity === 0) {
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
          <form
            className="quantity-container"
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <label htmlFor="quantity" className="quantity">
              <h4>Elegir cantidad:</h4>
            </label>
            <input
              type="number"
              name="quantity"
              min={1}
              max={productos.stock}
              value={quantity}
              required
              onChange={(ev) => setQuantity(ev.target.value)}
            />
          </form>
          <p style={{ textAlign: "center" }}>
            Stock disponible: {productos.stock}
          </p>
          <Button onClick={() => {
            
          }} text="Comprar" />
          <ItemCount initial={1} stock={productos.stock} onAdd={onAdd} />
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
 */}    </main>
  );
};

export default ItemDetail;
