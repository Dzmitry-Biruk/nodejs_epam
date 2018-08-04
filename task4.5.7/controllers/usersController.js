const users = require('../models/usersList');
const find = require('lodash/find');

const idParamHook = (req, res, next, id) => {
  req.user = find(users, { id });
  next();
};

const getUserById = (req, res) => {
  if (!req.user) {
    res.send('Invalid User id!');
  }

  res.json(req.user);
};

const getUsers = (req, res) => {
  res.json(users || []);
};

module.exports = {
  idParamHook,
  getUserById,
  getUsers,
};
