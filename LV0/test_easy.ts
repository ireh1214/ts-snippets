//https://school.programmers.co.kr/learn/courses/30/lessons/120904
//숫자 찾기

function test1(num: number, k: number) {
	const x = String(num);

	return x.includes(String(k)) ? x.indexOf(String(k)) + 1 : -1;
}
