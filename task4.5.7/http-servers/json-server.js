const http = require('http');
const { product } = require('../config/product.js');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(product));
  })
  .listen(3000);
