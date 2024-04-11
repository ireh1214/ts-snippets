const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let a = Number(input[0]);
  let b = Number(input[1]);

  if ((a, b >= -100000 && a, b <= 100000)) {
    console.log("a = " + a + "\n" + "b = " + b);
  } else {
    console.log("값이 잘못되었어요");
  }
});