const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  password: Number,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
