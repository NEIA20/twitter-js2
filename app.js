var express = require("express");
var app = express();
var volleyball = require("volleyball");
var nunjucks = require("nunjucks");
var routes = require('./routes/');
var path = require("path");


nunjucks.configure("views", { noCache: true });
app.set("view engine", "html");
app.engine("html", nunjucks.render);


app.listen(3000, function(){
    console.log("server listening");
}) //usually at the bottom

app.use(volleyball);

// app.get("/stylesheets/style.css", function(req, res, next){
//     console.log("render get stylesheets");
//     res.sendFile(path.join(__dirname + "/public/stylesheets/style.css"));
// })
app.use(express.static('public'));

app.use("/", routes);


// difference b/w use and get? 

// app.use('/jelly', function(req, res, next){
//     console.log("You reached the jelly area");
//     // res.send("jelly");
//     next();
// })

// app.get("/jelly/news", function(req, res, next){
//     res.send("Hello!!!!!");
// })

// app.use('/', function (req, res, next) {
//     // console.log("in first use");
//     var people = [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}];
//     res.render("index", {title: "Awesome People", people: people});
//     // res.send("second use");
//     // next();
// })






// app.use("/", function(req, res, next){
//     res.send("use was used");
// })
