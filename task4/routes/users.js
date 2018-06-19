const express = require('express');
const find = require('lodash/find');
const users = require('../models/usersList');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();


usersRouter.param('id', (req, res, next, id) => {
  req.user = find(users, { id });
  next();
});


usersRouter.route('/api/users/:id')
  .get((req, res) => { usersController.getUserById(req, res); });

usersRouter.route('/api/users/')
  .get((req, res) => { usersController.getUsers(req, res, users); });


module.exports = usersRouter;
