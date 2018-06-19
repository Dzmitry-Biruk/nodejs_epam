const express = require('express');
const authController = require('../controllers/authController');


const authRouter = express.Router();


authRouter.route('/auth')
  .post((req, res) => { authController.authUser(req, res); });


module.exports = authRouter;
