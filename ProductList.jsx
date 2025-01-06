import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const products = [
  { id: 1, name: "Product 1", price: 100, image: product1 },
  { id: 2, name: "Product 2", price: 200, image: product2 },
  { id: 3, name: "Product 3", price: 300, image: product3 },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            style={{height:"300px", width:"300px"}}
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
