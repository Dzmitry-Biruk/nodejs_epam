const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    req.on('data', (message) => {
      res.write(message);
    });
    req.on('end', () => {
      res.end();
    });
  })
  .listen(3000);
