const http = require('http');
module.exports.call = function getDate(resultCallback) {

  console.log("ini dari call-api.js");

  var options = {
    host: "w1.weather.gov",
    path: "/xml/current_obs/KSFO.xml",
  };
  console.log("akan request");
  var request = http.request(options, function (response) {
    var buffer = "";
    var result = "";
    console.log("sedang request");

    response.on("data", function (chunk) {
      buffer += chunk;
    });

    response.on("end", function (chunk) {
      console.log("sudah di end");
      resultCallback(null, "callback dari call-api.js");
    });
  });
  console.log("request dilakukan");
  request.end();
};
