const City = require('../models/citySchema');

const getCities = (req, res) => {
  City.find({}, (err, cities) => {
    if (err) {
      res.status(500).send(err.message);
      throw err;
    }

    res.json(cities || []);
  });
};

const addCity = async (req, res) => {
  const newCity = await City.create(req.body, (err) => {
    if (err) {
      res.status(500).send(err.message);
      throw err;
    }
  });

  res.json(newCity || []);
};

const getCityById = (req, res) => {
  City.findOne({ id: req.params.id }, (err, city) => {
    if (err) {
      res.status(500).send(err.message);
      throw err;
    }

    res.json(city || []);
  });
};

const updateCityById = () => {};

const deleteById = () => {};

module.exports = {
  getCities,
  addCity,
  getCityById,
  updateCityById,
  deleteById,
};
