import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartProvider.jsx";
import toast from "react-hot-toast";
import "./itemdetail.css";
import { Button } from '../Button/Button.jsx'
import SvgCart from "../SvgCart/SvgCart.jsx";


const ItemDetail = ({ productos }) => {
  const [viewMore, setViewMore] = useState(false);
  const { addToCart } = useCart();
  const { id, name, category, brand, weigth, description, price, stock, thumbnail } = productos;
  const Tab = () => <>&nbsp;</>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productos]);

  const handleBuy = () => {
    addToCart(productos);
    toast.success("Has agregado un producto al carrito", {
      position: "bottom-center",
    });
  };

  const Description = () => {
    return (
      <>
        {description.slice(0, 2).map((descriptionItem, index) => (
          <li key={index} className="description__item">
            {descriptionItem}
          </li>
        ))}
        {viewMore ?
          (<>
            {description.slice(2, description.length).map((descriptionItem, index) => (
              <li key={index} className="description__item">
                {descriptionItem}
              </li>))}
          </>)
          : ""}
      </>
    );
  };

  return (
    <main className="itemdetail">
      <h1> {">"} Detalles del producto</h1>
      <article className="itemdetail__article">
        <div className="itemdetail__header">
          <img className="itemdetail__image" src={thumbnail} alt={name} />
        </div>

        <section className="itemdetail__content">
          <div>
            <div className="itemdetail__brand-info">
              <Link className="itemdetail__brand" to={`/marcas/${brand}`}>
                <span className="hover__underline__animation">{brand}</span>
              </Link>
              <Tab />
              {"/"}
              <Tab />
              <Link className="itemdetail__category" to={`/suplementos/${category}`}>
                <span className="hover__underline__animation">{category}</span>
              </Link>
              <span>{weigth}</span>
            </div>
            <h1 className="itemdetail__name">{name}</h1>
            <ul className="itemdetail__description">
              <Description />
              <div className="itemdetail__view-more" onClick={(() => setViewMore(!viewMore))}>{viewMore ? (<span className="hover__underline__animation--reverse">Ver menos</span>) : (<span className="hover__underline__animation">Ver más</span>)}</div>
            </ul>
          </div>
          <div className="itemdetail__price-actions">
            <p className="itemdetail__price">${price[0]}</p>
            <Button icon={<SvgCart />} className="itemdetail__button" text="Agregar al carrito" onClick={handleBuy} key={id} />
          </div>
        </section>
      </article>
    </main>
  );
};

export default ItemDetail;
