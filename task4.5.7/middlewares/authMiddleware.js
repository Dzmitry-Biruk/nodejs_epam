const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, 'privateKey', (err) => {
      if (err) {
        res.json({ success: false, message: 'Invalid token' });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ success: false, message: 'No token provided' });
  }
};

module.exports = verifyToken;
