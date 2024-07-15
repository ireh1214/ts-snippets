//https://school.programmers.co.kr/learn/courses/30/lessons/138477
//명예의 전당(1)

export default function solution(k: number, score: number[]) {
	const hof = [];
	const answer = [];

	for (const i of score) {
		hof.push(i);

		if (hof.length > k) {
			hof.splice(hof.indexOf(Math.min(...hof)), 1);
		}

		// answer.push(hof.at(-1));
		answer.push(Math.min(...hof));
	}

	return answer;
}
