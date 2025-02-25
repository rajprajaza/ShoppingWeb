
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://zoroz-backend-w2wh.onrender.com/api/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading products...
        </div>
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

  return (
    <div className="container mx-auto my-16 px-6 lg:px-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Discover Our Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
