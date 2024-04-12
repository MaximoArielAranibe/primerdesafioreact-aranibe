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
  const { id, name, category, brand, weigth, description, price, stock, thumbnail } = productos;


  const handleBuy = () => {
    addToCart(productos);
    toast.success("Has agregado un producto al carrito", {
      position: "bottom-center",
    });
  };

  return (
    <main className="itemdetail__container">
      <article className="itemdetail">
        <div className="itemdetail__img__container">
          <img className="itemdetail__img" src={thumbnail} alt={name} />
        </div>

        <div className="itemdetail__info">
          <Link to={`/marcas/${brand}`}>
            <span>{category}</span>{" "}
            / <span>{brand}</span>
          </Link>
          <h1>{name}<span>{weigth}</span></h1>
          <ul className="description__container">
            {description.map((descriptionItem) => {
              return <li key={id} className="description__item">{descriptionItem}{" "}</li>
            })}
          </ul>
          <div className="price__button__wrapper">
            <p className="itemdetail__price">{price[0]}</p>
            <Button onClick={handleBuy} className="itemdetail__button" key={id} text="Comprar ahora"></Button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ItemDetail;
