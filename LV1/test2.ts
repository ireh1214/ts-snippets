//https://school.programmers.co.kr/learn/courses/30/lessons/12947
//하샤드 수

export default function solution(x: number) {
	const y = String(x)
		.split("")
		.map(Number)
		.reduce((acc, n) => acc + n, 0);

	return x % y === 0;

	//아래는 속도 개선을 할 수 있는 방식입니다
	// let num = x;
	// let sum = 0;
	// while (num > 0) {
	// 	sum += num % 10;
	// 	num = Math.floor(num / 10);
	// }
	// return x % sum === 0;
}
