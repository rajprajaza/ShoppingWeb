
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to hold the product details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility
  const { addToCart } = useCart(); // Get the addToCart function from context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://zoroz-backend-w2wh.onrender.com/api/products/${id}`); // Backend URL
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product); // This will include the image and details now
    setAlertVisible(true); // Show the alert

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">Loading product details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-20">
        <p className="text-red-500 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  if (!product) {
    return null; // Or some fallback UI
  }

  return (
    <div className="container mx-auto my-16 px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        
        {/* Product Details */}
        <div className="lg:w-1/2 lg:ml-6 mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-4">Price: <span className="font-semibold text-red-600">Rs {product.price}</span></p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600">4.5 (200 Reviews)</span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Alert for product added to cart */}
      {alertVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          {`${product.name} added to cart!`}
        </div>
      )}

      {/* Additional Product Information */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-bold text-gray-800">Product Details</h3>
        <p className="text-gray-600 mt-2">{product.details}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
