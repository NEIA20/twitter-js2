

var _ = require("lodash");
var id = 0;

var data = [{name: "Nimit Niz", content: "hey"}];

function add(name, content){
    data.push({name: name, content: content, id: id++});

}

function list(){
    return _.cloneDeep(data);
}

function find(properties){
    return _.cloneDeep(_.filter(data, properties));
}

module.exports = {add: add, list: list, find: find};










var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}


// var properties = {"name": "Nimit Binder", "content": 'Fullstack Academy is sweet! The instructors are just so cool'};
// data = { name: 'Charlotte Docsreader',
//     content: 'Fullstack Academy is wonderful! The instructors are just so breathtaking. #fullstacklove #codedreams' },
//   { name: 'Nimit Binder',
//     content: 'Fullstack Academy is wonderful! The instructors are just so wonderful. #fullstacklove #codedreams' },
//   { name: 'Dave OLogn',
//     content: 'Fullstack Academy is sweet! The instructors are just so cool. #fullstacklove #codedreams' },
//     { name: 'Nimit Binder',
//     content: 'Fullstack Academy is sweet! The instructors are just so cool' 
//     }
console.log(data);
//how does find work?
//how does this work??????
