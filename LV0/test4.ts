//https://school.programmers.co.kr/learn/courses/30/lessons/120839
//가위 바위 보

// Requiring the lodash library
const _ = require("lodash");

export default function solution(rsp: string) {
	//서치로 찾아본 좋은 예시 중 하나 (타입에 대한 코드 해석이 필요함)
	const win_map: Record<string, string> = { "0": "5", "2": "0", "5": "2" };

	return _.sum(rsp.split("").map((c) => win_map[c]));
}
