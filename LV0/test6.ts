//https://school.programmers.co.kr/learn/courses/30/lessons/120844
//배열 회전시키기

export default function solution(numbers: number[], direction: string) {
	const x = numbers[0];
	const y = numbers[numbers.length - 1];
	const dir = direction === "right";

	if (dir) {
		numbers.pop();
		numbers.unshift(y);
	} else {
		numbers.shift();
		numbers.push(x);
	}

	return numbers;
}
