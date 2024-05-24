//https://school.programmers.co.kr/learn/courses/30/lessons/131705
//삼총사

export default function solution(number: number[]) {
	let count = 0;
	const n = number.length;

	for (let i = 0; i < n - 2; i++) {
		for (let j = i + 1; j < n - 1; j++) {
			for (let k = j + 1; k < n; k++) {
				if (number[i] + number[j] + number[k] === 0) {
					count++;
				}
			}
		}
	}

	return count;
}
