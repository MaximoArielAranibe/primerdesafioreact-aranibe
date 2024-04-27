import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartProvider";
import "./carrito.css";
import '../SvgCart/SvgCart.jsx'
import SvgCart from "../SvgCart/SvgCart.jsx";
import toast from "react-hot-toast";
import { ModalForm } from "../ModalForm/ModalForm.jsx";

const Carrito = () => {
  const { cart, clearCart, removeItem, calculateTotal, addItem } =
    useCart();

  const separadorDeMiles = () => {
    const resultadoString = calculateTotal().toString();
    let resultado = "";
    for (let i = 0; i < resultadoString.length; i++) {
      resultado += resultadoString[i];
      if ((resultadoString.length - i - 1) % 3 === 0 && i < resultadoString.length - 1) {
        resultado += ".";
      }
    }
    return resultado
  }


  const handleRemoveItem = (item) => {
    removeItem(item.id);
    toast.error(`Has eliminado una unidad: ${item.name}`, { position: "bottom-center" });
  };

  const handleAddItem = (item) => {
    addItem(item.id);
    toast.success(`Has agregado una unidad: ${item.name}`,
      { position: "bottom-center" });
  };
  return (
    <main className="cart__container">
      <h1 className="cart__title">CARRITO<SvgCart /></h1>
      <hr />
      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <ul className="cart__list">
          {cart.map((item) => (
            <li key={item.id} className="item">
              <div className="item__img__container">
                <img
                  className="item__img"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="item__wrapper">
                <h4 className="item__title">{item.name}</h4>
                <p className="item__quantity">Cantidad: <span>{item.quantity}</span></p>
                <p className="item__price"><span>${item.price[0] * item.quantity}</span> ({item.price[0]})</p>
              </div>
              <button
                className="item__button"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
              <button className="item__button" onClick={() => handleAddItem(item)}>
                +
              </button>
            </li>
          ))}
          <p className="cart__total">Total: <span> ${separadorDeMiles()}</span></p>
          <div className="cart__actions">
            <ModalForm />
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </ul>
      )}
    </main>
  );
};

export default Carrito;
