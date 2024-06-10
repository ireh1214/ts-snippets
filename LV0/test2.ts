//https://school.programmers.co.kr/learn/courses/30/lessons/120862
//최댓값 만들기(2)

export default function solution(numbers: number[]) {
	const x = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			x.push(numbers[i] * numbers[j]);
		}
	}

	return Math.max(...x);
}
