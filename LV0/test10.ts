//https://school.programmers.co.kr/learn/courses/30/lessons/181875
//배열에서 문자열 대소문자 변환하기

export default function solution(strArr: string[]) {
	const answer: string[] = [];

	strArr.forEach((x, i) => {
		answer.push(i % 2 === 0 ? x.toLowerCase() : x.toUpperCase());
	});
	return answer;
}
