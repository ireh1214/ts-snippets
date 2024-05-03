//https://school.programmers.co.kr/learn/courses/30/lessons/181901
//배열 만들기1

export default function solution(n: number, k: number) {
	const x = Array.from({ length: n - k + 1 }, (_, i) => k + i);
	return x.filter((num) => num % k === 0);
}
