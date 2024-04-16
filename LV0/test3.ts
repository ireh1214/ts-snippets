// https://school.programmers.co.kr/learn/courses/30/lessons/181934
// 조건 문자열

function solution(ineq: string, eq: string, n: number, m: number) {
	let answer = 0;

	if (
		(ineq === "<" && eq === "=" && n <= m) ||
		(ineq === "<" && eq === "!" && n < m) ||
		(ineq === ">" && eq === "=" && n >= m) ||
		(ineq === ">" && eq === "!" && n > m)
	) {
		answer = 1;
	}
	return answer;
}
