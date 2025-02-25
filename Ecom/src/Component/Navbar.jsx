
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


function Navbar() {
  const { state } = useCart();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        eShop
      </Link>

      <Link to="/checkout" className="relative">
        🛒
        {state?.items?.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-xs px-2 rounded-full">
            {state.items.length}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
