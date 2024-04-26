//https://school.programmers.co.kr/learn/courses/30/lessons/120889
//삼각형의 완성조건(1)

export default function solution(sides: [number, number, number]) {
	sides.sort((a, b) => b - a);

	const x = sides[0];
	const y = sides[1] + sides[2];

	return x < y ? 1 : 2;
}
