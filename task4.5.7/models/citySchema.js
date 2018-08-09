const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  capital: { type: Boolean, required: true },
  location: { lat: Number, long: Number },
});

const City = mongoose.model('cities', citySchema);

module.exports = City;
