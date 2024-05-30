//https://school.programmers.co.kr/learn/courses/30/lessons/86491
//최소직사각형

export default function solution(sizes: [number, number][]) {
	const [x, y]: [number[], number[]] = [[], []];

	for (const [w, h] of sizes) {
		x.push(Math.min(w, h));
		y.push(Math.max(w, h));
	}

	return Math.max(...x) * Math.max(...y);
}
