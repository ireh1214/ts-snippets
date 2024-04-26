//https://school.programmers.co.kr/learn/courses/30/lessons/120825
//문자 반복 출력하기

export default function solution(my_string: string, n: number) {
	//첫번째 방법
	let my_newString = "";
	for (const i of my_string) {
		my_newString += i.repeat(n);
	}
	return my_newString;

	//두번째 방법
	//const answer = [...my_string].map((i) => i.repeat(n)).join("");
	//return answer;
}
