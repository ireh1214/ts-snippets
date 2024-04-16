// https://school.programmers.co.kr/learn/courses/30/lessons/181933
// flag에 따라 다른 값 반환하기

function solution(a: number, b: number, flag: boolean) {
	let answer = 0;

	answer = flag === true ? a + b : a - b;

	return answer;
}
