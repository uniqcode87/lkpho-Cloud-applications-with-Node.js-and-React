const http = require('http');
const today = require('./today');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const requestListener = function (req, res) {
  res.writeHead(200);
  
  // prepare the greetings
  var dateVal = today.getDate();
  var periodOfTime = "dawn";
  if (dateVal.getHours() > 6 && dateVal.getHours() < 11) {
    periodOfTime = "morning";
  } else if (dateVal.getHours() >= 11 && dateVal.getHours() < 18) {
    periodOfTime = "afternoon";
  } else if (dateVal.getHours() >= 18 && dateVal.getHours() <= 24) {
    periodOfTime = "night";
  }

  res.end(`Hello, good ${periodOfTime}. Today is ${days[dateVal.getDay()]}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);