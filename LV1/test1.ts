//https://school.programmers.co.kr/learn/courses/30/lessons/12926
//시저 암호

export default function solution(s: string, n: number): string {
	//각 ASCII 코드 값을 변수처리하여 magic number를 없앴습니다
	const A_UP = 65;
	const Z_UP = 90;
	const A_LOW = 97;
	const ALPHA_LEN = 26;
	let result = "";

	for (const char of s) {
		let x = char;
		if (x !== " ") {
			if (x.match(/[a-zA-Z]/)) {
				let code = char.charCodeAt(0);
				const isUpper = code >= A_UP && code <= Z_UP;

				if (isUpper) {
					code = ((code - A_UP + n) % ALPHA_LEN) + A_UP;
				} else {
					code = ((code - A_LOW + n) % ALPHA_LEN) + A_LOW;
				}

				x = String.fromCharCode(code);
			}
		}

		result += x;
	}
	return result;
}
