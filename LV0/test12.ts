//조건에 맞게 수열 변환하기 1

export default function solution(arr: number[]) {
	const answer = [];

	for (const i of arr) {
		answer.push(
			i >= 50 && i % 2 === 0 ? i / 2 : i < 50 && i % 2 !== 0 ? i * 2 : i,
		);
	}
	return answer;
}
