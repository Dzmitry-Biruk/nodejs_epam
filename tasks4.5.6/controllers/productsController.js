const find = require('lodash/find');
const isEmpty = require('lodash/isEmpty');
const { Product } = require('../models');

const getProductFromDb = () => Product.findAll();

const idParamHook = (req, res, next, id) => {
  req.product = find(getProductFromDb(), { id });
  next();
};

const getProducts = (req, res) => {
  res.json(getProductFromDb() || []);
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
  const product = find(getProductFromDb(), { id: req.body.id });

  if (product) {
    res.send('Product with this id already exist');
  } else {
    getProductFromDb().push(req.body);
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
