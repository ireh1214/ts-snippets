//https://school.programmers.co.kr/learn/courses/30/lessons/68935
//3진법 뒤집기

export default function solution(n: number) {
	//첫 번째 풀이
	// let x = "";

	// for (; n > 0; n = Math.floor(n / 3)) {
	// 	x = (n % 3) + x;
	// }

	// return x
	// 	.split("")
	// 	.reverse()
	// 	.reduce((acc, digit, i) => {
	// 		return acc + Number.parseInt(digit) * Math.pow(3, x.length - 1 - i);
	// 	}, 0);

	//두 번째 풀이
	const x = n.toString(3).split("").reverse().join("");
	return Number.parseInt(x, 3);
}
