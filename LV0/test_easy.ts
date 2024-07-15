//https://school.programmers.co.kr/learn/courses/30/lessons/120815
//피자 나눠 먹기(2)

function test1(n: number) {
	let i = 1;
	while ((i * 6) % n !== 0) i++;
	return i;
}
