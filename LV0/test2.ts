//https://school.programmers.co.kr/learn/courses/30/lessons/181932
//코드 처리하기

export default function solution(code: string) {
	let mode = 0;
	let ret = "";

	for (const [i, x] of [...code].entries()) {
		if (mode === 0) {
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			x === "1" ? (mode = 1) : i % 2 === 0 && (ret += x);
		} else {
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			x === "1" ? (mode = 0) : i % 2 !== 0 && (ret += x);
		}
	}

	return ret.length > 0 ? ret : "EMPTY";
}
