// src/components/ProductCategories.jsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", image: "/images/electronics.jpg" },
  { name: "Fashion", image: "/images/fashion.jpg" },
  { name: "Home & Kitchen", image: "/images/home.jpg" },
  { name: "Books", image: "/images/books.jpg" },
];

function ProductCategories() {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link to={`/category/${category.name.toLowerCase()}`} key={index}>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">{category.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;
