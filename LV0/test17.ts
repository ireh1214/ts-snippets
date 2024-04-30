//https://school.programmers.co.kr/learn/courses/30/lessons/181888
//n개 간격의 원소들

export default function solution(num_list: number[], n: number) {
	const answer = [];
	for (let i = 0; i < num_list.length; i += n) {
		answer.push(num_list[i]);
	}
	return answer;
}
