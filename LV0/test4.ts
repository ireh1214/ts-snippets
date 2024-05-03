//https://school.programmers.co.kr/learn/courses/30/lessons/120903
//배열의 유사도

export default function solution(s1: string[], s2: string[]) {
	const answer = s1.filter((x) => s2.includes(x));
	return answer.length;
}
