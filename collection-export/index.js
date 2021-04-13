var http = require('http');
require('./collection-export');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(myCollection());
//   res.end('Hello World!');
}).listen(8080);
