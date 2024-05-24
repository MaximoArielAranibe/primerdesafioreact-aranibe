import { useState } from "react";
import Item from "../Item/Item";
import "./itemlist.css";
import { Button } from "bootstrap";

const ItemList = ({ productos }) => {

  const [visibleProducts, setVisibleProducts] = useState(6);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  return (
    <section className="item__list__container">

      {productos.slice(0, visibleProducts).map((producto, index) => (
        <Item key={index} producto={producto} />
      ))}
      {visibleProducts < productos.length && (
        <button className="item__list--moreproducts" onClick={loadMoreProducts}>Ver más</button>
      )}
      {/* {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })} */}
    </section>
  );
};

export default ItemList;
