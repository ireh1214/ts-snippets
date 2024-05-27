//https://school.programmers.co.kr/learn/courses/30/lessons/12926
//시저 암호

function solution(s: string, n: number) {
	//이 문제는 ASCII 코드 값을 검색해서 풀었습니다
	let result = "";

	for (const i of s) {
		let x = i;
		if (x !== " ") {
			if (x.match(/[a-zA-Z]/)) {
				let code = i.charCodeAt(0);
				//대문자인지 확인
				const isUpperCase = code >= 65 && code <= 90;

				isUpperCase
					? (code = ((code - 65 + n) % 26) + 65)
					: (code = ((code - 97 + n) % 26) + 97);

				x = String.fromCharCode(code);
			}
		}

		result += x;
	}
	return result;
}
