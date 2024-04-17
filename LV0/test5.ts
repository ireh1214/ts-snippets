//https://school.programmers.co.kr/learn/courses/30/lessons/181930
//주사위 게임

export default function solution(a: number, b: number, c: number) {
	let answer = 0;

	if (a !== b && b !== c && c !== a) {
		answer = a + b + c;
	} else if (a === b && b === c && c === a) {
		answer =
			(a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
	} else {
		answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
	}
	return answer;
}
