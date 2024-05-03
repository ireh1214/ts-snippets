//https://school.programmers.co.kr/learn/courses/30/lessons/120895
//인덱스 바꾸기

export default function solution(
	my_string: string,
	num1: number,
	num2: number,
) {
	let answer = "";
	for (let i = 0; i < my_string.length; i++) {
		answer +=
			i === num1
				? my_string[num2]
				: i === num2
					? my_string[num1]
					: my_string[i];
	}

	return answer;
}
