//https://school.programmers.co.kr/learn/courses/30/lessons/120830
//양꼬치

export default function solution(n: number, k: number) {
	const x = 12000 * n;
	const y = 2000 * k;

	if (n >= 10) {
		k -= Math.floor(n / 10);
	}

	return x + y;
}
