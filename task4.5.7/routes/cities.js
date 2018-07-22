const express = require('express');
const citiesController = require('../controllers/citiesController');
const verifyToken = require('../middlewares/authMiddleware');


const citiesRouter = express.Router();
citiesRouter.use(verifyToken);


citiesRouter.route('/api/cities')
  .get(citiesController.getCities);
// .post(citiesController.addCity);

citiesRouter.route('/api/cities/:id')
  .get(citiesController.getCityById);

module.exports = citiesRouter;
