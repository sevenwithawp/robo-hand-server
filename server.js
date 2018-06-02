'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var exec = require('child_process').execSync, child;

console.log('app: ', app)

// Set up the bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/hello', function(req, res) {
  const name = req.query.name;
  res.send(`hello ${name}`);
});

app.get('/move', function(req, res) {
  const boardState = req.query.board;
  const response = exec(`java -jar com.checkers.jar ${boardState}`).toString();
  console.log('full response: ', response);
  console.log('Response from app: ', response.slice(response.length - 5, response.length));
  const newMovePosition = response.slice(response.length - 5, response.length);

  const lettersMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const jsonResponse = { from: `${lettersMap[parseInt(newMovePosition[0])+1]}${9-parseInt(newMovePosition[1])}`, to: `${lettersMap[parseInt(newMovePosition[2])+1]}${9-parseInt(newMovePosition[3])}`};
  console.log('jsonResponse: ', jsonResponse);
  res.json(jsonResponse);
});

// Set the listen port
const port = process.env.PORT || 8000;


// Set the Server Up
const server = app.listen(port, () => {
  const host = server.address().address;
  console.log(`App is listening at http://${host}:${port}`);
});
