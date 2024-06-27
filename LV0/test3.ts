//https://school.programmers.co.kr/learn/courses/30/lessons/120841
//점의 위치 구하기

export default function solution(dot: number[]) {
	const [x, y] = dot;

	return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}
