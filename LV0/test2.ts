//https://school.programmers.co.kr/learn/courses/30/lessons/181932
//코드 처리하기

export default function solution(code: string) {
	let mode = false;
	let ret = "";

	for (const [i, x] of [...code].entries()) {
		const even = i % 2 === 0;
		const shouldAppend = (mode && !even) || (!mode && even);

		if (x === "1") {
			mode = !mode;
		} else {
			if (shouldAppend) {
				ret += x;
			}
		}
	}
	return ret.length > 0 ? ret : "EMPTY";
}
