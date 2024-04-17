//https://school.programmers.co.kr/learn/courses/30/lessons/181929
//원소들의 곱과 합

export default function solution(num_list: []) {
	let answer = 0;
	let sumX = 1;
	let sumY = 0;
	let sumYSquared = 0;

	for (let i = 0; i < num_list.length; i++) {
		sumX *= num_list[i];
		sumY += num_list[i];
	}
	sumYSquared = sumY ** 2;
	answer = sumX > sumYSquared ? 0 : 1;

	return answer;
}
