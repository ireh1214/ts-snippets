//https://school.programmers.co.kr/learn/courses/30/lessons/181909
//접미사 배열

export default function solution(s: string) {
	const answer = [s];
	let x = s;

	for (let i = 0; i < s.length - 1; i++) {
		x = x.slice(1);
		answer.push(x);
	}

	return answer.sort();
}
