const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
	let urlObj = url.parse(req.url, true);
	
	switch (urlObj.pathname) {
		case "/" :
			res.end("This is Landing Page");
			res.writeHead(200);
			break;
		case "/login" :
			res.writeHead(200);
			res.end("This is Login Page");
			break;
		case "/home" :
			res.writeHead(200);
			res.end("This is Home Page");
			break;
		default :
			res.writeHead(404);
			res.end();
	}
});

server.listen(8080, function () {
   console.log("Listening on port 8080");
});
