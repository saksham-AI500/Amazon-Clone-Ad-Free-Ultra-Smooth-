// src/pages/index.js
import React from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default Home;
