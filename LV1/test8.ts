//https://school.programmers.co.kr/learn/courses/30/lessons/12950
//행렬의 덧셈

export default function solution(arr1: number[][], arr2: number[][]) {
	const answer = [];

	for (let i = 0; i < arr1.length; i++) {
		const sum = [];

		for (let j = 0; j < arr1[i].length; j++) {
			sum.push(arr1[i][j] + arr2[i][j]);
		}
		answer.push(sum);
	}
	return answer;
}
