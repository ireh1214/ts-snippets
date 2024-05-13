//https://school.programmers.co.kr/learn/courses/30/lessons/12954
//x만큼 간격이 있는 n개의 숫자

export default function solution(x: number, n: number) {
	const answer = [];

	for (let i = 1; i <= n; i++) {
		answer.push(x * i);
	}

	return answer;
}
