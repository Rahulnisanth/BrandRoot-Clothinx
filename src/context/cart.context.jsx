/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // finding the product ot add in cart items...
  const existingCartItem = cartItems.find((cartItem) => {
    cartItem.id === productToAdd.id;
  });

  // if found add the quantity of the cart item...
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cart items...
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setCartOpen, addItemsToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
