const City = require('../models/citySchema');

// City.find({}, (err, users) => {
//   if (err) throw err;
//
//   return users;
// });

const getCities = (req, res) => {
  City.find({}, (err, users) => {
    if (err) throw err;

    res.json(users || {});
  });
};

module.exports = {
  getCities,
};
