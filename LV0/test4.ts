//https://school.programmers.co.kr/learn/courses/30/lessons/181833
//특별한 이차원 배열 1

export default function solution(n: number) {
	const x = Array.from(Array(n), () => Array(n).fill(0));
	for (let i = 0; i < n; i++) {
		x[i][i] = 1;
	}
	return x;
}
