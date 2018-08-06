const Product = require('../models/productSchema');
const isEmpty = require('lodash/isEmpty');

const getProducts = async (req, res) => {
  const products = await Product.find({}, (err) => {
    if (err) {
      res.status(500).send();
      throw err;
    }
  });

  res.json(products || []);
};

const getProductById = async (req, res) => {
  const product = await Product.findOne({ id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send();
      throw err;
    }
  });

  res.json(product || []);
};

const getProductReviewsById = async (req, res) => {
  const product =
    (await Product.findOne({ id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send();
        throw err;
      }
    })) || {};

  if (isEmpty(product.reviews)) {
    res.send('There is no reviews');
  } else {
    res.json(product.reviews);
  }
};

const addProduct = async (req, res) => {
  const product = await Product.findOne({ id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send();
      throw err;
    }
  });

  if (isEmpty(product)) {
    Product.create(req.body, (err) => {
      if (err) {
        res.status(500).send();
        throw err;
      }

      res.send('Data added to Database');
    });
  } else {
    res.send('Product with this id already exist');
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductReviewsById,
  addProduct,
};
