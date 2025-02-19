// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`http://localhost:5000/products/search?query=${query}`);
    // Handle search results
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-l-md"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-r-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
