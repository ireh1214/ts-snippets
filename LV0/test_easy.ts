//https://school.programmers.co.kr/learn/courses/30/lessons/120904
//숫자 찾기

function test1(num: number, k: number) {
	const index = String(num).indexOf(String(k));

	return index !== -1 ? index + 1 : -1;
}
