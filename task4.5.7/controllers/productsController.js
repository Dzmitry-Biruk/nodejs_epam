const products = require('../models/productsList');
const find = require('lodash/find');
const isEmpty = require('lodash/isEmpty');

const idParamHook = (req, res, next, id) => {
  req.product = find(products, { id });
  next();
};

const getProducts = (req, res) => {
  res.json(products || []);
};

const getProductById = (req, res) => {
  if (!req.product) {
    res.send('Invalid Product id!');
  }

  res.json(req.product);
};

const getProductReviewsById = (req, res) => {
  if (!req.product) {
    res.send('Invalid Product id!');
  } else if (isEmpty(req.product.reviews)) {
    res.send('There is no reviews');
  } else {
    res.json(req.product.reviews);
  }
};

// TODO: Rewrite this with writable streams
const addProduct = (req, res) => {
  const product = find(products, { id: req.body.id });

  if (product) {
    res.send('Product with this id already exist');
  } else {
    products.push(req.body);
    res.json(req.body);
  }
};

module.exports = {
  idParamHook,
  getProducts,
  getProductById,
  getProductReviewsById,
  addProduct,
};
