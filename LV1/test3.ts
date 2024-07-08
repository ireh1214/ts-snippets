//https://school.programmers.co.kr/learn/courses/30/lessons/138477
//명예의 전당(1)

export default function solution(k: number, score: number[]) {
	const hof = [];
	const answer = [];

	for (const i of score) {
		hof.push(i);
		hof.sort((a, b) => b - a);

		if (hof.length > k) {
			hof.pop();
		}

		answer.push(hof[hof.length - 1]);
	}

	return answer;
}
