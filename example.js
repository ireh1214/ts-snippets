Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("node:assert");
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  const x = Number(input[0]);
  const y = Number(input[1]);

  (0, assert_1.default)(isInBound(x) && isInBound(y));
  const result = x + y;
  console.log(`${x} + ${y} = ${x + y}`);
  function isInBound(x) {
    const lowerBound = 1;
    const upperBound = 1000;
    return x >= lowerBound && x <= upperBound;
  }
});
