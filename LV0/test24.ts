//https://school.programmers.co.kr/learn/courses/30/lessons/181915
//글자 이어 붙여 문자열 만들기

export default function solution(my_string: string, index_list: number[]) {
	const answer = [];

	for (const i of index_list) {
		answer.push(my_string.at(i));
	}

	return answer.join("");

	// map을 이용한 풀이법
	// return index_list.map(i => my_string[i]).join('')
}
