'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set up the bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set the listen port
const port = process.env.PORT || 8000;


// Set the Server Up
const server = app.listen(port, () => {
  const host = server.address().address;
  console.log(`App is listening at http://${host}:${port}`);
});