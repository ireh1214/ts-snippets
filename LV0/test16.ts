//https://school.programmers.co.kr/learn/courses/30/lessons/181887
//홀수vs짝수

export default function solution(num_list: number[]) {
	let sumX = 0;
	let sumY = 0;

	for (const [i, x] of num_list.entries()) {
		// biome-ignore lint/suspicious/noAssignInExpressions:
		i % 2 === 0 ? (sumX += x) : (sumY += x);
	}

	return Math.max(sumX, sumY);
}
