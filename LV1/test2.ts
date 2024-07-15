//https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

export default function solution(answers: number[]) {
	const n1 = [1, 2, 3, 4, 5];
	const n2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	const sum = [0, 0, 0];

	for (const [i, x] of answers.entries()) {
		if (x === n1[i % n1.length]) {
			sum[0]++;
		}
		if (x === n2[i % n2.length]) {
			sum[1]++;
		}
		if (x === n3[i % n3.length]) {
			sum[2]++;
		}
	}

	const result = [];

	for (const [i, x] of sum.entries()) {
		if (x === Math.max(...sum)) {
			result.push(i + 1);
		}
	}

	return result;
}
