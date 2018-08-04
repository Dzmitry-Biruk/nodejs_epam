const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const matchCredentials = async (name, password) => {
  const authUser = await User.findOne({ name }, (err, user) => {
    if (err) throw err;

    return user;
  });

  if (authUser.password === password) {
    return true;
  }
  return false;
};

const authUser = async (req, res) => {
  const { name, password } = req.body;
  const isValidCredentials = await matchCredentials(name, password);

  if (isValidCredentials) {
    const token = jwt.sign({ name }, 'privateKey');
    res.status(200).send({
      data: {
        user: {
          email: `${name}@gmail.com`,
          username: name,
        },
      },
      token,
    });
  } else {
    res.status(404).send('Invalid userName or password');
  }
};

module.exports = { authUser };
