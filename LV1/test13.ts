//https://school.programmers.co.kr/learn/courses/30/lessons/12930
//이상한 문자 만들기

function solution(s: string) {
	const y = s.split(" ");
	let answer = "";

	for (let i = 0; i < y.length; i++) {
		const str = y[i];
		for (let j = 0; j < str.length; j++) {
			answer += j % 2 === 0 ? str[j].toUpperCase() : str[j].toLowerCase();
		}
		if (i < y.length - 1) {
			answer += " ";
		}
	}
	return answer;
}
