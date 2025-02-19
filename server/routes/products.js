// server/routes/products.js
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

router.get('/search', async (req, res) => {
  const query = req.query.query;
  const products = await Product.find({ name: { $regex: query, $options: 'i' } });
  res.send(products);
});

module.exports = router;
