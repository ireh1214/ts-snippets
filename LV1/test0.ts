//https://school.programmers.co.kr/learn/courses/30/lessons/142086
//가장 가까운 같은 글자

export default function solution(s: string) {
	const answer = [];

	for (const [i, x] of [...s].entries()) {
		const before = s.slice(0, i).lastIndexOf(x);
		answer.push(before === -1 ? -1 : i - before);
	}

	return answer;
}
