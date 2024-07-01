//https://school.programmers.co.kr/learn/courses/30/lessons/138477
//명예의 전당(1)

function solution(k: number, score: number[]) {
	//1차 풀이
	const hof = []; //hallOfFame
	const answer = [];

	for (const i of score) {
		hof.push(i);
		if (hof.length > k) {
			hof.splice(hof.indexOf(Math.min(...hof)), 1);
		}
		answer.push(Math.min(...hof));
	}
	return answer;
}
