/* eslint-disable react/prop-types */
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
