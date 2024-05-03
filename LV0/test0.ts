//https://school.programmers.co.kr/learn/courses/30/lessons/120851
//숨어있는 숫자의 덧셈(1)

export default function solution(my_string: string) {
	let sum = "";

	for (const i of my_string) {
		if (!Number.isNaN(Number.parseInt(i))) {
			sum += i;
		}
	}

	return sum.split("").reduce((x, i) => x + Number.parseInt(i), 0);

	//정규표현식을 사용한 방식
	// function solution(my_string:string) {
	//     const answer = my_string.replace(/[^0-9]/g, '')
	//                             .split('')
	//                             .reduce((acc, curr) => acc + Number(curr), 0);
	//     return answer;
	// }
}
