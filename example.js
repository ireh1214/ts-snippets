"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var input = [];
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  var x = Number(input[0]);
  var y = Number(input[1]);

  (0, assert_1.default)(isInBound(x) && isInBound(y));
  var result = x + y;
  console.log(x + " + " + y + " = " + (x + y));
  function isInBound(x) {
    var lowerBound = 1;
    var upperBound = 1000;
    return x >= lowerBound && x <= upperBound;
  }
});
