const express = require('express');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

app.use(usersRouter, productsRouter);

module.exports = { app };
