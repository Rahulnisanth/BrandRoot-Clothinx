import { useContext } from "react";

import ShoppingIcon from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <img className="shopping-icon" src={ShoppingIcon} alt="Shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
