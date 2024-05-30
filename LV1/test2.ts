export default function solution(num: number) {
	let answer = 0;

	for (let i = num; i !== 1; ) {
		answer++;
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		i % 2 === 0 ? (i /= 2) : (i = i * 3 + 1);
		if (answer === 500) return -1;
	}

	return answer;
}
