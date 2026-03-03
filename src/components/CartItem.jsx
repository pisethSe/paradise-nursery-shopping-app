import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.name} style={{ marginBottom: 15 }}>
          <img src={item.image} width="100" alt={item.name} />
          <p>{item.name} - ${item.price}</p>
          <p>Item Total: ${item.price * item.quantity}</p>
          <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>-</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}
