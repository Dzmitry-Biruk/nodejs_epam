const express = require('express');
const mongoose = require('mongoose');
const { dbUrl } = require('./config/db');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const citiesRouter = require('./routes/cities');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  authRouter,
  usersRouter,
  productsRouter,
  citiesRouter,
);

mongoose.connect(dbUrl);

module.exports = { app };
