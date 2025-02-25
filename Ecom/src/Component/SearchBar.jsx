// src/components/SearchBar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?query=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center bg-gray-200 rounded-lg p-2">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-3 py-2 rounded-l-lg focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
