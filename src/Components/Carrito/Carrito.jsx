import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartProvider";
import "./carrito.css";

const Carrito = () => {
  const { cart, clearCart, removeItem, calculateTotal, addItem, total } = useCart();

  useEffect(()=>{
  },[])
  
  return (
    <header className="cart__container">
      <h1 className="cart__title">Mi carrito</h1>
      <hr />
      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <ul className="cart__list">
          {cart.map((item) => (
            <li key={item.id} className="item">
              <img
                className="item__img"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="item__wrapper">
                <h4 className="item__title">{item.name}</h4>
                <p className="item__quantity">Cantidad: {item.quantity}</p>
                <p className="item__price">${item.price[0] * item.quantity}</p>
              </div>
              <button
                className="item__button"
                onClick={() => removeItem(item.id)}
              >
                -
              </button>
              <button
                className="item__button"
                onClick={() => addItem(item.id)}
              >
                +
              </button>
            </li>
          ))}
          <p>Total: {calculateTotal().toFixed(2)}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
          <p>{total}</p>
        </ul>
      )}
    </header>
  );
};

export default Carrito;
