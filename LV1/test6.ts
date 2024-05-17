//https://school.programmers.co.kr/learn/courses/30/lessons/77884
//약수의 개수와 덧셈

export default function solution(left: number, right: number) {
	const count = [];

	for (let i = left; i <= right; i++) {
		const num = [];
		const sqrt = Math.sqrt(i);

		for (let j = 1; j <= sqrt; j++) {
			if (i % j === 0) {
				num.push(j);
				if (j !== i / j) {
					num.push(i / j);
				}
			}
		}
		count.push(num.length % 2 === 0 ? i : -i);
	}

	return count.reduce((acc, num) => acc + num, 0);
}
