
var path = require("path");
var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require("body-parser");

// // parse application/x-www-form-urlencoded
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // parse application/json
// var jsonParser = bodyParser.json();

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  res.render( 'index', {tweets: list, showForm: true, name: name});
});

router.get('/tweets/:id', function(req, res, next){
    var id = req.params.id;
    id = Number(id);
    var list = tweetBank.find({id: id});
    res.render("index", {tweets: list});
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

// router.get("/stylesheets/style.css", function(req, res, next){
//     console.log("render get stylesheets");
//     res.sendFile("../public/stylesheets/style.css"); //requires an aboslute path (why it won't work here')
// })

module.exports = router;