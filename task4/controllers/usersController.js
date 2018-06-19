const getUserById = (req, res) => {
  if (!req.user) {
    res.send('Invalid User id!');
  }

  res.json(req.user);
};

const getUsers = (req, res, users) => {
  res.json(users || []);
};

module.exports = {
  getUserById,
  getUsers,
};
