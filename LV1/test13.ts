//https://school.programmers.co.kr/learn/courses/30/lessons/12930
//이상한 문자 만들기

function solution(s: string) {
	const y = s.split(" ");
	let answer = "";

	for (const [i, x] of y.entries()) {
		for (let j = 0; j < x.length; j++) {
			answer += j % 2 === 0 ? x[j].toUpperCase() : x[j].toLowerCase();
		}
		if (i < y.length - 1) {
			answer += " ";
		}
	}
	return answer;
}
