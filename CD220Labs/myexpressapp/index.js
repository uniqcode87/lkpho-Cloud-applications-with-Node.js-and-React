const express = require("express");
const app = new express();

app.get("/", (req, res) => {
    return res.send("Hello World! test");
});

let server = app.listen(3333, () => {
    console.log("app starting at http://localhost:" + server.address());
})