//https://school.programmers.co.kr/learn/courses/30/lessons/12928
//약수의 합

export default function solution(n: number) {
	return Array.from({ length: n }, (_, i) => i + 1)
		.filter((num) => n % num === 0)
		.reduce((acc, n) => acc + n, 0);
}
