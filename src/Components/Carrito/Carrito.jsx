import React from "react";
import { useCart } from "../../context/CartProvider";
import "./carrito.css";
import '../SvgCart/SvgCart.jsx'
import SvgCart from "../SvgCart/SvgCart.jsx";
import toast from "react-hot-toast";
import emailjs from 'emailjs-com';

const Carrito = () => {
  const { cart, clearCart, removeItem, calculateTotal, addItem } =
    useCart();
  emailjs.init('SAfLDKK81aknEdPMH');
  const userEmail = 'darknesswong@gmail.com'

  const handleRemoveItem = (item) => {
    removeItem(item.id);
    toast.error(`Has eliminado una unidad: ${item.name}`, { position: "bottom-center" });
  };

  const handleAddItem = (item) => {
    addItem(item.id);
    toast.success(`Has agregado una unidad: ${item.name}`,
      { position: "bottom-center" });
  };


  const cartItemsEmail = cart.map((item) => {
    return (
      `${item.name} (${item.quantity} unidades) con un valor de ${(item.price[0] * item.quantity)}\n`
    )
  })

  const sendEmail = () => {
    const templateParams = {
      from_name: 'darknesswong@gmail.com',
      to_name: { userEmail },
      message: `Tu carrito:
        ${cartItemsEmail}
        Total del carrito: $${Number(calculateTotal())}
      Para finalizar la compra podes abonar en nuestro local fisico ubicado en "dirección imaginaria" o abonar por transferencia al cbu : "cbu imaginario" y una vez pagado enviar comprobante al +549********.
        Muchas gracias!`
    };

    emailjs.send('service_36n7yza', 'template_7t9a78a', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response);
      }, (error) => {
        console.error('Error sending email:', error);
      });
  };

  const separadorDeMiles = () => {
    const resultadoString = calculateTotal().toString();
    console.log(resultadoString);
    let resultado = "";
    for (let i = 0; i < resultadoString.length; i++) {
      resultado += resultadoString[i];

      if ((resultadoString.length - i - 1) % 3 === 0 && i < resultadoString.length - 1) {
        resultado += ".";
      }
    }
    return resultado
  }
  separadorDeMiles();

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
            <button onClick={sendEmail}>Comprar carrito</button>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </ul>
      )}
    </main>
  );
};

export default Carrito;
