//https://school.programmers.co.kr/learn/courses/30/lessons/120841
//점의 위치 구하기

export default function solution(dot: number[]) {
	const [x, y] = dot;

	if (x > 0) {
		return y > 0 ? 1 : 4;
		// biome-ignore lint/style/noUselessElse: <explanation>
	} else {
		return y > 0 ? 2 : 3;
	}
}
