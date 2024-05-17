//https://school.programmers.co.kr/learn/courses/30/lessons/12903
//가운데 글자 가져오기

export default function solution(s: string) {
	const x = Math.floor(s.length / 2);
	return s.length % 2 === 0 ? s[x - 1] + s[x] : s[x];
}
