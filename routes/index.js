
var path = require("path");
var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
// var tweetBank = require('../tweetBank');
var client = require('../db/index.js')

// // parse application/x-www-form-urlencoded
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // parse application/json
// var jsonParser = bodyParser.json();


router.get('/', function (req, res, next) {
  client.query('SELECT tweets.content, users.name, users.pictureurl FROM users INNER JOIN tweets ON users.id = tweets.userid', function (err, result) {
    if (err) return next(err); // pass errors to Express
      var tweets = result.rows;
    res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
})
  // var tweets = tweetBank.list();
  // res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req, res, next) {
   var name = req.params.name;
  client.query('SELECT tweets.content, users.pictureurl, users.name FROM users INNER JOIN tweets ON users.id = tweets.userid WHERE name=$1', [name], function (err, result) {
    if (err) return next(err); // pass errors to Express
    var tweets = result.rows
    res.render('index', { title: 'Twitter.js', tweets: tweets,  showForm: true });
  })
 
});

router.get('/tweets/:id', function(req, res, next){
  var id = req.params.id;
   client.query('SELECT users.name, tweets.content, users.pictureurl FROM users INNER JOIN tweets ON users.id = tweets.userid WHERE tweets.id=$1', [id], function (err, result) {
    if (err) return next(err); // pass errors to Express
      var tweets = result.rows;
    res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
  })
    
    // var list = tweetBank.find({id: id});
    // res.render("index", {tweets: list});
})

router.post('/tweets', function(req, res, next) {

  var name = req.body.name;
  var text = req.body.text;
  //need to make sure we can add a new person and a new tweet into the table 

  client.query('INSERT INTO tweets (userId, content) VALUES ((SELECT id from Users where name=$1), $2)',[name, text], function (err, result) {
    if (err) return next(err); // pass errors to Express
      var tweets = result.rows;
    res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
  })
  
  // tweetBank.add(name, text);
  res.redirect('/');
});

// router.get("/stylesheets/style.css", function(req, res, next){
//     console.log("render get stylesheets");
//     res.sendFile("../public/stylesheets/style.css"); //requires an aboslute path (why it won't work here')
// })

module.exports = router;