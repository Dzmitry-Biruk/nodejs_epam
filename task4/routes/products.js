const express = require('express');
const find = require('lodash/find');
const products = require('../models/productsList');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();


productsRouter.param('id', (req, res, next, id) => {
  req.product = find(products, { id });
  next();
});


productsRouter.route('/api/products')
  .get((req, res) => { productsController.getProducts(req, res, products); })
  .post((req, res) => { productsController.putProduct(req, res); }); // not implemented yet

productsRouter.route('/api/products/:id')
  .get((req, res) => { productsController.getProductById(req, res); });

productsRouter.route('/api/products/:id/reviews')
  .get((req, res) => { productsController.getProductById(req, res, products); }); // not impl yet


module.exports = productsRouter;
