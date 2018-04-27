'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

console.log('app: ', app)

// Set up the bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/hello', function(req, res) {
  const name = req.query.name;
  res.send(`hello ${name}`);
});


// Set the listen port
const port = process.env.PORT || 8000;


// Set the Server Up
const server = app.listen(port, () => {
  const host = server.address().address;
  console.log(`App is listening at http://${host}:${port}`);
});