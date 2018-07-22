const City = require('../models/citySchema');

const getCities = (req, res) => {
  City.find({}, (err, cities) => {
    if (err) throw err;

    res.json(cities || []);
  });
};

const getCityById = (req, res) => {
  City.findOne({ id: req.params.id }, (err, city) => {
    if (err) throw err;

    res.json(city || []);
  });
};

module.exports = {
  getCities,
  getCityById,
};
