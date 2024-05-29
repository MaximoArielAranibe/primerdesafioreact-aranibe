import { useCart } from "../../context/CartProvider";
import "./carrito.css";
import '../SvgCart/SvgCart.jsx'
import toast from "react-hot-toast";
import { ModalForm } from "../ModalForm/ModalForm.jsx";
import { pedirProductos } from "../helpers/pedirProductos.js";
import { useEffect, useState } from "react";
import { Item } from "../Item/Item.jsx"

const Carrito = () => {
  const { cart, clearCart, removeItem, calculateTotal, addItem } =
    useCart();
  const [items, setItems] = useState([])

  useEffect(() => {
    pedirProductos().then((res) => {
      setItems(res)
    });
  }, [])

  const handleRemoveItem = (item) => {
    removeItem(item.id);
    toast.error(`Has eliminado una unidad: ${item.name}`, {
      position: "bottom-center",
      duration: 1200
    });
  };

  const handleAddItem = (item) => {
    addItem(item.id);
    toast.success(`Has agregado una unidad: ${item.name}`,
      {
        position: "bottom-center",
        duration: 1200
      });
  };

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

  const TrashSVG = () => {
    return (
      <span className="trashSVG">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14" viewBox="0 0 26 26">
          <path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"></path>
        </svg>
      </span>
    )
  }

  return (
    <main className="cart__container">
      <h1 className="sedgwick-ave-display-regular cart__container--title">CARRITO DE COMPRAS</h1>
      <hr />
      {cart.length === 0 ? (
        <p className="cart__empty">Uppss, el carrito esta vació.</p>
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
              <div className="item__actions">
                <button className="item__button" onClick={() => handleRemoveItem(item)}>-</button>
                <button className="item__button" onClick={() => handleAddItem(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <div className="cart__actions">
        <p className="cart__total">Total: <span> ${separadorDeMiles()}</span></p>
        <ModalForm />
        <button onClick={clearCart}>Vaciar carrito<TrashSVG /></button>
      </div>
      <div className="more__items__container">
        <p className="sedgwick-ave-display-regular">Articulos que podrián interesarte...</p>
        <ul className="more__items">
          {items.slice(7, 10).map((e) => (
            <li key={e.id}><Item producto={e} /></li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Carrito;
