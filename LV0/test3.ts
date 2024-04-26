//https://school.programmers.co.kr/learn/courses/30/lessons/120837
//개미 군단

//%, /이 둘다 필요한거같습니다
export default function solution(hp: number) {
	const a = hp % 5;
	const x = Math.floor(hp / 5);
	const y = Math.floor(a / 3);
	const remain = a % 3;

	return x + y + remain;
}
