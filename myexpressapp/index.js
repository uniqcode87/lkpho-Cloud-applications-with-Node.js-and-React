const express = require('express');
const app = new express();

app.get("/", (req,res) => {
    return res.send("Hello World!");
});

let server = app.listen(0, () => {
    console.log("listening at http://localhost:"+server.address().port);
    //console.log(server.address().port);
})