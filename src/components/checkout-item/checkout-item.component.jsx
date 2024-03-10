/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { clearItemFromCart, addItemsToCart, removeItemsFromCart } =
    useContext(CartContext);
  const clearanceHandler = () => clearItemFromCart(cartItem);
  const incrementHandler = () => addItemsToCart(cartItem);
  const decrementHandler = () => removeItemsFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> ${price} </span>
      <div className="remove-button" onClick={clearanceHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
