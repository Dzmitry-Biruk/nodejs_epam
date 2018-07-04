const express = require('express');
const citiesController = require('../controllers/citiesController');
// const verifyToken = require('../middlewares/authMiddleware');


const citiesRouter = express.Router();
// productsRouter.use(verifyToken);

// citiesRouter.param('id', productsController.idParamHook);


citiesRouter.route('/api/cities')
  .get(citiesController.getCities);
// .post(productsController.addProduct);

// citiesRouter.route('/api/products/:id')
//   .get(productsController.getProductById);
//
// citiesRouter.route('/api/products/:id/reviews')
//   .get(productsController.getProductReviewsById);


module.exports = citiesRouter;
