//https://school.programmers.co.kr/learn/courses/30/lessons/181921
//배열 만들기2

export default function solution(l: number, r: number) {
	const answer = [];

	for (let i = l; i <= r; i++) {
		const arr = String(i);

		if (![...arr].every((x) => x === "5" || x === "0")) continue;
		answer.push(i);
	}

	return answer.length ? answer : [-1];
}
