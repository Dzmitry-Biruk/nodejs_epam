const User = require('../models/userSchema');

const getUserById = async (req, res) => {
  const user = await User.findOne({ id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send();
      throw err;
    }
  });

  res.json(user || {});
};

const getUsers = async (req, res) => {
  const users = await User.find({}, (err) => {
    if (err) {
      res.status(500).send();
      throw err;
    }
  });

  res.json(users || []);
};

module.exports = {
  getUserById,
  getUsers,
};
