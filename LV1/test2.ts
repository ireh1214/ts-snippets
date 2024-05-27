//https://school.programmers.co.kr/learn/courses/30/lessons/42748
//K번째수

export default function solution(
	array: number[],
	commands: [number, number, number][],
) {
	return commands.map((command) => {
		const [i, j, k] = command;
		const x = array.slice(i - 1, j);
		return x.sort((a, b) => a - b)[k - 1];
	});
}
