const express = require('express');
const productsController = require('../controllers/productsController');
const verifyToken = require('../middlewares/authMiddleware');


const productsRouter = express.Router();
productsRouter.use(verifyToken);

productsRouter.param('id', productsController.idParamHook);


productsRouter.route('/api/products')
  .get(productsController.getProducts)
  .post(productsController.addProduct);

productsRouter.route('/api/products/:id')
  .get(productsController.getProductById);

productsRouter.route('/api/products/:id/reviews')
  .get(productsController.getProductReviewsById);


module.exports = productsRouter;
