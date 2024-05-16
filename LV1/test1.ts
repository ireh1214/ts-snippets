//https://school.programmers.co.kr/learn/courses/30/lessons/76501
//음양 더하기

export default function solution(absolutes: number[], signs: boolean[]) {
	const sum = [];
	for (const [i, x] of absolutes.entries()) {
		if (!signs[i]) {
			sum.push(-x);
		} else {
			sum.push(x);
		}
	}

	return sum.reduce((acc, num) => acc + num, 0);
}
