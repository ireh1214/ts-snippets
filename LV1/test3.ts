//https://school.programmers.co.kr/learn/courses/30/lessons/86491
//최소직사각형

export default function solution(sizes: [number, number][]) {
	const { x, y } = sizes.reduce(
		(acc, [w, h]) => {
			acc.x.push(w < h ? w : h);
			acc.y.push(w < h ? h : w);
			return acc;
		},
		{ x: [], y: [] },
	);

	return Math.max(...x) * Math.max(...y);
}
