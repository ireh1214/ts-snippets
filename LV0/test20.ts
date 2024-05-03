//https://school.programmers.co.kr/learn/courses/30/lessons/120854
//배열 원소의 길이

export default function solution(strlist: string[]) {
	const answer = [];

	for (const i of strlist) {
		answer.push(i.length);
	}
	return answer;

	//map을 이용한 풀이법
	//  return strlist.map((e) => e.length)
}
