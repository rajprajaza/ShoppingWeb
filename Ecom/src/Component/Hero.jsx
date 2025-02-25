// src/components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Biggest Sale of the Season!</h1>
      <p className="text-xl mb-6">Up to 50% off on all electronics and accessories.</p>
      <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition">
        Shop Now
      </button>
    </div>
  );
}

export default Hero;
