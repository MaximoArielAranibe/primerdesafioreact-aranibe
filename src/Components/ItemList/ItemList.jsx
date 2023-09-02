import React from "react";
import Item from "../Item/Item";
import './index.css'

const ItemList = ({productos}) => {

  return (
    <div className="item_list_container">
      {
        productos.map((producto) => {
          return (<Item key={producto.id} producto={producto} />);
        })
			}
    </div>
  );
};

export default ItemList;
