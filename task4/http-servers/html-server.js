const http = require('http');
const { readFileSync } = require('fs');

const originalHtml = readFileSync('./data/index.html', { encoding: 'utf8' });
const modifiedHtml = originalHtml.replace('{message}', 'Html Server message');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(modifiedHtml);
}).listen(3000);
