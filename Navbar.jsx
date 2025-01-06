import React from "react";
import logo from "../assets/logo.png"; // Adjust path based on your structure
import {Link} from "react-router-dom"

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Site Logo" />
        <h1>Shopping Website</h1>
      </div>
      <div className="nav-links" style={{color:"white"}}>
        <Link to="/products" className="nav-link">Products</Link>
        <b> | </b>
        <Link to="/cart" className="nav-link">Cart</Link>
      </div>
      <div className="cart-icon">
        🛒 Cart: <span>{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
