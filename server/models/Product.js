// server/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
