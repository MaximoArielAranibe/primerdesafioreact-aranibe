import React from "react";
import Item from "../Item/Item";
import "./index.css";

const ItemList = ({ productos }) => {
  return (
    <section className="item_list_container">
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </section>
  );
};

export default ItemList;
