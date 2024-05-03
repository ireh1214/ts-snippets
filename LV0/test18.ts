//https://school.programmers.co.kr/learn/courses/30/lessons/181889
// n번째 원소까지

export default function solution(num_list: number[], n: number) {
	const answer = [];
	for (const [i, x] of num_list.entries()) {
		if (i === n) {
			break;
		}
		answer.push(x);
	}
	return answer;

	//위는 제가 푼 답변이고 아래는 배울 만한 답변을 적었습니다
	//return num_list.slice(0, n);
}
