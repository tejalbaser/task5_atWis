import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./myWork/Navbar";
import ProductList from "./myWork/ProductList";
import Cart from "./myWork/cart";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />

      {/* Define routes for different views */}
      <Routes>
        <Route
          path="/products"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
