
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [alertVisible, setAlertVisible] = useState(false); // State to control alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // State to hold the alert message

  const handleAddToCart = () => {
    console.log("Adding to cart:", product); // Log to confirm the function is called
    addToCart(product);
    setAlertMessage(`${product.name} added to cart!`); // Set alert message
    setAlertVisible(true); // Show alert

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 p-4">
      {/* Link to product detail page */}
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="py-4 px-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-1 font-medium">Rs {product.price}</p>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
      >
        Add to Cart
      </button>

      {/* Alert for product added to cart */}
      {alertVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          {alertMessage}
          <button onClick={() => setAlertVisible(false)} className="ml-4 underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
