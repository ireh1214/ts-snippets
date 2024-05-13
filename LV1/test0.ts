//https://school.programmers.co.kr/learn/courses/30/lessons/12916
//문자열 내 p와 y의 개수

export default function solution(s: string) {
	const transferS = s.toLowerCase();
	const x = transferS.split("p").length;
	const y = transferS.split("y").length;

	return x === y;
}
