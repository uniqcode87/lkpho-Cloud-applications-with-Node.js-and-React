const express = require("express");
const app = new express();

app.get("/", (req, res) => {
	res.end("This is Landing Page");
});
app.get("/login", (req, res) => {
	res.end("This is Login Page");
});
app.get("/home", (req, res) => {
	res.end("This is Home Page");
});
app.use(function(req, res){
	res.sendStatus(404);
});
app.listen(8080, () => {
  console.log("Listening to port 8080");
});
