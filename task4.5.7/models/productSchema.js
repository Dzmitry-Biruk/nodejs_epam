const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  price: Number,
  options: Array,
  reviews: Array,
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
