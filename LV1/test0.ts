//https://school.programmers.co.kr/learn/courses/30/lessons/86051
//없는 숫자 더하기

export default function solution(numbers: number[]) {
	let sum = 0;
	for (let i = 0; i < 10; i++) {
		if (!numbers.includes(i)) {
			sum += i;
		}
	}
	return sum;
}
