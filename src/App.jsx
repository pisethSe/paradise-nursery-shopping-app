import { Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./components/AboutUs.jsx";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={() => navigate("/plants")}>Get Started</button>
      <AboutUs />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
