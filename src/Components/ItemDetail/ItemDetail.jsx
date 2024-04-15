import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DescriptionViewer from "../helpers/DescriptionViewer.jsx";
import { useCart } from "../../context/CartProvider.jsx";
import toast from "react-hot-toast";
import "./itemdetail.css";
import { Button } from '../Button/Button.jsx'
import SvgCart from "../SvgCart/SvgCart.jsx";


const ItemDetail = ({ productos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productos]);

  const { addToCart } = useCart();
  const { id, name, category, brand, weigth, description, price, stock, thumbnail } = productos;
  const Tab = () => <>&nbsp;</>;

  const [viewMore, setViewMore] = useState(false);

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


  const handleBuy = () => {
    addToCart(productos);
    toast.success("Has agregado un producto al carrito", {
      position: "bottom-center",
    });
  };

  return (
    <main className="itemdetail">
      <article className="itemdetail__article">
        <header className="itemdetail__header">
          <img className="itemdetail__image" src={thumbnail} alt={name} />
        </header>
        <section className="itemdetail__content">
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
          <div>

            <ul className="itemdetail__description">
              <Description />
              <div className="itemdetail__view-more" onClick={(() => setViewMore(!viewMore))}>{viewMore ? (<span className="hover__underline__animation--reverse">Ver menos</span>) : (<span className="hover__underline__animation">Ver más</span>)}</div>
            </ul>
          </div>
          <div className="itemdetail__price-actions">
            <p className="itemdetail__price">${price[0]}</p>
            <Button icon={<SvgCart/>} className="itemdetail__button" text="Agregar al carrito" onClick={handleBuy} key={id} />
          </div>
        </section>
      </article>
    </main>
  );
};

export default ItemDetail;
