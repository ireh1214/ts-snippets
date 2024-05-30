//https://school.programmers.co.kr/learn/courses/30/lessons/12940
//최대공약수와 최소공배수

export default function solution(n: number, m: number) {
	const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

	const gcdResult = gcd(n, m);
	const lcm = (n * m) / gcdResult;

	return [gcdResult, lcm];
}
