import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const storagedItems = JSON.parse(localStorage.getItem("cart"));

  const [cart, setCart] = useState(storagedItems || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (item) => {
    const itemExist = cart.find((itemCart) => itemCart.id === item.id);
    if (itemExist) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      cart.push(updatedCart);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    const filteredCart = updatedCart.filter(
      (cartItem) => cartItem.quantity > 0
    );
    setCart(filteredCart);
  };

  const addItem = (itemId) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    const filteredCart = updatedCart.filter(
      (cartItem) => cartItem.quantity > 0
    );
    setCart(filteredCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price[0] * item.quantity, 0);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, calculateTotal, addItem, totalCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
