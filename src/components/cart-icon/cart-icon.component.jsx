import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);
  const toggleCartOpen = () => setCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <img className="shopping-icon" src={ShoppingIcon} alt="Shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
