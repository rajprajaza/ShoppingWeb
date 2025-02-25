// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home"; // Ensure correct path
import ProductDetail from "./Component/ProductDetail"; // Ensure correct path
import Checkout from "./Component/Checkout"; // Ensure correct path
import PaymentSuccess from "./Component/PaymentSuccess"; // Import the new PaymentSuccess component
import Navbar from "./Component/Navbar"; // Ensure correct path
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import { Toaster } from "react-hot-toast"; // Import Toaster

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        
        {/* Main Content Routes */}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment-success" element={<PaymentSuccess />} /> {/* New route for payment success */}
          </Routes>
        </div>
        
        {/* Optional: Display Cart at the bottom right */}
        {/* You can add a Cart component here if needed */}
      </Router>
    </CartProvider>
  );
}

export default App;
