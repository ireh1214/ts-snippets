//https://school.programmers.co.kr/learn/courses/30/lessons/12916
//문자열 내 p와 y의 개수

export default function solution(s: string) {
	const x = (t: string) =>
		s
			.toLowerCase()
			.split("")
			.filter((c) => c === t).length;

	return x("p") === x("y");
}
