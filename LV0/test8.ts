//https://school.programmers.co.kr/learn/courses/30/lessons/181923
//수열과 구간 쿼리2

//정답을 보고 푼 문제라서 다시 한번 체크 필요
export default function solution(arr: [], queries: [number[]]) {
	const answer = [];
	for (const [s, e, k] of queries) {
		const temp = arr
			.filter((v, i) => i >= s && i <= e && v > k)
			.sort((a, b) => a - b)[0];
		answer.push(temp ? temp : -1);
	}

	return answer;
}
