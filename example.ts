import assert from "assert"
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {

	const x = Number(input[0]);
	const y = Number(input[1]);
	// xyzw /// xx yy

	// _ >= 1 && _ <= 100
	
	// 
	assert(isInBound(x) && isInBound(y))

	const result = x + y;		
	console.log(x + " + " + y + " = " + (x + y));

	function isInBound(x: number) {
		const lowerBound = 1;
		const upperBound = 1000;

		return x >= lowerBound && x <= upperBound;
	}
});
