const find = require('lodash/find');
const jwt = require('jsonwebtoken');
const users = require('../models/usersList');


const matchCredentials = (name, password) => {
  const user = find(users, { name });
  if (user && user.password === password) {
    return true;
  }
  return false;
};

const authUser = (req, res) => {
  const { name, password } = req.body;
  const isValidCredentials = matchCredentials(name, password);

  if (isValidCredentials) {
    const token = jwt.sign({ name }, 'privateKey');
    res.status(200)
      .send({
        data: {
          user: {
            email: `${name}@gmail.com`,
            username: name,
          },
        },
        token,
      });
  } else {
    res.status(404)
      .send('Invalid userName or password');
  }
};


module.exports = { authUser };
