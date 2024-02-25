import React, { useEffect } from "react";
import { useCart } from "../../context/CartProvider";

const Carrito = () => {
  const { cart, clearCart, removeItem } = useCart();

  const carritoGuardado = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    if (carritoGuardado) {
      console.log("Cart recuperado");
      console.log(carritoGuardado);
      console.log(cart);
    }
  });

  return (
    <section className="cart__container">
      <h2 className="cart__title">ShoppingCart</h2>
      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <ul>
          <button onClick={clearCart}>Vaciar carrito</button>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price[0] * item.quantity} - {item.quantity}
              <button onClick={() => removeItem(item.id)}>
                Quitar del carrito
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Carrito;
