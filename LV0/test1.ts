//https://school.programmers.co.kr/learn/courses/30/lessons/181936
//공배수 구하기

function solution(number: number, n: number, m: number) {
	const answer: number = number % n === 0 && number % m === 0 ? 1 : 0;

	return answer;
}
