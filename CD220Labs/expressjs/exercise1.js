const express = require('express');
const app = new express();
const port = 3000;

app.get('/temperature/:location_code', function(request, response) {
	const varlocation = request.params.location_code;
	console.log(`varlocation = ${varlocation}`);
	response.end(`varlocation = ${varlocation}`);
});

var server = app.listen(port, function() {
	console.log(`listening on URL https://localhost:${port}`);
});