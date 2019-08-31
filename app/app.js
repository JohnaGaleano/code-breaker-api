var express = require("express");

CodeBreaker = require("./code-breaker");

var cors = require('cors')
var app = express()
 
app.use(cors())

app.get("/setsecret/:secret", function(req, res) {
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({ message: "ok, let the game begins" });
});

app.get("/guess/:number", function(req, res) {
  number = req.params.number;
  res.send({ result: CodeBreaker.guess(number) });
});

module.exports = app;
