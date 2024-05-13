//https://school.programmers.co.kr/learn/courses/30/lessons/12912
//두 정수 사이의 합

function solution(a: number, b: number) {
	const s = Math.min(a, b);
	const e = Math.max(a, b);
	let answer = 0;

	for (let i = s; i <= e; i++) {
		answer += i;
	}

	return answer;
}
