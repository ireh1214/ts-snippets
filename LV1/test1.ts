//https://school.programmers.co.kr/learn/courses/30/lessons/12926
//시저 암호

export default function solution(s: string, n: number): string {
	const A = "A".charCodeAt(0);
	const Z = "Z".charCodeAt(0);
	const A_LOW = "a".charCodeAt(0);
	const ALPHA_LEN = 26;
	let result = "";

	for (const char of s) {
		let x = char;
		if (x !== " ") {
			if (x.match(/[a-zA-Z]/)) {
				let code = char.charCodeAt(0);
				const isUpper = code >= A && code <= Z;

				code = isUpper
					? ((code - A + n) % ALPHA_LEN) + A
					: ((code - A_LOW + n) % ALPHA_LEN) + A_LOW;

				x = String.fromCharCode(code);
			}
		}

		result += x;
	}
	return result;
}
