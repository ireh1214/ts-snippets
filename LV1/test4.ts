//https://school.programmers.co.kr/learn/courses/30/lessons/176963
//추억 점수

export default function solution(
	name: string[],
	yearning: number[],
	photo: string[][],
) {
	const answer = [];
	for (const i of photo) {
		let score = 0;
		for (const person of i) {
			if (name.includes(person)) {
				const x = name.indexOf(person);
				score += yearning[x];
			}
		}
		answer.push(score);
	}
	return answer;
}
