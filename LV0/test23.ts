//https://school.programmers.co.kr/learn/courses/30/lessons/181911
//부분 문자열 이어 붙여 문자열 만들기

export default function solution(
	my_strings: string[],
	parts: [number, number][],
) {
	return my_strings
		.map((str, i) => {
			const [start, end] = parts[i];
			return str.slice(start, end + 1);
		})
		.join("");
}
