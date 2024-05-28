//https://school.programmers.co.kr/learn/courses/30/lessons/86491
//최소직사각형

export default function solution(sizes: [number, number][]) {
	const w = [];
	const h = [];
	for (const x of sizes) {
		w.push(Math.min(x[0], x[1]));
		h.push(Math.max(x[0], x[1]));
	}

	return Math.max(...w) * Math.max(...h);
}
