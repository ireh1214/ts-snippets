//https://school.programmers.co.kr/learn/courses/30/lessons/12916
//문자열 내 p와 y의 개수

export default function solution(s: string) {
	const x = s
		.toLowerCase()
		.split("")
		.filter((c) => c === "p").length;
	const y = s
		.toLowerCase()
		.split("")
		.filter((c) => c === "y").length;

	return x === y;
}
