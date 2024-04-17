//https://school.programmers.co.kr/learn/courses/30/lessons/181926
// 수 조작하기

export default function solution(n: number, control: string) {
	let answer = 0;

	for (let i = 0; i < control.length; i++) {
		if (control[i] === "w") {
			n += 1;
		} else if (control[i] === "s") {
			n -= 1;
		} else if (control[i] === "d") {
			n += 10;
		} else if (control[i] === "a") {
			n -= 10;
		}
	}

	answer = n;
	return answer;
}
