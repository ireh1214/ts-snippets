//https://school.programmers.co.kr/learn/courses/30/lessons/12940
//최대공약수와 최소공배수

export default function solution(n: number, m: number) {
	let x = n;
	let y = m;

	while (y !== 0) {
		const temp = y;
		y = x % y;
		x = temp;
	}

	const lcm = (n * m) / x;
	return [x, lcm];
}
