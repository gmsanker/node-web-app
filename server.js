'use strict';

const express = require('express');
#const request = require('request');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});


app.listen(PORT);
console.log('Running on http://127.0.0.1:' + PORT);
