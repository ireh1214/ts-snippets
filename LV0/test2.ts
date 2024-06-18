//https://school.programmers.co.kr/learn/courses/30/lessons/181932
//코드 처리하기

export default function solution(code: string) {
	let mode = false;
	let ret = "";

	for (const [i, x] of [...code].entries()) {
		const even = i % 2 === 0;

		//변경되는 코드는 가급적 눈에 띄는 곳에 있어야 보기 좋다
		if (x === "1") {
			mode = !mode;
		} else {
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			mode ? !even && (ret += x) : even && (ret += x);
		}
	}
	return ret.length > 0 ? ret : "EMPTY";
}
