//https://school.programmers.co.kr/learn/courses/30/lessons/120891
//369게임

export default function solution(order: number) {
	const x = String(order);
	return [...x].filter((a) => ["3", "6", "9"].includes(a)).length;
}
