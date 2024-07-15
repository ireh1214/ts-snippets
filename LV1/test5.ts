//https://school.programmers.co.kr/learn/courses/30/lessons/159994
//카드 뭉치

export default function solution(
	cards1: string[],
	cards2: string[],
	goal: string[],
) {
	for (const s of goal) {
		if (cards1[0] === s) {
			cards1.shift();
		} else if (cards2[0] === s) {
			cards2.shift();
		} else {
			return "No";
		}
	}
	return "Yes";
}
