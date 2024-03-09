/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../buttons/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};
export default CartDropDown;
