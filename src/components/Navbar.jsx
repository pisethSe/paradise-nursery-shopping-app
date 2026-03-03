import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#fff" }}>
      <div>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/plants" style={{ marginRight: 10 }}>Plants</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div>🛒 {totalQty}</div>
    </nav>
  );
}
