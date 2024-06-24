//https://school.programmers.co.kr/learn/courses/30/lessons/12915
//문자열 내 마음대로 정렬하기

export default function solution(strings: string[], n: number) {
	//첫 번째 시도 코드
	// return strings.sort((a, b) => {
	// 	if (a[n] === b[n]) {
	// 		return (a > b) - (a < b);
	// 	} else {
	// 		return (a[n] > b[n]) - (a[n] < b[n]);
	// 	}
	// });

	//멘토링 이후 시도 코드
	return strings.sort((a, b) =>
		a[n] === b[n] ? (a > b ? 1 : -1) : a[n] > b[n] ? 1 : -1,
	);
}
