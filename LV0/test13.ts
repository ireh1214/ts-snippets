//https://school.programmers.co.kr/learn/courses/30/lessons/181884
//n보다 커질때까지 더하기

export default function solution(numbers: number[], n: number) {
	let sum = 0;
	for (const i of numbers) {
		if (sum > n) {
			break;
		}
		sum += i;
	}
	return sum;
}
