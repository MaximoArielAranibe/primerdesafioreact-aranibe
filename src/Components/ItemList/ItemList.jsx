import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";

const ItemList = ({ productos }) => {
  return (
    <section className="item__list__container">
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </section>
  );
};

export default ItemList;
