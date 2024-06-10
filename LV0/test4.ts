//https://school.programmers.co.kr/learn/courses/30/lessons/181919
//콜라츠 수열 만들기

export default function solution(n: number, answer: number[] = []): number[] {
	answer.push(n);

	if (n === 1) return answer;

	if (n % 2 === 0) {
		return solution(n / 2, answer);
	}
	return solution(3 * n + 1, answer);
}
