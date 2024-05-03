//https://school.programmers.co.kr/learn/courses/30/lessons/120906
//자릿수 더하기

export default function solution(n: number) {
	return n
		.toString()
		.split("")
		.map((n) => Number.parseInt(n))
		.reduce((acc, num) => acc + num, 0);
}
