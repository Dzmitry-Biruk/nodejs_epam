const express = require('express');
const usersController = require('../controllers/usersController');
const verifyToken = require('../middlewares/authMiddleware');

const usersRouter = express.Router();
usersRouter.use(verifyToken);

usersRouter.param('id', usersController.idParamHook);

usersRouter.route('/api/users/:id').get(usersController.getUserById);

usersRouter.route('/api/users/').get(usersController.getUsers);

module.exports = usersRouter;
