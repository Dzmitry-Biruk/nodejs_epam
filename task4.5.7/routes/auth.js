const express = require('express');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.route('/auth').post(authController.authUser);

module.exports = authRouter;
