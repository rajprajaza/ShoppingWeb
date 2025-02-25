// src/components/ProductCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

// src/components/ProductCarousel.jsx
const sampleProducts = [
  { id: 1, name: "Laptop", price: 999, image: "/images/laptop.jpg" },
  { id: 2, name: "Headphones", price: 199, image: "/images/headphones.jpg" },
  { id: 3, name: "Smartphone", price: 699, image: "/images/smartphone.jpg" },
  { id: 4, name: "Tablet", price: 499, image: "/images/tablet.jpg" },
  { id: 5, name: "Smartwatch", price: 249, image: "/images/smartwatch.jpg" },
  { id: 6, name: "Camera", price: 899, image: "/images/camera.jpg" },
  
];


function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Function to move the carousel to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Auto-scroll setup
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Effect to reset the carousel position when reaching the end of the duplicated array
  useEffect(() => {
    if (currentIndex === sampleProducts.length) {
      setTimeout(() => setCurrentIndex(0), 500); // Wait a moment to create a seamless effect
    }
  }, [currentIndex]);

  // Create a duplicated array to make infinite scrolling
  const displayedProducts = [...sampleProducts, ...sampleProducts]; // Duplicate for infinite scroll effect

  return (
    <div className="relative my-10 overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-center">Popular Products</h2>
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(100 / displayedProducts.length) * currentIndex}%)`,
          width: `${100 * displayedProducts.length / sampleProducts.length}%`, // Adjust width to accommodate all products
        }}
      >
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="w-1/6 p-4 flex-shrink-0" // Adjust width to display the right number of products per view
          >
            <img
              src={product.image}
              alt={product.name}
              className="m-auto h-40 object-content rounded-lg"
            />
            <div className="text-center mt-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p>Rs{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
