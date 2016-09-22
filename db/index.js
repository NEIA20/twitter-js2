
var pg = require('pg');
var postgresUrl = 'postgres://localhost/twitterdb';

// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools
var client = new pg.Client(postgresUrl);

// connect to our database
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the client");

  // execute a query on our database
  // client.query('SELECT $1::text as name', ['brianc'], function (err, result) {
  //   if (err) throw err;

  //   // just print the result to the console
  //    // console.log(result.rows[0]); // outputs: { name: 'brianc' }

  //   // disconnect the client
  //   client.end(function (err) {
  //     if (err) throw err;
  //   });
  // });
});

module.exports = client;
