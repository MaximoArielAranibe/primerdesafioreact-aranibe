import React from "react";
import { toCapital } from "../helpers/toCapital";
import './index.css'

const ItemDetail = ({ productos }) => {
    return (
		<div className="container">
			<div className="producto-imagen_container">
            <img className="producto-imagen" src={productos.thumbnail} alt={productos.name} />
			</div>
            <div className="producto-detalle">
                <h3 className="titulo">{productos.name}</h3>
                <p className="descripcion">{productos.description}</p>
                <p className="categoria">Categoría: {toCapital(productos.category)}</p>
                <p className="precio">${productos.price}</p>
            </div>
        </div>
    );
  
};

export default ItemDetail;
