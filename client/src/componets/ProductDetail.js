// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(response.data);
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-8 rounded shadow-md w-96 mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-md" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-700 mt-2">${product.price}</p>
      <p className="text-gray-700 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
