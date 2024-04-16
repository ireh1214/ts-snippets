//https://school.programmers.co.kr/learn/courses/30/lessons/181935
//홀짝에 따라 다른 값 변환하기

function solution(n: number) {
	let answer = 0;

	if (n % 2 === 0) {
		for (let i = 0; i <= n; i += 2) {
			answer += i ** 2;
		}
	} else {
		for (let i = 1; i <= n; i += 2) {
			answer += i;
		}
	}
	return answer;
}
