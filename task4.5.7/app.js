const express = require('express');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  authRouter,
  usersRouter,
  productsRouter,
);

module.exports = { app };
