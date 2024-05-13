//https://school.programmers.co.kr/learn/courses/30/lessons/12982
//예산

export default function solution(d: number[], budget: number) {
	d.sort((a, b) => a - b);
	let result = 0;

	let x = budget

	for (const i of d) {
		x -= i;
		if (x < 0) {
			break;
		}
		result++;
	}

	return result;
}
