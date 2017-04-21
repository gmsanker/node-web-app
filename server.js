'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

//2nd App
var request = require('request');
// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}
// Configure the request
var options = {
    url: 'http://samwize.com',
    method: 'GET',
    headers: headers,
    qs: {'key1': 'xxx', 'key2': 'yyy'}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})


app.listen(PORT);
console.log('Running on http://127.0.0.1:' + PORT);
