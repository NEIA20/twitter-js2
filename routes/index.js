
var path = require("path");
var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get("/stylesheets/style.css", function(req, res, next){
//     console.log("render get stylesheets");
//     res.sendFile("../public/stylesheets/style.css"); //requires an aboslute path (why it won't work here')
// })

module.exports = router;