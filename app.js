var express = require("express");
var app = express();
var volleyball = require("volleyball");


app.listen(3000, function(){
    console.log("server listening");
})

app.use('/jelly', function(req, res, next){
    console.log("You reached the jelly area");
    next();
})

app.use('/', function (req, res, next) {
    // console.log("in first use");
    res.send("second use");
    next();
})

app.use(volleyball);
// difference b/w use and get? 

app.get("/", function(req, res, next){
    res.send("Hello!!!!!");
})

// app.use("/", function(req, res, next){
//     res.send("use was used");
// })
