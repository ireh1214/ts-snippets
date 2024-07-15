//https://school.programmers.co.kr/learn/courses/30/lessons/132267
//콜라 문제

const _ = require("lodash");

export default function solution(
	a: number,
	b: number,
	n: number,
	answer: number[] = [],
): number {
	if (n < a) {
		return _.sum(answer);
	}

	const x = Math.floor(n / a) * b;
	answer.push(x);
	const newN = (n % a) + x;

	return solution(a, b, newN, answer);
}
