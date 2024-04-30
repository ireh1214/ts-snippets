//https://school.programmers.co.kr/learn/courses/30/lessons/181885
//할 일 목록

export default function solution(todo_list: string[], finished: boolean[]) {
	const answer = [];

	for (const [i, x] of todo_list.entries()) {
		if (finished[i] === false) {
			answer.push(x);
		}
	}

	return answer;

	//위는 제가 푼 것이고 아래는 풀이 중에 배울 만한 점이 있는 코드를 가져왔습니다
	// return todo_list.filter((e,i) => !finished[i]);
}
