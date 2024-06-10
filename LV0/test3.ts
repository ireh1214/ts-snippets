//https://school.programmers.co.kr/learn/courses/30/lessons/120841
//점의 위치 구하기

export default function solution(dot: number[]) {
	const x = Math.sign(dot[0]);
	const y = Math.sign(dot[1]);

	return x === 1 && y === 1
		? 1
		: x === -1 && y === 1
			? 2
			: x === -1 && y === -1
				? 3
				: 4;
}
