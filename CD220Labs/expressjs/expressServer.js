const express = require('express');
const app = new express();
const months = ["January"
            , "February"
            , "March"
            , "April"
            , "May"
            , "June"
            , "July"
            , "August"
            , "September"
            , "October"
            , "November"
            , "December"];

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})


app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetch/:num",(req,res)=>{
    let num = parseInt(req.params.num);
    if (!Number.isInteger(num)) {
        res.send("The input given (" + req.params.num + ") is invalid, please give an integer");
        return;
    }
    if (num < 0 || num > 11) {
        res.send("The number given (" + num + ") is invalid, please give a correct value [0..11]");
        return;
    }
    res.send("Welcome " + months[num]);
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

