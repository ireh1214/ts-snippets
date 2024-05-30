//https://school.programmers.co.kr/learn/courses/30/lessons/147355
//크기가 작은 부분 문자열

export default function solution(t: string, p: string) {
	const x = [];
	for (let i = 0; i <= t.length - p.length; i++) {
		x.push(t.substring(i, i + p.length));
	}
	return x.filter((v) => Number(v) <= Number(p)).length;
}
