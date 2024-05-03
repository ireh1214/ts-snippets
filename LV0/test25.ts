//https://school.programmers.co.kr/learn/courses/30/lessons/181839
//주사위 게임 1

export default function solution(a: number, b: number) {
	const x = a % 2;
	const y = b % 2;

	return x !== 0 && y !== 0
		? a ** 2 + b ** 2
		: x !== 0 || y !== 0
			? 2 * (a + b)
			: Math.abs(a - b);
}
