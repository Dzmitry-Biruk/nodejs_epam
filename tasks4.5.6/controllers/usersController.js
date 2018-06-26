const find = require('lodash/find');
const User = require('../models/user');

const getUsersFromDb = () => User.findAll();

const idParamHook = (req, res, next, id) => {
  req.user = find(getUsersFromDb(), { id });
  next();
};

const getUserById = (req, res) => {
  if (!req.user) {
    res.send('Invalid User id!');
  }

  res.json(req.user);
};


const getUsers = (req, res) => {
  res.json(getUsersFromDb() || []);
};

module.exports = {
  idParamHook,
  getUserById,
  getUsers,
};
