const http = require('http');
const callAPI = require('./call-api');

const requestListener = function (req, res) {
  res.writeHead(200);
  callAPI.call(function(returnVal) {
    console.log(returnVal);
  });
  res.end(`Hello`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(8080);