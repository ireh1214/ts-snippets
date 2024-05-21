//https://school.programmers.co.kr/learn/courses/30/lessons/12930
//이상한 문자 만들기

function solution(s: string) {
	const answer = s.split(" ");

	for (const [i, _] of answer.entries()) {
		const str = answer[i];
		let x = "";

		for (let j = 0; j < str.length; j++) {
			x += j % 2 === 0 ? str[j].toUpperCase() : str[j].toLowerCase();
		}

		answer[i] = x;
	}
	return answer.join(" ");
}
