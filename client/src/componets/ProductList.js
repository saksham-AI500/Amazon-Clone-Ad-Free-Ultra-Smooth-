// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product._id} className="bg-white p-4 rounded shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-md" />
          <h3 className="text-xl font-bold mt-2">{product.name}</h3>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
