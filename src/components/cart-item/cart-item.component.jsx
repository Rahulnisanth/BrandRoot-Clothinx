import "./cart-item.style.scss";

const CartItem = (cartItems) => {
  const { name, quantity } = cartItems;
  return (
    <div>
      <h1>{name}</h1>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
