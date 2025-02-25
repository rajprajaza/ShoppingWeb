
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";

// function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products").then(response => {
//       setProducts(response.data);
//     });
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold">Products</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


// src/s/Home.jsx
import React from "react";
import Hero from "../Component/Hero";
import ProductCategories from "../Component/ProductCategories";
import ProductCarousel from "../Component/ProductCarousel";
import ProductList from "../Component/ProductList";

function Home() {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <ProductCarousel />
      <ProductList />
    </div>
  );
}

export default Home;
