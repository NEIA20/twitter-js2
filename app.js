var express = require("express");
var app = express();
var volleyball = require("volleyball");
var nunjucks = require("nunjucks");

nunjucks.configure("views", { noCache: true });
app.set("view engine", "html");
app.engine("html", nunjucks.render);


app.listen(3000, function(){
    console.log("server listening");
})

app.use('/jelly', function(req, res, next){
    console.log("You reached the jelly area");
    next();
})

app.use('/', function (req, res, next) {
    // console.log("in first use");
    var people = [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}];
    res.render("index", {title: "Awesome People", people: people});
    // res.send("second use");
    // next();
})

app.use(volleyball);
// difference b/w use and get? 

app.get("/", function(req, res, next){
    res.send("Hello!!!!!");
})

// app.use("/", function(req, res, next){
//     res.send("use was used");
// })
