//https://school.programmers.co.kr/learn/courses/30/lessons/181939
//더 크게 합치기

export default function solution(a: number, b: number) {
	const x = Number(String(a) + String(b));
	const y = Number(String(b) + String(a));

	return Math.max(x, y);
}
