import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice.jsx";
import Navbar from "./Navbar.jsx";

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plants = {
    "Low Light": [
      { name: "ZZ Plant", price: 18, image: "https://via.placeholder.com/100" },
      { name: "Snake Plant", price: 16, image: "https://via.placeholder.com/100" },
      { name: "Pothos", price: 12, image: "https://via.placeholder.com/100" },
      { name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
      { name: "Chinese Evergreen", price: 19, image: "https://via.placeholder.com/100" },
      { name: "Cast Iron Plant", price: 22, image: "https://via.placeholder.com/100" }
    ],
    "Air Purifying": [
      { name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
      { name: "Rubber Plant", price: 24, image: "https://via.placeholder.com/100" },
      { name: "Areca Palm", price: 28, image: "https://via.placeholder.com/100" },
      { name: "Boston Fern", price: 15, image: "https://via.placeholder.com/100" },
      { name: "Spider Plant", price: 11, image: "https://via.placeholder.com/100" },
      { name: "Bamboo Palm", price: 26, image: "https://via.placeholder.com/100" }
    ],
    "Easy Care": [
      { name: "Jade Plant", price: 14, image: "https://via.placeholder.com/100" },
      { name: "Monstera", price: 30, image: "https://via.placeholder.com/100" },
      { name: "Philodendron", price: 17, image: "https://via.placeholder.com/100" },
      { name: "Fiddle Leaf Fig", price: 35, image: "https://via.placeholder.com/100" },
      { name: "Calathea", price: 21, image: "https://via.placeholder.com/100" },
      { name: "Dracaena", price: 18, image: "https://via.placeholder.com/100" }
    ]
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <Navbar />
      <h2>Plant Shop</h2>
      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          {items.map((plant) => (
            <div key={plant.name} style={{ marginBottom: 10 }}>
              <img src={plant.image} width="100" alt={plant.name} />
              <p>{plant.name} - ${plant.price}</p>
              <button
                onClick={() => handleAdd(plant)}
                disabled={addedToCart[plant.name]}
              >
                {addedToCart[plant.name] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
