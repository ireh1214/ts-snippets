//https://school.programmers.co.kr/learn/courses/30/lessons/120823
//직각삼각형 출력하기

import readline from "node:readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (line) => {
	input = line;
}).on("close", () => {
	const x = Number(input);

	for (let i = 1; i < x + 1; i++) {
		console.log("*".repeat(i));
	}
});
